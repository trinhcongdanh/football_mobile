import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IYellowsCupProps } from './YellowsCup.type';

export const useViewModel = ({}: IYellowsCupProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const listPlayerGoal = [
        { id: 1, name: 'איאד אבו עוביד', avt: AppImages.img_avt_player, yellow: 2 },
        { id: 2, name: 'איאד אבו עוביד', avt: AppImages.img_avt_player, yellow: 2 },
        { id: 3, name: 'איאד אבו עוביד', avt: AppImages.img_avt_player, yellow: 2 },
        { id: 4, name: 'איאד אבו עוביד', avt: AppImages.img_avt_player, yellow: 2 },
        { id: 5, name: 'איאד אבו עוביד', avt: AppImages.img_avt_player, yellow: 2 },
    ];

    return {
        t,
        listPlayerGoal,
    };
};
