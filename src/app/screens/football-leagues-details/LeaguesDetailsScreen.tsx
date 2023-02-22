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
import FastImage from 'react-native-fast-image';
import { DropDown } from '@football/app/components/drop-down/DropDown';
import { Cycle, Round } from '@football/core/models/LeagueSeasonModelResponse';
import { LeaguesTable } from './layouts/leagues-table/LeaguesTable';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import { Statistics } from './layouts/Statistics/Statistics';
import SelectedGallery from './layouts/selected-gallery/SelectedGallery';
import { AboutLeague } from './layouts/about-league/AboutLeague';
import styles from './LeaguesDetailsScreen.style';
import { useViewModel } from './LeaguesDetailsScreen.viewModel';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';

export const LeaguesDetailsScreen = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const {
        t,
        onGoBack,
        setOpenModalYear,
        handleSelectedYear,
        handleCloseModal,
        setOpenModalCycle,
        setOpenModalPlayOff,
        setSelectCycle,
        setSelectRound,
        openModalYear,
        years,
        openModalCycle,
        selectRound,
        selectCycle,
        openModalPlayOff,
        league,
        galleries,
        highlights,
        selectedLeagueSeason,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_angle_right}
                            color_pre={appColors.blue_black}
                            color_after={appColors.blue_black}
                            handlePressFunction={onGoBack}
                        />
                    </View>
                    {openModalYear && (
                        <DropDown
                            data={years}
                            handleSelected={(item: any) => handleSelectedYear(item)}
                            handleCloseModal={handleCloseModal}
                        />
                    )}

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={appStyles.container}>
                            <View style={[appStyles.align_justify, { marginTop: getSize.m(16) }]}>
                                <View style={styles.avt_leagues_container}>
                                    <FastImage
                                        source={{
                                            uri: league?.logo_url,
                                        }}
                                        style={{
                                            ...styles.avt_leagues,
                                            // width: league?.logo_width,
                                            // height: league?.logo_height,
                                        }}
                                    />
                                </View>
                                <Text style={styles.name_leagues}>{league?.name_he}</Text>
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
                                            setOpenModalYear(!openModalYear);
                                        }}
                                        style={styles.calender}
                                    >
                                        <Text style={styles.text_calender}>
                                            {selectedLeagueSeason?.name}
                                        </Text>
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
                                <View style={{ flex: 0.9 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpenModalPlayOff(!openModalPlayOff);
                                        }}
                                        style={[
                                            styles.cycle,
                                            {
                                                borderColor: openModalPlayOff
                                                    ? appColors.blue_light
                                                    : appColors.border,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.text_cycle}>
                                            {selectCycle?.cycle_name_he}
                                        </Text>
                                        <Icon
                                            name={
                                                openModalPlayOff
                                                    ? appIcons.ic_chevron_up
                                                    : appIcons.ic_chevron_down
                                            }
                                            size={getSize.m(14)}
                                            color={
                                                openModalPlayOff
                                                    ? appColors.blue_light
                                                    : appColors.light_gray
                                            }
                                            style={styles.chevron_down}
                                        />
                                    </TouchableOpacity>
                                    {openModalPlayOff && (
                                        <View style={[styles.drop_down_calender, { width: '90%' }]}>
                                            <ScrollView
                                                showsVerticalScrollIndicator={false}
                                                nestedScrollEnabled
                                            >
                                                {selectedLeagueSeason?.cycles.map(
                                                    (cycle: Cycle, index: number) => {
                                                        return (
                                                            <TouchableOpacity
                                                                onPress={() => {
                                                                    setSelectCycle(cycle);
                                                                    setOpenModalPlayOff(false);
                                                                }}
                                                                key={index.toString()}
                                                                style={
                                                                    styles.btn_drop_down_calender
                                                                }
                                                            >
                                                                <Text
                                                                    style={
                                                                        styles.btn_drop_down_calender_text
                                                                    }
                                                                >
                                                                    {cycle.cycle_name_he}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        );
                                                    }
                                                )}
                                            </ScrollView>
                                        </View>
                                    )}
                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpenModalCycle(!openModalCycle);
                                        }}
                                        style={[
                                            styles.cycle,
                                            {
                                                borderColor: openModalCycle
                                                    ? appColors.blue_light
                                                    : appColors.border,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.text_cycle}>
                                            {selectRound?.round_name_he}
                                        </Text>
                                        <Icon
                                            name={
                                                openModalCycle
                                                    ? appIcons.ic_chevron_up
                                                    : appIcons.ic_chevron_down
                                            }
                                            size={getSize.m(14)}
                                            color={
                                                openModalCycle
                                                    ? appColors.blue_light
                                                    : appColors.light_gray
                                            }
                                            style={styles.chevron_down}
                                        />
                                    </TouchableOpacity>
                                    {openModalCycle && (
                                        <View style={[styles.drop_down_calender, { width: '84%' }]}>
                                            <ScrollView
                                                showsVerticalScrollIndicator={false}
                                                nestedScrollEnabled
                                            >
                                                {selectCycle?.rounds.map(
                                                    (input: Round, index: number) => {
                                                        return (
                                                            <TouchableOpacity
                                                                onPress={() => {
                                                                    setSelectRound(input);
                                                                    setOpenModalCycle(false);
                                                                }}
                                                                key={index.toString()}
                                                                style={
                                                                    styles.btn_drop_down_calender
                                                                }
                                                            >
                                                                <Text
                                                                    style={
                                                                        styles.btn_drop_down_calender_text
                                                                    }
                                                                >
                                                                    {input.round_name_he}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        );
                                                    }
                                                )}
                                            </ScrollView>
                                        </View>
                                    )}
                                </View>
                            </View>
                            <LeaguesTable leaderBoards={selectRound?.leader_board || []} />
                        </View>
                        <View style={styles.package}>
                            <ListOfGames games={selectRound?.games || []} />
                        </View>
                        <View style={styles.package}>
                            <Statistics
                                selectedRoundName={selectRound?.round_name_he || ''}
                                statistics={selectRound?.statistics}
                            />
                        </View>
                        <View style={styles.package}>
                            <AboutLeague highlights={highlights} />
                        </View>
                        <View
                            style={{
                                marginTop: getSize.m(10),
                                paddingVertical: getSize.m(20),
                                paddingHorizontal: getSize.m(16),
                            }}
                        >
                            <SelectedGallery galleries={galleries} />
                        </View>
                        {/* <View style={styles.package}>
                            <SelectedMagazine galleries={galleries} />
                        </View> */}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
