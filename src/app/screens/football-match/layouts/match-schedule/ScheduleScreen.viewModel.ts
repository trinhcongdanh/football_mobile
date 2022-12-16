import { OfflineData } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import localStorage from '@football/core/helpers/localStorage';
import { GameModel, Game } from '@football/core/models/GameModelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { IScheduleScreenProps } from './ScheduleScreen.type';

export const useViewModel = ({ navigation, route }: IScheduleScreenProps) => {
    const { t } = useTranslation();
    const [games, setGames] = useState<{
        isLoading: boolean;
        success: boolean;
        data: Game[];
    }>({ isLoading: true, success: false, data: null! });

    const getGames = useCallback(async () => {
        try {
            const offlineData = await localStorage.getItem<{
                isLoading: boolean;
                success: boolean;
                data: GameModel;
            }>(OfflineData.game_page);
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setGames({ isLoading: false, success: true, data: offlineData.data.games });
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    useMount(() => {
        getGames();
    });

    return { t, games };
};
