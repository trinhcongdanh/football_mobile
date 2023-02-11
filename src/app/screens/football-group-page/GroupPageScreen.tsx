import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { Button } from '@football/app/components/button';
import { DropDown } from '@football/app/components/drop-down/DropDown';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { LeagueTable } from '@football/app/screens/football-group-page/layouts/league-table/LeagueTable';
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
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from './GroupPageScreen.style';
import { IGroupPageScreenProps } from './GroupPageScreen.type';
import { useViewModel } from './GroupPageScreen.viewModel';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import { Statistics } from './layouts/statistics/Statistics';

export const GroupPageScreen = ({ navigation, route }: IGroupPageScreenProps) => {
    const {
        t,
        onGoBack,
        selectYear,
        years,
        groups,
        setOpenModalYear,
        openModalYear,
        handleCloseModal,
        handleSelectedYear,
        showInfoGroup,
        showInfo,
        handleMoreStatistics,
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
                    <ScrollView>
                        <View style={appStyles.container}>
                            <View style={[appStyles.align_justify, { marginTop: getSize.m(16) }]}>
                                <Avatar
                                    source={AppImages.img_israel}
                                    size={getSize.m(78)}
                                    rounded
                                    containerStyle={styles.avt_leagues}
                                />
                                <Text style={styles.name_leagues}>הפועל באר שבע בוגרים</Text>
                                <Text style={styles.sub_name_leagues}>
                                    (ליגת ONE ZERO בנקאות פרטית דיגיטלית)
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
                                </View>
                            </View>
                        </View>
                        <View
                            style={[
                                appStyles.flex,
                                appStyles.main_container,
                                { marginTop: getSize.m(60) },
                            ]}
                        >
                            <View style={styles.info_group}>
                                <View>
                                    <View style={appStyles.flex_row_space_center}>
                                        <View>
                                            <Text style={appStyles.number}>
                                                {t('group_page.info_group.about')}
                                            </Text>
                                        </View>
                                        <View
                                            style={[
                                                styles.drop_down_info,
                                                {
                                                    backgroundColor: showInfo
                                                        ? appColors.separator
                                                        : appColors.blue_light,
                                                },
                                            ]}
                                        >
                                            <TouchableOpacity onPress={showInfoGroup}>
                                                <IconEntypo
                                                    name={
                                                        showInfo
                                                            ? appIcons.ic_chevron_up
                                                            : appIcons.ic_chevron_down
                                                    }
                                                    size={getSize.m(18)}
                                                    color={
                                                        showInfo
                                                            ? appColors.text_option_unselect
                                                            : appColors.white
                                                    }
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                {showInfo ? (
                                    <View>
                                        <View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.age_group')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        בוגרים
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <FastImage
                                                        source={AppImages.img_user}
                                                        style={{
                                                            width: getSize.m(11),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.league')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        ליגת ONE ZERO בנקאות פרטית דיגיטלית
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <FastImage
                                                        source={AppImages.img_user}
                                                        style={{
                                                            width: getSize.m(11),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.governing')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        513997569 - א.א. החברה לקידום הספורט באר שבע
                                                        בע"מ
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <FastImage
                                                        source={AppImages.img_building}
                                                        style={{
                                                            width: getSize.m(9),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.office')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        0778830426
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <IconFontAwesome
                                                        name={appIcons.ic_phone}
                                                        size={getSize.m(12)}
                                                        color={appColors.blue_light}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.fax')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        0778830426
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <IconFontAwesome
                                                        name={appIcons.ic_print}
                                                        size={getSize.m(12)}
                                                        color={appColors.blue_light}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.address')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        חיים סנה 12 באר שבע ת.ד.3242 מיקוד 84489
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <FastImage
                                                        source={AppImages.img_user}
                                                        style={{
                                                            width: getSize.m(11),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={styles.info_group_item}>
                                                <View>
                                                    <Text style={styles.info_group_item_label}>
                                                        {t('group_page.info_group.email')}
                                                    </Text>
                                                    <Text style={styles.info_group_item_content}>
                                                        office@hbsfc.co.il
                                                    </Text>
                                                </View>
                                                <View style={styles.ic_label}>
                                                    <IconFontAwesome
                                                        name={appIcons.ic_envelope}
                                                        size={getSize.m(12)}
                                                        color={appColors.blue_light}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.line} />
                                        <View>
                                            <Text style={appStyles.number}>
                                                {t('group_page.info_group.list')}
                                            </Text>
                                            <View>
                                                <View style={styles.info_group_item}>
                                                    <View>
                                                        <Text style={styles.info_group_item_label}>
                                                            {t('group_page.info_group.stadium')}
                                                        </Text>
                                                        <Text
                                                            style={styles.info_group_item_content}
                                                        >
                                                            באר שבע איצטדיון טוטו ע"ש טרנר
                                                        </Text>
                                                    </View>
                                                    <View style={styles.ic_label}>
                                                        <IconIonicons
                                                            name={appIcons.ic_location_sharp}
                                                            size={getSize.m(12)}
                                                            color={appColors.blue_light}
                                                        />
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ) : (
                                    <View></View>
                                )}
                            </View>
                            <View
                                style={{
                                    marginHorizontal: getSize.m(15),
                                    marginTop: getSize.m(23),
                                }}
                            >
                                {groups.map(item => {
                                    return (
                                        <TouchableOpacity key={item.id} style={styles.option_menu}>
                                            <View style={appStyles.flex_row_align_center}>
                                                <View style={styles.container_img}>
                                                    <Avatar
                                                        source={AppImages.img_israel}
                                                        size={getSize.m(26)}
                                                        rounded
                                                    />
                                                </View>
                                                <Text style={styles.text_option_menu}>
                                                    {item.group}
                                                </Text>
                                            </View>

                                            <Icon
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(13)}
                                                color={appColors.text_dark_blue}
                                                style={styles.ic_arrow_left}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                        <View style={[appStyles.package, { backgroundColor: appColors.white }]}>
                            <LeagueTable />
                        </View>
                        <View style={appStyles.package}>
                            <ListOfGames />
                        </View>
                        <View
                            style={[
                                appStyles.package,
                                {
                                    paddingHorizontal: getSize.m(0),
                                    paddingLeft: getSize.m(16),
                                },
                            ]}
                        >
                            <Statistics />
                        </View>
                        <View style={{ marginHorizontal: getSize.m(28) }}>
                            <Button
                                style={{ borderRadius: getSize.m(15) }}
                                title={t('group_page.statistics.btn')}
                                onPress={handleMoreStatistics}
                            />
                        </View>
                        <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
