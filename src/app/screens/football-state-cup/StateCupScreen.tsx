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
import { OptionState } from './layouts/option-state/OptionState';
import { Statistics } from './layouts/Statistics/Statistics';
import { Avatar } from 'react-native-elements';
import styles from './StateCupScreen.style';
import { useViewModel } from './StateCupScreen.viewModel';
import { IStateCupScreenProps } from './StateCupScreen.type';

export const StateCupScreen = ({ navigation, route }: IStateCupScreenProps) => {
    const {
        t,
        onGoBack,
        setOpenModal,
        setSelectYear,
        setIsScroll,
        openModal,
        selectYear,
        years,
        isScroll,
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
                            icon={appIcons.ic_right_ios}
                            color_pre={appColors.blue_black}
                            color_after={appColors.blue_black}
                            handlePressFunction={onGoBack}
                        />
                    </View>
                    <ScrollView scrollEnabled={isScroll}>
                        <View style={appStyles.container}>
                            <View style={[appStyles.align_justify, { marginTop: getSize.m(16) }]}>
                                <Avatar
                                    source={AppImages.img_cup}
                                    size={getSize.m(78)}
                                    rounded
                                    containerStyle={styles.avt_leagues}
                                />
                                <Text style={styles.name_leagues}>{t('state_cup.title')}</Text>
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
                                            setOpenModal(!openModal);
                                            setIsScroll(!isScroll);
                                        }}
                                        style={styles.calender}
                                        activeOpacity={0.9}
                                    >
                                        <Text style={styles.text_calender}>{selectYear}</Text>
                                        <Icon
                                            name={appIcons.ic_chevron_down}
                                            size={getSize.m(14)}
                                            color={appColors.light_gray}
                                            style={styles.chevron_down}
                                        />
                                    </TouchableOpacity>
                                    {openModal && (
                                        <View style={styles.drop_down_calender}>
                                            <ScrollView>
                                                {years.map((input: string, index: number) => {
                                                    return (
                                                        <TouchableOpacity
                                                            activeOpacity={0.9}
                                                            onPress={() => {
                                                                setSelectYear(input);
                                                                setOpenModal(false);
                                                                setIsScroll(true);
                                                            }}
                                                            key={index.toString()}
                                                            style={styles.btn_drop_down_calender}
                                                        >
                                                            <Text style={styles.option_year}>
                                                                {input}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    );
                                                })}
                                            </ScrollView>
                                        </View>
                                    )}
                                </View>
                            </View>
                            <View style={styles.line_dots} />
                        </View>
                        <View style={[appStyles.flex, appStyles.main_container]}>
                            <View style={styles.drop_down_filter}>
                                <TouchableOpacity style={styles.cycle}>
                                    <Text style={styles.text_cycle}>
                                        {t('state_cup.early_stage_game.label')}
                                    </Text>
                                    <Icon
                                        name={appIcons.ic_chevron_down}
                                        size={getSize.m(14)}
                                        color={appColors.light_gray}
                                        style={styles.chevron_down}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.cycle}>
                                    <Text style={styles.text_cycle}>מחזור 3</Text>
                                    <Icon
                                        name={appIcons.ic_chevron_down}
                                        size={getSize.m(14)}
                                        color={appColors.light_gray}
                                        style={styles.chevron_down}
                                    />
                                </TouchableOpacity>
                            </View>
                            <OptionState label={t('state_cup.early_stage_game.label')} />
                        </View>
                        <View style={styles.package}>
                            <Statistics />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
