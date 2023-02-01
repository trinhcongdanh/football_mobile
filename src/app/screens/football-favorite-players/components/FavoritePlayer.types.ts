import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { Position } from '@football/core/models/TeamPersonnelResponse';
import { SelectedPlayer } from 'src/store/FavPlayer.slice';

export type IFavoritePlayerProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: PlayerModel | Position) => void;
    handleContinue: () => void;
    newFav: {
        id: string;
        label: string;
        listFavPlayers: PlayerModel[] | Position[];
    }[];
    favSelected: SelectedPlayer[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
    searchText: any;
    searchFavPlayer: (text: string) => void;
    submitSearchFavPlayer: () => void;
};
