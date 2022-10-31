export type IFavoriteProps = {
    onGoSkip: () => void;
    onGoBack: () => void;
    handleSelected: (item: any) => void;
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
