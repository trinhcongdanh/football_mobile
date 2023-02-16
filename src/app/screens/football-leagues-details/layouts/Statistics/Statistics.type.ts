import { Statistics } from "@football/core/models/LeagueSeasonModelResponse";

export type IStatisticsProps = {
    selectedRoundName?: string;
    statistics: Statistics;
};
