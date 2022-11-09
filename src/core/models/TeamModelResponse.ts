import { AxiosResponse } from 'axios';

export type TeamItemModel = {
    _id: string;
    id: string;
    logo_height: number;
    logo_url: string;
    logo_width: number;
    name_en: string;
    name_he: string;
    popularity: number;
    search_terms: string;
    isSelected: boolean;
};

export interface TeamModel {
    _id: string;
    teams: TeamItemModel[];
}

export type TeamModelResponse = AxiosResponse<{
    document: TeamModel;
}>;
