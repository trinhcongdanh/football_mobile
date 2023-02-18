import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { GameModel, GamesModelResponse } from '@football/core/models/GameModelResponse';
import { isEmpty, isNil } from 'lodash';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { useMount } from '@football/app/utils/hooks/useMount';
import localStorage from '@football/core/helpers/localStorage';
import { useTranslation } from 'react-i18next';
import { OfflineData, ScreenName, ScreenTopTap } from '../../utils/constants/enum';
import { CompositionScreen } from '../../screens/football-match/layouts/match-composition';
import { GameScreen } from '../../screens/football-match/layouts/match-game';
import { ScheduleScreen } from '../../screens/football-match/layouts/match-schedule';
import { StandingScreen } from '../../screens/football-match/layouts/match-standing';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IMatchScreenProps } from './MatchScreen.type';

export const useViewModel = ({ navigation, route }: IMatchScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const [gamesData, setGamesData] = useState<{
        isLoading: boolean;
        success: boolean;
        data: GameModel;
    }>({ isLoading: true, success: false, data: null! });

    const getGamesData = useCallback(async () => {
        try {
            const offlineData = await localStorage.getItem<{
                isLoading: boolean;
                success: boolean;
                data: GameModel;
            }>(OfflineData.game_page);
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setGamesData({ isLoading: false, success: true, data: offlineData.data });
            } else {
                try {
                    const { data }: GamesModelResponse = await axiosClient.post(
                        `${BASE_URL}/find`,
                        {
                            dataSource: DATA_SOURCE,
                            database: DB,
                            collection: 'game',
                        }
                    );

                    if (!isEmpty(data.documents)) {
                        // documents always has one element
                        setGamesData({
                            isLoading: false,
                            success: true,
                            data: data.documents[0],
                        });
                        await localStorage.setItem<{
                            isLoading: boolean;
                            success: boolean;
                            data: GameModel;
                        }>(OfflineData.game_page, gamesData);
                    }
                } catch (e) {
                    setGamesData({ isLoading: false, success: false, data: null! });
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    useMount(() => {
        getGamesData();
    });

    const labels = [
        {
            id: 1,
            component: CompositionScreen,
            name: ScreenTopTap.CompositionPage,
            title: t('match.composition.title'),
        },
        {
            id: 2,
            component: GameScreen,
            name: ScreenTopTap.GamePage,
            title: t('match.game_move.title'),
        },
        {
            id: 3,
            component: ScheduleScreen,
            name: ScreenTopTap.SchedulePage,
            title: t('match.schedule.title'),
        },
        {
            id: 4,
            component: StandingScreen,
            name: ScreenTopTap.StandingPage,
            title: t('match.standing.title'),
        },
    ];

    const handleStadium = () => {
        navigate(ScreenName.PitchPage);
    };

    return { t, onGoBack, labels, gamesData, handleStadium };
};
