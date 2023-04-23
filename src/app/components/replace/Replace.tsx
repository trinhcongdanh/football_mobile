import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { I18nManager, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './Replace.styles';
import { IReplaceProps } from './Replace.type';

export const Replace = ({ name_up, name_down, avt_up, avt_down, minute, team }: IReplaceProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <View style={{ marginLeft: getSize.m(7) }}>
                    <Text style={styles.time}>{`${minute}'`}</Text>
                </View>

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
                <View style={[appStyles.flex_row_align_center, { marginLeft: getSize.m(28) }]}>
                    <Text style={styles.name_player}>{name_up}</Text>
                    <Icon
                        name={I18nManager.isRTL ? 'caretleft' : 'caretright'}
                        size={12}
                        color={appColors.blue_light}
                        style={styles.ic_arrow}
                    />
                    <Text style={styles.name_player}>{name_down}</Text>
                </View>
            </View>
            <View style={{ marginLeft: getSize.m(7) }}>
                <Text style={styles.team}>{team}</Text>
            </View>
        </View>
    );
};
