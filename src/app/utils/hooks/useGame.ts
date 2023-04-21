import { Game } from '@football/core/models/TeamModelResponse';
import moment from 'moment';

interface IGameProps {
    listGames: Game[];
}

export const useGame = () => {
    const getGame = ({ listGames }: IGameProps) => {
        const now = moment();
        let diffDates: any = [];

        listGames.map(game => {
            const date = moment(`${game?.date} ${game?.time}`);
            const diff = now.diff(date);
            diffDates.push(diff);
        });

        const positiveDiffDate = diffDates.filter((diff: any) => diff < 0);
        console.log('positiveDiffDate', positiveDiffDate);
        const negativeDiffDate = diffDates.filter((diff: any) => diff > 0);
        console.log('negativeDiffDate', negativeDiffDate);

        let minDate: any = [];
        if (positiveDiffDate.length === 0) {
            negativeDiffDate
                .sort(function (a: number, b: number) {
                    return a - b;
                })
                .map((diff: any) => {
                    if (minDate.length < 3) {
                        minDate.push(diff);
                    }
                });
        } else {
            negativeDiffDate
                .sort(function (a: number, b: number) {
                    return a - b;
                })
                .map((diff: any) => {
                    if (minDate.length < 2) {
                        minDate.push(diff);
                    }
                });
            console.log('minDate', minDate);
        }

        let maxDate: any = [];
        if (negativeDiffDate.length === 0) {
            positiveDiffDate
                .reverse(function (a: number, b: number) {
                    return a - b;
                })
                .map((diff: any) => {
                    if (minDate.length < 3) {
                        maxDate.push(diff);
                    }
                });
        } else {
            positiveDiffDate
                .reverse(function (a: number, b: number) {
                    return a - b;
                })
                .map((diff: any) => {
                    if (maxDate.length < 1) {
                        maxDate.push(diff);
                    }
                });
            console.log('minDate', maxDate);
        }

        const newTeamGame = listGames.filter(game => {
            const date = moment(`${game?.date} ${game?.time}`);
            const diff = now.diff(date);
            if (maxDate.includes(diff) || minDate.includes(diff)) {
                return game;
            }
        });
        return newTeamGame;
    };
    return { getGame };
};
