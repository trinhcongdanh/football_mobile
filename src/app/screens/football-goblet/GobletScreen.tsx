import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
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
import styles from './GobletScreen.style';
import { IGobletScreenProps } from './GobletScreen.type';
import { useViewModel } from './GobletScreen.viewModel';

export const GobletScreen = ({ navigation, route }: IGobletScreenProps) => {
    const { t, onShowSideMenu, setOnSelect, handleStateCup, onSelect, stateCups } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={[appStyles.flex]}>
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
                            handlePressFunction={onShowSideMenu}
                        />
                        <View>
                            <Text style={[appStyles.text_title]}>{t('goblet.title')}</Text>
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
                        <ButtonOption
                            option_one={t('goblet.state_cup')}
                            option_two={t('goblet.toto_cup')}
                            onSelect={setOnSelect}
                        />
                        {onSelect === 0 ? (
                            <ScrollView>
                                <View style={{ paddingHorizontal: getSize.m(16) }}>
                                    <View style={styles.state_content}>
                                        {stateCups.map(item => {
                                            return (
                                                <TouchableOpacity
                                                    style={styles.option_grid}
                                                    key={item.id}
                                                    onPress={handleStateCup}
                                                >
                                                    <View style={styles.image_cup}>
                                                        <FastImage
                                                            source={AppImages.img_state_cup}
                                                            style={{
                                                                width: getSize.m(12),
                                                                height: getSize.m(12),
                                                            }}
                                                            resizeMode={
                                                                FastImage.resizeMode.contain
                                                            }
                                                        />
                                                    </View>
                                                    <Text
                                                        numberOfLines={2}
                                                        style={styles.text_option_grid}
                                                    >
                                                        {item.state}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                </View>
                                <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                            </ScrollView>
                        ) : (
                            <View>
                                <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                            </View>
                        )}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
