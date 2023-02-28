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
    seasons: Season[];
    search_terms: string;
    type: number;
}

export interface Season {
    league_season_id: string;
    league_season_name: string;
}

export type LeagueTypeModelResponse = AxiosResponse<{
    documents: LeagueTypeModel[];
}>;

export type LeagueModelResponse = AxiosResponse<{
    documents: LeagueModel[];
}>;

export type LeagueOneModelResponse = AxiosResponse<{
    documents: LeagueModel[];
}>;
