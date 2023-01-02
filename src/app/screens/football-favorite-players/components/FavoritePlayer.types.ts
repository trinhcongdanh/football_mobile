import { PlayerModel } from '@football/core/models/PlayerModelResponse';

export type IFavoritePlayerProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: PlayerModel) => void;
    handleContinue: () => void;
    newFav: PlayerModel[] | undefined;
    favSelected: PlayerModel[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
    searchText: string;
    searchFavPlayer: (text: string) => void;
};
