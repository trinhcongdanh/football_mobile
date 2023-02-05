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
    // const [lineUp, setLineUp] = useState<{
    //     isLoading: boolean;
    //     success: boolean;
    //     data: Lineup;
    // }>({ isLoading: true, success: false, data: null! });

    // const getLineUp = useCallback(async () => {
    //     try {
    //         const offlineData = await localStorage.getItem<{
    //             isLoading: boolean;
    //             success: boolean;
    //             data: GameModel;
    //         }>(OfflineData.game_page);
    //         if (!isEmpty(offlineData) && !isNil(offlineData)) {
    //             setLineUp({ isLoading: false, success: true, data: offlineData.data.lineup });
    //         }
    //     } catch (error: any) {
    //         Alert.alert(error);
    //     }
    // }, []);

    // useMount(() => {
    //     getLineUp();
    // });

    const lineUp = [
        {
            player_id: '6357b56aa1c4cf43fdff2a4c',
            name_he: "ג'ון דו",
            shirt_number: 3,
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
        },
        {
            player_id: '633e86e9f513b0c310b4623a',
            name_he: "ג'ון דו",
            shirt_number: 4,
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
        },
        {
            player_id: '6357b56aa1c4cf43fdff2a4i',
            name_he: "ג'ון דו",
            shirt_number: 5,
            image_url:
                'https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_UY264_CR12,0,178,264_AL_.jpg',
        },
    ];

    return { t, lineUp };
};
