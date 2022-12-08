import { useCallback, useMemo, useState } from 'react';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import localStorage from '@football/core/helpers/localStorage';
import { FavTopTeamState, addFavTopTeams } from 'src/store/FavTopTeam.slice';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const favTopTeamList = useSelector((state: FavTopTeamState) => state.favTopTeams);
    const { navigate, goBack } = useAppNavigator();
    const [topTeamsData, setTopTeamsData] = useState<TopTeamModel[]>();
    const [topTeamSelected, setTopTeamSelected] = useState<TopTeamModel[]>([]);

    const getTopTeamsData = useCallback(async () => {
        try {
            // const offlineData = await getItem();
            // const offlineData = await AsyncStorage.getItem('@national_data');
            const offlineData = await localStorage.getItem<TopTeamModel[]>(
                OfflineData.fav_national
            );
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setTopTeamsData(offlineData);
            } else {
                const { data }: TopTeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'top_team',
                });
                if (!isEmpty(data.documents)) {
                    setTopTeamsData(data.documents);
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const handleSelected = (topTeam: TopTeamModel) => {
        const index = topTeamSelected.findIndex(elm => topTeam._id === elm._id);
        if (index !== -1) {
            const newTeamSelected = topTeamSelected.filter(e => e._id !== topTeam._id);
            setTopTeamSelected(newTeamSelected);
        } else if (topTeamSelected.length < 2) {
            setTopTeamSelected([...topTeamSelected, topTeam]);
            const action = addFavTopTeams(topTeam);
            dispatch(action);
        }
    };

    const newTopTeams = useMemo(
        () =>
            topTeamsData?.map(e => {
                const i = topTeamSelected.findIndex(t => t._id === e._id);
                return { ...e, isSelected: i !== -1 };
            }),
        [topTeamsData, topTeamSelected]
    );
    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = async () => {
        const action = addFavTopTeams(topTeamSelected);
        dispatch(action);
        // await AsyncStorage.setItem(OfflineData.national, JSON.stringify(topTeamSelected));
        await localStorage.setItem<TopTeamModel[]>(OfflineData.fav_national, topTeamSelected);
        navigate(ScreenName.FavSummaryPage);
    };
    useMount(() => {
        getTopTeamsData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        topTeamSelected,
        newTopTeams,
        favTopTeamList,
    };
};
