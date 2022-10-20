import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IHistoryScreenProps } from './HistoryScreen.type';

export const useViewModel = ({ navigation, route }: IHistoryScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const datas = [
        { id: 1, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
        { id: 2, campaign: 'ידידות', year: '2022' },
        { id: 3, campaign: 'מוקדמות מונדיאל', year: '2022' },
        { id: 4, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2021/22' },
        { id: 5, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2020' },
        { id: 6, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2019' },
        { id: 7, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2018' },
        { id: 8, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2019' },
        { id: 9, campaign: 'ליגת האומות של אופ"א 2022/23', year: '2018' },
    ];

    return { t, onGoBack, datas };
};
