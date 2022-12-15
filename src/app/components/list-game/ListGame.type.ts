export type IListGameProps = {
    logo_home: string;
    logo_away: string;
    nameHome: string;
    nameAway: string;
    location: string;
    date: string;
    result: string;
    schedule: string;
    details?: string;
    icon?: any;
    tournament?: string;
    color?: any;
    handleDetailMatch?: () => void;
};
