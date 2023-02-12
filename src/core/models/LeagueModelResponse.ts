import { AxiosResponse } from 'axios';

export interface LeagueTypeModel {
    _id: string;
    index: number;
    name_he: string;
    name_en: string;
}

export type LeagueTypeModelResponse = AxiosResponse<{
    documents: LeagueTypeModel[];
}>;
