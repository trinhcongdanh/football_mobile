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

export const Replace = ({ name_home, name_away, avt, minute, team }: IReplaceProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <Text style={styles.time}>{minute}</Text>

                <View style={styles.ticket}>
                    <Image source={AppImages.img_replace} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar
                        source={avt}
                        size={getSize.m(28)}
                        rounded
                        containerStyle={styles.avt_home}
                    />
                    <Avatar
                        source={avt}
                        size={getSize.m(28)}
                        rounded
                        containerStyle={styles.avt_away}
                    />
                </View>
                <View style={[appStyles.flex_row_align_center, { marginLeft: getSize.m(28) }]}>
                    <Text style={styles.name_player}>{name_home}</Text>
                    <Icon
                        name="caretleft"
                        size={12}
                        color={appColors.blue_light}
                        style={styles.ic_arrow}
                    />
                    <Text style={styles.name_player}>{name_away}</Text>
                </View>
            </View>
            <Text style={styles.team}>{team}</Text>
        </View>
    );
};