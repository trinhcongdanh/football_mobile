export type ICardInfoViewProps = {
    titleCard?: string;
    placeHolderText: string;
    errors: string;
    genderLabel: string;
    male: string;
    female: string;
    other: string;
    birthDateLabel: string;
    input?: any;
    handleOnChange: (e: string) => void;
    handleError: () => void;
    handleOnDate: (e: Date) => void;
};
