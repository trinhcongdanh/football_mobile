import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IAppearancesProps } from '@football/app/screens/football-national-team/layout/appearances/Appearances.type';
import { ScreenName, TopTeamPlayerType } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
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
 * States use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any) => {
    const { navigate } = useAppNavigator();

    /**
     * navigate to appearances
     * @param topTeam
     */
    const onNavigateAppearances = (topTeam?: TopTeamModel) => {
        navigate(ScreenName.ConquerorsPage, {
            topTeam: topTeam,
            type: TopTeamPlayerType.Appearances,
        });
    };

    /**
     * navigate to data player
     * @param playerId
     */
    const onNavigatePlayerData = (playerId: string) => {
        navigate(ScreenName.DataPlayerPage, { playerId });
    };

    return {
        onNavigateAppearances,
        onNavigatePlayerData,
    };
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ topTeam }: IAppearancesProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    return {
        ...state,
        ...eventHandler,
    };
};
