import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { Position } from '@football/core/models/TeamPersonnelResponse';

export type IFavoritePlayerProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: PlayerModel | Position) => void;
    handleContinue: () => void;
    newFav: PlayerModel[] | undefined;
    favSelected: PlayerModel[] | Position[];
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
    searchText: any;
    group: string;
    searchFavPlayer: (text: string) => void;
};
