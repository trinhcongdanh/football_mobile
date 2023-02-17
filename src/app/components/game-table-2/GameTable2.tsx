import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/components/game-table-2/GameTable2.style';
import { IGameTable2Props } from '@football/app/components/game-table-2/GameTable2.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconFeather from 'react-native-vector-icons/Feather';

export const GameTable2 = ({
    date,
    avt_home,
    avt_away,
    name_home,
    name_away,
    result,
    schedule,
    clock,
    ticket,
    score,
}: IGameTable2Props) => {
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
                            <Text style={styles.result}>{schedule}</Text>
                        )}
                    </View>
                    <View style={appStyles.flex_row_align}>
                        <Text
                            style={[
                                styles.details,
                                {
                                    color: result !== null ? '#061134' : appColors.soft_grey,
                                },
                            ]}
                        >
                            הרכב
                        </Text>
                        <IconFeather
                            name={appIcons.ic_arrow_left}
                            size={getSize.m(10)}
                            color={result !== null ? '#061134' : appColors.soft_grey}
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
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        paddingHorizontal: getSize.m(40),
                        marginTop: getSize.m(10),
                    },
                ]}
            >
                <View style={appStyles.align_justify}>
                    {score !== null ? (
                        <Text style={styles.content}>{score}</Text>
                    ) : (
                        <Text
                            style={[
                                styles.content,
                                {
                                    color: appColors.light_gray,
                                },
                            ]}
                        >
                            -
                        </Text>
                    )}

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
                    {ticket !== null ? (
                        <Text style={styles.content}>{ticket}</Text>
                    ) : (
                        <Text
                            style={[
                                styles.content,
                                {
                                    color: appColors.light_gray,
                                },
                            ]}
                        >
                            -
                        </Text>
                    )}

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
                    {clock !== null ? (
                        <Text style={styles.content}>{clock}</Text>
                    ) : (
                        <Text
                            style={[
                                styles.content,
                                {
                                    color: appColors.light_gray,
                                },
                            ]}
                        >
                            -
                        </Text>
                    )}

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
