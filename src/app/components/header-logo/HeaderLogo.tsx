import React from 'react';
import { View, Text, Image } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { styles } from './HeaderLogo.style';
import { IHeaderLogoProps } from './HeaderLogo.type';

export const HeaderLogo = ({ avt, text, logo }: IHeaderLogoProps) => {
    return (
        <View
            style={[
                appStyles.flex,
                appStyles.main_container,
                { marginTop: getSize.m(50), backgroundColor: appColors.white },
            ]}
        >
            <View style={[appStyles.align_justify, { marginTop: getSize.m(-50) }]}>
                {avt && (
                    <View style={styles.avt}>
                        <Avatar source={avt} size={getSize.m(60)} rounded />
                    </View>
                )}
                {logo && (
                    <View style={styles.avt}>
                        <Image
                            source={logo}
                            style={{ width: getSize.m(50), height: getSize.m(56) }}
                        />
                    </View>
                )}
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};
