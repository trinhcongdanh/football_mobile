import styles from '@football/app/screens/football-home/layouts/Item8/Item8.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item8/Item8.viewModel';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppImages } from '@football/app/assets/images';
import FastImage from 'react-native-fast-image';

export const Item8 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, data, dots } = useViewModel({});
    return (
        <View style={styles.container}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(18),
                        marginTop: getSize.m(16),
                    },
                ]}
            >
                <Text style={styles.header}>חידונים</Text>
                <View style={appStyles.flex_row_align}>
                    <Text style={styles.details}>לכל החידונים</Text>
                    <IconEntypo
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(13)}
                        color={appColors.button_dark_blue}
                    />
                </View>
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
                                <ImageBackground source={AppImages.img_card} style={styles.image}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <View style={styles.container_logo}>
                                        <FastImage
                                            source={item.logo}
                                            style={{
                                                width: getSize.m(43),
                                                height: getSize.m(48),
                                            }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                    </View>
                                    <Text style={styles.question}>{item.question}</Text>
                                    <View
                                        style={[
                                            appStyles.flex_row_align_center,
                                            {
                                                marginTop: getSize.m(7),
                                            },
                                        ]}
                                    >
                                        <Text style={styles.label}>צבור</Text>
                                        <Text style={styles.score}>{item.score}</Text>
                                        <FastImage
                                            resizeMode={FastImage.resizeMode.contain}
                                            source={AppImages.img_ball_blue}
                                            style={{
                                                width: getSize.m(13),
                                                height: getSize.m(13),
                                            }}
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.text_button}>התחל משחק</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.total}>{item.total}</Text>
                                </ImageBackground>
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
