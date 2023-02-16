import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { Gallery } from '@football/core/models/LeagueSeasonModelResponse';
import styles from './SelectedMagazine.style';
import { useViewModel } from './SelectedMagazine.viewModel';
import { ISelectedMagazineProps } from './SelectedMagazine.type';

export const SelectedMagazine = ({ galleries }: ISelectedMagazineProps) => {
    const { t, data, width, activeIndexNumber, setActiveIndexNumber, dots } = useViewModel({
        galleries,
    });

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.magazine.title')}
            </Text>
            <View
                style={{
                    marginLeft: getSize.m(-16),
                    marginRight: getSize.m(-20),
                    marginTop: getSize.m(18),
                }}
            >
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled
                    onScroll={e => {
                        const slide = Math.round(
                            e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
                        );
                        if (slide !== activeIndexNumber) {
                            setActiveIndexNumber(slide); // here we will set our active index num
                        }
                    }}
                >
                    {data.map((item: Gallery, index: number) => {
                        return (
                            <View
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginHorizontal: getSize.m(12),
                                }}
                            >
                                <TouchableOpacity activeOpacity={0.9}>
                                    <Image source={{ uri: item.image_url }} style={styles.image} />
                                    <View style={styles.date}>
                                        <Text style={styles.text_date}>{item.length}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.text_content}>
                                            {item.caption_he}{' '}
                                            <Icon
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(12)}
                                                color={appColors.white}
                                                style={styles.ic_arrow_left}
                                            />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.dotContainer}>
                    {dots.map((_, index) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <View key={index}>
                                <View
                                    style={[
                                        styles.dot,
                                        {
                                            width:
                                                index === activeIndexNumber
                                                    ? getSize.m(18)
                                                    : getSize.m(5),
                                            backgroundColor:
                                                index === activeIndexNumber
                                                    ? appColors.blue_light
                                                    : appColors.soft_grey,
                                        },
                                    ]}
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
