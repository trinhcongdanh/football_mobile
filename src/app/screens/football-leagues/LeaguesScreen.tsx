import { View, ImageBackground, StatusBar, SafeAreaView, Text, TextInput } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import Icon from 'react-native-vector-icons/Feather';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import styles from './LeaguesScreen.style';
import { useViewModel } from './LeaguesScreen.viewModel';
import { ILeaguesScreenProps } from './LeaguesScreen.type';

export const LeaguesScreen = ({ navigation, route }: ILeaguesScreenProps) => {
    const { onGoBack, t, labels } = useViewModel({
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
                            icon={appIcons.ic_align_right}
                            color_pre={appColors.blue_light}
                            color_after={appColors.blue_dark}
                        />
                        <View>
                            <Text style={[appStyles.text_title]}>{t('leagues.title')}</Text>
                        </View>
                        <View style={[appStyles.flex_row_space_center, styles.search]}>
                            <TextInput
                                placeholder={t('leagues.place_holder')}
                                style={styles.text_search}
                                placeholderTextColor={appColors.blue_gray_light}
                            />
                            <Icon
                                style={{ marginRight: getSize.m(14) }}
                                name={appIcons.ic_search}
                                color={appColors.blue_gray_light}
                                size={getSize.m(16)}
                            />
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
