import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { Position } from '@football/core/models/TeamPersonnelResponse';

export type IFavoritePlayerProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: PlayerModel | Position) => void;
    handleContinue: () => void;
    newFav: {
        label: string;
        listFavPlayers: PlayerModel[] | Position[];
    }[];
    favSelected: PlayerModel[] | Position[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
    searchText: any;
    searchFavPlayer: (text: string) => void;
};
