import { AxiosResponse } from 'axios';

export interface Goal {
    context_he: string;
    context_en: string;
    goals: number;
}

export interface Card {
    name_he: string;
    name_en: string;
    num_of_cards: number;
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
    score: string;
    team1: Team1;
    team2: Team2;
    goals: number;
    yellow_cards: number;
    red_cards: number;
    on_field?: number;
    off_field: number;
}

export interface GamesByContext {
    context_he: string;
    context_en: string;
    games: Game[];
}

export interface Season {
    name: string;
    goals: Goal[];
    cards: Card[];
    games_by_context: GamesByContext[];
}

export interface Team {
    team_id: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    seasons: Season[];
}

export interface DebutGameAgainst {
    date: string;
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface LastGameAgainst {
    date: string;
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Goal2 {
    top_team_id: string;
    context_he: string;
    context_en: string;
    games: number;
    goals: number;
}

export interface Team12 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Team22 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Game2 {
    game_id: string;
    date: string;
    score: string;
    team1: Team12;
    team2: Team22;
    goals: number;
    yellow_cards: number;
    red_cards: number;
    on_field?: number;
    off_field: number;
}

export interface GamesByContext2 {
    context_he: string;
    context_en: string;
    games: Game2[];
}

export interface TopTeam {
    top_team_id: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    appearances: number;
    debut_game_against: DebutGameAgainst;
    last_game_against: LastGameAgainst;
    goals: Goal2[];
    games_by_context: GamesByContext2[];
}

export interface Team13 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Team23 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Game3 {
    game_id: string;
    date: string;
    score: string;
    team1: Team13;
    team2: Team23;
    goals: number;
    yellow_cards: number;
    red_cards: number;
    on_field: number;
    minutes_played: number;
}

export interface Goals {
    goals_league: number;
    goals_national_cup: number;
    goals_toto_cup: number;
    goals_total: number;
}

export interface YellowCards {
    league_cards: number;
    national_cup_cards: number;
    toto_cup_cards: number;
    total_cards: number;
}

export interface RedCards {
    league_cards: number;
    national_cup_cards: number;
    toto_cup_cards: number;
    total_cards: number;
}

export interface HomepageInfo {
    season_name: string;
    games: Game3[];
    goals: Goals;
    yellow_cards: YellowCards;
    red_cards: RedCards;
}

export interface PlayerModel {
    _id: string;
    search_terms: string;
    name_en: string;
    image_url: string;
    image_width: number;
    image_height: number;
    name_he: string;
    team: Team;
    top_team: TopTeam;
    date_of_birth: string;
    citizenship_he: string;
    citizenship_en: string;
    citizenship_image_url: string;
    num_of_games: number;
    homepage_info: HomepageInfo;
    isSelected: boolean;
    number?: number;
}

export type PlayersModelResponse = AxiosResponse<{
    documents: PlayerModel[];
}>;
