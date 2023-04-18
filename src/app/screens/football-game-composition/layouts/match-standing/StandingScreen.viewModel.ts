import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { IStandingScreenProps } from './StandingScreen.type';

export const useViewModel = ({ navigation, route }: IStandingScreenProps) => {
    const { t } = useTranslation();

    const listTeams = [
        {
            id: 1,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 2,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 3,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 4,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
    ];

    return { t, listTeams };
};
