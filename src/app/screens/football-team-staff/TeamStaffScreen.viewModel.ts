import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ITeamStaffScreenProps } from './TeamStaffScreen.type';

export const useViewModel = ({ navigation, route }: ITeamStaffScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };
    const [onSelect, setOnSelect] = useState(0);

    const teamStaffs = [
        {
            id: 1,
            name: 'מאור מליקסון',
            position: 'עוזר מאמן',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 2,
            name: 'מוחמד ריזקה',
            position: 'חבר הנהלה',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 3,
            name: 'אליניב ברדה',
            position: 'מאמן ראשי',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 4,
            name: 'אביתר אילוז',
            position: 'מנהל הקבוצה, בעל זכות חתימה, איש קשר, מנהל TMS',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 5,
            name: 'אסף דידי',
            position: 'פיזיותרפיסט',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 6,
            name: 'אסף דידי',
            position: 'פיזיותרפיסט',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 7,
            name: 'אסף דידי',
            position: 'פיזיותרפיסט',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 8,
            name: 'אסף דידי',
            position: 'פיזיותרפיסט',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 9,
            name: 'אסף דידי',
            position: 'פיזיותרפיסט',
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
    ];

    const onNavigateDataCoach = () => {
        navigate(ScreenName.DataCoachPage);
    };

    return { t, onGoBack, setOnSelect, onSelect, teamStaffs, onNavigateDataCoach };
};
