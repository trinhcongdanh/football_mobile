import { AxiosResponse } from 'axios';

export interface CupModel {
    _id: string;
    index: number;
    name_he: string;
    name_en: string;
    logo_url: string;
    logo_width: string;
    logo_height: string;
    seasons: CupSeason[];
    search_terms: string;
    type: number;
    cup_holders: CupHolder[];
}

export interface CupHolder {
    cup_season_id: string;
    cup_season_name: string;
    team_id: string;
    team_name_he: string;
    team_name_en: string;
    team_image_url: string;
}
export interface CupSeason {
    cup_season_id: string;
    cup_season_name: string;
}

export type CupsModelResponse = AxiosResponse<{
    documents: CupModel[];
}>;
