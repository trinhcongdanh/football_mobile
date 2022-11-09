/* eslint-disable no-underscore-dangle */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { Alert } from 'react-native';
import { isEmpty } from 'lodash';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const [teamData, setTeamData] = useState<TeamModel[]>();

    const getTeamsData = useCallback(async () => {
        try {
            const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'team',
            });
            if (!isEmpty(data.documents)) {
                setTeamData(data.documents);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = () => {
        navigate(ScreenName.FavPlayerPage);
    };

    useEffect(() => {
        getTeamsData();
    }, [getTeamsData, teamData]);

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

    const [teamSelected, setTeamSelected] = useState<TeamModel[]>([]);

    const handleSelected = (teams: TeamModel) => {
        const index = teamSelected.findIndex(elm => teams._id === elm._id);
        if (index !== -1) {
            const newTeamSelected = teamSelected.filter(e => e._id !== teams._id);
            setTeamSelected(newTeamSelected);
        } else if (teamSelected.length < 3) {
            setTeamSelected([...teamSelected, teams]);
        }
    };

    const newTeams = useMemo(() => {
        teamData?.map(e => {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            const i = teamSelected.findIndex(t => t._id === e._id);
            return { ...e, isSelected: i !== -1 };
        });
    }, [teamData, teamSelected]);

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        teamSelected,
        newTeams,
        teamData,
    };
};
