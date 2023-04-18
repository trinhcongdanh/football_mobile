import { AxiosResponse } from 'axios';

export interface TopTeamPersonnelModel {
    _id: string;
    team_id: string;
    players: Players;
    staff: Staff[];
}

export interface Staff {
    coach_id?: string;
    name_he: string;
    name_en: string;
    image_url: string;
    title_he: string;
    title_en: string;
}

export interface Players {
    goalkeepers: Goalkeeper[];
    defence: Goalkeeper[];
    midfield: Goalkeeper[];
    attack: Goalkeeper[];
}

export interface Goalkeeper {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
}

export type TopTeamPersonnelModelResponse = AxiosResponse<{
    documents: TopTeamPersonnelModel[];
}>;
