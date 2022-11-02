import React, { useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = () => {
        navigate(ScreenName.FavPlayerPage);
    };

    const teamFavs = [
        { id: 1, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 2, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 3, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 4, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 5, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 6, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 7, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 8, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 9, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 10, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 11, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 12, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 13, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 14, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 15, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 16, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 17, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
        { id: 18, name: 'מכבי תל אביב', image: AppImages.img_club_fav, isSelected: false },
    ];

    const [teamSelected, setTeamSelected] = useState<any[]>([]);

    const handleSelected = (team: any) => {
        const index = teamSelected.findIndex(elm => team.id === elm.id);
        if (index !== -1) {
            const newTeamSelected = teamSelected.filter(e => e.id !== team.id);
            setTeamSelected(newTeamSelected);
        } else if (teamSelected.length < 3) {
            setTeamSelected([...teamSelected, team]);
        }
    };

    const newTeams = teamFavs.map(e => {
        const i = teamSelected.findIndex(t => t.id === e.id);
        return { ...e, isSelected: i !== -1 };
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        teamSelected,
        newTeams,
    };
};