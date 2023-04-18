import {
    ChampionshipHistory,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';

export type IHistoryChampionShipsProps = {
    championshipHistory: ChampionshipHistory[];
    leagueSeasonStats: LeagueSeasonStatModel;
};
