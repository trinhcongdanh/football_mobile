import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { styles } from './ListGame.styles';
import { IListGameProps } from './ListGame.type';

export const ListGame = ({
    logoHome,
    logoAway,
    nameHome,
    nameAway,
    location,
    date,
    result,
    schedule,
    completed,
    details,
    icon,
    tournament,
    handleDetailMatch,
}: IListGameProps) => {
    return (
        <View style={styles.main_schedule}>
            {tournament && (
                <View
                    style={[
                        styles.tournament,
                        { backgroundColor: completed === true ? appColors.separator : '#F2FBFF' },
                    ]}
                >
                    <Text
                        style={[
                            styles.text_tournament,
                            {
                                color:
                                    completed === true
                                        ? appColors.soft_grey
                                        : appColors.text_option_unselect,
                            },
                        ]}
                    >
                        {tournament}
                    </Text>
                </View>
            )}
            <View style={appStyles.flex_row_space}>
                <Text
                    style={[
                        styles.date,
                        {
                            color:
                                completed === true ? appColors.soft_grey : appColors.text_dark_blue,
                        },
                    ]}
                >
                    {date}
                </Text>
                <View style={[appStyles.flex_row_align, { flex: 0 }]}>
                    <IconLocation
                        name={appIcons.ic_location}
                        size={getSize.m(15)}
                        color={completed === true ? appColors.soft_grey : appColors.blue_light}
                    />
                    <Text
                        style={[
                            styles.stadium,
                            {
                                color:
                                    completed === true
                                        ? appColors.soft_grey
                                        : appColors.text_dark_blue,
                            },
                        ]}
                    >
                        {location}
                    </Text>
                </View>
            </View>
            <View style={appStyles.flex_row_space}>
                <View style={[styles.circle, { right: getSize.m(-40) }]} />
                <View style={[styles.circle, { left: getSize.m(-40) }]} />
            </View>
            <View style={styles.line_dots} />
            <View style={[appStyles.flex_row_space_center, { marginHorizontal: getSize.m(36) }]}>
                <View style={[appStyles.align_justify]}>
                    <Avatar
                        rounded
                        size={getSize.m(40)}
                        source={logoAway}
                        containerStyle={styles.avt_club}
                    />
                    <Text style={styles.name_club}>{nameAway}</Text>
                </View>
                <View style={[appStyles.align_justify, styles.time]}>
                    {completed === false ? (
                        <Text style={styles.score}>{schedule}</Text>
                    ) : (
                        <Text style={styles.score}>{result}</Text>
                    )}
                </View>
                <View style={[appStyles.align_justify]}>
                    <Avatar
                        rounded
                        size={getSize.m(40)}
                        source={logoHome}
                        containerStyle={styles.avt_club}
                    />

                    <Text style={styles.name_club}>{nameHome}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={[appStyles.flex_row_center, { flex: 0 }]}
                onPress={handleDetailMatch}
            >
                <Text style={styles.details}>{details}</Text>
                <Icon name={icon} size={getSize.m(10)} color={appColors.button_dark_blue} />
            </TouchableOpacity>
        </View>
    );
};
