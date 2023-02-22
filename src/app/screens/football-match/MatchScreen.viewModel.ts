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

    return {
        game,
        setGame,
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
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();

    const { getGameData } = useViewCallback(route, state);

    useMount(() => {
        getGameData();
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

    return { t, onGoBack, labels, ...state, handleStadium };
};
