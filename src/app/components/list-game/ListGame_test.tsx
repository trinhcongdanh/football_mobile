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
import { AppFonts } from '@football/app/assets/fonts';
import { ProgressBar } from '@football/app/components/progress-bar/ProgressBar';
import i18n from '@football/app/i18n/EnStrings';
import { HalfCircle } from '@football/app/components/half-circle/HalfCircle';

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
    isFuture,
    isHomePage,
    timeLive,
    marginTopMatch,
    fontFamily,
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
                            backgroundColor: !isFuture ? appColors.separator : '#F2FBFF',
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
                                color: !isFuture
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
                <View style={appStyles.flex_row_center}>
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
                    <View
                        style={[
                            appStyles.flex_row_align,
                            {
                                marginLeft: getSize.m(6),
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: '#0697fd',
                                fontFamily: AppFonts.bold,
                                fontSize: getSize.m(13),
                            }}
                        >
                            {timeLive}
                        </Text>
                        <Text
                            style={{
                                color: '#0697fd',
                                fontFamily: AppFonts.bold,
                                fontSize: getSize.m(13),
                            }}
                        >
                            '
                        </Text>
                    </View>
                </View>
            ) : (
                <View
                    style={[
                        appStyles.flex_row_space,
                        {
                            marginHorizontal: getSize.m(24),
                            marginTop: marginTopMatch ? marginTopMatch : getSize.m(4),
                        },
                    ]}
                >
                    <View style={appStyles.flex_row_align}>
                        <Text
                            style={[
                                styles.date,
                                {
                                    color: !isFuture
                                        ? appColors.soft_grey
                                        : appColors.text_dark_blue,
                                },
                            ]}
                        >
                            {getDate({ date: date })}
                        </Text>
                        {isFuture && tournament ? (
                            <View style={appStyles.flex_row_align}>
                                <View>
                                    <Text
                                        style={[
                                            styles.date,
                                            {
                                                color: !isFuture
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
                                                color: !isFuture
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
                                width: '36%',
                            },
                        ]}
                    >
                        <IconLocation
                            name={appIcons.ic_location}
                            size={getSize.m(20)}
                            color={!isFuture ? appColors.soft_grey : appColors.blue_light}
                        />
                        <View style={{ width: '90%' }}>
                            <Text
                                numberOfLines={1}
                                style={[
                                    styles.stadium,
                                    {
                                        color: !isFuture
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
                {/* <View style={[styles.circle_left, { backgroundColor: color }]} /> */}
                <View style={styles.circle_left}>
                    <HalfCircle
                        color={color}
                        yOffset={i18n.language === 'heb' ? '90deg' : '270deg'}
                    />
                </View>
                <View style={styles.circle_right}>
                    <HalfCircle
                        color={color}
                        yOffset={i18n.language === 'heb' ? '270deg' : '90deg'}
                    />
                </View>
                {/* <View style={[styles.circle_right, { backgroundColor: color }]} /> */}
            </View>
            <View style={{ paddingHorizontal: getSize.m(14) }}>
                {/* <View style={styles.line_dots} /> */}
                <Image source={AppImages.img_dotted_border} style={styles.line_dots} />
            </View>
            <View style={[appStyles.align_justify, { marginTop: getSize.m(4) }]}>
                <View
                    style={[
                        appStyles.flex_row_space,
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
                    <View
                        style={[
                            appStyles.align_justify,
                            {
                                marginTop: getSize.m(-18),
                            },
                        ]}
                    >
                        {isHomePage ? (
                            <View>
                                {isLive ? (
                                    <ProgressBar percentage={timeLive}>
                                        <View
                                            style={{
                                                position: 'absolute',
                                                top: getSize.m(10),
                                                left:
                                                    i18n.language === 'heb'
                                                        ? getSize.m(21)
                                                        : getSize.m(26),
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: getSize.m(30),
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        styles.score,
                                                        {
                                                            color: '#404040',
                                                        },
                                                    ]}
                                                >
                                                    {result === emptyResult
                                                        ? '- : -'
                                                        : getResult({
                                                              result: result,
                                                          })}
                                                </Text>
                                            </View>
                                        </View>
                                    </ProgressBar>
                                ) : (
                                    <View
                                        style={[
                                            appStyles.align_justify,
                                            styles.time,
                                            {
                                                backgroundColor:
                                                    result === emptyResult
                                                        ? appColors.white
                                                        : '#F8FDFF',
                                                marginHorizontal:
                                                    nameHome || nameAway
                                                        ? getSize.m(20)
                                                        : getSize.m(40),
                                            },
                                        ]}
                                    >
                                        {!isLive && isFuture && tournament && (
                                            <Text style={styles.score}>V S</Text>
                                        )}
                                        {!isLive && isFuture && !tournament && (
                                            <Text style={styles.score}>
                                                {getTime({ time: schedule })}
                                            </Text>
                                        )}

                                        {!isLive && !isFuture && (
                                            <Text style={styles.score}>
                                                {getResult({
                                                    result: result,
                                                })}
                                            </Text>
                                        )}
                                    </View>
                                )}
                            </View>
                        ) : (
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
                                        {result === emptyResult
                                            ? '- : -'
                                            : getResult({
                                                  result: result,
                                              })}
                                    </Text>
                                )}
                                {!isLive && isFuture && tournament && (
                                    <Text style={styles.score}>V S</Text>
                                )}
                                {!isLive && isFuture && !tournament && (
                                    <Text style={styles.score}>{getTime({ time: schedule })}</Text>
                                )}

                                {!isLive && !isFuture && (
                                    <Text style={styles.score}>
                                        {getResult({
                                            result: result,
                                        })}
                                    </Text>
                                )}
                            </View>
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

            {details && (
                <TouchableOpacity
                    style={[
                        appStyles.flex_row_center,
                        {
                            flex: 0,
                            marginBottom: getSize.m(20),
                            marginTop: nameHome || nameAway ? getSize.m(-16) : getSize.m(14),
                            paddingTop: 5,
                            marginLeft: getSize.m(12),
                        },
                    ]}
                    onPress={handleDetailMatch}
                >
                    {isLive && !isHomePage ? (
                        <View style={appStyles.flex_row_align}>
                            <View style={appStyles.flex_row_align}>
                                <Text
                                    style={[
                                        styles.details,
                                        {
                                            fontFamily: fontFamily ? fontFamily : AppFonts.bold,
                                        },
                                    ]}
                                >
                                    {t('list_game.detail')}
                                </Text>
                                <Icon
                                    name={icon}
                                    size={getSize.m(14)}
                                    color={appColors.button_dark_blue}
                                />
                            </View>
                            <View style={appStyles.flex_row_align}>
                                <Text
                                    style={[
                                        styles.details,
                                        {
                                            fontFamily: fontFamily ? fontFamily : AppFonts.bold,
                                        },
                                    ]}
                                >
                                    {t('list_game.results')}
                                </Text>
                                <Icon
                                    name={icon}
                                    size={getSize.m(14)}
                                    color={appColors.button_dark_blue}
                                />
                            </View>
                        </View>
                    ) : !isLive && isHomePage && !isFuture ? (
                        <View style={appStyles.flex_row_align}>
                            <Text
                                style={[
                                    styles.details,
                                    {
                                        fontFamily: fontFamily ? fontFamily : AppFonts.bold,
                                    },
                                ]}
                            >
                                {t('list_game.detail_home')}
                            </Text>
                            <Icon
                                name={icon}
                                size={getSize.m(14)}
                                color={appColors.button_dark_blue}
                            />
                        </View>
                    ) : personnel ? (
                        <View style={appStyles.flex_row_align}>
                            <Text
                                style={[
                                    styles.details,
                                    {
                                        fontFamily: fontFamily ? fontFamily : AppFonts.bold,
                                    },
                                ]}
                            >
                                {personnel}
                            </Text>
                            <Icon
                                name={icon}
                                size={getSize.m(14)}
                                color={appColors.button_dark_blue}
                            />
                        </View>
                    ) : (
                        gameDetail && (
                            <View style={appStyles.flex_row_align}>
                                <Text
                                    style={[
                                        styles.details,
                                        {
                                            fontFamily: fontFamily ? fontFamily : AppFonts.bold,
                                        },
                                    ]}
                                >
                                    {gameDetail}
                                </Text>
                                <Icon
                                    name={icon}
                                    size={getSize.m(14)}
                                    color={appColors.button_dark_blue}
                                />
                            </View>
                        )
                    )}
                </TouchableOpacity>
            )}
        </View>
    );
};
