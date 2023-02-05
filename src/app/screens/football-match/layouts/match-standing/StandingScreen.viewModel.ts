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

    // const [leaderBoard, setLeaderBoard] = useState<{
    //     isLoading: boolean;
    //     success: boolean;
    //     data: LeaderBoard[];
    // }>({ isLoading: true, success: false, data: null! });

    // const getLeaderBoard = useCallback(async () => {
    //     try {
    //         const offlineData = await localStorage.getItem<{
    //             isLoading: boolean;
    //             success: boolean;
    //             data: GameModel;
    //         }>(OfflineData.game_page);
    //         if (!isEmpty(offlineData) && !isNil(offlineData)) {
    //             setLeaderBoard({
    //                 isLoading: false,
    //                 success: true,
    //                 data: offlineData.data.leader_board,
    //             });
    //         }
    //     } catch (error: any) {
    //         Alert.alert(error);
    //     }
    // }, []);

    // useMount(() => {
    //     getLeaderBoard();
    // });

    const leaderBoard = [
        {
            place: '1',
            place_change: 'up',
            name_he: 'איסלנד',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            games: '6',
            wins: '4',
            ties: '1',
            difference: '2',
            goals: '6 - 4',
            score: '12',
        },
        {
            place: '2',
            place_change: 'up',
            name_he: 'איסלנד',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            games: '6',
            wins: '4',
            ties: '1',
            difference: '2',
            goals: '6 - 4',
            score: '12',
        },
        {
            place: '3',
            place_change: 'down',
            name_he: 'איסלנד',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            games: '6',
            wins: '4',
            ties: '1',
            difference: '2',
            goals: '6 - 4',
            score: '12',
        },
        {
            place: '4',
            place_change: 'up',
            name_he: 'איסלנד',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            games: '6',
            wins: '4',
            ties: '1',
            difference: '2',
            goals: '6 - 4',
            score: '12',
        },
    ];

    return { t, leaderBoard };
};
