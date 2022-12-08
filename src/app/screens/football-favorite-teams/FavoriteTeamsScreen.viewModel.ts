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
import localStorage from '@football/core/helpers/localStorage';
import { useMount } from '@football/app/utils/hooks/useMount';
import { FavTeamState, addFavTeams } from 'src/store/FavTeam.slice';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const favTeamList = useSelector((state: FavTeamState) => state.favTeams);
    const { navigate, goBack } = useAppNavigator();
    const [teamsData, setTeamsData] = useState<TeamModel[]>();
    const [teamSelected, setTeamSelected] = useState<TeamModel[]>([]);
    // const { getItem, setItem } = useAsyncStorage(OfflineData.teams);
    // const { getItem, setItem } = useAsyncStorage(OfflineData.fav_teams);

    const getTeamsData = useCallback(async () => {
        try {
            // const offlineData = await AsyncStorage.getItem('@teams_data');

            // const offlineData = await AsyncStorage.getItem(OfflineData.fav_teams);
            const offlineData = await localStorage.getItem<TeamModel[]>(OfflineData.fav_teams);
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setTeamsData(offlineData);
            } else {
                const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                });
                if (!isEmpty(data.documents)) {
                    // console.log(data.documents);

                    setTeamsData(data.documents);
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const handleSelected = (team: TeamModel) => {
        const index = teamSelected.findIndex(elm => team._id === elm._id);

        if (index !== -1) {
            const newTeamSelected = teamSelected.filter(e => e._id !== team._id);
            setTeamSelected(newTeamSelected);
        } else if (teamSelected.length < 3) {
            setTeamSelected([...teamSelected, team]);
            const action = addFavTeams(team);
            dispatch(action);
        }
    };

    const newTeams = useMemo(
        () =>
            teamsData?.map(e => {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const i = teamSelected.findIndex(t => t._id === e._id);
                return { ...e, isSelected: i !== -1 };
            }),
        [teamsData, teamSelected]
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
        await localStorage.setItem<TeamModel[]>(OfflineData.fav_teams, teamSelected);

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
        teamsData,
        favTeamList,
    };
};
