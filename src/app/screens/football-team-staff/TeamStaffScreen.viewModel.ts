import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
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
        { id: 1, name: 'מאור מליקסון', position: 'עוזר מאמן', avt: AppImages.img_staff },
        { id: 2, name: 'מוחמד ריזקה', position: 'חבר הנהלה', avt: AppImages.img_staff },
        { id: 3, name: 'אליניב ברדה', position: 'מאמן ראשי', avt: AppImages.img_staff },
        {
            id: 4,
            name: 'אביתר אילוז',
            position: 'מנהל הקבוצה, בעל זכות חתימה, איש קשר, מנהל TMS',
            avt: AppImages.img_staff,
        },
        { id: 5, name: 'אסף דידי', position: 'פיזיותרפיסט', avt: AppImages.img_staff },
        { id: 6, name: 'אסף דידי', position: 'פיזיותרפיסט', avt: AppImages.img_staff },
        { id: 7, name: 'אסף דידי', position: 'פיזיותרפיסט', avt: AppImages.img_staff },
        { id: 8, name: 'אסף דידי', position: 'פיזיותרפיסט', avt: AppImages.img_staff },
        { id: 9, name: 'אסף דידי', position: 'פיזיותרפיסט', avt: AppImages.img_staff },
    ];

    return { t, onGoBack, setOnSelect, onSelect, teamStaffs };
};
