import styles from '@football/app/components/game_table/GameTable.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import React from 'react';
import { View, Text } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import FastImage from 'react-native-fast-image';
import { AppImages } from '@football/app/assets/images';
import { IGameTableProps } from '@football/app/components/game_table/GameTable.type';
import { AppFonts } from '@football/app/assets/fonts';

export const GameTable = ({
    date,
    location,
    avt_away,
    avt_home,
    name_away,
    name_home,
    result,
    schedule,
}: IGameTableProps) => {
    return (
        <View style={styles.item_game}>
            <View style={appStyles.flex_row_space_center}>
                <Text style={styles.date}>{date}</Text>
                <View style={appStyles.flex_row_align}>
                    <IconEvilIcons
                        name={appIcons.ic_location}
                        size={getSize.m(20)}
                        color={result !== null ? appColors.text_dark_blue : appColors.soft_grey}
                    />
                    <Text
                        style={[
                            styles.location,
                            {
                                fontFamily: result !== null ? AppFonts.medium : AppFonts.regular,
                            },
                        ]}
                    >
                        {location}
                    </Text>
                </View>
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginTop: getSize.m(14),
                        paddingHorizontal: getSize.m(10),
                        marginBottom: getSize.m(18),
                    },
                ]}
            >
                <View style={appStyles.align_justify}>
                    <FastImage
                        source={avt_away}
                        style={{ width: getSize.m(24), height: getSize.m(24) }}
                    />
                    <Text style={styles.name_club}>{name_away}</Text>
                </View>
                <View style={appStyles.align_justify}>
                    <View style={styles.container_result}>
                        {result !== null && <Text style={styles.result}>{result}</Text>}
                        {result === null && schedule !== null && (
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
                        source={avt_home}
                        style={{ width: getSize.m(24), height: getSize.m(24) }}
                    />
                    <Text style={styles.name_club}>{name_home}</Text>
                </View>
            </View>
        </View>
    );
};
