import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { styles } from './Goal.styles';
import { IGoalProps } from './Goal.type';

export const Goal = ({ name, avt, minute, team }: IGoalProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <View style={{ marginLeft: getSize.m(7) }}>
                    <Text style={styles.time}>{`${minute}'`}</Text>
                </View>

                <View style={styles.ticket}>
                    <FastImage
                        source={AppImages.img_goal}
                        style={{ width: getSize.m(14), height: getSize.m(14) }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <Avatar
                    source={{ uri: avt }}
                    size={getSize.m(28)}
                    rounded
                    containerStyle={styles.avt}
                />
                <Text style={styles.name_player}>{name}</Text>
            </View>
            <View style={{ marginLeft: getSize.m(7) }}>
                <Text style={styles.team}>{team}</Text>
            </View>
        </View>
    );
};
