import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    // Year
    const [openModalYear, setOpenModalYear] = useState(false);
    const [selectYear, setSelectYear] = useState('2022/23');
    const years = ['2022/23', '2021/22', '2020/21', '2019/20', '2018/19'];

    // cycles
    const [openModalCycles, setOpenModalCycles] = useState(false);
    const [selectCycles, setSelectCycles] = useState('מחזור 34');
    const cycles = ['מחזור 34', 'מחזור 33', 'מחזור 32', 'מחזור 31', 'מחזור 30'];

    // Round
    const [openModalRound, setOpenModalRound] = useState(false);
    const [selectRound, setSelectRound] = useState('סבב 1');
    const rounds = ['סבב 1', 'סבב 2', 'סבב 3', 'סבב 4', 'סבב 5'];

    const data = [
        {
            id: 1,
            avt: AppImages.img_club,
            name: 'מ.ס אשדוד',
            games: '34',
            wins: '22',
            ties: '9',
            difference: '3',
            goals: '37-82',
            score: '75',
        },
        {
            id: 2,
            avt: AppImages.img_club,
            name: 'מ.ס אשדוד',
            games: '34',
            wins: '22',
            ties: '9',
            difference: '3',
            goals: '37-82',
            score: '75',
        },
        {
            id: 3,
            avt: AppImages.img_club,
            name: 'מ.ס אשדוד',
            games: '34',
            wins: '22',
            ties: '9',
            difference: '3',
            goals: '37-82',
            score: '75',
        },
        {
            id: 4,
            avt: AppImages.img_club,
            name: 'מ.ס אשדוד',
            games: '34',
            wins: '22',
            ties: '9',
            difference: '3',
            goals: '37-82',
            score: '75',
        },
        {
            id: 5,
            avt: AppImages.img_club,
            name: 'מ.ס אשדוד',
            games: '34',
            wins: '22',
            ties: '9',
            difference: '3',
            goals: '37-82',
            score: '75',
        },
    ];

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        openModalYear,
        setOpenModalYear,
        selectYear,
        setSelectYear,
        years,
        openModalCycles,
        setOpenModalCycles,
        selectCycles,
        setSelectCycles,
        cycles,
        openModalRound,
        setOpenModalRound,
        selectRound,
        setSelectRound,
        rounds,
        data,
    };
};
