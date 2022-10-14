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
import { Avatar } from 'react-native-elements';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
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
                                <Image source={AppImages.img_ball} />
                            </View>
                            <TouchableOpacity onPress={toggleChangeBar}>
                                <LinearGradient
                                    colors={[appColors.blue_light, appColors.blue_dark]}
                                    style={styles.bar}
                                >
                                    <Icon name="align-right" color={appColors.white} size={14} />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={[appStyles.text_title]}>{t('team.title')}</Text>
                        </View>
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        {toggleBar ? (
                            <FlatList
                                data={optionTeams}
                                keyExtractor={(item: any) => item.id}
                                renderItem={renderItem}
                                numColumns={1}
                                key={1}
                            />
                        ) : (
                            <FlatList
                                data={optionTeams}
                                keyExtractor={(item: any) => item.id}
                                renderItem={renderItem}
                                numColumns={3}
                                key={3}
                            />
                        )}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
