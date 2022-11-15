import { AxiosResponse } from 'axios';

export interface PlayerModel {
    _id: string;
    search_terms: string;
    name_en: string;
    image_url: string;
    image_width: number;
    image_height: number;
    name_he: string;
    teams: string[];
    top_teams: string[];
    isSelected: boolean;
}

export type PlayersModelResponse = AxiosResponse<{
    documents: PlayerModel[];
}>;
