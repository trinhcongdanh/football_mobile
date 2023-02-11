import { View, Text, Image } from 'react-native';
import React from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import { styles } from './Goal.styles';
import { IGoalProps } from './Goal.type';
import FastImage from 'react-native-fast-image';

export const Goal = ({ name, avt, minute, team }: IGoalProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <Text style={styles.time}>{minute}</Text>

                <View style={styles.ticket}>
                    <FastImage
                        source={AppImages.img_goal}
                        style={{ width: getSize.m(14), height: getSize.m(14) }}
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
            <Text style={styles.team}>{team}</Text>
        </View>
    );
};
