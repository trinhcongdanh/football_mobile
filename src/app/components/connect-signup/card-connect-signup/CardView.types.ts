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
    connectFacebook: () => void;
    connectGoogle: () => void;
    connectApple?: () => void;
    option: any;
};
