import { AxiosResponse } from 'axios';

export interface TeamSeasonModel {
    _id: string;
    name: string;
    team_id: string;
    team_personnel_id: string;
    team_season_stats_id: string;
    about: About;
    cycles: Cycle[];
    statistics: Statistic[];
    games: Game[];
    league_season_id: string;
}

export interface Statistic {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    games: number;
    goals: number;
    yellow_cards_league: number;
    yellow_cards_toto: number;
    red_cards: number;
    opening: number;
    substitutes: number;
    substituted: number;
    minutes_playing: number;
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

interface Team {
    name_he: string;
    name_en: string;
    logo_url: string;
}

interface Leaderboard {
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

interface About {
    group_age_he: string;
    group_age_en: string;
    league_id: string;
    league_name_he: string;
    league_name_en: string;
    management_he: string;
    management_en: string;
    office_phone: string;
    office_fax: string;
    address_he: string;
    address_en: string;
    email: string;
    stadiums: Stadium[];
}

interface Stadium {
    stadium_id: string;
    name_he: string;
    name_en: string;
    type_he: string;
    type_en: string;
}

export type TeamSeasonModelResponse = AxiosResponse<{
    documents: TeamSeasonModel[];
}>;
