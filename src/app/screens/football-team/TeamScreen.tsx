import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import styles from './TeamScreen.style';
import { ITeamScreenProps } from './TeamScreen.type';
import { useViewModel } from './TeamScreen.viewModel';

// type Props = {};

export const TeamScreen = ({ navigation, route }: ITeamScreenProps) => {
    const { optionTeams, toggleChangeBar, toggleBar, handleTeam } = useViewModel({
        navigation,
        route,
    });
    const { t } = useTranslation();

    const renderItem = ({ item }: any) => {
        return !toggleBar ? (
            <TouchableOpacity activeOpacity={1} style={styles.option_grid} onPress={handleTeam}>
                <View style={styles.container_logo}>
                    <FastImage
                        resizeMode="contain"
                        source={AppImages.img_logo}
                        style={styles.logo}
                    />
                </View>
                <Text numberOfLines={2} style={styles.text_option_grid}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.option_menu} activeOpacity={0} onPress={handleTeam}>
                <View style={appStyles.flex_row_align_center}>
                    <View style={styles.container_logo}>
                        <FastImage
                            resizeMode="contain"
                            source={AppImages.img_logo}
                            style={styles.logo}
                        />
                    </View>
                    <Text style={styles.text_option_menu}>{item.name}</Text>
                </View>

                <Icon
                    name={appIcons.ic_arrow_left}
                    size={getSize.s(13)}
                    color={appColors.text_dark_blue}
                    style={styles.ic_arrow_left}
                />
            </TouchableOpacity>
        );
    };

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
                            handlePressFunction={toggleChangeBar}
                        />
                        <View>
                            <Text style={[appStyles.text_title]}>{t('team.title')}</Text>
                        </View>
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <View style={{ paddingHorizontal: getSize.m(26) }}>
                            {toggleBar ? (
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={optionTeams}
                                    keyExtractor={(item: any) => item.id}
                                    renderItem={renderItem}
                                    numColumns={1}
                                    key={1}
                                />
                            ) : (
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={optionTeams}
                                    keyExtractor={(item: any) => item.id}
                                    renderItem={renderItem}
                                    numColumns={3}
                                    key={3}
                                />
                            )}
                        </View>
                        <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
