import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { IListGameScreenProps } from '@football/app/screens/football-list-game/ListGameScreen.type';

export const useViewModel = ({ navigation, route }: IListGameScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };

    const listGames = [
        {
            id: 1,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            location: 'בלומפילד',
        },
        {
            id: 2,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            location: 'בלומפילד',
        },
        {
            id: 3,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            location: 'בלומפילד',
        },
        {
            id: 4,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            location: 'בלומפילד',
        },
    ];

    return {
        t,
        onGoBack,
        listGames,
    };
};
