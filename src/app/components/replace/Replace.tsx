import { View, Text, Image } from 'react-native';
import React from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import { appColors } from '@football/app/utils/constants/appColors';
import { styles } from './Replace.styles';
import { IReplaceProps } from './Replace.type';
import FastImage from 'react-native-fast-image';

export const Replace = ({ name_up, name_down, avt_up, avt_down, minute, team }: IReplaceProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <Text style={styles.time}>{minute}</Text>

                <View style={styles.ticket}>
                    <FastImage
                        source={AppImages.img_replace}
                        style={{ width: getSize.m(12), height: getSize.m(12) }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar
                        source={{ uri: avt_up }}
                        size={getSize.m(28)}
                        rounded
                        containerStyle={styles.avt_home}
                    />
                    <Avatar
                        source={{ uri: avt_down }}
                        size={getSize.m(28)}
                        rounded
                        containerStyle={styles.avt_away}
                    />
                </View>
                <View
                    style={[
                        appStyles.flex_row_align_center,
                        { marginRight: getSize.m(28), flexDirection: 'row-reverse' },
                    ]}
                >
                    <Text style={styles.name_player}>{name_up}</Text>
                    <Icon
                        name="caretleft"
                        size={12}
                        color={appColors.blue_light}
                        style={styles.ic_arrow}
                    />
                    <Text style={styles.name_player}>{name_down}</Text>
                </View>
            </View>
            <Text style={styles.team}>{team}</Text>
        </View>
    );
};
