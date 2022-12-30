export type ICardViewProps = {
    titleCard?: string;
    placeHolderText: string;
    buttonTitle: string;
    errors: string;
    input: string;
    inputRef: any;
    onChangeTextInput: (e: string) => void;
    handleError: () => void;
    connect: () => void;
};
