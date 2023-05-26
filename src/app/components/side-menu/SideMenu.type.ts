import {
    DrawerDescriptorMap,
    DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';

export type ISideMenuProps = {
    closeSideMenu?: () => void;
    // navigation: NavigationProp<any>;
    state?: DrawerNavigationState<ParamListBase>;
    navigation?: DrawerNavigationHelpers;
    descriptors?: DrawerDescriptorMap;
};
