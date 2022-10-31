import React, { useState } from 'react';
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
        { id: 1, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 2, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 3, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 4, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 5, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 6, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 7, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 8, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 9, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 10, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 11, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 12, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 13, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 14, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 15, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 16, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 17, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 18, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 19, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 20, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 21, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 22, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 23, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 24, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 25, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 26, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 27, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 28, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 29, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
        { id: 30, name: 'מכבי תל אביב', image: AppImages.img_logo, isSelected: false },
    ];

    const [topTeamSelected, setTopTeamSelected] = useState<any[]>([]);

    const handleSelected = (topTeam: any) => {
        const index = topTeamSelected.findIndex(elm => topTeam.id === elm.id);
        if (index !== -1) {
            const newTeamSelected = topTeamSelected.filter(e => e.id !== topTeam.id);
            setTopTeamSelected(newTeamSelected);
        } else if (topTeamSelected.length < 2) {
            setTopTeamSelected([...topTeamSelected, topTeam]);
        }
    };

    const newTopTeams = topTeamFavs.map(e => {
        const i = topTeamSelected.findIndex(t => t.id === e.id);
        return { ...e, isSelected: i !== -1 };
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        topTeamSelected,
        newTopTeams,
    };
};
