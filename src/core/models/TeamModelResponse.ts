import { AxiosResponse } from 'axios';

export interface Season {
    team_season_id: string;
    team_season_name: string;
}

export interface GoalKicker {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    league_goals: number;
    national_cup_goals: number;
    toto_cup_goals: number;
    total_goals: number;
}

export interface YellowCard {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    league_cards: number;
    national_cup_cards: number;
    toto_cup_cards: number;
    total_cards: number;
}

export interface RedCard {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    league_cards: number;
    national_cup_cards: number;
    toto_cup_cards: number;
    total_cards: number;
}

export interface Team1 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Team2 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Game {
    game_id: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    score: string;
    team1: Team1;
    team2: Team2;
    is_home_game: boolean;
}

export interface HomepageInfo {
    goal_kickers: GoalKicker[];
    yellow_cards: YellowCard[];
    red_cards: RedCard[];
    games: Game[];
}

export interface TeamModel {
    sort(name_he: string): unknown;
    _id: string;
    logo_url: string;
    name_en: string;
    name_he: string;
    popularity: number;
    team_personnel_id: string;
    search_terms: string;
    team_color: string;
    league_name_he: string;
    league_name_en: string;
    seasons: Season[];
    homepage_info: HomepageInfo;
    league_id: string;
    isSelected?: boolean;
    number?: number;
}

export type TeamModelResponse = AxiosResponse<{
    documents: TeamModel[];
}>;
