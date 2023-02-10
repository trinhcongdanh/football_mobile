import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    // Game season
    const [openModalYear, setOpenModalYear] = useState(false);
    const [selectYear, setSelectYear] = useState('2022/23');
    const [years, setYears] = useState<any[]>([
        { id: 1, content: '2022/23', isSelected: true },
        { id: 2, content: '2021/22', isSelected: false },
        { id: 3, content: '2020/21', isSelected: false },
        { id: 4, content: '2019/20', isSelected: false },
        { id: 5, content: '2018/19', isSelected: false },
    ]);

    const handleSelectedYear = (item: any) => {
        // Game season
        setSelectYear(item.content);
        const newYears = years.map(e => {
            return { ...e, isSelected: e.id === item.id };
        });
        setYears(newYears);
        setOpenModalYear(false);
    };

    // Cycle
    const [openModalCycle, setOpenModalCycle] = useState(false);
    const [selectCycle, setSelectCycle] = useState('34 מחזור');
    const cycles = ['30 מחזור', '31 מחזור', '32 מחזור', '33 מחזור', '34 מחזור'];

    // Top playoff
    const [openModalPlayOff, setOpenModalPlayOff] = useState(false);
    const [selectPlayoff, setSelectPlayoff] = useState('פלייאוף עליון');

    const playOffs = [
        'פלייאוף עליון',
        'פלייאוף עליון',
        'פלייאוף עליון',
        'פלייאוף עליון',
        'פלייאוף עליון',
    ];

    const handleCloseModal = () => {
        setOpenModalYear(false);
        setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };
    return {
        t,
        onGoBack,
        setOpenModalYear,
        setSelectYear,
        handleSelectedYear,
        handleCloseModal,
        setOpenModalCycle,
        setOpenModalPlayOff,
        setSelectCycle,
        setSelectPlayoff,
        openModalYear,
        selectYear,
        years,
        openModalCycle,
        cycles,
        selectCycle,
        openModalPlayOff,
        selectPlayoff,
        playOffs,
    };
};
