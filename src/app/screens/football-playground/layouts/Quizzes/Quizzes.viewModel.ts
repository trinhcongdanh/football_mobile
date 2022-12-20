import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IQuizzesProps } from '@football/app/screens/football-playground/layouts/Quizzes/Quizzes.type';

export const useViewModel = ({}: IQuizzesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const quizzes = [
        {
            id: 1,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            point: '2,000',
            quality: '19,200',
        },
        {
            id: 2,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            point: '2,000',
            quality: '19,200',
        },
        {
            id: 3,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            point: '2,000',
            quality: '19,200',
        },
        {
            id: 4,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            point: '2,000',
            quality: '19,200',
        },
    ];
    const handleDiscussionRequired = () => {};
    return {
        t,
        onGoBack,
        quizzes,
        handleDiscussionRequired,
    };
};
