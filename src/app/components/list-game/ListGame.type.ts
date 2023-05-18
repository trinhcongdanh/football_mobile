import { StyleProp } from 'react-native';

export type IListGameProps = {
    logo_home: string;
    logo_away: string;
    nameHome: string | undefined;
    nameAway: string | undefined;
    location: string | undefined;
    date: string;
    result: any;
    schedule: any;
    details?: string;
    icon?: any;
    tournament?: string;
    color?: any;
    isLive?: boolean;
    isFuture?: boolean;
    isHomePage?: boolean;
    timeLive?: any;
    handleDetailMatch?: () => void;
    handleStadium?: () => void;
    style?: StyleProp<any>;
    personnel?: string;
    gameDetail?: string;
    marginTopMatch?: StyleProp<any>;
    fontFamily?: StyleProp<any>;
};
