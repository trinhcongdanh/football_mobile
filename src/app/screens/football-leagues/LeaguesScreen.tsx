import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import styles from './LeaguesScreen.style';
import { useViewModel } from './LeaguesScreen.viewModel';

export const LeaguesScreen = () => {
    const { t, labels, onSearchLeague, submitSearchLeague } = useViewModel();

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_bars_sort}
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
                                onChangeText={onSearchLeague}
                                onBlur={submitSearchLeague}
                                // onSubmitEditing={submitSearchLeague}
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
                        <View style={{ height: TAB_BAR_HEIGHT }} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
