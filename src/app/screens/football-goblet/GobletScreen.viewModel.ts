/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { CupModel } from '@football/core/models/CupModelResponse';
import { useCups } from '@football/core/services/Cups.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

enum CupTab {
    NationCup = 1,
    TotoCup = 2,
}

const useViewState = () => {
    const [tab, setTab] = useState(CupTab.NationCup);
    const [cups, setCups] = useState<CupModel[]>([]);
    const [shouldClearCache, setClearChace] = useState(true); // First time when we change tab 1 to tab 2, should clear cache

    return {
        tab,
        setTab,
        cups,
        setCups,
        shouldClearCache,
        setClearChace,
    };
};

const useViewCallback = ({ setTab }: any) => {
    const changeTab = (index: number) => {
        const type = index === 0 ? CupTab.NationCup : CupTab.TotoCup;
        setTab(type);
    };
    return {
        changeTab,
    };
};

export const useViewModel = () => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const { tab, setTab, cups, setCups, shouldClearCache, setClearChace } = useViewState();
    const { changeTab } = useViewCallback({ setTab, setCups });
    const [onSelect, setOnSelect] = useState(0);
    const { data: cupsData } = useCups(tab);

    const stateCups = [
        { id: 1, state: 'גביע המדינה' },
        { id: 2, state: 'גביע וותיקים' },
        { id: 3, state: 'גביע אתנה' },
        { id: 4, state: 'גביע מדינה נשים' },
        { id: 5, state: 'גביע לנוער על שם אבי רן ז״ל' },
        { id: 6, state: 'גביע אתנה' },
        { id: 7, state: 'גביע נערות' },
        { id: 8, state: 'גביע נערים א׳ ע״ש חיים הברפלד ז״ל' },
        { id: 9, state: 'גביע המדינה לנערות' },
    ];

    const handleStateCup = () => {
        navigate(ScreenName.StateCupPage);
    };

    useEffect(() => {
        if (!cupsData) {
            return;
        }
        const [error, res] = cupsData;
        if (!error) {
            setCups(res.data.documents);
        }
    }, [cupsData]);

    useEffect(() => {
        if (shouldClearCache && tab === CupTab.TotoCup) {
            setCups([]);
            setClearChace(false);
        }
    }, [tab, shouldClearCache]);

    return { t, setOnSelect, handleStateCup, onSelect, stateCups, changeTab, tab, cups };
};
