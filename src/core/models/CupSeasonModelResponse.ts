import { Cycle } from '@football/core/models/LeagueSeasonModelResponse';
import { AxiosResponse } from 'axios';

export interface CupSeasonModel {
    _id: string;
    name: string;
    cup_id: string;
    cycles: Cycle[];
    cycles_details: CupSeasonCycleDetails[];
}

export interface CupSeasonCycleDetails {
    date: string;
    group_name_he: string;
    group_name_en: string;
}

export type CupSeasonsModelResponse = AxiosResponse<{
    documents: CupSeasonModel[];
}>;
