import { Leaderboard } from '@football/core/models/CampaignsResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

export type IRankingTableProps = {
    data: Leaderboard[];
    groupName?: string;
    topTeam?: TopTeamModel;
};
