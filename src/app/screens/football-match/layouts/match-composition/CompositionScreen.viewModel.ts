import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { GameModel } from '@football/core/models/GameModelResponse';
import gameService from '@football/core/services/game.service';
import { useCallback, useState } from 'react';
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

const useViewCallback = (route: any, viewState: any) => {
    const { setGame } = viewState;
    const getGameData = useCallback(async () => {
        const [error, res] = await gameService.findByOId(route?.params?.gameId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setGame(res.data.documents[0]);
        }
    }, []);

    return {
        getGameData,
    };
};

export const useViewModel = ({ navigation, route }: ICompositionScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const handleDataPlayer = () => {
        navigate(ScreenName.DataPlayerPage);
    };

    const state = useViewState();

    const { getGameData } = useViewCallback(route, state);

    const options = [t('match.home'), t('match.guest')];

    const selectOption = (index: number) => {
        state.setSelect(index);
    };

    useMount(() => {
        getGameData();
    });

    return { t, ...state, handleDataPlayer, options, selectOption };
};
