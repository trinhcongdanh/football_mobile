import { AxiosResponse } from 'axios';

export interface Campaign {
    _id: string;
    top_team_id: string;
    name_he: string;
    name_en: string;
    season: string;
    group_name_he: string;
    group_name_en: string;
    leader_board: [
        {
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
    ];
    games: [
        {
            game_id: string;
            date: string;
            time: string;
            stadium_id: string;
            stadium_he: string;
            stadium_en: string;
            score: string;
            is_home_game: boolean;
            team1: {
                name_he: string;
                name_en: string;
                logo_url: string;
            };
            team2: {
                name_he: string;
                name_en: string;
                logo_url: string;
            };
        }
    ];
}

export type CampaignsResponse = AxiosResponse<{
    documents: Campaign[];
}>;
