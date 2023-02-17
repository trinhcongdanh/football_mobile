import styles from '@football/app/screens/football-home/layouts/Item9/Item9.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item9/item9.viewModel';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';

export const Item9 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, data, dots } = useViewModel({});
    return (
        <View style={styles.container}>
            <View style={{ marginVertical: getSize.m(20), marginLeft: getSize.m(18) }}>
                <Text style={styles.header}>מגזין ההתאחדות</Text>
            </View>
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
                {data.map((item, index) => {
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
                                <Image source={item.image_url} style={styles.image} />
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
                                                ? appColors.text_dark_blue
                                                : appColors.soft_grey,
                                    },
                                ]}
                            />
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
