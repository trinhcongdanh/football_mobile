import { AxiosResponse } from 'axios';

export interface LeagueTypeModel {
    _id: string;
    index: number;
    name_he: string;
    name_en: string;
}
export interface LeagueModel {
    _id: string;
    index: number;
    name_he: string;
    name_en: string;
    logo_url: string;
    logo_width: string;
    logo_height: string;
    seasons: any;
    search_terms: string;
    type: number;
}

export type LeagueTypeModelResponse = AxiosResponse<{
    documents: LeagueTypeModel[];
}>;

export type LeagueModelResponse = AxiosResponse<{
    documents: LeagueModel[];
}>;
