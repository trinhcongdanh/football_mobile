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
    // const [games, setGames] = useState<{
    //     isLoading: boolean;
    //     success: boolean;
    //     data: Game[];
    // }>({ isLoading: true, success: false, data: null! });

    // const getGames = useCallback(async () => {
    //     try {
    //         const offlineData = await localStorage.getItem<{
    //             isLoading: boolean;
    //             success: boolean;
    //             data: GameModel;
    //         }>(OfflineData.game_page);
    //         if (!isEmpty(offlineData) && !isNil(offlineData)) {
    //             setGames({ isLoading: false, success: true, data: offlineData.data.games });
    //         }
    //     } catch (error: any) {
    //         Alert.alert(error);
    //     }
    // }, []);

    // useMount(() => {
    //     getGames();
    // });
    const games = [
        {
            game_id: '6376cca92d6cec13aea3c788',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/israel-512.png',
            name_he: 'ישראל',
            stadium_he: 'בלומפילד',
            date: '28.9.22',
            score: '3 : 6',
            time: '22:45',
        },
        {
            game_id: '6376cca92d6cec13aea3c788',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/israel-512.png',
            name_he: 'ישראל',
            stadium_he: 'בלומפילד',
            date: '28.9.22',
            score: '3 : 6',
            time: '22:45',
        },
    ];

    return { t, games };
};
