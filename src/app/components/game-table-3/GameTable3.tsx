import React from 'react';
import styles from '@football/app/components/game-table-3/GameTable3.style';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { Text, View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import IconFeather from 'react-native-vector-icons/Feather';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppFonts } from '@football/app/assets/fonts';
import FastImage from 'react-native-fast-image';
import { AppImages } from '@football/app/assets/images';
import { IGameTable3Props } from '@football/app/components/game-table-3/GameTable3.type';

export const GameTable3 = ({
    name_away,
    name_home,
    avt_away,
    avt_home,
    result,
    schedule,
    isLive,
    date,
    location,
    tournaments,
    minute,
}: IGameTable3Props) => {
    return (
        <View
            style={[
                styles.game_table,
                {
                    backgroundColor: result !== null && !isLive ? appColors.gray : appColors.white,
                    elevation: result !== null && !isLive ? 0 : 2,
                    borderBottomWidth: result !== null && !isLive ? getSize.m(1) : getSize.m(0),
                    borderColor: appColors.separator,
                    height: tournaments ? getSize.m(117) : getSize.m(106),
                },
            ]}
        >
            {isLive ? (
                <View
                    style={[
                        appStyles.flex_row_center,
                        {
                            marginVertical: getSize.m(10),
                            flex: 0,
                        },
                    ]}
                >
                    <Text style={styles.live}>L I V E</Text>
                    <Text style={styles.minute}>{minute}</Text>
                </View>
            ) : (
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            marginLeft: tournaments ? getSize.m(44) : getSize.m(20),
                            marginRight: tournaments ? getSize.m(36) : getSize.m(16),
                            marginVertical: getSize.m(12),
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.date,
                            {
                                color:
                                    result !== null && !isLive
                                        ? appColors.soft_grey
                                        : appColors.text_dark_blue,
                            },
                        ]}
                    >
                        {date}
                    </Text>
                    <View style={[appStyles.flex_row_align]}>
                        <IconEvilIcons
                            name={appIcons.ic_location}
                            size={getSize.m(20)}
                            color={
                                result !== null && !isLive
                                    ? appColors.soft_grey
                                    : appColors.blue_light
                            }
                        />
                        <Text
                            style={[
                                styles.location,
                                {
                                    fontFamily: AppFonts.semibold,

                                    color:
                                        result !== null && !isLive
                                            ? appColors.soft_grey
                                            : appColors.text_dark_blue,
                                },
                            ]}
                        >
                            {location}
                        </Text>
                    </View>
                    {tournaments && (
                        <Text
                            style={[
                                styles.league,
                                {
                                    color:
                                        result !== null && !isLive
                                            ? appColors.soft_grey
                                            : appColors.text_dark_blue,
                                },
                            ]}
                        >
                            {tournaments}
                        </Text>
                    )}
                </View>
            )}
            {result !== null && !isLive ? <View></View> : <View style={styles.line_dot} />}

            <View style={appStyles.flex_row_space}>
                <View
                    style={[
                        styles.circle,
                        {
                            right: getSize.m(-14),
                            top: getSize.m(-6),
                            backgroundColor: appColors.gray,
                        },
                    ]}
                />
                <View
                    style={[
                        styles.circle,
                        {
                            left: getSize.m(-14),
                            top: getSize.m(-6),
                            backgroundColor: appColors.gray,
                        },
                    ]}
                />
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: tournaments ? getSize.m(50) : getSize.m(20),
                        marginBottom: getSize.m(14),
                    },
                ]}
            >
                <View style={appStyles.align_justify}>
                    <FastImage
                        source={avt_away}
                        style={{
                            width: getSize.m(24),
                            height: getSize.m(24),
                            borderRadius: getSize.m(24),
                        }}
                    />
                    <Text
                        style={[
                            styles.name,
                            {
                                color:
                                    result !== null && !isLive
                                        ? appColors.soft_grey
                                        : appColors.text_dark_blue,
                            },
                        ]}
                    >
                        {name_away}
                    </Text>
                </View>
                <View style={appStyles.align_justify}>
                    <View
                        style={[
                            styles.container_result,
                            {
                                borderWidth: isLive ? getSize.m(2) : getSize.m(1),
                                borderColor: isLive ? 'rgba(0, 150, 255, 1)' : appColors.border,
                            },
                        ]}
                    >
                        {result !== null && <Text style={styles.result}>{result}</Text>}
                        {result === null && <Text style={styles.result}>{schedule}</Text>}
                    </View>
                    {result !== null && (
                        <View style={appStyles.flex_row_align}>
                            <Text
                                style={[
                                    styles.details,
                                    {
                                        color: !isLive ? appColors.soft_grey : '#061134',
                                    },
                                ]}
                            >
                                הרכב
                            </Text>
                            <IconFeather
                                name={appIcons.ic_arrow_left}
                                size={getSize.m(10)}
                                color={!isLive ? appColors.soft_grey : '#061134'}
                            />
                        </View>
                    )}
                </View>
                <View style={appStyles.align_justify}>
                    <FastImage
                        source={avt_home}
                        style={{
                            width: getSize.m(24),
                            height: getSize.m(24),
                            borderRadius: getSize.m(24),
                        }}
                    />
                    <Text
                        style={[
                            styles.name,
                            {
                                color:
                                    result !== null && !isLive
                                        ? appColors.soft_grey
                                        : appColors.text_dark_blue,
                            },
                        ]}
                    >
                        {name_home}
                    </Text>
                </View>
            </View>
        </View>
    );
};
