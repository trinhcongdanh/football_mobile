import { AxiosResponse } from 'axios';

export interface TeamSeasonStatsModel {
    _id: string;
    team_id: string;
    team_season_id: string;
    team_name_he: string;
    team_name_en: string;
    team_logo_url: string;
    goal_kickers_league: Goalkickersleague[];
    goal_kickers_national_cup: Goalkickersleague[];
    goal_kickers_toto_cup: Goalkickersleague[];
    yellow_cards_toto_cup: Yellowcardstotocup[];
    yellow_cards_league: Yellowcardstotocup[];
    red_cards: Yellowcardstotocup[];
}

export interface Yellowcardstotocup {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    num_of_cards: number;
}

export interface Goalkickersleague {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    num_of_goals: number;
}

export type TeamSeasonStatsResponse = AxiosResponse<{
    documents: TeamSeasonStatsModel[];
}>;
