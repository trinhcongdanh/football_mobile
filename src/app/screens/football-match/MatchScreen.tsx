import { View, Text, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import styles from './MatchScreen.styles';
import { IMatchScreenProps } from './MatchScreen.type';
import { useViewModel } from './MatchScreen.viewModel';

// type Props = {};

export const MatchScreen = ({ navigation, route }: IMatchScreenProps) => {
    const { t, onGoBack, labels } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={appIcons.ic_right_ios}
                            color_pre={appColors.text_dark_blue}
                            color_after={appColors.text_dark_blue}
                            handlePressFunction={onGoBack}
                        />
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
                        <TopTaps labels={labels} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
