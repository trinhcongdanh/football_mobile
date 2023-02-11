import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appColors } from '@football/app/utils/constants/appColors';
import { Position } from '@football/app/components/position/Position';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-elements';
import styles from './GoalsNationalTeamScreen.style';
import { useViewModel } from './GoalsNationalTeamScreen.viewModel';
import { IGoalsNationalTeamScreenProps } from './GoalsNationalTeamScreen.type';
import { AppFonts } from '@football/app/assets/fonts';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

export const GoalsNationalTeamScreen = ({ navigation, route }: IGoalsNationalTeamScreenProps) => {
    const { t, onGoBack, listGames, handleDetailMatch } = useViewModel({ navigation, route });
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
                            title="שערים בנבחרת הלאומית"
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="פיני יואב גראפי" avt={AppImages.img_avt_player} />
                        <View
                            style={[
                                appStyles.package,
                                {
                                    marginTop: getSize.m(0),
                                    paddingVertical: getSize.m(0),
                                    minHeight: getSize.m(900),
                                },
                            ]}
                        >
                            <View style={{ marginTop: getSize.m(20) }}>
                                <Position
                                    position='ליגת האומות של אופ"א 2022/23'
                                    color={appColors.text_dark_blue}
                                    width={getSize.m(60)}
                                    fontFamily={AppFonts.bold}
                                    fontSize={getSize.m(12)}
                                />
                                <View style={{ marginTop: getSize.m(-10) }}>
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
                                                        borderRadius: getSize.m(5),
                                                        paddingVertical: getSize.m(14),
                                                        paddingHorizontal: getSize.m(16),
                                                    },
                                                ]}
                                            >
                                                <View style={appStyles.flex_row_align}>
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
                                                    <View
                                                        style={{ marginHorizontal: getSize.m(10) }}
                                                    >
                                                        <Text style={styles.score}>
                                                            {item.result}
                                                        </Text>
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
                                                    <Text style={styles.location}>{item.goal}</Text>
                                                    <FastImage
                                                        source={AppImages.img_ball}
                                                        style={{
                                                            width: getSize.m(12),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(20) }}>
                                <Position
                                    position="ידידות"
                                    color={appColors.text_dark_blue}
                                    width={getSize.m(130)}
                                    fontFamily={AppFonts.bold}
                                    fontSize={getSize.m(12)}
                                />
                                <View style={{ marginTop: getSize.m(-10) }}>
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
                                                        borderRadius: getSize.m(5),
                                                        paddingVertical: getSize.m(14),
                                                        paddingHorizontal: getSize.m(16),
                                                    },
                                                ]}
                                            >
                                                <View style={appStyles.flex_row_align}>
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
                                                    <View
                                                        style={{ marginHorizontal: getSize.m(10) }}
                                                    >
                                                        <Text style={styles.score}>
                                                            {item.result}
                                                        </Text>
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
                                                    <Text style={styles.location}>{item.goal}</Text>
                                                    <FastImage
                                                        source={AppImages.img_ball}
                                                        style={{
                                                            width: getSize.m(12),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
