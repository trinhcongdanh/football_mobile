import { OfflineData } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import localStorage from '@football/core/helpers/localStorage';
import { GameModel, Gameplay } from '@football/core/models/GameModelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next';
import { IGameScreenProps } from './GameScreen.type';

export const useViewModel = ({ navigation, route }: IGameScreenProps) => {
    const { t } = useTranslation();
    // const [gamePlay, setGamePlay] = useState<{
    //     isLoading: boolean;
    //     success: boolean;
    //     data: Gameplay[];
    // }>({ isLoading: true, success: false, data: null! });

    // const getGamePlay = useCallback(async () => {
    //     try {
    //         const offlineData = await localStorage.getItem<{
    //             isLoading: boolean;
    //             success: boolean;
    //             data: GameModel;
    //         }>(OfflineData.game_page);
    //         if (!isEmpty(offlineData) && !isNil(offlineData)) {
    //             setGamePlay({ isLoading: false, success: true, data: offlineData.data.gameplay });
    //         }
    //     } catch (error: any) {
    //         Alert.alert(error);
    //     }
    // }, []);

    // useMount(() => {
    //     getGamePlay();
    // });

    const gamePlay = [
        {
            action: 'yellow_card',
            name_he: "ג'ון דו",
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
            minute: 22,
            team_name_he: 'ישראל',
        },
        {
            action: 'red_card',
            name_he: "ג'ון דו",
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
            minute: 22,
            team_name_he: 'ישראל',
        },
        {
            action: 'goal',
            name_he: "ג'ון דו",
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
            minute: 45,
            team_name_he: 'ישראל',
        },
        {
            action: 'goal',
            name_he: "ג'ון דו",
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
            minute: 67,
            team_name_he: 'ישראל',
        },
        {
            action: 'exchange',
            name_he: "ג'ון דו",
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
            minute: 90,
            team_name_he: 'ישראל',
        },
    ];

    return { t, gamePlay };
};
