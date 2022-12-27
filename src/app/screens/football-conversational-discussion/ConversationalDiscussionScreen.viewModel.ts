import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { AppImages } from '@football/app/assets/images';
import { useState } from 'react';
import { IConversationalDiscussionScreenProps } from '@football/app/screens/football-conversational-discussion/ConversationalDiscussionScreen.type';

export const useViewModel = ({ navigation, route }: IConversationalDiscussionScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };

    const conversationals = [
        [
            {
                star: AppImages.img_badge_1,
                title: 'יצאת טירון',
                desc: 'לורם איפסום דולור סיט אמט, קונסקטורר ינגלורם איפסום דולור סיט אמט קטסט',
                coin: 20,
            },
        ],
        [
            {
                star: AppImages.img_badge_2,
                title: 'יצאת חלש',
                desc: 'לורם איפסום דולור סיט אמט, קונסקטורר ינגלורם איפסום דולור סיט אמט קטסט',
                coin: 170,
            },
        ],
        [
            {
                star: AppImages.img_badge_3,
                title: 'יצאת בינוני...',
                desc: 'לורם איפסום דולור סיט אמט, קונסקטורר ינגלורם איפסום דולור סיט אמט קטסט',
                coin: 320,
            },
        ],
        [
            {
                star: AppImages.img_badge_4,
                title: 'יצאת <סלוגן>',
                desc: 'לורם איפסום דולור סיט אמט, קונסקטורר ינגלורם איפסום דולור סיט אמט קטסט',
                coin: 660,
            },
        ],
        [
            {
                star: AppImages.img_badge_5,
                title: 'יצאת אלוף!',
                desc: 'לורם איפסום דולור סיט אמט, קונסקטורר ינגלורם איפסום דולור סיט אמט קטסט',
                coin: 800,
            },
        ],
    ];
    const [page, setPage] = useState(0);
    const [conversational, setConversational] = useState<any[]>(conversationals[page]);

    const handleQuiz = () => {
        if (page <= 3) {
            setPage(page + 1);
            setConversational(conversationals[page + 1]);
        } else {
            console.log('Next screen');
        }
    };
    console.log(page);

    return {
        t,
        onGoBack,
        conversational,
        handleQuiz,
    };
};
