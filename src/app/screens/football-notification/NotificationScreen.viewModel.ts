import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { INotificationScreenProps } from '@football/app/screens/football-notification/NotificationScreen.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { useTranslation } from 'react-i18next';

/**
 * view settings variables
 * @returns
 */

const useViewState = () => {
    const { t } = useTranslation();
    const { goBack } = useAppNavigator();
    const { getTranslationText } = useTranslationText();

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

    return { t, goBack, contents, getTranslationText };
};

/**
 * State use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const { goBack } = state;

    // Go back previous screen
    const onGoBack = (): void => {
        goBack();
    };

    return { onGoBack };
};

export const useViewModel = ({ navigation, route }: INotificationScreenProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);

    return {
        ...eventHandler,
        ...state,
    };
};
