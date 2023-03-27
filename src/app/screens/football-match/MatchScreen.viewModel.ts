/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useMount } from '@football/app/utils/hooks/useMount';
import { GameModel } from '@football/core/models/GameModelResponse';
import gameService from '@football/core/services/game.service';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScreenName, ScreenTopTap } from '../../utils/constants/enum';
import { CompositionScreen } from './layouts/match-composition';
import { GameScreen } from './layouts/match-game';
import { ScheduleScreen } from './layouts/match-schedule';
import { StandingScreen } from './layouts/match-standing';
import { IMatchScreenProps } from './MatchScreen.type';

const useViewState = () => {
    const [game, setGame] = useState<GameModel>();
    const { t } = useTranslation();

    const [labels, setLabels] = useState<any[]>([
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
        // {
        //     id: 3,
        //     component: ScheduleScreen,
        //     name: ScreenTopTap.SchedulePage,
        //     title: t('match.schedule.title'),
        // },
        // {
        //     id: 4,
        //     component: StandingScreen,
        //     name: ScreenTopTap.StandingPage,
        //     title: t('match.standing.title'),
        // },
    ]);

    const [defaultTab, setDefaultTab] = useState(ScreenTopTap.CompositionPage);
    return {
        game,
        setGame,
        t,
        labels,
        setLabels,
        defaultTab,
        setDefaultTab,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setGame } = viewState;
    const getGameData = useCallback(async () => {
        const [error, res] = await gameService.findByOId(route?.params?.gameId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setGame(res.data.documents[0]);
        }
    }, []);

    return {
        getGameData,
    };
};

export const useViewModel = ({ navigation, route }: IMatchScreenProps) => {
    const { navigate, goBack } = useAppNavigator();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();
    const { getGameData } = useViewCallback(route, state);

    useMount(() => {
        getGameData();
        const { selectedTab } = route.params;
        if (selectedTab) {
            switch (selectedTab) {
                case 'lineup':
                    state.setDefaultTab(ScreenTopTap.CompositionPage);
                    break;
                case 'leader_board':
                    state.setDefaultTab(ScreenTopTap.StandingPage);
                    break;
                case 'games':
                    state.setDefaultTab(ScreenTopTap.SchedulePage);
                    break;
                default:
                    state.setDefaultTab(ScreenTopTap.CompositionPage);
                    break;
            }
        }
    });

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    return { onGoBack, ...state, handleStadium };
};
