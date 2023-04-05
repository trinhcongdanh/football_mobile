import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGoalKickersProps } from '@football/app/screens/football-national-team/layout/goal-kickers/GoalKickers.type';
import { TeamSquadScreenType } from '@football/app/screens/football-team-squad';
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
    const teamSquads = [
        {
            id: 1,
            name: t('team_squad.title'),
            screen: ScreenName.TeamSquadPage,
            selectedTab: TeamSquadScreenType.Personnel,
        },
        {
            id: 2,
            name: t('team_squad.option.officials'),
            screen: ScreenName.TeamSquadPage,
            selectedTab: TeamSquadScreenType.Staff,
        },
    ];
    return {
        getTranslationText,
        t,
        teamSquads,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any) => {
    const { navigate } = useAppNavigator();

    return {
        navigate,
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
