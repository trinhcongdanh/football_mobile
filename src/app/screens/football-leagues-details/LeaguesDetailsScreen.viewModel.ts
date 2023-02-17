import { Highlights } from './../../../core/models/LeagueSeasonModelResponse';
import { LeagueModel, LeagueOneModelResponse } from '@football/core/models/LeagueModelResponse';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import {
    LeagueSeasonModelResponse,
    Cycle,
    Gallery,
} from '@football/core/models/LeagueSeasonModelResponse';
import { setLeagueSeasons } from 'src/store/league/League.slice';
import { Alert } from 'react-native';
import { RootState } from 'src/store/store';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const dispatch = useDispatch<any>();
    const { leagueId }: any = route.params;

    // Game season
    const [openModalYear, setOpenModalYear] = useState(false);
    const getLeagueSeasonsData = useCallback(async () => {
        try {
            const { data }: LeagueSeasonModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'league_season',
            });

            if (!isEmpty(data.documents)) {
                dispatch(setLeagueSeasons(data.documents));
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);
    const leagueSeasons = useSelector((state: RootState) => state.leagues.leagueSeasons);

    const [selectYear, setSelectYear] = useState(
        leagueSeasons?.length ? leagueSeasons[0].name : undefined
    );
    const [years, setYears] = useState<any[]>(
        (leagueSeasons?.length ? leagueSeasons : []).map((season, index) => {
            return {
                // eslint-disable-next-line no-underscore-dangle
                id: season._id.$oid,
                content: season.name,
                isSelected: index === 0,
            };
        })
    );
    const [league, setLeague] = useState<LeagueModel>();
    const getLeagueById = useCallback(async () => {
        try {
            const { data }: LeagueOneModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'league',
                filter: {
                    _id: { $oid: leagueId },
                },
            });
            if (data.documents?.length) {
                setLeague(data.documents[0]);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const handleSelectedYear = (item: any) => {
        // Game season
        setSelectYear(item.content);
        const newYears = years.map(e => {
            return { ...e, isSelected: e.id === item.id };
        });
        setYears(newYears);
        setOpenModalYear(false);
    };

    // Top playoff: This actually cycles instead of playoff
    const [openModalPlayOff, setOpenModalPlayOff] = useState(false);
    const playOffs: Cycle[] = leagueSeasons?.length ? leagueSeasons[0].cycles : [];
    const firstPlayOffItem = playOffs[0] ? playOffs[0] : null;
    const [selectPlayoff, setSelectPlayoff] = useState(firstPlayOffItem?.cycle_name_he);

    // Cycle : This actually rounds instead of cycles
    const [openModalCycle, setOpenModalCycle] = useState(false);
    const cycles = firstPlayOffItem?.rounds || [];
    const firstCycle = cycles[0] ? cycles[0] : null;
    const [selectCycle, setSelectCycle] = useState(firstCycle);

    // Galerry
    // NOTE need to update leagueSeason after dropdown changed
    const [galleries, setGalleries] = useState<Gallery[]>(leagueSeasons[0].gallery);

    // Hightlights
    // NOTE need to update leagueSeason after dropdown changed
    const [highlights, setHightlights] = useState<Highlights>(leagueSeasons[0].highlights);


    const handleCloseModal = () => {
        setOpenModalYear(false);
        setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };

    useMount(() => {
        getLeagueSeasonsData();
        getLeagueById();
    });

    return {
        t,
        onGoBack,
        setOpenModalYear,
        setSelectYear,
        handleSelectedYear,
        handleCloseModal,
        setOpenModalCycle,
        setOpenModalPlayOff,
        setSelectCycle,
        setSelectPlayoff,
        setGalleries,
        setHightlights,
        openModalYear,
        selectYear,
        years,
        openModalCycle,
        cycles,
        selectCycle,
        openModalPlayOff,
        selectPlayoff,
        playOffs,
        league,
        galleries,
        highlights,
    };
};
