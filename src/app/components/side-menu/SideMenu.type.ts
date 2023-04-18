import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ISideMenuProps = {
    closeSideMenu?: () => void;
    navigation: NavigationProp<any>;
};
