import styles from '@football/app/components/game_table/GameTable.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import FastImage from 'react-native-fast-image';
import { IGameTableProps } from '@football/app/components/game_table/GameTable.type';
import { AppFonts } from '@football/app/assets/fonts';
import { useTranslation } from 'react-i18next';
import { useDateTime } from '@football/app/utils/hooks/useDateTime';
import { useResult } from '@football/app/utils/hooks/useResult';

export const GameTable = ({
    date,
    location,
    avt_away,
    avt_home,
    name_away,
    name_home,
    result,
    schedule,
    handleStadium,
    handleDetailMatch,
    isLive,
}: IGameTableProps) => {
    const { t } = useTranslation();
    const emptyResult = result === ' : ' ? ' : ' : null;
    const { getDate, getTime } = useDateTime();
    const { getResult } = useResult();

    return (
        <View style={styles.item_game}>
            <View style={appStyles.flex_row_space_center}>
                <Text style={styles.date}>{getDate({ date: date })}</Text>
                <TouchableOpacity onPress={handleStadium} style={appStyles.flex_row_align}>
                    <IconEvilIcons
                        name={appIcons.ic_location}
                        size={getSize.m(20)}
                        color={
                            result !== emptyResult ? appColors.text_dark_blue : appColors.soft_grey
                        }
                    />
                    <Text
                        style={[
                            styles.location,
                            {
                                fontFamily:
                                    result !== emptyResult ? AppFonts.medium : AppFonts.regular,
                            },
                        ]}
                    >
                        {location}
                    </Text>
                </TouchableOpacity>
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
                        source={{ uri: avt_home }}
                        style={{ width: getSize.m(24), height: getSize.m(24) }}
                    />
                    {name_home || name_away ? (
                        <View style={styles.resize_name_club}>
                            <Text numberOfLines={2} style={styles.name_club}>
                                {name_home}
                            </Text>
                        </View>
                    ) : null}
                </View>
                <View style={appStyles.align_justify}>
                    <View style={styles.container_result}>
                        {isLive ? <Text style={[styles.result]}>- : -</Text> : null}
                        {!isLive && result !== emptyResult ? (
                            <Text style={styles.result}>
                                {getResult({
                                    result: result,
                                })}
                            </Text>
                        ) : null}
                        {!isLive && result === emptyResult && schedule !== null ? (
                            <Text style={styles.result}>{getTime({ time: schedule })}</Text>
                        ) : null}
                    </View>
                    <TouchableOpacity onPress={handleDetailMatch} style={appStyles.flex_row_align}>
                        {result !== emptyResult && (
                            <Text
                                style={[
                                    styles.details,
                                    {
                                        color: '#061134',
                                    },
                                ]}
                            >
                                {t('home_page.game_detail')}
                            </Text>
                        )}
                        {result === emptyResult && schedule !== null && (
                            <Text
                                style={[
                                    styles.details,
                                    {
                                        color: appColors.soft_grey,
                                    },
                                ]}
                            >
                                {t('home_page.composition')}
                            </Text>
                        )}
                        <IconFeather
                            name={appIcons.ic_left_ios}
                            size={getSize.m(10)}
                            color={result !== emptyResult ? '#061134' : appColors.soft_grey}
                        />
                    </TouchableOpacity>
                </View>
                <View style={appStyles.align_justify}>
                    <FastImage
                        source={{ uri: avt_away }}
                        style={{ width: getSize.m(24), height: getSize.m(24) }}
                    />
                    {name_home || name_away ? (
                        <View style={styles.resize_name_club}>
                            <Text numberOfLines={2} style={styles.name_club}>
                                {name_away}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </View>
        </View>
    );
};
