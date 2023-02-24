import { AxiosResponse } from 'axios';

export interface StadiumModel {
    _id: Id;
    name_he: string;
    name_en: string;
    rating_he: string;
    rating_en: string;
    image_url: string;
    address_he: string;
    address_en: string;
    contact_he: string;
    contact_en: string;
    phone: string;
    location_lat: string;
    location_lon: string;
    teams: Team[];
}

interface Team {
    team_id: string;
    logo_url: string;
    name_en: string;
    name_he: string;
    age_he: string;
    age_en: string;
    usage: number;
}

interface Id {
    $oid: string;
}

export type TopTeamModelResponse = AxiosResponse<{
    documents: StadiumModel[];
}>;
