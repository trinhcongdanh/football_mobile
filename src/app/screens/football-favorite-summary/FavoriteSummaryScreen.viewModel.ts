import { useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useSelector } from 'react-redux';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useTranslation } from 'react-i18next';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const [onCheck, setonCheck] = useState(false);

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );
    const favSelectedPlayers = useSelector(
        (state: any) =>
            state.favPlayers.favPlayers.filter((v: PlayerModel) => v.isSelected) as PlayerModel[]
    );
    const favSelectedTopTeams = useSelector(
        (state: any) =>
            state.favTopTeams.favTopTeams.filter(
                (v: TopTeamModel) => v.isSelected
            ) as TopTeamModel[]
    );

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const addFavTeam = (index: string) => {};

    const changeFavTeam = (index: string) => {};

    const addFavPlayer = (index: string) => {};

    const changeFavPlayer = (index: string) => {};

    const addFavTopTeam = (index: string) => {};

    const changeFavTopTeam = (index: string) => {};

    const backFavTeam = () => {
        navigate(ScreenName.FavTeamPage);
    };
    const backFavPlayer = () => {
        navigate(ScreenName.FavPlayerPage);
    };
    const backFavTopTeam = () => {
        navigate(ScreenName.FavTopTeamPage);
    };

    const navigationHomePage = () => {
        navigate(ScreenName.BottomTab);
    };

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    return {
        t,
        onGoBack,
        onGoSkip,
        toggleOnCheck,
        onCheck,
        addFavTeam,
        changeFavTeam,
        addFavPlayer,
        changeFavPlayer,
        addFavTopTeam,
        changeFavTopTeam,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        favSelectedTeams,
        favSelectedPlayers,
        favSelectedTopTeams,
        navigationHomePage,
    };
};
