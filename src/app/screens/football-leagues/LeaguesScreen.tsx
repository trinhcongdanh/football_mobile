import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_SEARCH_LEAGUES } from '@football/core/api/configs/config';
import React from 'react';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import styles from './LeaguesScreen.style';
import { ILeaguesScreenProps } from './LeaguesScreen.type';
import { useViewModel } from './LeaguesScreen.viewModel';

export const LeaguesScreen = ({ navigation, route }: ILeaguesScreenProps) => {
    const { t, labels, onSearchLeague, searchLeagueType, handleLeaguesDetails } = useViewModel({
        navigation,
        route,
    });

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                style={styles.option_menu}
                // eslint-disable-next-line no-underscore-dangle
                onPress={() => handleLeaguesDetails(item._id)}
            >
                <View style={appStyles.flex_row_align_center}>
                    <Text style={styles.text_option_menu}>{item.name_he}</Text>
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
                                // onBlur={submitSearchLeague}
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
                        {searchLeagueType?.length ? (
                            <View
                                style={[
                                    appStyles.flex,
                                    {
                                        backgroundColor: appColors.gray,
                                        paddingHorizontal: getSize.m(20),
                                    },
                                ]}
                            >
                                <View>
                                    <Text style={styles.text_suggestion}>
                                        {t('leagues.suggestion')}
                                    </Text>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={searchLeagueType.slice(0, MAX_SEARCH_LEAGUES)}
                                        keyExtractor={(item: any) => item.id}
                                        renderItem={renderItem}
                                        numColumns={1}
                                    />
                                </View>
                            </View>
                        ) : null}
                        <TopTaps labels={labels} />
                        <View style={{ height: TAB_BAR_HEIGHT }} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
