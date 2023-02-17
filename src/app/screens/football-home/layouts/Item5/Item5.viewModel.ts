import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { IItem5Props } from '@football/app/screens/football-home/layouts/Item5/Item5.type';
export const useViewModel = ({}: IItem5Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const data_stats = [
        {
            id: 1,
            gates: 'בריירו לוקאס מריאנו',
            avt: AppImages.img_avt_player,
            games: '7',
            gate: '6',
        },
        {
            id: 2,
            gates: 'בריירו לוקאס מריאנו',
            avt: AppImages.img_avt_player,
            games: '3',
            gate: '6',
        },
        {
            id: 3,
            gates: 'בריירו לוקאס מריאנו',
            avt: AppImages.img_avt_player,
            games: '1',
            gate: '6',
        },
    ];
    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data_stats,
    };
};
