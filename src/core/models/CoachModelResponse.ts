import { AxiosResponse } from 'axios';

export interface CoachModelShortTeam {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface CoachModelDebutGame {
    game_id: string;
    date: string;
    time: string;
    score: string;
    team1: CoachModelShortTeam;
    team2: CoachModelShortTeam;
}

export interface CoachModelTeam {
    team_id: string;
    is_top_team: boolean;
    years: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    age_group_he: string;
    age_group_en: string;
    position_he: string;
    position_en: string;
}

export interface CoachModelGame {
    game_id: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    score: string;
    team1: CoachModelShortTeam;
    team2: CoachModelShortTeam;
}

export interface CoachModel {
    _id: string;
    search_terms: string;
    name_he: string;
    name_en: string;
    image_url: string;
    date_of_birth: string;
    citizenship_he: string;
    citizenship_en: string;
    citizenship_image_url: string;
    num_of_games: number;
    debut_game: CoachModelDebutGame;
    teams: CoachModelTeam[];
    total_games: number;
    total_wins: number;
    total_losses: number;
    total_ties: number;
    games: CoachModelGame[];
}

export type CoachesModelResponse = AxiosResponse<{
    documents: CoachModel[];
}>;
