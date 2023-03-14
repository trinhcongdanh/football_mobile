import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { DropDown } from '@football/app/components/drop-down/DropDown';
import DropdownField from '@football/app/components/dropdown-field/DropdownField';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Round } from '@football/core/models/LeagueSeasonModelResponse';
import React from 'react';
import {
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
import { AboutLeague } from './layouts/about-league/AboutLeague';
import { LeaguesTable } from './layouts/leagues-table/LeaguesTable';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import SelectedGallery from './layouts/selected-gallery/SelectedGallery';
import { Statistics } from './layouts/Statistics/Statistics';
import styles from './LeaguesDetailsScreen.style';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';
import { useViewModel } from './LeaguesDetailsScreen.viewModel';

export const LeaguesDetailsScreen = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const {
        t,
        onGoBack,
        setOpenModalYear,
        handleSelectedYear,
        handleCloseModal,
        setSelectCycle,
        setSelectRound,
        openModalYear,
        years,
        selectRound,
        selectCycle,
        league,
        galleries,
        highlights,
        selectedLeagueSeason,
        getTranslationText,
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
                            icon={AppImages.img_angle_arrow}
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
                                        }}
                                    />
                                </View>
                                <Text style={styles.name_leagues}>
                                    {getTranslationText({
                                        textHe: league?.name_he,
                                        textEn: league?.name_en,
                                    })}
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
                                    <DropdownField
                                        options={selectedLeagueSeason?.cycles || []}
                                        selectedValue={selectCycle}
                                        onPressItem={cycle => {
                                            setSelectCycle(cycle);
                                        }}
                                        itemTitleField={getTranslationText({
                                            textHe: 'cycle_name_he',
                                            textEn: 'cycle_name_en',
                                        })}
                                    />
                                </View>
                                <View style={{ flex: 0.5 }}>
                                    <DropdownField
                                        options={selectCycle?.rounds || []}
                                        selectedValue={selectRound}
                                        onPressItem={round => {
                                            setSelectRound(round);
                                        }}
                                        itemTitleField={getTranslationText({
                                            textHe: 'round_name_he',
                                            textEn: 'round_name_en',
                                        })}
                                    />
                                </View>
                            </View>
                            <LeaguesTable leaderBoards={selectRound?.leader_board || []} />
                        </View>
                        <View style={styles.package}>
                            <ListOfGames games={selectRound?.games || []} />
                        </View>
                        <View style={styles.package}>
                            <Statistics
                                selectedRoundName={
                                    getTranslationText({
                                        textHe: selectRound?.round_name_he,
                                        textEn: selectRound?.round_name_en,
                                    }) || ''
                                }
                                statistics={selectRound?.statistics}
                                statisticsId={selectedLeagueSeason?.league_season_stats_id}
                            />
                        </View>
                        <View style={styles.package}>
                            <AboutLeague highlights={highlights} />
                        </View>
                        {/* <View
                            style={{
                                marginTop: getSize.m(10),
                                paddingVertical: getSize.m(20),
                                paddingHorizontal: getSize.m(16),
                            }}
                        >
                            <SelectedGallery galleries={galleries} />
                        </View> */}
                        {/* <View style={styles.package}>
                            <SelectedMagazine galleries={galleries} />
                        </View> */}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
