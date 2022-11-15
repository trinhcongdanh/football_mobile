import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    team_field: {
        backgroundColor: appColors.white,
        marginHorizontal: getSize.m(20),
        paddingHorizontal: getSize.m(16),
        paddingTop: getSize.m(15),
        paddingBottom: getSize.m(31),
        borderRadius: getSize.m(15),
        marginTop: getSize.m(-50),
        elevation: getSize.m(2),
    },

    map: {
        height: getSize.m(400),
        marginHorizontal: getSize.m(16),
    },
});

export default styles;
