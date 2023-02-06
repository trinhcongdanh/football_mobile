import { useTranslation } from 'react-i18next';
import { ScreenName } from '@football/app/utils/constants/enum';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGroupPageScreenProps } from './GroupPageScreen.type';

export const useViewModel = ({ navigation, route }: IGroupPageScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {};

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

    const handleCloseModal = () => {
        setOpenModalYear(false);
    };

    const groups = [
        { id: 1, group: t('group_page.cast') },
        { id: 2, group: t('group_page.official') },
    ];

    // Show Info Group

    const [showInfo, setShowInfo] = useState(false);
    const showInfoGroup = () => {
        setShowInfo(!showInfo);
    };

    return {
        t,
        onGoBack,
        setOpenModalYear,
        openModalYear,
        selectYear,
        years,
        groups,
        handleCloseModal,
        handleSelectedYear,
        showInfoGroup,
        showInfo,
    };
};
