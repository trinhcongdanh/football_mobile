import { useTranslation } from 'react-i18next';
import { useCallback, useState, useMemo } from 'react';
import { OfflineData } from '@football/app/utils/constants/enum';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { isEmpty, isNil } from 'lodash';
import { CoachModel, CoachesModelResponse } from '@football/core/models/CoachModelResponse';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IDataCoachScreenProps } from './DataCoachScreen.type';

export const useViewModel = ({ navigation, route }: IDataCoachScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const [coachesData, setCoachesData] = useState<{
        isLoading: boolean;
        success: boolean;
        data: CoachModel;
    }>({ isLoading: true, success: false, data: null! });
    // const [loadingCoachesData, setLoadingCoachesData] = useState(true);
    // const [statusCoachesData,setStatusCoachesData]=useState(true);
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const getCoachesData = useCallback(async () => {
        try {
            // const offlineData = await AsyncStorage.getItem('@players_data');
            const offlineData = await AsyncStorage.getItem(OfflineData.coach_page);
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setCoachesData({ isLoading: false, success: true, data: JSON.parse(offlineData) });
            } else {
                try {
                    const { data }: CoachesModelResponse = await axiosClient.post(
                        `${BASE_URL}/find`,
                        {
                            dataSource: DATA_SOURCE,
                            database: DB,
                            collection: 'coach',
                        }
                    );

                    if (!isEmpty(data.documents)) {
                        // console.log(data.documents[0]);
                        // documents always has one element
                        setCoachesData({
                            isLoading: false,
                            success: true,
                            data: data.documents[0],
                        });
                    }
                } catch (e) {
                    // console.log(e);
                    setCoachesData({ isLoading: false, success: false, data: null! });
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    useMount(() => {
        getCoachesData();
    });
    const [onSelect, setOnSelect] = useState(0);
    return { t, onGoBack, setOnSelect, onSelect, coachesData };
};
