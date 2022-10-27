import React, { useState } from 'react';
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
        { id: 1, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 2, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 3, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 4, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 5, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 6, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 7, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 8, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 9, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 10, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 11, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 12, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 13, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 14, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 15, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 16, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 17, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 18, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 19, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 20, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 21, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 22, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 23, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 24, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 25, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 26, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 27, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 28, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 29, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
        { id: 30, name: 'מכבי תל אביב', avt_player: AppImages.img_avt_player, isSelected: false },
    ];

    const [playerSelected, setPlayerSelected] = useState<any[]>([]);

    const handleSelected = (player: any) => {
        const index = playerSelected.findIndex(elm => player.id === elm.id);
        if (index !== -1) {
            const newTeamSelected = playerSelected.filter(e => e.id !== player.id);
            setPlayerSelected(newTeamSelected);
        } else if (playerSelected.length < 3) {
            setPlayerSelected([...playerSelected, player]);
        }
    };

    const newPlayers = playerFavs.map(e => {
        const i = playerSelected.findIndex(t => t.id === e.id);
        return { ...e, isSelected: i !== -1 };
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        playerSelected,
        newPlayers,
    };
};
