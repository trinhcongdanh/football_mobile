import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import { getSize } from '@football/app/utils/responsive/scale';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import styles from './MatchScreen.styles';

// type Props = {};

export const MatchScreen = (props: any) => {
    const { t } = useTranslation();

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <View style={[appStyles.flex_space_center, styles.header]}>
                            <View style={[appStyles.flex_row_space_center, styles.avt]}>
                                <Avatar rounded size={40} source={AppImages.img_avt} />
                                <Text
                                    style={[
                                        appStyles.text_bold,
                                        { marginRight: getSize.m(6), marginLeft: getSize.m(3) },
                                    ]}
                                >
                                    1,325
                                </Text>
                                <Image source={AppImages.img_ball} style={styles.ic_football} />
                            </View>
                            <TouchableOpacity>
                                <LinearGradient
                                    colors={[appColors.text_dark_blue, appColors.text_dark_blue]}
                                    style={styles.bar}
                                >
                                    <Icon
                                        name={appIcons.ic_right_ios}
                                        color={appColors.white}
                                        size={14}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[appStyles.text_title]}>{t('match.title')}</Text>
                        </View>
                        <View
                            style={[
                                appStyles.flex_row_space_center,
                                { marginTop: getSize.m(24), marginHorizontal: getSize.m(36) },
                            ]}
                        >
                            <View style={[appStyles.align_justify]}>
                                <Avatar
                                    rounded
                                    size={getSize.m(60)}
                                    source={AppImages.img_albania}
                                    containerStyle={styles.avt_club}
                                />

                                <Text style={styles.name_club}>{t('match.club.israel')}</Text>
                            </View>
                            <View style={[appStyles.align_justify]}>
                                <Text style={styles.score}>2 : 1</Text>
                                <Text style={styles.status}>{t('match.status')}</Text>
                            </View>
                            <View style={[appStyles.align_justify]}>
                                <Avatar
                                    rounded
                                    size={60}
                                    source={AppImages.img_israel}
                                    containerStyle={styles.avt_club}
                                />

                                <Text style={styles.name_club}>{t('match.club.albania')}</Text>
                            </View>
                        </View>
                        <View
                            style={[
                                appStyles.flex_row_center,
                                { marginTop: getSize.m(24), flex: 0 },
                            ]}
                        >
                            <IconLocation
                                name={appIcons.ic_location}
                                size={getSize.m(15)}
                                color={appColors.blue_light}
                            />
                            <Text style={styles.stadium}>{t('match.stadium')}</Text>
                        </View>
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <TopTaps />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
