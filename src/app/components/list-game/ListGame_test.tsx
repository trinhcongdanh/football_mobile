import { View, Text, TouchableOpacity, Image } from 'react-native';
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
import { useDateTime } from '@football/app/utils/hooks/useDateTime';
import { AppImages } from '@football/app/assets/images';
import { useResult } from '@football/app/utils/hooks/useResult';

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
    personnel,
    gameDetail,
}: IListGameProps) => {
    const { t } = useTranslation();
    const emptyResult = result === ' : ' ? ' : ' : null;
    const { getDate, getTime } = useDateTime();
    const { getResult } = useResult();
    return (
        <View style={[styles.main_schedule, style]}>
            {tournament && (
                <TouchableOpacity
                    onPress={handleDetailMatch}
                    style={[
                        styles.tournament,
                        {
                            backgroundColor:
                                result !== emptyResult ? appColors.separator : '#F2FBFF',
                            flexDirection: isLive ? 'row' : 'column',
                            justifyContent: isLive ? 'space-between' : 'center',
                            alignItems: isLive ? 'center' : 'center',
                            paddingLeft: isLive ? getSize.m(23.5) : getSize.m(0),
                            paddingRight: isLive ? getSize.m(10) : getSize.m(0),
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.text_tournament,
                            {
                                color:
                                    result !== emptyResult
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
                <View style={[appStyles.flex_row_space, { marginHorizontal: getSize.m(15) }]}>
                    <View style={appStyles.flex_row_align}>
                        <Text
                            style={[
                                styles.date,
                                {
                                    color:
                                        result !== emptyResult
                                            ? appColors.soft_grey
                                            : appColors.text_dark_blue,
                                },
                            ]}
                        >
                            {getDate({ date: date })}
                        </Text>
                        {result === emptyResult && tournament ? (
                            <View style={appStyles.flex_row_align}>
                                <View>
                                    <Text
                                        style={[
                                            styles.date,
                                            {
                                                color:
                                                    result !== emptyResult
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
                                                    result !== emptyResult
                                                        ? appColors.soft_grey
                                                        : appColors.text_dark_blue,
                                            },
                                        ]}
                                    >
                                        {getTime({ time: schedule })}
                                    </Text>
                                </View>
                            </View>
                        ) : null}
                    </View>

                    <TouchableOpacity
                        onPress={handleStadium}
                        style={[
                            appStyles.flex_row_align,
                            {
                                width: '50%',
                            },
                        ]}
                    >
                        <IconLocation
                            name={appIcons.ic_location}
                            size={getSize.m(20)}
                            color={
                                result !== emptyResult ? appColors.soft_grey : appColors.blue_light
                            }
                        />
                        <View style={{ width: '62%' }}>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.stadium,
                                    {
                                        color:
                                            result !== emptyResult
                                                ? appColors.soft_grey
                                                : appColors.text_dark_blue,
                                        textAlign: 'left',
                                    },
                                ]}
                            >
                                {location}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            <View style={[appStyles.flex_row_space, { position: 'relative' }]}>
                <View style={[styles.circle_left, { backgroundColor: color }]} />
                <View style={[styles.circle_right, { backgroundColor: color }]} />
            </View>
            <View style={{ paddingHorizontal: getSize.m(14) }}>
                {/* <View style={styles.line_dots} /> */}
                <Image source={AppImages.img_dotted_border} style={styles.line_dots} />
            </View>
            <View style={[appStyles.align_justify]}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            marginHorizontal: getSize.m(36),
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
                                    width: getSize.m(25),
                                    height: getSize.m(25),
                                    borderRadius: getSize.m(25),
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
                    <View>
                        <View
                            style={[
                                appStyles.align_justify,
                                styles.time,
                                {
                                    backgroundColor:
                                        result === emptyResult ? appColors.white : '#F8FDFF',
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
                            {!isLive &&
                                result === emptyResult &&
                                schedule !== null &&
                                tournament && <Text style={styles.score}>V S</Text>}
                            {!isLive &&
                                result === emptyResult &&
                                schedule !== null &&
                                !tournament && (
                                    <Text style={styles.score}>{getTime({ time: schedule })}</Text>
                                )}

                            {!isLive && result !== emptyResult && (
                                <Text style={styles.score}>
                                    {getResult({
                                        result: result,
                                    })}
                                </Text>
                            )}
                        </View>
                        {details && (
                            <TouchableOpacity
                                style={[
                                    appStyles.flex_row_center,
                                    {
                                        flex: 0,
                                        marginTop:
                                            nameHome || nameAway ? getSize.m(0) : getSize.m(14),
                                        paddingTop: 5,
                                    },
                                ]}
                                onPress={handleDetailMatch}
                            >
                                {isLive ? (
                                    <Text style={[styles.details]}>{t('list_game.results')}</Text>
                                ) : personnel ? (
                                    <Text style={[styles.details]}>{personnel}</Text>
                                ) : (
                                    gameDetail && <Text style={[styles.details]}>{gameDetail}</Text>
                                )}
                                <Icon
                                    name={icon}
                                    size={getSize.m(14)}
                                    color={appColors.button_dark_blue}
                                />
                            </TouchableOpacity>
                        )}
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
                                    width: getSize.m(25),
                                    height: getSize.m(25),
                                    borderRadius: getSize.m(25),
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
            {/* {details && (
                <TouchableOpacity
                    style={[
                        appStyles.flex_row_center,
                        { flex: 0, marginTop: nameHome || nameAway ? getSize.m(0) : getSize.m(14) },
                    ]}
                    onPress={handleDetailMatch}
                >
                    {isLive ? (
                        <Text style={[styles.details]}>{t('list_game.results')}</Text>
                    ) : personnel ? (
                        <Text style={[styles.details]}>{personnel}</Text>
                    ) : (
                        gameDetail && <Text style={[styles.details]}>{gameDetail}</Text>
                    )}
                    <Icon name={icon} size={getSize.m(10)} color={appColors.button_dark_blue} />
                </TouchableOpacity>
            )} */}
        </View>
    );
};
