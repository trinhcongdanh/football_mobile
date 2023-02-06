import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeagueTableProps } from '@football/app/screens/football-group-page/layouts/league-table/LeagueTable.type';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';

export const useViewModel = ({}: ILeagueTableProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
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
        setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };

    const listTeams = [
        {
            id: 1,
            logo: AppImages.img_israel,
            name: 'מכבי חיפה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 2,
            logo: AppImages.img_israel,
            name: 'הפועל באר שבע',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 3,
            logo: AppImages.img_israel,
            name: 'מכבי תל אביב',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 4,
            logo: AppImages.img_israel,
            name: 'מכבי נתניה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 5,
            logo: AppImages.img_israel,
            name: 'מכבי נתניה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 6,
            logo: AppImages.img_israel,
            name: 'מכבי נתניה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
    ];

    return {
        t,
        handleSelectedCycle,
        handleSelectedPlayOff,
        handleCloseModal,
        setOpenModalCycle,
        setOpenModalPlayOff,
        openModalCycle,
        cycles,
        selectCycle,
        openModalPlayOff,
        selectPlayoff,
        playOffs,
        listTeams,
    };
};
