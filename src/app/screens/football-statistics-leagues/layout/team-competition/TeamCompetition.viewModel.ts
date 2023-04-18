import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { ITeamCompetitionProps } from './TeamCompetition.type';

export const useViewModel = ({}: ITeamCompetitionProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const teamCompetitions = [
        {
            id: 1,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            total: 6,
            score: 30.0,
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            total: 6,
            score: 30.0,
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            total: 6,
            score: 30.0,
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            total: 6,
            score: 30.0,
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            total: 6,
            score: 30.0,
        },
    ];

    return {
        t,
        teamCompetitions,
    };
};
