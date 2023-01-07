import { AxiosResponse } from 'axios';

export interface Position {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    shirt_number: number;
    isSelected: boolean;
}

export interface Players {
    goalkeepers: Position[];
    defence: Position[];
    midfield: Position[];
    attack: Position[];
}

export interface Staff {
    coach_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    title_he: string;
    title_en: string;
}

export interface TeamPersonnelModel {
    _id: string;
    team_id: string;
    team_season_id?: any;
    is_top_team: boolean;
    players: Players;
    staff: Staff[];
}

export type TeamPersonnelModelResponse = AxiosResponse<{
    documents: TeamPersonnelModel[];
}>;
