import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/components/game-table-1/GameTable1.style';
import { IGameTable1Props } from '@football/app/components/game-table-1/GameTable1.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useResult } from '@football/app/utils/hooks/useResult';
import { getSize } from '@football/app/utils/responsive/scale';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconFeather from 'react-native-vector-icons/Feather';

export const GameTable1 = ({
    date,
    avt_home,
    avt_away,
    name_home,
    name_away,
    result,
    schedule,
    clock,
    ticket_red,
    ticket_yellow,
    score,
    onHandleDetailMatch,
}: IGameTable1Props) => {
    const { t } = useTranslation();
    const { getResult } = useResult();
    return (
        <View style={styles.game_table}>
            <View
                style={[
                    appStyles.flex_row_align,
                    {
                        marginLeft: getSize.m(28),
                        marginTop: getSize.m(4),
                    },
                ]}
            >
                <Text style={styles.date}>{moment(date).format('DD.MM.YY')}</Text>
            </View>
            <View style={[appStyles.align_justify]}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            paddingHorizontal: getSize.m(25),
                        },
                    ]}
                >
                    <View style={[appStyles.align_justify]}>
                        <FastImage
                            source={{ uri: avt_home }}
                            style={{ width: getSize.m(24), height: getSize.m(24) }}
                        />
                        <View style={styles.resize_name_club}>
                            <Text numberOfLines={2} style={styles.name_club}>
                                {name_home}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[
                            appStyles.align_justify,
                            {
                                marginHorizontal: getSize.m(8),
                            },
                        ]}
                    >
                        <View style={styles.container_result}>
                            {result !== null ? (
                                <Text style={styles.result}>
                                    {getResult({
                                        result: result,
                                    })}
                                </Text>
                            ) : (
                                <Text style={styles.result}>:</Text>
                            )}
                        </View>
                        <TouchableOpacity onPress={onHandleDetailMatch}>
                            <View style={appStyles.flex_row_align}>
                                <Text
                                    style={[
                                        styles.details,
                                        {
                                            color: '#061134',
                                        },
                                    ]}
                                >
                                    {t('home_page.composition')}
                                </Text>
                                <IconFeather
                                    name={appIcons.ic_left_ios}
                                    size={getSize.m(10)}
                                    color="#061134"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={appStyles.align_justify}>
                        <FastImage
                            source={{ uri: avt_away }}
                            style={{ width: getSize.m(24), height: getSize.m(24) }}
                        />
                        <View style={styles.resize_name_club}>
                            <Text numberOfLines={2} style={styles.name_club}>
                                {name_away}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={[appStyles.flex_row_space]}>
                <View
                    style={[
                        styles.circle,
                        {
                            right: getSize.m(-14),
                            top: getSize.m(-14),
                            backgroundColor: appColors.gray,
                        },
                    ]}
                />
                <View
                    style={[
                        styles.circle,
                        {
                            left: getSize.m(-14),
                            top: getSize.m(-14),
                            backgroundColor: appColors.gray,
                        },
                    ]}
                />
            </View>
            <View
                style={{
                    paddingHorizontal: getSize.m(20),
                    marginBottom: getSize.m(10),
                }}
            >
                <Image source={AppImages.img_dotted_border} style={styles.line_dots} />
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        paddingHorizontal: getSize.m(12),
                    },
                ]}
            >
                <View style={appStyles.align_justify}>
                    <Text style={styles.content}>{score}</Text>
                    <View style={[appStyles.flex_row_align, { marginTop: getSize.m(6) }]}>
                        <FastImage
                            source={AppImages.img_futbol_solid}
                            style={{
                                width: getSize.m(11),
                                height: getSize.m(11),
                                marginRight: getSize.m(4),
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text style={styles.title}>{t('table_game.gates')}</Text>
                    </View>
                </View>

                <View style={appStyles.align_justify}>
                    <View style={appStyles.flex_row_align}>
                        <View style={{ marginHorizontal: getSize.m(8) }}>
                            <FastImage
                                source={AppImages.img_ticket_yellow}
                                style={styles.img_ticket}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.content_ticket}>{ticket_yellow}</Text>
                        </View>
                        <View style={{ marginHorizontal: getSize.m(4) }}>
                            <FastImage
                                source={AppImages.img_ticket_red}
                                style={styles.img_ticket}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text
                                style={[
                                    styles.content_ticket,
                                    {
                                        color: appColors.white,
                                    },
                                ]}
                            >
                                {ticket_red}
                            </Text>
                        </View>
                    </View>
                    <View style={[appStyles.flex_row_align, { marginTop: getSize.m(6) }]}>
                        <FastImage
                            source={AppImages.img_ticket_solid}
                            style={{
                                width: getSize.m(11),
                                height: getSize.m(13),
                                marginRight: getSize.m(4),
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text style={styles.title}>{t('table_game.tickets')}</Text>
                    </View>
                </View>
                <View style={appStyles.align_justify}>
                    <Text style={styles.content}>
                        {clock} {t('table_game.thin')}
                    </Text>
                    <View style={[appStyles.flex_row_align, { marginTop: getSize.m(6) }]}>
                        <FastImage
                            source={AppImages.img_clock_solid}
                            style={{
                                width: getSize.m(11),
                                height: getSize.m(11),
                                marginRight: getSize.m(4),
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text style={styles.title}>{t('table_game.playing_time')}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
