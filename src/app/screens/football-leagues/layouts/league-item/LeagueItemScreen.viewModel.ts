import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { LeagueModel, LeagueModelResponse } from '@football/core/models/LeagueModelResponse';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { ILeagueItemScreenProps } from './LeagueItemScreen.type';

export const useViewModel = ({ navigation, route, typeId }: ILeagueItemScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const [optionLeagues, setOptionsLeagues] = useState<LeagueModel[]>([]);

    const onGoBack = (): void => {
        goBack();
    };

    const handleLeaguesDetails = (index: number) => {
        switch (index) {
            // case 0:
            //     navigate(ScreenName.HomePage);
            //     break;
            // case 1:
            //     navigate(ScreenName.HomePage);
            //     break;
            // case 2:
            //     navigate(ScreenName.TeamSquadPage);
            //     break;
            // case 3:
            //     navigate(ScreenName.StateCupPage);
            //     break;
            // case 4:
            //     navigate(ScreenName.DataCoachPage);
            //     break;
            // case 5:
            //     navigate(ScreenName.MatchPage);
            //     break;
            // case 6:
            //     navigate(ScreenName.HistoryPage);
            //     break;
            // case 7:
            //     navigate(ScreenName.TeamStaffPage);
            //     break;
            // case 8:
            //     navigate(ScreenName.DataPlayerPage);
            //     break;
            // case 9:
            //     navigate(ScreenName.PreviousCampaignsPage);
            //     break;
            // case 10:
            //     navigate(ScreenName.CampaignPage);
            //     break;
            // case 11:
            //     navigate(ScreenName.ConquerorsPage);
            //     break;
            // case 12:
            //     navigate(ScreenName.PitchPage);
            //     break;
            default:
                // eslint-disable-next-line no-underscore-dangle
                navigate(ScreenName.LeaguesDetailsPage, { leagueId: optionLeagues[index]?._id });
                break;
        }
    };

    const getLeaguesByType = useCallback(async () => {
        try {
            const { data }: LeagueModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'league',
                filter: {
                    type: { $eq: typeId },
                },
            });

            setOptionsLeagues(data.documents);
        } catch (error: any) {
            Alert.alert(error);
        }
    }, [typeId]);

    useMount(() => {
        getLeaguesByType();
    });

    return { t, onGoBack, optionLeagues, handleLeaguesDetails };
};
