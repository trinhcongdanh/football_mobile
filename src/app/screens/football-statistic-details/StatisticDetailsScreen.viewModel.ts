import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { IStatisticDetailsScreenProps } from './StatisticDetailsScreen.type';

export const useViewModel = ({ navigation, route }: IStatisticDetailsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };
    const listGoals = [
        {
            id: 1,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 6,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 7,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 8,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 9,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 10,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
    ];
    return {
        t,
        onGoBack,
        listGoals,
    };
};
