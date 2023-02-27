import { Game } from '@football/core/models/CampaignsResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

export type IListOfGamesProps = {
    groupName: string;
    games: Game[];
    topTeam: TopTeamModel;
};
