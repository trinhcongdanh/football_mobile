import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGoalKickersProps } from '@football/app/screens/football-national-team/layout/goal-kickers/GoalKickers.type';
import { ScreenName, TopTeamPlayerType } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';

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
     * navigate to goal kickers
     * @param topTeam
     */
    const onNavigateGoalKickers = (topTeam?: TopTeamModel) => {
        navigate(ScreenName.ConquerorsPage, {
            topTeam: topTeam,
            type: TopTeamPlayerType.GoalKickers,
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
        onNavigateGoalKickers,
        onNavigatePlayerData,
    };
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ topTeam }: IGoalKickersProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    return {
        ...state,
        ...eventHandler,
    };
};
