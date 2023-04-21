export type IGameTableProps = {
    date: string;
    location: string | undefined;
    avt_home: any;
    avt_away: any;
    name_home: string | undefined;
    name_away: string | undefined;
    result: any;
    schedule: string;
    isLive?: boolean;
    isFuture?: boolean;
    handleDetailMatch?: () => void;
    handleStadium?: () => void;
};
