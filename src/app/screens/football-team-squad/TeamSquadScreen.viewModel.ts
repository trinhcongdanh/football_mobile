import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { ITeamGroupScreenProps } from './TeamSquadScreen.type';

export const useViewModel = ({ navigation, route }: ITeamGroupScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const goalkeepers = [
        {
            id: 1,
            name: 'עמרי גלזר',
            number: 18,
        },
        {
            id: 2,
            name: 'פיני יואב גראפי',
            number: 1,
        },
        {
            id: 3,
            name: 'עופר מרציאנו',
            number: 21,
        },
    ];

    const defenders = [
        {
            id: 1,
            name: 'עמרי גלזר',
            number: 18,
        },
        {
            id: 2,
            name: 'פיני יואב גראפי',
            number: 1,
        },
        {
            id: 3,
            name: 'עופר מרציאנו',
            number: 21,
        },
        {
            id: 4,
            name: 'עופר מרציאנו',
            number: 21,
        },
        {
            id: 5,
            name: 'עופר מרציאנו',
            number: 21,
        },
        {
            id: 6,
            name: 'עופר מרציאנו',
            number: 21,
        },
        {
            id: 7,
            name: 'עופר מרציאנו',
            number: 21,
        },
        {
            id: 8,
            name: 'עופר מרציאנו',
            number: 21,
        },
        {
            id: 9,
            name: 'עופר מרציאנו',
            number: 21,
        },

        {
            id: 10,
            name: 'עופר מרציאנו',
            number: 21,
        },
    ];

    return { onGoBack, t, goalkeepers, defenders };
};
