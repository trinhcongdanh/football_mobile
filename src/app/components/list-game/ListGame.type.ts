export type IListGameProps = {
    logo_home: string;
    logo_away: string;
    nameHome: string;
    nameAway: string;
    location: string;
    date: string;
    result: any;
    schedule: any;
    details?: string;
    icon?: any;
    tournament?: string;
    color?: any;
    label?: boolean;
    handleDetailMatch?: () => void;
};
