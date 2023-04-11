import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { styles } from './HeaderComposition.style';
import { IHeaderCompositionProps } from './HeaderComposition.type';

export const HeaderComposition = ({
    title,
    avt_home,
    avt_away,
    name_home,
    name_away,
    status,
    stadium,
    score,
    season,
    handleStadium,
}: IHeaderCompositionProps) => {
    return (
        <View>
            <View>
                <Text style={[appStyles.text_title, { fontSize: getSize.m(20) }]}>{title}</Text>
                {season && (
                    <Text
                        style={[
                            appStyles.text_title,
                            { marginTop: getSize.m(4), fontSize: getSize.m(20) },
                        ]}
                    >
                        {season}
                    </Text>
                )}
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginTop: getSize.m(24),
                        marginHorizontal: getSize.m(36),
                    },
                ]}
            >
                <View style={[appStyles.align_justify]}>
                    <View style={styles.avt_club}>
                        <Avatar rounded size={60} source={{ uri: avt_home }} />
                    </View>
                    <View style={styles.resize_name_club}>
                        <Text numberOfLines={2} style={styles.name_club}>
                            {name_home}
                        </Text>
                    </View>
                </View>
                <View style={[appStyles.align_justify]}>
                    <Text style={styles.score}>{score}</Text>
                    <Text style={styles.status}>{status}</Text>
                </View>
                <View style={[appStyles.align_justify]}>
                    <View style={styles.avt_club}>
                        <Avatar rounded size={getSize.m(60)} source={{ uri: avt_away }} />
                    </View>
                    <View style={styles.resize_name_club}>
                        <Text numberOfLines={2} style={styles.name_club}>
                            {name_away}
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                onPress={handleStadium}
                style={[appStyles.flex_row_center, { marginTop: getSize.m(24), flex: 0 }]}
            >
                <IconLocation
                    name={appIcons.ic_location}
                    size={getSize.m(20)}
                    color={appColors.blue_light}
                />
                <Text style={styles.stadium}>{stadium}</Text>
            </TouchableOpacity>
        </View>
    );
};
