import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { LeagueModel, LeagueOneModelResponse } from '@football/core/models/LeagueModelResponse';
import {
    Cycle,
    Gallery,
    Highlights,
    LeagueSeasonModel,
    LeagueSeasonModelResponse,
    Round,
} from '@football/core/models/LeagueSeasonModelResponse';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLeagueSeasons } from 'src/store/league/League.slice';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const dispatch = useDispatch<any>();
    const { leagueId }: any = route.params;
    const [years, setYears] = useState<any[]>([]);
    const [allLeagueSeasons, setAllLeagueSeasons] = useState<any[]>([]);

    // Game season
    const [openModalYear, setOpenModalYear] = useState(false);
    const [openModalPlayOff, setOpenModalPlayOff] = useState(false);
    const [openModalCycle, setOpenModalCycle] = useState(false);

    // Few properties changes when selectedLeagueSeason change
    const [selectedLeagueSeason, setSelectedLeagueSeason] = useState<LeagueSeasonModel>();
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [selectRound, setSelectRound] = useState<Round>();
    const [galleries, setGalleries] = useState<Gallery[]>();
    const [highlights, setHightlights] = useState<Highlights>();

    // Call league_season api
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

            const leagueSeasons = data.documents;
            dispatch(setLeagueSeasons(leagueSeasons));
            setAllLeagueSeasons(leagueSeasons);
            if (leagueSeasons?.length) {
                setSelectedLeagueSeason(leagueSeasons[0]);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    };

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
        setSelectedLeagueSeason(allLeagueSeasons.find(season => season.name === item.content));
        setOpenModalYear(false);
    };

    const handleCloseModal = () => {
        setOpenModalYear(false);
        setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };

    useEffect(() => {
        getLeagueSeasonsData();
        getLeagueById();
        return () => {
            dispatch(setLeagueSeasons([]));
        };
    }, []);

    useEffect(() => {
        setYears(
            (allLeagueSeasons?.length ? allLeagueSeasons : []).map((season, index) => {
                return {
                    // eslint-disable-next-line no-underscore-dangle
                    id: season._id.$oid,
                    content: season.name,
                    isSelected: selectedLeagueSeason?.name === season.name,
                };
            })
        );
        const cycles: Cycle[] = selectedLeagueSeason?.cycles || [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        cycles[0] ? setSelectCycle(cycles[0]) : null;

        const currentGalleries = selectedLeagueSeason?.gallery || [];
        if (currentGalleries.length) {
            setGalleries(currentGalleries);
        }

        if (selectedLeagueSeason?.highlights) {
            setHightlights(selectedLeagueSeason.highlights);
        }
    }, [selectedLeagueSeason, allLeagueSeasons]);

    useEffect(() => {
        const rounds = selectCycle?.rounds || [];
        const firstRound = rounds[0] ? rounds[0] : null;
        if (firstRound) {
            setSelectRound(firstRound);
        }
    }, [selectCycle]);

    return {
        t,
        onGoBack,
        setOpenModalYear,
        handleSelectedYear,
        handleCloseModal,
        setOpenModalCycle,
        setOpenModalPlayOff,
        setSelectCycle,
        setSelectRound,
        setGalleries,
        setHightlights,
        openModalYear,
        years,
        openModalCycle,
        selectRound,
        selectCycle,
        openModalPlayOff,
        league,
        galleries,
        highlights,
        selectedLeagueSeason,
    };
};
