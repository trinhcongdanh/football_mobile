import { AxiosResponse } from 'axios';

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

export interface Referee {
    referee_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    role_he: string;
    role_en: string;
}

export interface Lineup {
    opening: Opening[];
    substitutes: Substitute[];
    not_participated: NotParticipated[];
    coaches: Coach[];
    referees: Referee[];
}

export interface Team {
    name_he: string;
    name_en: string;
    logo_url: string;
    lineup: Lineup;
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
    action: string;
    team_name_he: string;
    team_name_en: string;
    player: Player;
    player_down: PlayerDown;
    player_up: PlayerUp;
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
    team1: Team;
    team2: Team;
    is_home_game: boolean;
}

export interface GameModel {
    _id: string;
    season: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    score: string;
    home_team_id: string;
    team_ids: string[];
    game_type: number;
    context_id: string;
    context_name_he: string;
    context_name_en: string;
    team1: Team;
    team2: Team;
    gameplay: Gameplay[];
    leader_board: LeaderBoard[];
    games: Game[];
    lineup: Lineup;
}

export enum GamePlayAction {
    YellowCard = 'yellow_card',
    RedCard = 'red_card',
    Goal = 'goal',
    Exchange = 'exchange',
}

export type GamesModelResponse = AxiosResponse<{
    documents: GameModel[];
}>;
