import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { Button } from '@football/app/components/button';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderAdded } from '@football/app/components/header-added/HeaderAdded';
import Input from '@football/app/components/input/Input';
import { Spacer } from '@football/app/components/spacer/Spacer';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from '@rneui/themed';
import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Feather';
import { CheckBox } from './layout/check-box/CheckBox';
import { styles } from './SettingsScreen.styles';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { useViewModel } from './SettingsScreen.viewModel';

export function SettingsScreen(props: ISettingsScreenProps) {
    const {
        goBack,
        isEnabled,
        toggleSwitch,
        t,
        date,
        handleOnDate,
        onImagePicker,
        image,
        backFavPlayer,
        backFavTeam,
        backFavTopTeam,
        handleSaveChange,
    } = useViewModel(props);
    const [itemSelected, setItemSelected] = useState<string>(t('settings.male'));
    const male = { name: t('settings.male') };
    const female = { name: t('settings.female') };
    const other = { name: t('settings.other_gender') };

    const onItemSelected = (value: string) => {
        setItemSelected(value);
    };
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            goBack={goBack}
                            iconName={appIcons.ic_x_circle}
                            iconStyle={styles.ic_circle}
                            title={t('settings.user_settings')}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={[appStyles.flex, { marginTop: getSize.m(10) }]}
                    >
                        <View style={styles.card_view_container}>
                            <View style={styles.avatar_block}>
                                <View style={styles.avatar_container}>
                                    <Avatar
                                        size={getSize.m(73)}
                                        rounded
                                        source={AppImages.img_avt_player}
                                        containerStyle={{ backgroundColor: appColors.separator }}
                                    />

                                    <Avatar.Accessory
                                        onPress={onImagePicker}
                                        style={{
                                            backgroundColor: appColors.white,
                                        }}
                                        color="#100D65"
                                        size={getSize.m(20)}
                                    />
                                </View>
                            </View>
                            <View style={styles.txt_container_avatar}>
                                <Image source={AppImages.img_ball} style={styles.ic_football} />
                                <Text style={styles.txt_avatar}>1,345</Text>
                            </View>
                            <View style={styles.first_block_container}>
                                <Input
                                    placeholder={t('settings.name')}
                                    error=""
                                    onChangeText={() => {}}
                                    onFocus={() => {}}
                                />
                                <Input
                                    styleInput={styles.input_container}
                                    placeholder={t('settings.email')}
                                    error=""
                                    onChangeText={() => {}}
                                    onFocus={() => {}}
                                />
                                <Text style={styles.txt_gender}>{t('settings.gender')}</Text>
                                <View style={styles.check_box_container}>
                                    <CheckBox
                                        title={male.name}
                                        onItemSelected={() => onItemSelected(male.name)}
                                        isActive={itemSelected === male.name}
                                    />
                                    <CheckBox
                                        title={female.name}
                                        onItemSelected={() => onItemSelected(female.name)}
                                        isActive={itemSelected === female.name}
                                    />
                                    <CheckBox
                                        title={other.name}
                                        onItemSelected={() => onItemSelected(other.name)}
                                        isActive={itemSelected === other.name}
                                    />
                                </View>
                                <Text style={styles.txt_dob}>{t('settings.dob')}</Text>
                                <View style={styles.date_box_container}>
                                    <DatePicker
                                        fadeToColor="none"
                                        textColor={appColors.text_dark_blue}
                                        locale="he"
                                        mode="date"
                                        date={date}
                                        onDateChange={() => handleOnDate(date)}
                                        androidVariant="nativeAndroid"
                                    />
                                </View>
                            </View>
                            <Spacer heightSpacer={getSize.m(10)} color={appColors.text_dark_blue} />
                            <View style={styles.block_container}>
                                <View
                                    style={[
                                        appStyles.flex_row_align,
                                        { marginBottom: getSize.m(6) },
                                    ]}
                                >
                                    <Icon
                                        name={appIcons.ic_star}
                                        size={getSize.m(16)}
                                        color={appColors.soft_grey}
                                    />
                                    <Text style={styles.txt_title_block}>
                                        {t('settings.personal')}
                                    </Text>
                                </View>
                                <View style={styles.mr_top}>
                                    <HeaderAdded
                                        backFav={backFavTeam}
                                        leftIcon={false}
                                        headerTitle={t('settings.group')}
                                        headerSkip={t('settings.sleep')}
                                        iconName={appIcons.ic_left_ios}
                                    />
                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                marginTop: getSize.m(25),
                                                marginBottom: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        <View style={appStyles.align_justify}>
                                            <TouchableOpacity
                                                style={styles.btn_add}
                                                onPress={onImagePicker}
                                            >
                                                <Icon
                                                    name={appIcons.ic_plus}
                                                    size={getSize.m(14)}
                                                    color={appColors.blue_light}
                                                />
                                            </TouchableOpacity>
                                            <Text style={styles.txt_add_group}>
                                                {t('settings.add_group')}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.mr_top_component}>
                                    <HeaderAdded
                                        leftIcon={false}
                                        headerTitle={t('settings.favorite')}
                                        headerSkip={t('settings.sleep')}
                                        iconName={appIcons.ic_left_ios}
                                        backFav={backFavPlayer}
                                    />

                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                marginTop: getSize.m(25),
                                                marginBottom: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        <View style={appStyles.align_justify}>
                                            <TouchableOpacity
                                                style={styles.btn_add}
                                                onPress={onImagePicker}
                                            >
                                                <Icon
                                                    name={appIcons.ic_plus}
                                                    size={getSize.m(14)}
                                                    color={appColors.blue_light}
                                                />
                                            </TouchableOpacity>
                                            <Text style={styles.txt_add_group}>
                                                {t('settings.add_actress')}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.mr_top_component}>
                                    <HeaderAdded
                                        backFav={backFavTopTeam}
                                        leftIcon={false}
                                        headerTitle={t('settings.national_team')}
                                        headerSkip={t('settings.sleep')}
                                        iconName={appIcons.ic_left_ios}
                                    />
                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                marginTop: getSize.m(25),
                                                marginBottom: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        <View style={appStyles.align_justify}>
                                            <TouchableOpacity
                                                style={styles.btn_add}
                                                onPress={onImagePicker}
                                            >
                                                <Icon
                                                    name={appIcons.ic_plus}
                                                    size={getSize.m(14)}
                                                    color={appColors.blue_light}
                                                />
                                            </TouchableOpacity>
                                            <Text style={styles.txt_add_group}>
                                                {t('settings.add_squad')}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacer heightSpacer={getSize.m(10)} color={appColors.text_dark_blue} />
                            <View style={styles.block_container}>
                                <Text style={styles.txt_title_block}>
                                    {t('settings.notifications')}
                                </Text>
                                <Text style={styles.txt_tutorial}>{t('settings.tutorial')}</Text>
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.before_every_game')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled
                                                    ? appColors.separator
                                                    : appColors.blue_light,
                                                justifyContent: 'center',
                                                alignItems: isEnabled ? 'flex-start' : 'flex-end',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.before_game_of_team')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled
                                                    ? appColors.separator
                                                    : appColors.blue_light,
                                                justifyContent: 'center',
                                                alignItems: isEnabled ? 'flex-start' : 'flex-end',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.point_received')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled
                                                    ? appColors.separator
                                                    : appColors.blue_light,
                                                justifyContent: 'center',
                                                alignItems: isEnabled ? 'flex-start' : 'flex-end',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.btn_bottom_container}>
                            <Button
                                style={{ borderRadius: getSize.m(15) }}
                                title={t('settings.save_changes')}
                                onPress={handleSaveChange}
                            />
                            <TouchableOpacity style={styles.btn_delete_account}>
                                <Text style={styles.txt_delete_account}>
                                    {t('settings.delete_account')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
