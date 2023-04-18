import { AxiosResponse } from 'axios';

export interface LeagueSeasonStatModel {
    _id: Id;
    league_id: string;
    league_season_id: string;
    league_name_he: string;
    league_name_en: string;
    league_logo_url: string;
    goal_kickers: GoalKicker[];
    yellow_cards: Card[];
    red_cards: Card[];
    avg_game_yellow_cards: AvgGameYellowCard[];
    avg_game_goals_kicked: AvgGameGoalsKicked[];
    avg_game_goals_received: AvgGameGoalsKicked[];
    league_avgs: Leagueavgs;
    championship_history: ChampionshipHistory[];
}

export interface ChampionshipHistory {
    season: string;
    team_id: string;
    team_name_he: string;
    team_name_en: string;
    team_image_url: string;
}

export interface Leagueavgs {
    avg_game_goals: number;
    avg_round_goals: number;
    avg_game_yellow_cards: number;
    avg_round_yellow_cards: number;
    avg_game_red_cards: number;
    avg_round_red_cards: number;
}

export interface AvgGameGoalsKicked {
    team_id: string;
    team_name_he: string;
    team_name_en: string;
    team_image_url: string;
    num_of_goals: number;
}

export interface Card {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    team_id: string;
    team_name_he: string;
    team_name_en: string;
    team_image_url: string;
    num_of_cards: number;
}

export interface AvgGameYellowCard {
    team_id: string;
    team_name_he: string;
    team_name_en: string;
    team_image_url: string;
    num_of_cards: number;
}

export interface GoalKicker {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    team_id: string;
    team_name_he: string;
    team_name_en: string;
    team_image_url: string;
    num_of_goals: number;
}

interface Id {
    $oid: string;
}

export type LeagueSeasonStatModelResponse = AxiosResponse<{
    documents: LeagueSeasonStatModel[];
}>;
