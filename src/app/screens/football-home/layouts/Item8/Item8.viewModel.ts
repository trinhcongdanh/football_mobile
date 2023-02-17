import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IItem8Props } from '@football/app/screens/football-home/layouts/Item8/Item8.type';
import { AppImages } from '@football/app/assets/images';
export const useViewModel = ({}: IItem8Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const data = [
        {
            title: 'בחן את עצמך',
            logo: AppImages.img_logo,
            question: 'כמה אתה מכיר את נבחרת ישראל?',
            score: '820',
            total: '19,200 השתתפו בחידון',
        },
        {
            title: 'בחן את עצמך',
            logo: AppImages.img_logo,
            question: 'כמה אתה מכיר את נבחרת ישראל?',
            score: '820',
            total: '19,200 השתתפו בחידון',
        },

        {
            title: 'בחן את עצמך',
            logo: AppImages.img_logo,
            question: 'כמה אתה מכיר את נבחרת ישראל?',
            score: '820',
            total: '19,200 השתתפו בחידון',
        },
        {
            title: 'בחן את עצמך',
            logo: AppImages.img_logo,
            question: 'כמה אתה מכיר את נבחרת ישראל?',
            score: '820',
            total: '19,200 השתתפו בחידון',
        },
        {
            title: 'בחן את עצמך',
            logo: AppImages.img_logo,
            question: 'כמה אתה מכיר את נבחרת ישראל?',
            score: '820',
            total: '19,200 השתתפו בחידון',
        },
    ];
    const dots = Array(3).fill('');

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
        dots,
    };
};
