import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, Text, ScrollView } from 'react-native';
import { useViewModel } from '@football/app/screens/football-home/HomeScreen.viewModel';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import styles from '@football/app/screens/football-home/HomeScreen.styles';
import FastImage from 'react-native-fast-image';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { Item1 } from '@football/app/screens/football-home/layouts/Item1/Item1';
import { Item2 } from '@football/app/screens/football-home/layouts/Item2/Item2';

export const HomeScreen = ({ navigation, route }: IHomeScreenProps) => {
    const { onGoBack, t, data_header } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={appStyles.flex}>
            {/* Header */}
            <ScrollView>
                <ImageBackground
                    source={AppImages.img_background_header_home}
                    style={[appStyles.flex, { height: getSize.m(172) }]}
                >
                    <StatusBar translucent backgroundColor="transparent" />
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={appStyles.container}>
                            <View style={appStyles.flex_row_space_center}>
                                <View>
                                    <LinearGradient
                                        colors={['rgba(255, 43, 94, 1)', 'rgba(204, 10, 45, 1)']}
                                        style={styles.home_side_bar}
                                    >
                                        <FastImage
                                            source={AppImages.img_bars_sort}
                                            style={{ width: getSize.m(12), height: getSize.m(14) }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                    </LinearGradient>
                                </View>
                                <View>
                                    <View style={[appStyles.flex_row_align, styles.avt]}>
                                        <FastImage
                                            style={{
                                                width: getSize.m(40),
                                                height: getSize.m(40),
                                                borderRadius: getSize.m(40),
                                            }}
                                            source={AppImages.img_avt_player}
                                        />
                                        <FastImage
                                            source={AppImages.img_ball_red}
                                            style={styles.ic_football}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                        <Text
                                            style={[
                                                appStyles.text_bold,
                                                {
                                                    marginRight: getSize.m(6),
                                                    marginLeft: getSize.m(3),
                                                },
                                            ]}
                                        >
                                            1,325
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <FastImage
                                        source={AppImages.img_logo}
                                        style={{ width: getSize.m(36), height: getSize.m(40) }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: getSize.m(22) }}>
                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
                                {data_header.map((item, index) => {
                                    return (
                                        <View
                                            key={item.id}
                                            style={[
                                                appStyles.flex_row_align,
                                                styles.header_item,
                                                {
                                                    marginLeft:
                                                        index === 0 ? getSize.m(16) : getSize.m(6),
                                                    marginRight:
                                                        index === data_header.length - 1
                                                            ? getSize.m(16)
                                                            : getSize.m(6),
                                                },
                                            ]}
                                        >
                                            <FastImage
                                                source={AppImages.img_avt_player}
                                                style={{
                                                    width: getSize.m(30),
                                                    height: getSize.m(30),
                                                    borderRadius: getSize.m(30),
                                                    marginRight: getSize.m(6),
                                                }}
                                            />
                                            <Text style={styles.header_item_text}>רועי אזוט</Text>
                                        </View>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
                {/* Video Intro */}
                <View style={styles.home_video}>
                    <FastImage
                        source={AppImages.img_home_team}
                        style={{
                            width: getSize.m(347),
                            height: getSize.m(233),
                        }}
                    />
                    <View style={styles.date}>
                        <Text style={styles.text_date}>01:23</Text>
                    </View>
                    <View style={styles.play_video_main}>
                        <IconAntDesign
                            name={appIcons.ic_caretright}
                            size={getSize.m(16)}
                            color={appColors.white}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text_content}>
                            נבחרת ישראל זכתה במדליית זהב במכבייה בפעם השנייה
                        </Text>
                    </View>
                </View>
                {/* Player Stats */}
                <Item1 />
                {/* Item2 */}
                <Item2 />
            </ScrollView>
        </View>
    );
};
