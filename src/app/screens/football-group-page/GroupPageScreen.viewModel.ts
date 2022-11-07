import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGroupPageScreenProps } from './GroupPageScreen.type';

export const useViewModel = ({ navigation, route }: IGroupPageScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const [openModal, setOpenModal] = useState(false);

    const [selectYear, setSelectYear] = useState('2022/23');
    const years = ['2022/23', '2021/22', '2020/21', '2019/20', '2018/19'];

    const [isScroll, setIsScroll] = useState(true);

    const groups = [
        { id: 1, group: t('group_page.cast') },
        { id: 2, group: t('group_page.official') },
    ];

    return {
        t,
        onGoBack,
        setOpenModal,
        setSelectYear,
        setIsScroll,
        openModal,
        selectYear,
        years,
        isScroll,
        groups,
    };
};
