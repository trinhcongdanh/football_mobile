export type ICardViewProps = {
    titleCard?: string;
    placeHolderText: string;
    buttonTitle: string;
    errors: string;
    handleOnChange: () => void;
    handleError: () => void;
    connect: () => void;
};
