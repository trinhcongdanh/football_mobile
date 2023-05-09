import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_SEARCH_LEAGUES } from '@football/core/api/configs/config';
import React from 'react';
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
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import styles from './LeaguesScreen.style';
import { ILeaguesScreenProps } from './LeaguesScreen.type';
import { useViewModel } from './LeaguesScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

export const LeaguesScreen = ({ navigation, route }: ILeaguesScreenProps) => {
    const {
        t,
        labels,
        onSearchLeague,
        searchLeagueType,
        handleLeaguesDetails,
        findLeagueType,
    } = useViewModel({
        navigation,
        route,
    });

    console.log('findLeagueType', findLeagueType);
    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);
    const { getTranslationText } = useTranslationText();
    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                style={styles.option_menu}
                // eslint-disable-next-line no-underscore-dangle
                onPress={() => handleLeaguesDetails(item._id)}
            >
                <View style={appStyles.flex_row_align_center}>
                    <Text style={styles.text_option_menu}>
                        {getTranslationText({
                            textHe: item.name_he,
                            textEn: item.name_en,
                        })}
                    </Text>
                </View>

                <Icon
                    name={appIcons.ic_left_ios}
                    size={getSize.s(13)}
                    color={appColors.text_dark_blue}
                    style={styles.ic_arrow_left}
                />
            </TouchableOpacity>
        );
    };
    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <HeaderUser
                        avt={AppImages.img_avt}
                        point="1,325"
                        icon={AppImages.img_bars_sort}
                        color_pre={colorCustom}
                        color_after={colorCustom}
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
                            keyboardType={'ascii-capable'}
                            textContentType="none"
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
                <View
                    style={[
                        appStyles.flex,
                        appStyles.main_container,
                        {
                            paddingVertical: getSize.m(0),
                            paddingTop: getSize.m(20),
                        },
                    ]}
                >
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
                            <ScrollView>
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
                            </ScrollView>
                        </View>
                    ) : !findLeagueType ? (
                        <View
                            style={[
                                {
                                    backgroundColor: appColors.gray,
                                    paddingHorizontal: getSize.m(20),
                                    flexDirection: 'row',
                                },
                            ]}
                        >
                            <View>
                                <Text style={styles.text_suggestion}>
                                    {t('leagues.not_search_result')}
                                </Text>
                            </View>
                        </View>
                    ) : null}
                    <TopTaps labels={labels} />
                    <View style={{ height: 0 }} />
                </View>
            </BackGround>
        </View>
    );
};
