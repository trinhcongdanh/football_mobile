export type ICardInfoViewProps = {
    titleCard?: string;
    placeHolderText: string;
    errors: string;
    genderLabel: string;
    male: string;
    female: string;
    other: string;
    birthDateLabel: string;
    input: string;
    inputRef: any;
    handleError: () => void;
    handleOnDate: (e: Date) => void;
    onChangeTextInput: (e: string) => void;
    handleOnGender: (e: any) => void;
    date: Date;
};
