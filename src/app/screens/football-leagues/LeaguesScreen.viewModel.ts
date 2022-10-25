import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName, ScreenTopTap } from '@football/app/utils/constants/enum';
import { LeaguesYouthScreen } from './layouts/leagues-youth/LeaguesYouthScreen';
import { LeaguesWomenScreen } from './layouts/leagues-women/LeaguesWomenScreen';
import { LeaguesGraduateScreen } from './layouts/leagues-graduates/LeaguesGraduatesScreen';
import { LeaguesBoysAScreen } from './layouts/leagues-boys-a/LeaguesBoysAScreen';
import { LeaguesBoysBScreen } from './layouts/leagues-boys-b/LeaguesBoysBScreen';
import { LeaguesBoysCScreen } from './layouts/leagues-boys-c/LeaguesBoysCScreen';
import { ILeaguesScreenProps } from './LeaguesScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const onNavigateSetting = () => {
        navigate(ScreenName.SettingsPage);
    };

    const labels = [
        {
            id: 1,
            component: LeaguesGraduateScreen,
            name: ScreenTopTap.LeaguesGraduatesPage,
            title: t('leagues.graduates.title'),
        },
        {
            id: 2,
            component: LeaguesWomenScreen,
            name: ScreenTopTap.LeaguesWomenPage,
            title: t('leagues.women.title'),
        },
        {
            id: 3,
            component: LeaguesYouthScreen,
            name: ScreenTopTap.LeaguesYouthPage,
            title: t('leagues.youth.title'),
        },
        {
            id: 4,
            component: LeaguesBoysAScreen,
            name: ScreenTopTap.LeaguesBoysAPage,
            title: t('leagues.boys_a.title'),
        },
        {
            id: 5,
            component: LeaguesBoysBScreen,
            name: ScreenTopTap.LeaguesBoysBPage,
            title: t('leagues.boys_b.title'),
        },
        {
            id: 6,
            component: LeaguesBoysCScreen,
            name: ScreenTopTap.LeaguesBoysCPage,
            title: t('leagues.boys_c.title'),
        },
    ];

    return { t, onGoBack, labels, onNavigateSetting };
};
