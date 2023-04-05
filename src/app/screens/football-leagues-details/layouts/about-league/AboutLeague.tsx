import { CustomCarousel } from '@football/app/components/carousel/Carousel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Animated, Text, useWindowDimensions, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './AboutLeague.style';
import { IAboutLeagueProps } from './AboutLeague.type';
import { useViewModel } from './AboutLeague.viewModel';

export const AboutLeague = ({ highlights }: IAboutLeagueProps) => {
    const { t, aboutGames, dots, activeIndexNumber, setActiveIndexNumber } = useViewModel({
        highlights,
    });

    let { width: windowWidth, height: windowHeight } = useWindowDimensions();
    windowHeight -= 300;
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.about.title')}
            </Text>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(-16),
                        marginTop: getSize.m(20),
                    },
                ]}
            >
                {/* <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    // snapToInterval={getSize.m(194)}
                    onScroll={e => {
                        const slide = Math.round(
                            e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
                        );
                        if (slide !== activeIndexNumber) {
                            console.log(slide);
                            setActiveIndexNumber(slide); // here we will set our active index num
                        }
                    }}
                    scrollEventThrottle={16}
                >
                    {aboutGames.map((item: any, index) => {
                        return item ? (
                            <Animated.View
                                key={index}
                                style={[
                                    appStyles.align_justify,
                                    styles.item_about,
                                    {
                                        width: windowWidth / 3,
                                    },
                                ]}
                            >
                                <View style={styles.icon_about}>
                                    <FastImage
                                        source={item.icon}
                                        resizeMode={FastImage.resizeMode.contain}
                                        style={{
                                            width: getSize.m(12),
                                            height: getSize.m(12),
                                        }}
                                    />
                                </View>
                                <Text style={styles.title_about}>{item.text}</Text>
                                <Text style={styles.content_about}>{item.value}</Text>
                            </Animated.View>
                        ) : null;
                    })}
                </ScrollView> */}
                <CustomCarousel
                    data={aboutGames?.filter(item => item) || []}
                    height={getSize.m(300)}
                    widthPerItem={windowWidth / 4}
                    renderItem={({ item, index }) => {
                        return (
                            <Animated.View
                                key={index}
                                style={[
                                    appStyles.align_justify,
                                    styles.item_about,
                                    {
                                        width: windowWidth / 3,
                                    },
                                ]}
                            >
                                <View style={styles.icon_about}>
                                    <FastImage
                                        source={item.icon}
                                        resizeMode={FastImage.resizeMode.contain}
                                        style={{
                                            width: getSize.m(12),
                                            height: getSize.m(12),
                                        }}
                                    />
                                </View>
                                <Text style={styles.title_about}>{item.text}</Text>
                                <Text style={styles.content_about}>{item.value}</Text>
                            </Animated.View>
                        );
                    }}
                />
            </View>
            {/* <View style={styles.dotContainer}>
                {dots.map((_, index) => {
                    return (
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
            </View> */}
            {/* <View style={styles.indicatorContainer}> */}
            {/* {dots.map((item, index) => {
                    const width = scrollX.interpolate({
                        inputRange: [
                            windowWidth * (index - 1),
                            windowWidth * index,
                            windowWidth * (index + 1),
                        ],
                        outputRange: [5, 18, 5],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={index.toString()}
                            style={[
                                styles.normalDots,
                                { width },
                                { backgroundColor: appColors.button_dark_blue },
                            ]}
                        />
                    );
                })} */}
            {/* </View> */}
        </View>
    );
};
