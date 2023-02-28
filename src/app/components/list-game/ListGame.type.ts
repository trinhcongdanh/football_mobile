import { StyleProp } from 'react-native';

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
    isLive?: boolean;
    handleDetailMatch?: () => void;
    handleStadium?: () => void;
    style?: StyleProp<any>;
};
