import TeamService from '@football/core/services/Team.service';
import TopTeamService from '@football/core/services/TopTeam.service';
import { useQuery } from 'react-query';

export const useTeams = () => {
    return useQuery('teams', () => TeamService.findAll());
};
export const useTopTeams = () => {
    return useQuery('top-teams', () => TopTeamService.findAll());
};
export const usePlayers = () => {
    return useQuery('players', () => TopTeamService.findAll());
};
