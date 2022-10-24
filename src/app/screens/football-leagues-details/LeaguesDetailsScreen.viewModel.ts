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

    const [openModal, setOpenModal] = useState(false);

    const [selectYear, setSelectYear] = useState('2022/23');
    const years = ['2022/23', '2021/22', '2020/21', '2019/20', '2018/19'];

    return {
        t,
        onGoBack,
        setOpenModal,
        setSelectYear,
        openModal,
        selectYear,
        years,
    };
};
