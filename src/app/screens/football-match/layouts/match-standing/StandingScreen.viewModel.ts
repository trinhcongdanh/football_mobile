import { OfflineData } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import localStorage from '@football/core/helpers/localStorage';
import { GameModel, LeaderBoard } from '@football/core/models/GameModelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { IStandingScreenProps } from './StandingScreen.type';

export const useViewModel = ({ navigation, route }: IStandingScreenProps) => {
    const { t } = useTranslation();

    const [leaderBoard, setLeaderBoard] = useState<{
        isLoading: boolean;
        success: boolean;
        data: LeaderBoard[];
    }>({ isLoading: true, success: false, data: null! });

    const getLeaderBoard = useCallback(async () => {
        try {
            const offlineData = await localStorage.getItem<{
                isLoading: boolean;
                success: boolean;
                data: GameModel;
            }>(OfflineData.game_page);
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setLeaderBoard({
                    isLoading: false,
                    success: true,
                    data: offlineData.data.leader_board,
                });
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    useMount(() => {
        getLeaderBoard();
    });

    return { t, leaderBoard };
};
