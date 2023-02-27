/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useMount } from '@football/app/utils/hooks/useMount';
import { CoachModel } from '@football/core/models/CoachModelResponse';
import CoachService from '@football/core/services/Coach.service';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IDataCoachScreenProps } from './DataCoachScreen.type';

const useViewState = () => {
    const [coach, setCoach] = useState<CoachModel>();
    const [onSelect, setOnSelect] = useState(0);

    return {
        coach,
        setCoach,
        onSelect,
        setOnSelect,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setCoach } = viewState;

    const getCoachData = useCallback(async () => {
        const [error, res] = await CoachService.findByOId(route?.params?.coachId);
        if (error) {
            return;
        }
        if (res.data.documents.length) {
            setCoach(res.data.documents[0]);
        }
    }, []);

    return {
        getCoachData,
    };
};

export const useViewModel = ({ navigation, route }: IDataCoachScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const state = useViewState();
    const { getCoachData } = useViewCallback(route, state);

    const onGoBack = (): void => {
        goBack();
    };

    useMount(() => {
        getCoachData();
    });
    return { t, onGoBack, ...state };
};
