import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { ICupsScreenProps } from './CupsScreen.type';

export const useViewModel = ({ navigation, route }: ICupsScreenProps) => {
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
            seasion: '2021/2022',
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
        {
            id: 6,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
        {
            id: 7,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
        {
            id: 8,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            seasion: '2021/2022',
        },
    ];
    return {
        t,
        onGoBack,
        listGoals,
    };
};
