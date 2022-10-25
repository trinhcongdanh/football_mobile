import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import Icon from 'react-native-vector-icons/Feather';
import { appColors } from '@football/app/utils/constants/appColors';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { LeaguesTable } from './layouts/leagues-table/LeaguesTable';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import { Statistics } from './layouts/Statistics/Statistics';
import { AboutLeague } from './layouts/about-league/AboutLeague';
import { Avatar } from 'react-native-elements';
import styles from './LeaguesDetailsScreen.style';
import { useViewModel } from './LeaguesDetailsScreen.viewModel';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';

export const LeaguesDetailsScreen = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const { t, onGoBack, setOpenModal, setSelectYear, openModal, selectYear, years } = useViewModel(
        {
            navigation,
            route,
        }
    );

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={appIcons.ic_right_ios}
                            color_pre={appColors.blue_black}
                            color_after={appColors.blue_black}
                            handlePressFunction={onGoBack}
                        />
                    </View>
                    <ScrollView>
                        <View style={appStyles.container}>
                            <View style={[appStyles.align_justify, { marginTop: getSize.m(16) }]}>
                                <Avatar
                                    source={AppImages.img_leagues}
                                    size={getSize.m(78)}
                                    rounded
                                    containerStyle={styles.avt_leagues}
                                />
                                <Text style={styles.name_leagues}>
                                    ליגת ONE ZERO בנקאות פרטית דיגיטלית
                                </Text>
                            </View>
                            <View>
                                <View
                                    style={[
                                        appStyles.flex_row_center,
                                        { marginTop: getSize.m(16), flex: 0 },
                                    ]}
                                >
                                    <Text style={styles.season_year}>
                                        {t('leagues_details.season_game')}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpenModal(!openModal);
                                        }}
                                        style={styles.calender}
                                    >
                                        <Text style={styles.text_calender}>{selectYear}</Text>
                                        <Icon
                                            name={appIcons.ic_chevron_down}
                                            size={getSize.m(14)}
                                            color={appColors.light_gray}
                                            style={styles.chevron_down}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.line_dots} />
                        </View>
                        <View style={[appStyles.flex, appStyles.main_container]}>
                            <View style={styles.drop_down_filter}>
                                <TouchableOpacity style={styles.cycle}>
                                    <Text style={styles.text_cycle}>
                                        {t('leagues_details.top_playoff')}
                                    </Text>
                                    <Icon
                                        name={appIcons.ic_chevron_down}
                                        size={getSize.m(14)}
                                        color={appColors.light_gray}
                                        style={styles.chevron_down}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cycle}>
                                    <Text style={styles.text_cycle}>מחזור 34</Text>
                                    <Icon
                                        name={appIcons.ic_chevron_down}
                                        size={getSize.m(14)}
                                        color={appColors.light_gray}
                                        style={styles.chevron_down}
                                    />
                                </TouchableOpacity>
                            </View>
                            <LeaguesTable />
                        </View>
                        <View style={styles.package}>
                            <ListOfGames />
                        </View>
                        <View style={styles.package}>
                            <Statistics />
                        </View>
                        <View style={styles.package}>
                            <AboutLeague />
                        </View>
                        <View
                            style={{
                                marginTop: getSize.m(10),
                                paddingVertical: getSize.m(20),
                                paddingHorizontal: getSize.m(16),
                            }}
                        >
                            <Text
                                style={[
                                    appStyles.text_topic,
                                    { marginLeft: getSize.m(6), color: appColors.white },
                                ]}
                            >
                                {t('leagues_details.gallery.title')}
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
