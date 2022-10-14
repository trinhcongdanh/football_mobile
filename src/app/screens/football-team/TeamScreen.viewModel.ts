import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ITeamScreenProps } from './TeamScreen.type';

export const useViewModel = ({ navigation, route }: ITeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const [toggleBar, setToggleBar] = useState(false);

    const toggleChangeBar = () => {
        setToggleBar(!toggleBar);
    };

    const optionTeams = [
        { id: 1, name: 'הנבחרת הצעירה' },
        { id: 2, name: 'נבחרת הנשים' },
        { id: 3, name: 'נבחרת נערים א' },
        { id: 4, name: 'הנבחרת הלאומית' },
        { id: 5, name: 'נבחרת נוער ב' },
        { id: 6, name: 'נבחרת הנערות עד גיל 19' },
        { id: 7, name: 'נבחרת הנערות עד גיל 17' },
        { id: 8, name: 'נבחרת הנערות עד גיל 17' },
        { id: 9, name: 'נבחרת הנערות עד גיל 17' },
    ];

    const handleTeam = () => {
        navigate(ScreenName.TeamSquadPage);
    };

    return { optionTeams, toggleChangeBar, toggleBar, handleTeam };
};
