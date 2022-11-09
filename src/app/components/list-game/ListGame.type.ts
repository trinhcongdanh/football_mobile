export type IListGameProps = {
    logoHome: any;
    logoAway: any;
    nameHome: string;
    nameAway: string;
    location: string;
    date: any;
    result: any;
    schedule: any;
    completed: boolean;
    details?: string;
    icon?: any;
    tournament?: string;
    handleDetailMatch?: () => void;
};
