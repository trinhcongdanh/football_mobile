import { useTranslation } from 'react-i18next';
import { IRegisterScreenProps } from './RegisterScreen.type';

export const useViewModel = ({ navigation, route }: IRegisterScreenProps) => {
    const { i18n } = useTranslation();
    const onGoBack = () => {
        navigation.goBack();
    };
    return {
        onGoBack,
    };
};
