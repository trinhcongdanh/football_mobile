/* eslint-disable no-underscore-dangle */
import { useCallback, useMemo, useState } from 'react';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useMount } from '@football/app/utils/hooks/useMount';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { addFavTeams, FavTeamState } from '../../../store/FavTeam.slice';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const favTeamList = useSelector((state: FavTeamState) => state.favTeams);
    const { navigate, goBack } = useAppNavigator();
    const [teamData, setTeamData] = useState<TeamModel[]>();
    const { getItem, setItem } = useAsyncStorage(OfflineData.teams);

    const getTeamsData = useCallback(async () => {
        try {
            const offlineData = await getItem();
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setTeamData(JSON.parse(offlineData));
            } else {
                const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                });
                if (!isEmpty(data.documents)) {
                    setTeamData(data.documents);
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, [getItem]);

    const [teamSelected, setTeamSelected] = useState<TeamModel[]>([]);

    const handleSelected = (team: TeamModel, ind: number) => {
        const index = teamSelected.findIndex(elm => team._id === elm._id);

        if (index !== -1) {
            const newTeamSelected = teamSelected.filter(e => e._id !== team._id);
            setTeamSelected(newTeamSelected);
        } else if (teamSelected.length < 3) {
            setTeamSelected([...teamSelected, team]);
        }
    };

    const newTeams = useMemo(
        () =>
            teamData?.map(e => {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const i = teamSelected.findIndex(t => t._id === e._id);
                return { ...e, isSelected: i !== -1 };
            }),
        [teamData, teamSelected]
    );

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = async () => {
        const action = addFavTeams(teamSelected);
        dispatch(action);
        await setItem(JSON.stringify(teamSelected));
        navigate(ScreenName.FavPlayerPage);
    };

    useMount(() => {
        getTeamsData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        dispatch,
        teamSelected,
        newTeams,
        teamData,
        favTeamList,
    };
};
