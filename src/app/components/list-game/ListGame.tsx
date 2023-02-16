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
import { styles } from './ListGame.styles';
import { IListGameProps } from './ListGame.type';

export const ListGame = ({
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
}: IListGameProps) => {
    const { t } = useTranslation();

    return (
        <View style={styles.main_schedule}>
            {tournament && (
                <View
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
                    {result === null && schedule === null && (
                        <Text style={styles.text_live}>L I V E</Text>
                    )}
                </View>
            )}
            <View
                style={[
                    appStyles.flex_row_space,
                    { marginLeft: getSize.m(24), marginRight: getSize.m(10) },
                ]}
            >
                <Text
                    style={[
                        styles.date,
                        {
                            color: result !== null ? appColors.soft_grey : appColors.text_dark_blue,
                        },
                    ]}
                >
                    {date}
                </Text>
                <View style={[appStyles.flex_row_align, { flex: 0 }]}>
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
                </View>
            </View>
            <View style={appStyles.flex_row_space}>
                <View style={[styles.circle, { right: getSize.m(-30), backgroundColor: color }]} />
                <View style={[styles.circle, { left: getSize.m(-30), backgroundColor: color }]} />
            </View>
            <View style={{ paddingHorizontal: getSize.m(14) }}>
                <View style={styles.line_dots} />
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    { marginHorizontal: getSize.m(36), flexDirection: 'row-reverse' },
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

                    <Text style={styles.name_club}>{nameHome}</Text>
                </View>
                <View
                    style={[
                        appStyles.align_justify,
                        styles.time,
                        {
                            backgroundColor: result === null ? appColors.white : '#F8FDFF',
                        },
                    ]}
                >
                    {result === null && schedule === null && (
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
                    {result === null && schedule !== null && (
                        <Text style={styles.score}>{schedule}</Text>
                    )}

                    {result !== null && <Text style={styles.score}>{result}</Text>}
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
                    <Text style={styles.name_club}>{nameAway}</Text>
                </View>
            </View>
            {details && (
                <TouchableOpacity
                    style={[appStyles.flex_row_center, { flex: 0 }]}
                    onPress={handleDetailMatch}
                >
                    <Text style={styles.details}>{t('match.composition.title')}</Text>
                    <Icon name={icon} size={getSize.m(10)} color={appColors.button_dark_blue} />
                </TouchableOpacity>
            )}
        </View>
    );
};
