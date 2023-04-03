import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import styles from './TeamScreen.style';
import { ITeamScreenProps } from './TeamScreen.type';
import { useViewModel } from './TeamScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

// type Props = {};

export const TeamScreen = ({ navigation, route }: ITeamScreenProps) => {
    const { topTeams, toggleChangeBar, toggleBar, handleTeam, onShowSideMenu } = useViewModel({
        navigation,
        route,
    });
    const { t } = useTranslation();
    const { getTranslationText } = useTranslationText();
    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);

    const renderItem = ({ item }: any) => {
        return;
    };

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_bars_sort}
                            color_pre={colorCustom}
                            color_after={colorCustom}
                            handlePressFunction={onShowSideMenu}
                        />
                        <View>
                            <Text style={[appStyles.text_title]}>{t('team.title')}</Text>
                        </View>
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <View
                            style={{
                                paddingHorizontal: getSize.m(26),
                            }}
                        >
                            <ScrollView>
                                <View style={styles.state_content}>
                                    {topTeams?.map(item => {
                                        return (
                                            <TouchableOpacity
                                                activeOpacity={0.5}
                                                key={item?._id}
                                                style={styles.option_grid}
                                                // eslint-disable-next-line no-underscore-dangle
                                                onPress={() => handleTeam(item?._id)}
                                            >
                                                <View style={styles.container_logo}>
                                                    <FastImage
                                                        resizeMode="contain"
                                                        source={{ uri: item?.logo_url }}
                                                        style={styles.logo}
                                                    />
                                                </View>
                                                <Text
                                                    numberOfLines={2}
                                                    style={styles.text_option_grid}
                                                >
                                                    {getTranslationText({
                                                        textHe: item?.name_he,
                                                        textEn: item?.name_en,
                                                    })}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                    </View>
                </SafeAreaView>
            </BackGround>
        </View>
    );
};
