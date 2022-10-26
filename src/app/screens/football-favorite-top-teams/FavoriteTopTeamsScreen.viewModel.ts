import React from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = () => {
        navigate(ScreenName.FavSummaryPage);
    };

    const topTeamFavs = [
        { id: 1, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 2, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 3, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 4, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 5, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 6, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 7, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 8, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 9, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 10, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 11, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 12, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 13, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 14, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 15, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 16, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 17, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 18, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 19, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 20, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 21, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 22, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 23, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 24, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 25, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 26, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 27, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 28, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 29, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
        { id: 30, name: 'מכבי תל אביב', logo_club: AppImages.img_logo },
    ];

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        topTeamFavs,
    };
};
