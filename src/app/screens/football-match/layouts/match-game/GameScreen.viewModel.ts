import { useTranslation } from 'react-i18next';
import { IGameScreenProps } from './GameScreen.type';

export const useViewModel = ({ navigation, route }: IGameScreenProps) => {
    const { t } = useTranslation();
    return { t };
};
