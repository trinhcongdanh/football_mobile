/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useMount } from '@football/app/utils/hooks/useMount';
import { StadiumModel } from '@football/core/models/StadiumsResponse';
import StadiumService from '@football/core/services/Stadium.service';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IPitchScreenProps } from './PitchScreen.type';

const useViewState = () => {
    const [stadium, setStadium] = useState<StadiumModel>();

    return {
        stadium,
        setStadium,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setStadium } = viewState;

    const getStadiumData = useCallback(async () => {
        const [error, res] = await StadiumService.findByOId(route?.params?.stadiumId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setStadium(res.data.documents[0]);
        }
    }, []);

    return {
        getStadiumData,
    };
};
export const useViewModel = ({ navigation, route }: IPitchScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();
    const { getStadiumData } = useViewCallback(route, state);

    useMount(() => {
        getStadiumData();
    });

    return {
        t,
        onGoBack,
        ...state,
    };
};
