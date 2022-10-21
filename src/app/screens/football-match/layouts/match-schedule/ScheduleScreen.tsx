import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'react-native-elements';
import { AppImages } from '@football/app/assets/images';
import styles from './ScheduleScreen.styles';
import { IScheduleScreenProps } from './ScheduleScreen.type';

// type Props = {};

export const ScheduleScreen = ({ navigation, route }: IScheduleScreenProps) => {
    const { t } = useTranslation();

    const matches = Array(2).fill('');

    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(16) },
            ]}
        >
            <ScrollView>
                {matches.map((inp: string, index: number) => {
                    return (
                        <View key={index.toString()} style={styles.main_schedule}>
                            <View style={appStyles.flex_row_space}>
                                <Text
                                    style={[
                                        styles.date,
                                        {
                                            color:
                                                index === 1
                                                    ? appColors.soft_grey
                                                    : appColors.text_dark_blue,
                                        },
                                    ]}
                                >
                                    15.09.22
                                </Text>
                                <View style={[appStyles.flex_row_align, { flex: 0 }]}>
                                    <IconLocation
                                        name={appIcons.ic_location}
                                        size={getSize.m(15)}
                                        color={
                                            index === 1 ? appColors.soft_grey : appColors.blue_light
                                        }
                                    />
                                    <Text
                                        style={[
                                            styles.stadium,
                                            {
                                                color:
                                                    index === 1
                                                        ? appColors.soft_grey
                                                        : appColors.text_dark_blue,
                                            },
                                        ]}
                                    >
                                        {t('match.stadium')}
                                    </Text>
                                </View>
                            </View>
                            <View style={appStyles.flex_row_space}>
                                <View style={[styles.circle, { right: getSize.m(-40) }]} />
                                <View style={[styles.circle, { left: getSize.m(-40) }]} />
                            </View>
                            <View style={styles.line_dots} />
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginHorizontal: getSize.m(36) },
                                ]}
                            >
                                <View style={[appStyles.align_justify]}>
                                    <Avatar
                                        rounded
                                        size={getSize.m(40)}
                                        source={AppImages.img_albania}
                                        containerStyle={styles.avt_club}
                                    />
                                    <Text style={styles.name_club}>{t('match.club.albania')}</Text>
                                </View>
                                <View style={[appStyles.align_justify, styles.time]}>
                                    {index === 0 ? (
                                        <Text style={styles.score}>11:00</Text>
                                    ) : (
                                        <Text style={styles.score}>3:1</Text>
                                    )}
                                </View>
                                <View style={[appStyles.align_justify]}>
                                    <Avatar
                                        rounded
                                        size={getSize.m(40)}
                                        source={AppImages.img_israel}
                                        containerStyle={styles.avt_club}
                                    />

                                    <Text style={styles.name_club}>{t('match.club.israel')}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};
