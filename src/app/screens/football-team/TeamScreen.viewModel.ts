import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { ITeamScreenProps } from './TeamScreen.type';

export const useViewModel = ({ navigation, route }: ITeamScreenProps) => {
    const { navigate, openDrawer } = useAppNavigator();
    const { getItem } = useAsyncStorage(OfflineData.team_page);
    const [teamPageData, setTeamPageData] = useState();

    const [toggleBar, setToggleBar] = useState(false);

    const getTeamsData = useCallback(async () => {
        try {
            const offlineData = await getItem();
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setTeamPageData(JSON.parse(offlineData));
            } else {
                const { data }: any = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                });
                if (!isEmpty(data.documents)) {
                    setTeamPageData(data.documents);
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, [getItem]);

    const toggleChangeBar = () => {
        setToggleBar(!toggleBar);
    };

    const [topTeams, setTopTeams] = useState<TopTeamModel[]>();
    const getTopTeamsData = async () => {
        try {
            const { data }: TopTeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'top_team',
            });

            setTopTeams(data.documents);
        } catch (error: any) {
            Alert.alert(error);
        }
    };

    const handleTeam = (_id: string) => {
        navigate(ScreenName.NationalTeamPage, { topTeamId: _id });
    };

    const onShowSideMenu = () => {
        openDrawer();
    };

    useMount(() => {
        getTeamsData();
        getTopTeamsData();
    });

    return { topTeams, toggleChangeBar, toggleBar, handleTeam, onShowSideMenu };
};
