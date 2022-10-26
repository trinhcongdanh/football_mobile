import React from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = () => {
        navigate(ScreenName.FavTopTeamPage);
    };

    const playerFavs = [
        { id: 1, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 2, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 3, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 4, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 5, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 6, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 7, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 8, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 9, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 10, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 11, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 12, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 13, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 14, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 15, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 16, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 17, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 18, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 19, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 20, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 21, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 22, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 23, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 24, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 25, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 26, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 27, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 28, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 29, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
        { id: 30, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player },
    ];

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        playerFavs,
    };
};
