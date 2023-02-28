import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { GameModel } from '@football/core/models/GameModelResponse';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICompositionScreenProps } from './CompositionScreen.type';

const useViewState = () => {
    const [game, setGame] = useState<GameModel>();
    const [select, setSelect] = useState(0);

    return {
        game,
        setGame,
        select,
        setSelect,
    };
};

export const useViewModel = ({ navigation, route }: ICompositionScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const handleDataPlayer = (playerId: string) => {
        navigate(ScreenName.DataPlayerPage, { playerId });
    };

    const handleDataCoach = (coachId: string) => {
        navigate(ScreenName.DataCoachPage, { coachId });
    };

    const state = useViewState();

    const options = [t('match.home'), t('match.guest')];

    const selectOption = (index: number) => {
        state.setSelect(index);
    };

    return { t, ...state, handleDataPlayer, options, selectOption, handleDataCoach };
};
