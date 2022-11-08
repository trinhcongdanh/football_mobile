import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { ITeamGroupScreenProps } from './TeamSquadScreen.type';

export const useViewModel = ({ navigation, route }: ITeamGroupScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const goalkeepers = [
        {
            id: 1,
            name: 'עמרי גלזר',
            number: 18,
            avt: AppImages.img_gk,
        },
        {
            id: 2,
            name: 'פיני יואב גראפי',
            number: 1,
            avt: AppImages.img_gk,
        },
        {
            id: 3,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
    ];

    const defenders = [
        {
            id: 1,
            name: 'עמרי גלזר',
            number: 18,
            avt: AppImages.img_gk,
        },
        {
            id: 2,
            name: 'פיני יואב גראפי',
            number: 1,
            avt: AppImages.img_gk,
        },
        {
            id: 3,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
        {
            id: 4,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
        {
            id: 5,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
        {
            id: 6,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
        {
            id: 7,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
        {
            id: 8,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
        {
            id: 9,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },

        {
            id: 10,
            name: 'עופר מרציאנו',
            number: 21,
            avt: AppImages.img_gk,
        },
    ];

    return { onGoBack, t, goalkeepers, defenders };
};
