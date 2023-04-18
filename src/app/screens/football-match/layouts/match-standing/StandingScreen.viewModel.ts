import { useTranslation } from 'react-i18next';
import { IStandingScreenProps } from './StandingScreen.type';

export const useViewModel = ({ navigation, route }: IStandingScreenProps) => {
    const { t } = useTranslation();

    return { t };
};
