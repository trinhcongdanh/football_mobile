import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { LeagueModel, LeagueOneModelResponse } from '@football/core/models/LeagueModelResponse';
import {
    Cycle,
    Gallery,
    Highlights,
    LeagueSeasonModelResponse,
} from '@football/core/models/LeagueSeasonModelResponse';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLeagueSeasons } from 'src/store/league/League.slice';
import { RootState } from 'src/store/store';
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
    const getLeagueSeasonsData = async () => {
        try {
            const { data }: LeagueSeasonModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'league_season',
                filter: {
                    league_id: {
                        $eq: leagueId,
                    },
                },
            });
            dispatch(setLeagueSeasons(data.documents));
        } catch (error: any) {
            Alert.alert(error);
        }
    };
    const leagueSeasons = useSelector((state: RootState) => state.leagues.leagueSeasons);
    // if (!leagueSeasons.length) return;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [activeLeagueSeason, setActiveLeagueSeason] = useState<LeagueSeasonModel>(
    //     leagueSeasons[0]
    // );
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
    const currentGalleries = leagueSeasons?.length ? leagueSeasons[0].gallery : [];
    const [galleries, setGalleries] = useState<Gallery[]>(currentGalleries);

    // Hightlights
    // NOTE need to update leagueSeason after dropdown changed
    const currentHighlights = leagueSeasons?.length ? leagueSeasons[0].highlights : null;
    const [highlights, setHightlights] = useState<Highlights>(currentHighlights);

    const handleCloseModal = () => {
        setOpenModalYear(false);
        setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };

    // useMount(() => {
    //     console.log('run ', route.params);

    //     getLeagueSeasonsData();
    //     getLeagueById();
    // });

    useEffect(() => {
        console.log('run ', route.params);

        getLeagueSeasonsData();
        getLeagueById();
        return () => {
            dispatch(setLeagueSeasons([]));
        };
    }, []);

    // useEffect(() => {
    //     setSelectYear(leagueSeasons[0].name)
    // }, [leagueSeasons]);

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
        leagueSeasons,
    };
};
