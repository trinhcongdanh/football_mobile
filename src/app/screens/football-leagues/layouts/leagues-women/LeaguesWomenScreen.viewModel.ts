import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { ILeaguesWomenScreenProps } from './LeaguesWomenScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesWomenScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const optionLeagues = [
        { id: 1, name: 'ליגת האומות של אופ"א 2022/23' },
        { id: 2, name: 'ליגת ONE ZERO בנקאות פרטית דיגיטלית' },
        { id: 3, name: 'ליגה א׳ דרום' },
        { id: 4, name: 'Summary' },
        { id: 5, name: 'ליגה ב׳ דרום' },
        { id: 6, name: 'ליגה ב׳ צפון' },
        { id: 7, name: 'ליגה ב׳ צפון א׳' },
        { id: 8, name: 'ליגה ג׳ גליל עליון' },
        { id: 9, name: 'ליגה ג׳ גליל עליון' },
        { id: 10, name: 'ליגה ג׳ גליל עליון' },
        { id: 11, name: 'ליגת ONE ZERO בנקאות פרטית דיגיטלית' },
        { id: 12, name: 'ליגת ONE ZERO בנקאות פרטית דיגיטלית' },
        { id: 13, name: 'ליגת ONE ZERO בנקאות פרטית דיגיטלית' },
    ];

    const handleLeaguesDetails = (index: number) => {
        switch (index) {
            case 0:
                navigate(ScreenName.LeaguesDetailsPage);
                break;
            case 1:
                navigate(ScreenName.TeamPage);
                break;
            case 2:
                navigate(ScreenName.TeamSquadPage);
                break;
            case 3:
                navigate(ScreenName.StateCupPage);
                break;
            case 4:
                navigate(ScreenName.DataCoachPage);
                break;
            case 5:
                navigate(ScreenName.MatchPage);
                break;
            case 6:
                navigate(ScreenName.HistoryPage);
                break;
            case 7:
                navigate(ScreenName.TeamStaffPage);
                break;
            case 8:
                navigate(ScreenName.DataPlayerPage);
                break;
            case 9:
                navigate(ScreenName.PreviousCampaignsPage);
                break;
            case 10:
                navigate(ScreenName.CampaignPage);
                break;
            case 11:
                navigate(ScreenName.ConquerorsPage);
                break;
            case 12:
                navigate(ScreenName.PitchPage);
                break;
            default:
                navigate(ScreenName.TeamSquadPage);
                break;
        }
    };

    return { t, onGoBack, optionLeagues, handleLeaguesDetails };
};
