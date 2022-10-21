import { useTranslation } from 'react-i18next';
import { ScreenTopTap } from '../../utils/constants/enum';
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

    return { t, onGoBack, labels };
};
