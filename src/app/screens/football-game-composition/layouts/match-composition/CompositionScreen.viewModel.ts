import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ICompositionScreenProps } from './CompositionScreen.type';

export const useViewModel = ({ navigation, route }: ICompositionScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
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

    const handleDataPlayer = () => {
        navigate(ScreenName.DataPlayerPage);
    };
    const [onSelect, setOnSelect] = useState(0);
    return { t, defenders, setOnSelect, onSelect, handleDataPlayer };
};
