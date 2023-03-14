export type IHeaderCompositionProps = {
    title: string | undefined;
    avt_home: string;
    avt_away: string;
    name_home: string | undefined;
    name_away: string | undefined;
    status: string;
    stadium: string | undefined;
    score: string;
    season?: string;
    handleStadium?: () => void;
};
