import { TeamModel } from '@football/core/models/TeamModelResponse';

export type IFavoriteTeamProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: TeamModel) => void;
    handleContinue: () => void;
    newFav: (TeamModel & { isSelected: boolean })[] | undefined;
    favSelected: TeamModel[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
    searchText: string;
    searchFavTeam: (text: string) => void;
    submitSearchFavTeam: () => void;
    searchTextRef: any;
    isLoading: boolean;
};
