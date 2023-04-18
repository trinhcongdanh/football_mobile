import { AxiosResponse } from 'axios';

export interface LeagueSeasonModel {
    _id: Id;
    name: string;
    league_id: string;
    league_season_stats_id: string;
    cycles: Cycle[];
    highlights: Highlights;
    gallery: Gallery[];
}

export interface Gallery {
    video_url: string;
    image_url: string;
    length: string;
    caption_he: string;
    caption_en: string;
}

export interface Highlights {
    season_name: string;
    num_of_cycles: number;
    num_of_rounds: number;
    age_group_he: string;
    age_group_en: string;
    num_of_teams: number;
    num_of_ascending_teams: number;
    num_of_descending_teams: number;
    break: number;
    num_of_exchanges: number;
}

export interface Cycle {
    cycle_name_he: string;
    cycle_name_en: string;
    rounds: Round[];
}

export interface Round {
    round_name_he: string;
    round_name_en: string;
    leader_board: Leaderboard[];
    games: Game[];
    statistics: Statistics;
}

export interface Statistics {
    home_games: Homegame[];
    external_games: Homegame[];
}

export interface Homegame {
    team_id: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    games: number;
    wins: number;
    ties: number;
    difference: number;
    goals: string;
    score: number;
}

export interface Game {
    game_id: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    score: string;
    team1: Team;
    team2: Team;
    is_home_game: boolean;
}

export interface Team {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Leaderboard {
    team_id: string;
    place: number;
    place_change: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    games: number;
    wins: number;
    ties: number;
    difference: number;
    goals: string;
    score: number;
}

export interface Id {
    $oid: string;
}

export type LeagueSeasonModelResponse = AxiosResponse<{
    documents: LeagueSeasonModel[];
}>;
