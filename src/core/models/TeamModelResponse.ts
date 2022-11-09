import { AxiosResponse } from 'axios';

export interface TeamModel {
    _id: string;
    logo_height: number;
    logo_url: string;
    logo_width: number;
    name_en: string;
    name_he: string;
    popularity: number;
    search_terms: string;
    isSelected: boolean;
}

export type TeamModelResponse = AxiosResponse<{
    documents: TeamModel[];
}>;
