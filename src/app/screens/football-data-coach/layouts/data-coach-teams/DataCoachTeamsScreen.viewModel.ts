import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IDataCoachTeamsScreenProps } from './DataCoachTeamsScreen.type';

export const useViewModel = ({}: IDataCoachTeamsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const datas = [
        { id: 1, label: t('coach.content.answers'), content: '2008-2009' },
        { id: 2, label: t('coach.content.club'), content: 'מועדון ספורט אשדוד' },
        { id: 3, label: t('coach.content.age_group'), content: 'בוגרים' },
        { id: 4, label: t('coach.content.role'), content: 'מאמן ראשי' },
        { id: 5, label: t('coach.content.start_date'), content: '31/07/2007' },
        { id: 6, label: t('coach.content.end_date'), content: '31/07/2007' },
        { id: 7, label: t('coach.content.number_of_games'), content: '314' },
        { id: 8, label: t('coach.content.number_of_victories'), content: '123' },
        { id: 9, label: t('coach.content.several_losses'), content: '123' },
        { id: 10, label: t('coach.content.draw_number'), content: '123' },
    ];

    return { t, onGoBack, datas };
};
