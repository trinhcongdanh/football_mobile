export type IHeaderCompositionProps = {
    title: string;
    avt_home: string;
    avt_away: string;
    name_home: string;
    name_away: string;
    status: string;
    stadium: string;
    score: string;
    season?: string;
    handleStadium?: () => void;
};
