import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/components/game-table-1/GameTable1.style';
import { IGameTable1Props } from '@football/app/components/game-table-1/GameTable1.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View } from 'react-native';
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
}: IGameTable1Props) => {
    return (
        <View style={styles.game_table}>
            <View style={appStyles.flex_row_align}>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginTop: getSize.m(14),
                        paddingHorizontal: getSize.m(25),
                        marginBottom: getSize.m(11),
                    },
                ]}
            >
                <View style={appStyles.align_justify}>
                    <FastImage
                        source={avt_home}
                        style={{ width: getSize.m(24), height: getSize.m(24) }}
                    />
                    <Text style={styles.name_club}>{name_home}</Text>
                </View>
                <View style={appStyles.align_justify}>
                    <View style={styles.container_result}>
                        {result !== null ? (
                            <Text style={styles.result}>{result}</Text>
                        ) : (
                            <Text style={styles.result}>:</Text>
                        )}
                    </View>
                    <View style={appStyles.flex_row_align}>
                        <Text
                            style={[
                                styles.details,
                                {
                                    color: '#061134',
                                },
                            ]}
                        >
                            הרכב
                        </Text>
                        <IconFeather
                            name={appIcons.ic_arrow_left}
                            size={getSize.m(10)}
                            color="#061134"
                        />
                    </View>
                </View>
                <View style={appStyles.align_justify}>
                    <FastImage
                        source={avt_away}
                        style={{ width: getSize.m(24), height: getSize.m(24) }}
                    />
                    <Text style={styles.name_club}>{name_away}</Text>
                </View>
            </View>
            <View style={appStyles.flex_row_space}>
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
            <View style={{ paddingHorizontal: getSize.m(20) }}>
                <View style={styles.line_dots} />
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
                        <Text style={styles.title}>שערים</Text>
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
                        <Text style={styles.title}>כרטיסים</Text>
                    </View>
                </View>
                <View style={appStyles.align_justify}>
                    <Text style={styles.content}>{clock}</Text>
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
                        <Text style={styles.title}>זמן משחק</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
