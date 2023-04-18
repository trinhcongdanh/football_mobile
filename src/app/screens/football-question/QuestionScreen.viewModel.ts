import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IQuestionScreenProps } from '@football/app/screens/football-question/QuestionScreen.type';

export const useViewModel = ({ navigation, route }: IQuestionScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const [progress, setProgress] = useState(1);
    const barProgress = (100 * progress) / 6;
    const [answers, setAnswers] = useState<any[]>([
        [
            { id: 1, text: 'שוויץ', answerRight: false },
            { id: 2, text: 'אסטוניה', answerRight: false },
            { id: 3, text: 'שהר עדיין לא כבש בנבחרת', answerRight: false },
            { id: 4, text: 'מקדוניה', answerRight: false },
        ],
        [
            { id: 5, text: 'אבי נימני', answerRight: false },
            { id: 6, text: 'אייל ברקוביץ׳', answerRight: false },
            { id: 7, text: 'עומר אצילי', answerRight: false },
            { id: 8, text: 'ערן זהבי', answerRight: false },
        ],
        [
            { id: 9, text: 'לגיה ורשה', answerRight: false },
            { id: 10, text: 'לך פוזנן', answerRight: false },
            { id: 11, text: 'חשמונאי לבוב', answerRight: false },
            { id: 12, text: 'ויסלה קרקוב', answerRight: false },
        ],
        [
            { id: 13, text: 'הליגה הבלגית', answerRight: false },
            { id: 14, text: 'הליגה הצרפתית', answerRight: false },
            { id: 15, text: 'הליגה האנגלית', answerRight: false },
            { id: 16, text: 'הליגה הספרדית', answerRight: false },
        ],
        [
            { id: 17, text: 'מכבי חיפה', answerRight: false },
            { id: 18, text: 'מכבי תל אביב', answerRight: false },
            { id: 19, text: 'בית״ר י-ם', answerRight: false },
            { id: 20, text: 'הפועל באר שבע', answerRight: false },
        ],
        [
            { id: 21, text: 'מכבי נתניה', answerRight: false },
            { id: 22, text: 'מכבי תל אביב', answerRight: false },
            { id: 23, text: 'בית״ר י-ם', answerRight: false },
            { id: 24, text: 'הפועל תל אביב', answerRight: false },
        ],
    ]);

    const [timeLeft, setTimeLeft] = useState(59);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                setTimeLeft(0);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const [answerCurrent, setAnswerCurrent] = useState(answers[progress - 1]);
    const handleAnswer = async (answer: any) => {
        const answerChoose = answers[progress - 1].map((e: { id: number }) => {
            return { ...e, answerRight: e.id === answer.id };
        });
        setAnswerCurrent(answerChoose);

        setTimeout(() => {
            if (progress < 6) {
                setProgress(progress + 1);
                setAnswerCurrent(answers[progress]);
                setTimeLeft(59);
            } else {
                setProgress(progress);
                navigate(ScreenName.ConversationalDiscussionPage);
            }
        }, timeLeft);
    };

    return { t, onGoBack, barProgress, timeLeft, handleAnswer, answerCurrent, progress };
};
