import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { IScheduleScreenProps } from './ScheduleScreen.type';

export const useViewModel = ({ navigation, route }: IScheduleScreenProps) => {
    const { t } = useTranslation();

    const listGames = [
        {
            id: 1,
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '15.09.22',
            result: '3:1',
            schedule: '11:00',
            completed: false,
        },
        {
            id: 2,
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '10.09.22',
            result: '3:1',
            schedule: '11:00',
            completed: true,
        },
    ];
    return { t, listGames };
};
