import { PlayerModel } from '@football/core/models/PlayerModelResponse';

export type IFavoritePlayerProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: PlayerModel) => void;
    handleContinue: () => void;
    newFav: PlayerModel[];

    favSelected: PlayerModel[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
    searchText: any;
    searchFavPlayer: (text: string) => void;
    submitSearchFavPlayer: () => void;
    handleFocusSearch?: () => void;
    isLoading: boolean;
};
