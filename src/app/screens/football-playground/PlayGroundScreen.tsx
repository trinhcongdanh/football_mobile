import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import LinearGradient from 'react-native-linear-gradient';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppFonts } from '@football/app/assets/fonts';
import { Awards } from '@football/app/screens/football-playground/layouts/Awards/Awards';
import { Archives } from '@football/app/screens/football-playground/layouts/Archives/Archives';
import { Quizzes } from '@football/app/screens/football-playground/layouts/Quizzes/Quizzes';
import styles from '@football/app/screens/football-playground/PlayGroundScreen.style';
import { useViewModel } from '@football/app/screens/football-playground/PlayGroundScreen.viewModel';
import { IPlayGroundScreenProps } from '@football/app/screens/football-playground/PlayGroundScreen.type';

export const PlayGroundScreen = ({ navigation, route }: IPlayGroundScreenProps) => {
    const { t, onGoBack } = useViewModel({ navigation, route });

    const options = [
        t('play_ground.awards.title'),
        t('play_ground.archives.title'),
        t('play_ground.quizzes.title'),
    ];

    const [select, setSelect] = useState(0);

    const selectOption = (index: number): void => {
        setSelect(index);
    };
    return (
        <View style={appStyles.flex}>
            <ImageBackground
                source={AppImages.img_bg}
                style={[appStyles.flex, { backgroundColor: appColors.text_dark_blue }]}
            >
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={{ marginTop: getSize.m(10) }}>
                        <View style={[appStyles.flex_space_center, styles.header]}>
                            <View>
                                <Image source={AppImages.img_x_circle} />
                            </View>

                            <Text style={[appStyles.text_title, { marginTop: getSize.m(0) }]}>
                                {t('play_ground.title')}
                            </Text>

                            <TouchableOpacity>
                                <LinearGradient
                                    colors={[appColors.blue_light, appColors.blue_dark]}
                                    style={styles.bar}
                                >
                                    <Icon
                                        name={appIcons.ic_align_right}
                                        color={appColors.white}
                                        size={getSize.m(20)}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <View
                                style={{
                                    marginTop: getSize.m(30),
                                    paddingHorizontal: getSize.m(16),
                                }}
                            >
                                <View style={styles.information}>
                                    <View
                                        style={[
                                            appStyles.flex_row_align,
                                            {
                                                borderRadius: getSize.m(20),
                                                flexDirection: 'row-reverse',
                                            },
                                        ]}
                                    >
                                        <Image source={AppImages.img_coin} />
                                        <Text
                                            style={[
                                                appStyles.text_bold,
                                                {
                                                    marginRight: getSize.m(6),
                                                    marginLeft: getSize.m(3),
                                                },
                                            ]}
                                        >
                                            1,258,854
                                        </Text>
                                    </View>
                                    <View style={styles.triangle} />
                                    <View
                                        style={{
                                            marginHorizontal: -8,
                                            marginVertical: -12,
                                        }}
                                    >
                                        <LinearGradient
                                            colors={['#203fb6', '#2142ca', '#194494']}
                                            style={styles.information_avt}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    padding: 4,
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        borderColor: '#1f8eff',
                                                        borderWidth: 4,
                                                        borderRadius: 44,
                                                    }}
                                                >
                                                    <Image
                                                        source={AppImages.img_avt}
                                                        style={{
                                                            width: 44,
                                                            height: 44,
                                                            borderRadius: 44,
                                                        }}
                                                    />
                                                    <LinearGradient
                                                        colors={[
                                                            'rgba(122, 211, 255, 0.65)',
                                                            'rgba(81, 184, 235, 0.23)',
                                                        ]}
                                                        style={{
                                                            width: 25,
                                                            height: 25,
                                                            position: 'absolute',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderRadius: 25,
                                                            bottom: -12,
                                                            right: -10,
                                                        }}
                                                    >
                                                        <Image
                                                            source={AppImages.img_club_fav}
                                                            style={{ width: 20, height: 20 }}
                                                        />
                                                    </LinearGradient>
                                                </View>
                                                <View>
                                                    <Text
                                                        style={{
                                                            fontWeight: '700',
                                                            fontSize: 14,
                                                            lineHeight: 18,
                                                            color: 'white',
                                                            fontFamily: AppFonts.regular,
                                                            marginLeft: 14,
                                                        }}
                                                    >
                                                        עידו{'\n'} אברמוביץ׳
                                                    </Text>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    marginTop: getSize.m(26),
                                    paddingHorizontal: getSize.m(16),
                                }}
                            >
                                <View style={[appStyles.flex_row_space, styles.option]}>
                                    {options.map((option: string, index: number) => {
                                        return (
                                            <LinearGradient
                                                key={index.toString()}
                                                colors={[
                                                    index === select
                                                        ? 'rgba(44, 196, 255, 1)'
                                                        : appColors.text_dark_blue,
                                                    index === select
                                                        ? 'rgba(26, 117, 255, 1)'
                                                        : appColors.text_dark_blue,
                                                ]}
                                                style={[styles.button_option_dark]}
                                            >
                                                <TouchableOpacity
                                                    onPress={() => selectOption(index)}
                                                >
                                                    <Text
                                                        style={[
                                                            styles.text_option,
                                                            {
                                                                color: appColors.white,
                                                                fontWeight: '700',
                                                            },
                                                        ]}
                                                    >
                                                        {option}
                                                    </Text>
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        );
                                    })}
                                </View>
                            </View>

                            <View style={{ marginTop: getSize.m(22) }}>
                                {select === 0 && <Awards />}
                                {select === 1 && <Archives />}
                                {select === 2 && <Quizzes />}
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
