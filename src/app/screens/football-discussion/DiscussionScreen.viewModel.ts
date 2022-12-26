import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IDiscussionScreenProps } from '@football/app/screens/football-discussion/DiscussionScreen.type';

export const useViewModel = ({ navigation, route }: IDiscussionScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const handleQuestion = () => {
        navigate(ScreenName.QuestionPage);
    };

    return { t, onGoBack, handleQuestion };
};
