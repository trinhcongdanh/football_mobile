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
    const [cycles, setCycle] = useState<any[]>([
        { id: 1, content: '30 מחזור', isSelected: false },
        { id: 2, content: '31 מחזור', isSelected: false },
        { id: 3, content: '32 מחזור', isSelected: false },
        { id: 4, content: '33 מחזור', isSelected: false },
        { id: 5, content: '34 מחזור', isSelected: true },
    ]);
    const handleSelectedCycle = (item: any) => {
        setSelectCycle(item.content);
        const newCycles = cycles.map(e => {
            return { ...e, isSelected: e.id === item.id };
        });
        setCycle(newCycles);
        setOpenModalCycle(false);
    };

    // Top playoff
    const [openModalPlayOff, setOpenModalPlayOff] = useState(false);
    const [selectPlayoff, setSelectPlayoff] = useState('פלייאוף עליון');
    const [playOffs, setPlayOff] = useState<any[]>([
        { id: 1, content: 'פלייאוף עליון', isSelected: true },
        { id: 2, content: 'פלייאוף עליון', isSelected: false },
        { id: 3, content: 'פלייאוף עליון', isSelected: false },
        { id: 4, content: 'פלייאוף עליון', isSelected: false },
        { id: 5, content: 'פלייאוף עליון', isSelected: false },
    ]);
    const handleSelectedPlayOff = (item: any) => {
        setSelectPlayoff(item.content);
        const newPlayOff = playOffs.map(e => {
            return { ...e, isSelected: e.id === item.id };
        });
        setPlayOff(newPlayOff);
        setOpenModalPlayOff(false);
    };

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
        handleSelectedCycle,
        handleSelectedPlayOff,
        setOpenModalPlayOff,
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
