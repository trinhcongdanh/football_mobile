import { AxiosResponse } from 'axios';

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

export interface Opening {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    shirt_number: number;
}

export interface Substitute {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    shirt_number: number;
}

export interface NotParticipated {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    shirt_number: number;
}

export interface Coach {
    coach_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
}

export interface Lineup {
    opening: Opening[];
    substitutes: Substitute[];
    not_participated: NotParticipated[];
    coaches: Coach[];
}

export interface Player {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
}

export interface PlayerDown {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
}

export interface PlayerUp {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
}

export interface Gameplay {
    minute: number;
    action: GamePlayAction;
    team_name_he: string;
    team_name_en: string;
    player: Player;
    player_down: PlayerDown;
    player_up: PlayerUp;
}

export enum GamePlayAction {
    YellowCard = 'yellow_card',
    RedCard = 'red_card',
    Goal = 'goal',
    Exchange = 'exchange',
}

export interface LeaderBoard {
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

export interface GameModel {
    _id: string;
    campaign_id: string;
    campaign_name_he: string;
    campaign_name_en: string;
    season: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    score: string;
    team_ids: string[];
    game_type: number;
    team1: Team1;
    team2: Team2;
    lineup: Lineup;
    gameplay: Gameplay[];
    leader_board: LeaderBoard[];
    games: Game[];
}

export type GamesModelResponse = AxiosResponse<{
    documents: GameModel[];
}>;
