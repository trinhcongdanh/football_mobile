import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import { Statistics } from './layouts/statistics/Statistics';
import Icon from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { DropDown } from '@football/app/components/drop-down/DropDown';
import { Avatar } from 'react-native-elements';
import styles from './GroupPageScreen.style';
import { useViewModel } from './GroupPageScreen.viewModel';
import { IGroupPageScreenProps } from './GroupPageScreen.type';

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
                                    <Text style={appStyles.number}>
                                        {t('group_page.info_group.about')}
                                    </Text>
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
                                                <IconFontAwesome
                                                    name={appIcons.ic_user}
                                                    size={getSize.m(12)}
                                                    color={appColors.blue_light}
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
                                                <IconFontAwesome
                                                    name={appIcons.ic_building}
                                                    size={getSize.m(12)}
                                                    color={appColors.blue_light}
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
                                                <IconFontAwesome
                                                    name={appIcons.ic_user}
                                                    size={getSize.m(12)}
                                                    color={appColors.blue_light}
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
                                                <Text style={styles.info_group_item_content}>
                                                    באר שבע איצטדיון טוטו ע"ש טרנר
                                                </Text>
                                            </View>
                                            <View style={styles.ic_label}>
                                                <IconFontAwesome
                                                    name={appIcons.ic_location_arrow}
                                                    size={getSize.m(12)}
                                                    color={appColors.blue_light}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    marginHorizontal: getSize.m(20),
                                    marginTop: getSize.m(23),
                                }}
                            >
                                {groups.map(item => {
                                    return (
                                        <TouchableOpacity key={item.id} style={styles.option_menu}>
                                            <View style={appStyles.flex_row_align_center}>
                                                <Avatar
                                                    source={AppImages.img_israel}
                                                    size={getSize.m(25)}
                                                    rounded
                                                />
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
                        <View style={appStyles.package}>
                            <ListOfGames />
                        </View>
                        <View style={appStyles.package}>
                            <Statistics />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
