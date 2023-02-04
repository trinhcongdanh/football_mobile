import { AppImages } from '@football/app/assets/images';
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
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 2,
            name: 'פיני יואב גראפי',
            number: 1,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 3,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
    ];

    const defenders = [
        {
            id: 1,
            name: 'עמרי גלזר',
            number: 18,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 2,
            name: 'פיני יואב גראפי',
            number: 1,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 3,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 4,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 5,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 6,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 7,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 8,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
        {
            id: 9,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },

        {
            id: 10,
            name: 'עופר מרציאנו',
            number: 21,
            avt: 'https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg',
        },
    ];

    return { onGoBack, t, goalkeepers, defenders };
};
