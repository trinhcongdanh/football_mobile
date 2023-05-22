import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

export type IFavoriteTeamProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: TopTeamModel) => void;
    handleContinue: () => void;
    topTeams?: TopTeamModel[];
    favSelected: TopTeamModel[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
};
