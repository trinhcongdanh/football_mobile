import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { ITeamScreenProps } from './TeamScreen.type';

export const useViewModel = ({ navigation, route }: ITeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const { getItem, setItem } = useAsyncStorage(OfflineData.team_page);
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
                // if (!isEmpty(data.documents)) {
                //     setTeamPageData(data.documents);
                // }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, [getItem]);

    const toggleChangeBar = () => {
        setToggleBar(!toggleBar);
    };

    const optionTeams = [
        { id: 1, name: 'הנבחרת הצעירה' },
        { id: 2, name: 'נבחרת הנשים' },
        { id: 3, name: 'נבחרת נערים א' },
        { id: 4, name: 'הנבחרת הלאומית' },
        { id: 5, name: 'נבחרת נוער ב' },
        { id: 6, name: 'נבחרת הנערות עד גיל 19' },
        { id: 7, name: 'נבחרת הנערות עד גיל 17' },
        { id: 8, name: 'נבחרת הנערות עד גיל 17' },
        { id: 9, name: 'נבחרת הנערות עד גיל 17' },
    ];

    const handleTeam = () => {
        navigate(ScreenName.NationalTeamPage);
    };

    useMount(() => {
        getTeamsData();
    });

    return { optionTeams, toggleChangeBar, toggleBar, handleTeam };
};
