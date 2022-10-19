import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_circle: {
        width: getSize.m(60),
        height: getSize.m(60),
        borderRadius: getSize.m(60 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.blue_light,
        padding: getSize.m(10),
        bottom: getSize.m(20),
    },
    tab_bar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_ic_circle: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;
