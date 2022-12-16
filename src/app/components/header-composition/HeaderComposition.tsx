import React from 'react';
import { View, Text } from 'react-native';
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
}: IHeaderCompositionProps) => {
    return (
        <View>
            <View>
                <Text style={[appStyles.text_title]}>{title}</Text>
                {season && (
                    <Text style={[appStyles.text_title, { marginTop: getSize.m(4) }]}>
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
                        flexDirection: 'row-reverse',
                    },
                ]}
            >
                <View style={[appStyles.align_justify]}>
                    <View style={styles.avt_club}>
                        <Avatar rounded size={60} source={{ uri: avt_home }} />
                    </View>
                    <Text style={styles.name_club}>{name_home}</Text>
                </View>
                <View style={[appStyles.align_justify]}>
                    <Text style={styles.score}>{score}</Text>
                    <Text style={styles.status}>{status}</Text>
                </View>
                <View style={[appStyles.align_justify]}>
                    <View style={styles.avt_club}>
                        <Avatar rounded size={getSize.m(60)} source={{ uri: avt_away }} />
                    </View>

                    <Text style={styles.name_club}>{name_away}</Text>
                </View>
            </View>
            <View style={[appStyles.flex_row_center, { marginTop: getSize.m(24), flex: 0 }]}>
                <IconLocation
                    name={appIcons.ic_location}
                    size={getSize.m(15)}
                    color={appColors.blue_light}
                />
                <Text style={styles.stadium}>{stadium}</Text>
            </View>
        </View>
    );
};
