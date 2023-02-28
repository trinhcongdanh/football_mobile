/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGobletScreenProps } from '@football/app/screens/football-goblet/GobletScreen.type';
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
    const { navigate } = useAppNavigator();
    const changeTab = (index: number) => {
        const type = index === 0 ? CupTab.NationCup : CupTab.TotoCup;
        setTab(type);
    };
    const goToStateCupPage = (cup: CupModel) => {
        navigate(ScreenName.StateCupPage, { cup });
    };
    return {
        changeTab,
        goToStateCupPage,
    };
};

export const useViewModel = ({ navigation, route }: IGobletScreenProps) => {
    const { t } = useTranslation();
    const { tab, setTab, cups, setCups, shouldClearCache, setClearChace } = useViewState();
    const { changeTab, goToStateCupPage } = useViewCallback({ setTab, setCups });
    const [onSelect, setOnSelect] = useState(0);
    const { data: cupsData } = useCups(tab);

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

    return { t, setOnSelect, goToStateCupPage, onSelect, changeTab, tab, cups };
};
