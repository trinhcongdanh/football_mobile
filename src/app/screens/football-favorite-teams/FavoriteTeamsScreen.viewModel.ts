import React from 'react';
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
        { id: 1, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 2, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 3, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 4, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 5, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 6, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 7, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 8, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 9, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 10, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 11, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 12, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 13, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 14, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 15, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 16, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 17, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 18, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 19, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 20, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 21, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 22, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 23, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 24, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 25, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 26, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 27, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 28, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 29, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
        { id: 30, name: 'מכבי תל אביב', logo_club: AppImages.img_club_fav },
    ];

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        teamFavs,
    };
};
