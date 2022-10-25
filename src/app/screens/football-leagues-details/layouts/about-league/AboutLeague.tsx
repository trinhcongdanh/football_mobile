import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Animated, Text, useWindowDimensions, ScrollView, Image } from 'react-native';
import styles from './AboutLeague.style';
import { IAboutLeagueProps } from './AboutLeague.type';
import { useViewModel } from './AboutLeague.viewModel';

export const AboutLeague = ({}: IAboutLeagueProps) => {
    const { t, aboutGames, dots, scrollX } = useViewModel({});

    let { width: windowWidth, height: windowHeight } = useWindowDimensions();
    windowHeight = windowHeight - 300;
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
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={16}
                >
                    {aboutGames.map(item => {
                        return (
                            <Animated.View
                                key={item.id}
                                style={[
                                    appStyles.align_justify,
                                    styles.item_about,
                                    {
                                        width: windowWidth / 3,
                                    },
                                ]}
                            >
                                <View style={styles.icon_about}>
                                    <Image source={AppImages.img_ball} style={styles.ic_football} />
                                </View>
                                <Text style={styles.title_about}>{item.title}</Text>
                                <Text style={styles.content_about}>{item.content}</Text>
                            </Animated.View>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={styles.indicatorContainer}>
                {dots.map((item, index) => {
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
                })}
            </View>
        </View>
    );
};
