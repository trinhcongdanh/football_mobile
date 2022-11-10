import { TeamModel } from '@football/core/models/TeamModelResponse';

export type IFavoriteProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: TeamModel, index: number) => void;
    handleContinue: () => void;
    newFav: any;
    favSelected: any;
    title: string;
    placeholder: string;
    chosen: string;
    button: string;
    onIndex: number;
    number: number;
};
