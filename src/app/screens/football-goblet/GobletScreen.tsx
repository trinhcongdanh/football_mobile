import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonOption } from '@football/app/components/button_option';
import { getSize } from '@football/app/utils/responsive/scale';
import FastImage from 'react-native-fast-image';
import styles from './GobletScreen.style';
import { useViewModel } from './GobletScreen.viewModel';
import { IGobletScreenProps } from './GobletScreen.type';

export const GobletScreen = ({ navigation, route }: IGobletScreenProps) => {
    const { t, onNavigateSetting, setOnSelect, handleStateCup, onSelect, stateCups } = useViewModel(
        {
            navigation,
            route,
        }
    );
    return (
        <View style={[appStyles.flex]}>
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
                            handlePressFunction={onNavigateSetting}
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
                            </ScrollView>
                        ) : (
                            <View></View>
                        )}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
