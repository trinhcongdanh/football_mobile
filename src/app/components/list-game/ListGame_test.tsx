import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import FastImage from 'react-native-fast-image';
import { useTranslation } from 'react-i18next';
import { styles } from './ListGame_test.styles';
import { IListGameProps } from './ListGame.type';

export const ListGame_Test = ({
    logo_home,
    logo_away,
    nameHome,
    nameAway,
    location,
    date,
    result,
    schedule,
    details,
    icon,
    tournament,
    color,
    handleDetailMatch,
    isLive,
    handleStadium,
    style,
}: IListGameProps) => {
    const { t } = useTranslation();

    return (
        <View style={[styles.main_schedule, style]}>
            {tournament && (
                <TouchableOpacity
                    onPress={handleDetailMatch}
                    style={[
                        styles.tournament,
                        {
                            backgroundColor: result !== null ? appColors.separator : '#F2FBFF',
                            flexDirection: result === null && schedule === null ? 'row' : 'column',
                            justifyContent:
                                result === null && schedule === null ? 'space-between' : 'center',
                            alignItems: result === null && schedule === null ? 'center' : 'center',
                            paddingLeft:
                                result === null && schedule === null
                                    ? getSize.m(23.5)
                                    : getSize.m(0),
                            paddingRight:
                                result === null && schedule === null ? getSize.m(10) : getSize.m(0),
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.text_tournament,
                            {
                                color:
                                    result !== null
                                        ? appColors.soft_grey
                                        : appColors.text_option_unselect,
                            },
                        ]}
                    >
                        {tournament}
                    </Text>
                    {isLive && <Text style={styles.text_live}>L I V E</Text>}
                </TouchableOpacity>
            )}
            {!tournament && isLive ? (
                <View>
                    <Text
                        style={[
                            styles.text_live,
                            {
                                textAlign: 'center',
                            },
                        ]}
                    >
                        L I V E
                    </Text>
                </View>
            ) : (
                <View
                    style={[
                        appStyles.flex_row_space,
                        { marginLeft: getSize.m(24), marginRight: getSize.m(10) },
                    ]}
                >
                    <View style={appStyles.flex_row_align}>
                        <Text
                            style={[
                                styles.date,
                                {
                                    color:
                                        result !== null
                                            ? appColors.soft_grey
                                            : appColors.text_dark_blue,
                                },
                            ]}
                        >
                            {date}
                        </Text>
                        {tournament && (
                            <View style={appStyles.flex_row_align}>
                                <View>
                                    <Text
                                        style={[
                                            styles.date,
                                            {
                                                color:
                                                    result !== null
                                                        ? appColors.soft_grey
                                                        : appColors.text_dark_blue,
                                                marginHorizontal: getSize.m(4),
                                            },
                                        ]}
                                    >
                                        |
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={[
                                            styles.date,
                                            {
                                                color:
                                                    result !== null
                                                        ? appColors.soft_grey
                                                        : appColors.text_dark_blue,
                                            },
                                        ]}
                                    >
                                        {schedule}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </View>

                    <TouchableOpacity
                        onPress={handleStadium}
                        style={[appStyles.flex_row_space_center]}
                    >
                        <IconLocation
                            name={appIcons.ic_location}
                            size={getSize.m(20)}
                            color={result !== null ? appColors.soft_grey : appColors.blue_light}
                        />
                        <Text
                            style={[
                                styles.stadium,
                                {
                                    color:
                                        result !== null
                                            ? appColors.soft_grey
                                            : appColors.text_dark_blue,
                                },
                            ]}
                        >
                            {location}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={[appStyles.flex_row_space, { position: 'relative' }]}>
                <View style={[styles.circle_left, { backgroundColor: color }]} />
                <View style={[styles.circle_right, { backgroundColor: color }]} />
            </View>
            <View style={{ paddingHorizontal: getSize.m(14) }}>
                <View style={styles.line_dots} />
            </View>
            <View style={[appStyles.align_justify]}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            marginHorizontal: getSize.m(36),
                            flexDirection: 'row-reverse',
                        },
                    ]}
                >
                    <View style={[appStyles.align_justify]}>
                        <View
                            style={{
                                backgroundColor: appColors.white,
                                width: getSize.m(32),
                                height: getSize.m(32),
                                borderRadius: getSize.m(30),
                                justifyContent: 'center',
                                alignItems: 'center',
                                elevation: 1,
                            }}
                        >
                            <FastImage
                                style={{
                                    width: getSize.m(28),
                                    height: getSize.m(28),
                                    borderRadius: getSize.m(28),
                                }}
                                source={{ uri: logo_home }}
                            />
                        </View>

                        {nameHome || nameAway ? (
                            <View style={styles.resize_name_club}>
                                <Text numberOfLines={2} style={styles.name_club}>
                                    {nameHome}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                    <View
                        style={[
                            appStyles.align_justify,
                            styles.time,
                            {
                                backgroundColor: result === null ? appColors.white : '#F8FDFF',
                                marginHorizontal:
                                    nameHome || nameAway ? getSize.m(20) : getSize.m(40),
                            },
                        ]}
                    >
                        {isLive && (
                            <Text
                                style={[
                                    styles.score,
                                    {
                                        color: appColors.light_gray,
                                    },
                                ]}
                            >
                                - : -
                            </Text>
                        )}
                        {!isLive && result === null && schedule !== null && tournament && (
                            <Text style={styles.score}>V S</Text>
                        )}
                        {!isLive && result === null && schedule !== null && (
                            <Text style={styles.score}>{schedule}</Text>
                        )}

                        {!isLive && result !== null && <Text style={styles.score}>{result}</Text>}
                    </View>
                    <View style={[appStyles.align_justify]}>
                        <View
                            style={{
                                backgroundColor: appColors.white,
                                width: getSize.m(32),
                                height: getSize.m(32),
                                borderRadius: getSize.m(30),
                                justifyContent: 'center',
                                alignItems: 'center',
                                elevation: 1,
                            }}
                        >
                            <FastImage
                                style={{
                                    width: getSize.m(28),
                                    height: getSize.m(28),
                                    borderRadius: getSize.m(28),
                                }}
                                source={{ uri: logo_away }}
                            />
                        </View>
                        {nameHome || nameAway ? (
                            <View style={styles.resize_name_club}>
                                <Text numberOfLines={2} style={styles.name_club}>
                                    {nameAway}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            </View>
            {details && (
                <TouchableOpacity
                    style={[
                        appStyles.flex_row_center,
                        { flex: 0, marginTop: nameHome || nameAway ? getSize.m(0) : getSize.m(14) },
                    ]}
                    onPress={handleDetailMatch}
                >
                    {isLive ? (
                        <Text style={[styles.details]}>{t('list_game.results')}</Text>
                    ) : (
                        <Text style={[styles.details]}>{t('list_game.composition')}</Text>
                    )}
                    <Icon name={icon} size={getSize.m(10)} color={appColors.button_dark_blue} />
                </TouchableOpacity>
            )}
        </View>
    );
};
