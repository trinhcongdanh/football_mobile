import { OfflineData } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import localStorage from '@football/core/helpers/localStorage';
import { GameModel, Lineup } from '@football/core/models/GameModelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { ICompositionScreenProps } from './CompositionScreen.type';

export const useViewModel = ({ navigation, route }: ICompositionScreenProps) => {
    const { t } = useTranslation();
    const [lineUp, setLineUp] = useState<{
        isLoading: boolean;
        success: boolean;
        data: Lineup;
    }>({ isLoading: true, success: false, data: null! });

    const getLineUp = useCallback(async () => {
        try {
            const offlineData = await localStorage.getItem<{
                isLoading: boolean;
                success: boolean;
                data: GameModel;
            }>(OfflineData.game_page);
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setLineUp({ isLoading: false, success: true, data: offlineData.data.lineup });
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    useMount(() => {
        getLineUp();
    });

    return { t, lineUp };
};
