import React from 'react';
import { View, Text } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { styles } from './HeaderLogo.style';
import { IHeaderLogoProps } from './HeaderLogo.type';

export const HeaderLogo = ({ avt, text }: IHeaderLogoProps) => {
    return (
        <View
            style={[
                appStyles.flex,
                appStyles.main_container,
                { marginTop: getSize.m(40), backgroundColor: appColors.white },
            ]}
        >
            <View style={[appStyles.align_justify, { marginTop: getSize.m(-50) }]}>
                <View style={styles.image_avt}>
                    <Avatar source={avt} size={getSize.m(60)} />
                </View>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};
