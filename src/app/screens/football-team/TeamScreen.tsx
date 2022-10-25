import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { useTranslation } from 'react-i18next';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { ITeamScreenProps } from './TeamScreen.type';
import styles from './TeamScreen.style';
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
            <TouchableOpacity style={styles.option_grid} onPress={handleTeam}>
                <Image resizeMode="contain" source={AppImages.img_logo} style={styles.logo} />
                <Text numberOfLines={2} style={styles.text_option_grid}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.option_menu} onPress={handleTeam}>
                <View style={appStyles.flex_row_align_center}>
                    <Image resizeMode="contain" source={AppImages.img_logo} style={styles.logo} />
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
                            icon={appIcons.ic_align_right}
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
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
