import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './HeaderLogo.style';
import { IHeaderLogoProps } from './HeaderLogo.type';

export const HeaderLogo = ({
    avt,
    text,
    logo,
    icon,
    details,
    handleNavigation,
}: IHeaderLogoProps) => {
    return (
        <View
            style={[
                appStyles.flex,
                appStyles.main_container,
                { marginTop: getSize.m(50), backgroundColor: appColors.white, elevation: 3 },
            ]}
        >
            <View style={[appStyles.align_justify, { marginTop: getSize.m(-50) }]}>
                {avt && (
                    <View style={styles.avt}>
                        <Avatar
                            source={avt}
                            size={getSize.m(60)}
                            rounded
                            avatarStyle={{ resizeMode: FastImage.resizeMode.contain }}
                        />
                    </View>
                )}
                {logo && (
                    <View style={styles.avt}>
                        <Image
                            source={logo}
                            style={{ width: getSize.m(50), height: getSize.m(56) }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                )}
                <Text style={styles.text}>{text}</Text>
                {handleNavigation && (
                    <TouchableOpacity
                        style={[appStyles.flex_row_center, { flex: 0, marginTop: getSize.m(12) }]}
                        onPress={handleNavigation}
                    >
                        <Text style={styles.details}>{details}</Text>
                        <Icon name={icon} size={getSize.m(10)} color={appColors.button_dark_blue} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};
