import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { INotificationScreenProps } from '@football/app/screens/football-notification/NotificationScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

interface PayLoad {
    target_type?: string;
    target_id?: string;
}
interface Notification {
    item_id: string;
    tc_item_creation: string;
    title: string;
    message: string;
    payload?: PayLoad;
}

/**
 * view settings variables
 * @returns
 */

const useViewState = () => {
    const { t } = useTranslation();
    const { goBack, replace } = useAppNavigator();
    const { getTranslationText } = useTranslationText();
    const [notifications, setNotification] = useState<Notification[]>([]);

    const getProfile = useSelector((state: RootState) => state.getProfile);

    const contents = [
        {
            id: 1,
            content_he: 'לורם איפסום דולור סיט אמט, התרעה.',
            content_en: 'Lorm Ipsum dolor sit amet, warning.',
            date: '29/01',
            time: '09:45',
        },
        {
            id: 2,
            content_he: 'לורם איפסום דולור סיט אמט, התרעה.',
            content_en: 'Lorm Ipsum dolor sit amet, warning.',
            date: '29/01',
            time: '09:45',
        },
        {
            id: 3,
            content_he: 'לורם איפסום דולור סיט אמט, התרעה.',
            content_en: 'Lorm Ipsum dolor sit amet, warning.',
            date: '29/01',
            time: '09:45',
        },
    ];

    return {
        t,
        goBack,
        contents,
        getTranslationText,
        getProfile,
        notifications,
        setNotification,
        replace,
    };
};

/**
 * State use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const { goBack, replace } = state;

    // Go back previous screen
    const onGoBack = (): void => {
        goBack();
    };

    const handleNotification = (payload: PayLoad | undefined) => {
        if (!payload) {
            replace(ScreenName.SideBar);
            return;
        }

        switch (payload?.target_type) {
            case 'top_team':
                replace(ScreenName.NationalTeamPage, {
                    topTeamId: payload.target_id,
                });

                break;
            case 'campaign':
                replace(ScreenName.CampaignPage, {
                    campaignId: payload.target_id,
                });
                break;

            case 'stadium':
                replace(ScreenName.PitchPage, { stadiumId: payload.target_id });
                break;

            case 'game':
                replace(ScreenName.MatchPage, {
                    gameId: payload.target_id,
                    // selectedTab: payload.target_section,
                });
                break;

            case 'coach':
                replace(ScreenName.DataCoachPage, { coachId: payload.target_id });
                break;

            case 'player':
                replace(ScreenName.DataPlayerPage, {
                    playerId: payload.target_id,
                    // selectedTab: payload.target_section,
                });
                break;

            case 'questionnaire':
                replace(ScreenName.PlayGroundPage);
                break;
            case 'cup':
                replace(ScreenName.StateCupPage, {
                    cupId: payload.target_id,
                });
                break;

            default:
                replace(ScreenName.SideBar);
                break;
        }
    };

    return { onGoBack, handleNotification };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param callback
 * @param eventHandler
 */

const useEffectHandler = (state: any, eventHandler: any) => {
    const { getProfile, notifications, setNotification } = state;
    useEffect(() => {
        if (getProfile.success !== true) {
            return;
        }

        const profile = getProfile?.getProfile?.item;
        if (!profile) {
            return;
        }

        setNotification(profile.notifications);
    }, [getProfile.success]);
};

export const useViewModel = ({ navigation, route }: INotificationScreenProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    useEffectHandler(state, eventHandler);

    return {
        ...eventHandler,
        ...state,
    };
};
