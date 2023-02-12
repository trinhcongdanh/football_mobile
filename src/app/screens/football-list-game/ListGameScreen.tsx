import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, ScrollView, Text } from 'react-native';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import styles from '@football/app/screens/football-list-game/ListGameScreen.style';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from '@football/app/screens/football-list-game/ListGameScreen.viewModel';
import { IListGameScreenProps } from '@football/app/screens/football-list-game/ListGameScreen.type';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { appColors } from '@football/app/utils/constants/appColors';

export const ListGameScreen = ({ navigation, route }: IListGameScreenProps) => {
    const { t, onGoBack, listGames } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title="רשימת משחקים"
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo
                            text='ליגת האומות של אופ"א 2022/23'
                            avt={AppImages.img_leagues}
                        />
                        <View
                            style={[
                                appStyles.package,
                                {
                                    marginTop: getSize.m(0),
                                    minHeight: getSize.m(900),
                                    paddingHorizontal: getSize.m(0),
                                    paddingLeft: getSize.m(5),
                                    paddingRight: getSize.m(10),
                                },
                            ]}
                        >
                            <View>
                                {listGames.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            colors={[
                                                item.id % 2 === 1
                                                    ? 'rgba(255, 255, 255, 0.05)'
                                                    : appColors.gray,
                                                item.id % 2 === 1
                                                    ? 'rgba(16, 32, 100, 0.05)'
                                                    : appColors.gray,
                                                item.id % 2 === 1
                                                    ? 'rgba(59, 168, 225, 0.05)'
                                                    : appColors.gray,
                                            ]}
                                            key={item.id}
                                            style={[
                                                appStyles.flex_row_space_center,
                                                {
                                                    paddingVertical: getSize.m(11),
                                                    paddingHorizontal: getSize.m(8),
                                                    borderRadius: getSize.m(5),
                                                },
                                            ]}
                                        >
                                            <View style={appStyles.flex_row_align}>
                                                <FastImage
                                                    source={AppImages.img_calendar}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                    style={{
                                                        width: getSize.m(10),
                                                        height: getSize.m(13),
                                                    }}
                                                />
                                                <Text style={styles.calendar}>{item.date}</Text>
                                            </View>
                                            <View
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    {
                                                        marginHorizontal: getSize.m(15),
                                                    },
                                                ]}
                                            >
                                                <View style={[appStyles.flex_row_align_center]}>
                                                    <Text style={styles.name_club}>
                                                        {item.nameHome}
                                                    </Text>
                                                    <View style={styles.avt_club}>
                                                        <FastImage
                                                            source={item.home}
                                                            style={{
                                                                width: getSize.m(22),
                                                                height: getSize.m(22),
                                                                borderRadius: getSize.m(22),
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={{ marginHorizontal: getSize.m(10) }}>
                                                    <Text style={styles.score}>{item.result}</Text>
                                                </View>
                                                <View style={appStyles.flex_row_align_center}>
                                                    <View style={styles.avt_club}>
                                                        <FastImage
                                                            source={item.away}
                                                            style={{
                                                                width: getSize.m(22),
                                                                height: getSize.m(22),
                                                                borderRadius: getSize.m(22),
                                                            }}
                                                        />
                                                    </View>
                                                    <Text style={styles.name_club}>
                                                        {item.nameAway}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={appStyles.flex_row_align}>
                                                <FastImage
                                                    source={AppImages.img_location_dot}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                    style={{
                                                        width: getSize.m(9),
                                                        height: getSize.m(11),
                                                    }}
                                                />
                                                <Text style={styles.location}>{item.location}</Text>
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
