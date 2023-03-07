import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { DropDown } from '@football/app/components/drop-down/DropDown';
import DropdownField from '@football/app/components/dropdown-field/DropdownField';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { CupAround } from '@football/app/screens/football-state-cup/layouts/Statistics/Cup-Around/CupAround';
import { Trophy } from '@football/app/screens/football-state-cup/layouts/Statistics/Trophy/Trophy';
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
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { OptionState } from './layouts/option-state/OptionState';
import styles from './StateCupScreen.style';
import { IStateCupScreenProps } from './StateCupScreen.type';
import { useViewModel } from './StateCupScreen.viewModel';

export const StateCupScreen = ({ route }: IStateCupScreenProps) => {
    const {
        t,
        onGoBack,

        setIsScroll,
        openModalYear,
        setOpenModalYear,
        years,
        setYears,
        isScroll,
        cup,
        getTranslationText,
        cupSeasons,
        selectedCupSeason,
        setSelectedCupSeason,
        selectCycle,
        setSelectCycle,
        cycles,
        selectRound,
        handleCloseModal,
        handleSelectedYear,
        setSelectRound,
    } = useViewModel({
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                {cup && (
                    <>
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
                            <ScrollView>
                                <View style={appStyles.container}>
                                    <View
                                        style={[
                                            appStyles.align_justify,
                                            { marginTop: getSize.m(16) },
                                        ]}
                                    >
                                        <View style={styles.avt_leagues_container}>
                                            <FastImage
                                                source={{ uri: cup.logo_url }}
                                                style={styles.avt_leagues}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>
                                        <Text style={styles.name_leagues}>
                                            {getTranslationText({
                                                textHe: cup.name_he,
                                                textEn: cup.name_en,
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
                                                {t('state_cup.season_game')}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setOpenModalYear(!openModalYear);
                                                    setIsScroll(!isScroll);
                                                }}
                                                style={styles.calender}
                                                activeOpacity={0.9}
                                            >
                                                <Text style={styles.text_calender}>
                                                    {selectedCupSeason?.name}
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
                                                options={selectedCupSeason?.cycles || []}
                                                selectedValue={selectCycle}
                                                onPressItem={cycle => {
                                                    setSelectCycle(cycle);
                                                }}
                                                itemTitleField="cycle_name_he"
                                            />
                                        </View>
                                        <View style={{ flex: 0.5 }}>
                                            <DropdownField
                                                options={selectCycle?.rounds || []}
                                                selectedValue={selectRound}
                                                onPressItem={round => {
                                                    setSelectRound(round);
                                                }}
                                                itemTitleField="round_name_he"
                                            />
                                        </View>
                                    </View>
                                    <OptionState
                                        data={selectRound?.games || []}
                                        label={selectCycle?.cycle_name_he || ''}
                                    />
                                </View>
                                <View style={styles.package}>
                                    <Trophy cupHolders={cup.cup_holders} cup={cup} />
                                </View>
                                <View style={styles.package}>
                                    <CupAround
                                        cyclesDetails={selectedCupSeason?.cycles_details || []}
                                        cup={cup}
                                    />
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </>
                )}
            </ImageBackground>
        </View>
    );
};
