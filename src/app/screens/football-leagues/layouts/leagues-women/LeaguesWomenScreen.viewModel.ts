import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
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
        { id: 4, name: 'ליגה א׳ צפון' },
        { id: 5, name: 'ליגה ב׳ דרום' },
        { id: 6, name: 'ליגה ב׳ צפון' },
        { id: 7, name: 'ליגה ב׳ צפון א׳' },
        { id: 8, name: 'ליגה ג׳ גליל עליון' },
        { id: 9, name: 'ליגת ONE ZERO בנקאות פרטית דיגיטלית' },
    ];

    const handleLeaguesDetails = () => {
        console.log('details');
    };

    return { t, onGoBack, optionLeagues, handleLeaguesDetails };
};
