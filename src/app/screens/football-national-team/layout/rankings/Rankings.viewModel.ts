import { IRankingsProps } from '@football/app/screens/football-national-team/layout/rankings/Rankings.type';
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
export const useViewModel = ({ topTeam }: IRankingsProps) => {
    const state = useViewState();
    return {
        ...state,
    };
};
