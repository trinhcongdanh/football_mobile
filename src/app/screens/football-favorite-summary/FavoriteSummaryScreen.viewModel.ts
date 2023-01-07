import { useEffect, useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useSelector } from 'react-redux';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useTranslation } from 'react-i18next';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';
import { isEmpty } from 'lodash';
import { Position } from '@football/core/models/TeamPersonnelResponse';

export const useViewModel = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const [onCheck, setonCheck] = useState(false);
    // team
    const [firstTeams, setFirstTeams] = useState<TeamModel>();
    const [secondTeams, setSecondTeams] = useState<TeamModel>();
    const [thirdTeams, setThirdTeams] = useState<TeamModel>();
    const teams = [firstTeams, secondTeams, thirdTeams];
    useEffect(() => {
        if (favSelectedTeams.length === 3) {
            setFirstTeams(favSelectedTeams[0]);
            setSecondTeams(favSelectedTeams[1]);
            setThirdTeams(favSelectedTeams[2]);
        } else if (favSelectedTeams.length === 2) {
            setFirstTeams(favSelectedTeams[0]);
            setSecondTeams(favSelectedTeams[1]);
        } else if (favSelectedTeams.length === 1) {
            setFirstTeams(favSelectedTeams[0]);
        }
    }, []);

    // player
    const [firstPlayers, setFirstPlayers] = useState<PlayerModel | Position>();
    const [secondPlayers, setSecondPlayers] = useState<PlayerModel | Position>();
    const [thirdPlayers, setThirdPlayers] = useState<PlayerModel | Position>();
    const players = [firstPlayers, secondPlayers, thirdPlayers];
    useEffect(() => {
        if (favSelectedPlayers.length === 3) {
            setFirstPlayers(favSelectedPlayers[0]);
            setSecondPlayers(favSelectedPlayers[1]);
            setThirdPlayers(favSelectedPlayers[2]);
        } else if (favSelectedPlayers.length === 2) {
            setFirstPlayers(favSelectedPlayers[0]);
            setSecondPlayers(favSelectedPlayers[1]);
        } else if (favSelectedPlayers.length === 1) {
            setFirstPlayers(favSelectedPlayers[0]);
        }
    }, []);

    // top team
    const [firstTopTeams, setFirstTopTeams] = useState<TopTeamModel>();
    const [secondTopTeams, setSecondTopTeams] = useState<TopTeamModel>();
    const topTeams = [firstTopTeams, secondTopTeams];
    useEffect(() => {
        if (favSelectedTopTeams.length === 2) {
            setFirstTopTeams(favSelectedTopTeams[0]);
            setSecondTopTeams(favSelectedTopTeams[1]);
        } else if (favSelectedTopTeams.length === 1) {
            setFirstTopTeams(favSelectedTopTeams[0]);
        }
    }, []);

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );
    const favSelectedPlayers = useSelector((state: any) =>
        !isEmpty(favSelectedTeams)
            ? (state.favPlayers.groupsPlayer.filter((v: Position) => v.isSelected) as Position[])
            : (state.favPlayers.favPlayers.filter(
                  (v: PlayerModel) => v.isSelected
              ) as PlayerModel[])
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

    const addFavTeam = (index: number) => {
        navigate(ScreenName.FavTeamPage);
    };

    const changeFavTeam = (index: string) => {
        navigate(ScreenName.FavTeamPage);
    };

    const addFavPlayer = (index: number) => {
        navigate(ScreenName.FavPlayerPage);
    };

    const changeFavPlayer = (index: string) => {
        navigate(ScreenName.FavPlayerPage);
    };

    const addFavTopTeam = (index: number) => {
        navigate(ScreenName.FavTopTeamPage);
    };

    const changeFavTopTeam = (index: string) => {
        navigate(ScreenName.FavTopTeamPage);
    };

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

    const navigationMethodRegister = () => {
        navigate(ScreenName.RegisterPage);
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
        navigationHomePage,
        teams,
        players,
        topTeams,
        navigationMethodRegister,
    };
};
