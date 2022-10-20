import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IDataCoachScreenProps } from './DataCoachScreen.type';
import { useState } from 'react';

export const useViewModel = ({ navigation, route }: IDataCoachScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const [onSelect, setOnSelect] = useState(0);
    return { t, onGoBack, setOnSelect, onSelect };
};
