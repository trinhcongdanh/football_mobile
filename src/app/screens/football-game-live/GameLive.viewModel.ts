import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGameLiveProps } from '@football/app/screens/football-game-live/GameLive.type';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export const useViewModel = ({ navigation, route }: IGameLiveProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = () => {
        goBack();
        return true;
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    return {
        t,
        onGoBack,
    };
};
