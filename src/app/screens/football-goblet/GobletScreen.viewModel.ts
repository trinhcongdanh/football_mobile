/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGobletScreenProps } from '@football/app/screens/football-goblet/GobletScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { CupModel } from '@football/core/models/CupModelResponse';
import cupsService, { useCups } from '@football/core/services/Cups.service';
import _ from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

enum CupTab {
    NationCup = 1,
    TotoCup = 2,
}

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { navigate } = useAppNavigator();
    const [tab, setTab] = useState(CupTab.NationCup);
    const [cups, setCups] = useState<CupModel[]>([]);
    const [shouldClearCache, setClearChace] = useState(true); // First time when we change tab 1 to tab 2, should clear cache
    const [onSelect, setOnSelect] = useState(0);

    const [searchText, setSearchText] = useState<any>(null);
    const searchTextRef = useRef<any>(null);

    return {
        tab,
        setTab,
        cups,
        setCups,
        shouldClearCache,
        setClearChace,
        navigate,
        onSelect,
        setOnSelect,
        searchText,
        setSearchText,
        searchTextRef,
    };
};

/**
 * State use event handler
 * @param state
 * @param callback
 * @returns
 */
const useEventHandler = (state: any, callback: any) => {
    const { setTab, navigate } = state;
    const { searchCupsData } = callback;
    const changeTab = (index: number) => {
        const type = index === 0 ? CupTab.NationCup : CupTab.TotoCup;
        setTab(() => type);
    };
    const goToStateCupPage = (cup: CupModel) => {
        navigate(ScreenName.StateCupPage, { cup });
    };

    const onChangeText = (text: string, tab: number) => {
        searchCupsData(text, tab);
    };

    const onSearchCup = _.debounce(onChangeText, 500);

    return {
        changeTab,
        goToStateCupPage,
        onSearchCup,
        onChangeText,
    };
};

/**
 * Handle api calling here
 * @param state
 * @returns
 */
const useViewCallback = (state: any, route: any) => {
    const { setCups } = state;

    const searchCupsData = useCallback(async (text: string, tab: number) => {
        console.log('TAb', tab);
        const [error, res] = await cupsService.searchCups(text, tab);
        if (error) {
            return;
        }

        setCups(res.data.documents);
    }, []);

    return { searchCupsData };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 * @param callback
 */

const useEffectHandler = (state: any, callback: any, eventHandler: any) => {
    const { tab, setCups, shouldClearCache, setClearChace, setSearchText } = state;

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
            setSearchText('');
            setClearChace(false);
        }
    }, [tab, shouldClearCache]);
};

export const useViewModel = ({ navigation, route }: IGobletScreenProps) => {
    const { t } = useTranslation();

    const state = useViewState();
    const callback = useViewCallback(state, route);
    const eventHandler = useEventHandler(state, callback);
    useEffectHandler(state, callback, eventHandler);

    return { t, ...eventHandler, ...state };
};
