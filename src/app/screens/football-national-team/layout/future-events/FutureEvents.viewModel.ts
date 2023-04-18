import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IFutureEventsProps } from '@football/app/screens/football-national-team/layout/future-events/FutureEvents.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
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
     * Handle detail game
     * @param gameId
     */
    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    /**
     * Handle Stadium detail
     * @param stadiumId
     */
    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    return {
        handleDetailMatch,
        handleStadium,
    };
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ topTeam }: IFutureEventsProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    return {
        ...state,
        ...eventHandler,
    };
};
