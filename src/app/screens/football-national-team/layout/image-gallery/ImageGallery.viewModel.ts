import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { getTranslationText } = useTranslationText();
    const { t } = useTranslation();

    return {
        getTranslationText,
        t,
    };
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = () => {
    const state = useViewState();
    return {
        ...state,
    };
};
