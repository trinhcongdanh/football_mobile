import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { IScheduleScreenProps } from './ScheduleScreen.type';

export const useViewModel = ({ navigation, route }: IScheduleScreenProps) => {
    const { t } = useTranslation();

    const listGames = [
        {
            id: 1,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
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
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
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
