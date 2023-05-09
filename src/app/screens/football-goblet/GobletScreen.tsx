/* eslint-disable no-underscore-dangle */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { IGobletScreenProps } from '@football/app/screens/football-goblet/GobletScreen.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import styles from './GobletScreen.style';
import { useViewModel } from './GobletScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

export const GobletScreen = ({ navigation, route }: IGobletScreenProps) => {
    const {
        t,
        goToStateCupPage,
        changeTab,
        cups,
        onSearchCup,
        searchText,
        setSearchText,
        searchTextRef,
        tab,
        onChangeText,
    } = useViewModel({
        navigation,
        route,
    });
    const { getTranslationText } = useTranslationText();
    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground
                source={AppImages.img_background_cup}
                style={[
                    appStyles.flex,
                    {
                        height: '120%',
                    },
                ]}
            >
                <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_bars_sort}
                            color_pre={colorCustom}
                            color_after={colorCustom}
                        />
                        <View>
                            <Text style={[appStyles.text_title]}>{t('goblet.title')}</Text>
                        </View>
                        <View style={[appStyles.flex_row_space_center, styles.search]}>
                            <TextInput
                                placeholder={t('goblet.search_placeholder')}
                                style={styles.text_search}
                                placeholderTextColor={appColors.blue_gray_light}
                                onChangeText={(text: string) => {
                                    setSearchText(text);
                                    onSearchCup(text, tab);
                                }}
                                ref={searchTextRef}
                                value={searchText}
                                keyboardType={'ascii-capable'}
                                textContentType="none"
                                // onKeyPress={(e: any) => {
                                //     handleKeyPress(e);
                                // }}
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
                        <ButtonOption
                            option_one={t('goblet.state_cup')}
                            option_two={t('goblet.toto_cup')}
                            onSelect={changeTab}
                            defaultValue={0}
                        />

                        <ScrollView>
                            <View style={{ paddingHorizontal: getSize.m(16) }}>
                                <View style={styles.state_content}>
                                    {cups.map(item => {
                                        return (
                                            <TouchableOpacity
                                                style={styles.option_grid}
                                                key={item._id}
                                                onPress={() => goToStateCupPage(item)}
                                            >
                                                <View style={styles.image_cup}>
                                                    <FastImage
                                                        source={{ uri: item.logo_url }}
                                                        style={{
                                                            width: getSize.m(30),
                                                            height: getSize.m(30),
                                                            borderRadius: getSize.m(30),
                                                        }}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                </View>
                                                <Text
                                                    numberOfLines={2}
                                                    style={styles.text_option_grid}
                                                >
                                                    {getTranslationText({
                                                        textHe: item.name_he,
                                                        textEn: item.name_en,
                                                    })}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
