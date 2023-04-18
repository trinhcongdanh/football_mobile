import { AxiosResponse } from 'axios';

export interface Campaign {
    _id: string;
    top_team_id: string;
    name_he: string;
    name_en: string;
    season: string;
    group_name_he: string;
    group_name_en: string;
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
    score?: string;
    team1: Team;
    team2: Team;
    is_home_game: boolean;
}

interface Team {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface Leaderboard {
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

export type CampaignsResponse = AxiosResponse<{
    documents: Campaign[];
}>;
