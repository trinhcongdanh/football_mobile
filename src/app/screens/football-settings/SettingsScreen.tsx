import { AppFonts } from '@football/app/assets/fonts';
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
import { renderAvatar, renderUserPoints } from '@football/core/models/AvatarType.enum';
import { Avatar } from '@rneui/themed';
import _ from 'lodash';
import React from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import { CheckBox } from './layout/check-box/CheckBox';
import { styles } from './SettingsScreen.styles';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { useViewModel } from './SettingsScreen.viewModel';

export function SettingsScreen(props: ISettingsScreenProps) {
    const {
        goBack,
        isEnabled1,
        isEnabled2,
        isEnabled3,
        isEnabled4,
        isEnabled5,
        isEnabled6,
        toggleSwitch1,
        toggleSwitch2,
        toggleSwitch3,
        toggleSwitch4,
        toggleSwitch5,
        toggleSwitch6,
        t,
        handleOnDate,
        onImagePicker,
        image,
        backFavPlayer,
        backFavTeam,
        backFavTopTeam,
        handleSaveChange,
        teams,
        players,
        topTeams,
        addFavTeam,
        changeFavTeam,
        addFavPlayer,
        changeFavPlayer,
        addFavTopTeam,
        changeFavTopTeam,
        onGoBack,
        userNameRef,
        userName,
        setUserName,
        errors,
        handleError,
        handleOnChangeName,
        handleOnChangeEmail,
        emailRef,
        email,
        setEmail,
        getProfile,
        handleOnGender,
        handleGender,
        genders,
        indexGender,
        setIndexGender,
        dateTime,
        favSelectedTeam,
        editBirthday,
        profileUser,
        scrollViewRef,
        handleNotSaveChange,
    } = useViewModel(props);

    return (
        <View style={appStyles.flex}>
            {profileUser.loading === true ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            ) : null}
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            goBack={onGoBack}
                            iconName={appIcons.ic_x_circle}
                            iconStyle={styles.ic_circle}
                            title={t('settings.user_settings')}
                        />
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={[appStyles.flex, { marginTop: getSize.m(10) }]}
                        ref={scrollViewRef}
                    >
                        <View style={styles.card_view_container}>
                            <View style={styles.avatar_block}>
                                <View style={styles.avatar_container}>
                                    <TouchableOpacity onPress={onImagePicker}>
                                        <Avatar
                                            size={getSize.m(73)}
                                            rounded
                                            source={renderAvatar(getProfile)}
                                            containerStyle={{
                                                backgroundColor: appColors.separator,
                                            }}
                                        />
                                    </TouchableOpacity>

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
                                <FastImage
                                    source={AppImages.img_ball}
                                    resizeMode={FastImage.resizeMode.contain}
                                    style={styles.ic_football}
                                />
                                <Text style={styles.txt_avatar}>
                                    {renderUserPoints(getProfile, t)}
                                </Text>
                            </View>
                            <View style={styles.first_block_container}>
                                <Input
                                    error={errors.userName}
                                    placeholder={t('settings.name')}
                                    onChangeTextInput={(e: string) => handleOnChangeName(e)}
                                    onFocus={() => {
                                        handleError('', 'userName');
                                    }}
                                    input={userName}
                                    inputRef={userNameRef}
                                />
                                <Input
                                    styleInput={styles.input_container}
                                    error={errors.email}
                                    placeholder={t('settings.email')}
                                    onChangeTextInput={(e: string) => handleOnChangeEmail(e)}
                                    onFocus={() => {
                                        handleError('', 'email');
                                    }}
                                    input={email}
                                    inputRef={emailRef}
                                />

                                <View style={{ marginTop: getSize.m(30) }}>
                                    <Text
                                        style={[
                                            appStyles.text_label,
                                            {
                                                fontFamily: AppFonts.medium,
                                            },
                                        ]}
                                    >
                                        {t('reg.gender.label')}
                                    </Text>
                                    <View
                                        style={[
                                            appStyles.flex_row_align,
                                            {
                                                marginTop: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {genders.map((sexual: string, index: number) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index.toString()}
                                                    onPress={() => {
                                                        handleGender(index);
                                                        handleOnGender(index);
                                                    }}
                                                    style={[
                                                        styles.select_gender,
                                                        {
                                                            backgroundColor:
                                                                indexGender === index
                                                                    ? appColors.text_dark_blue
                                                                    : appColors.white,
                                                        },
                                                    ]}
                                                >
                                                    <Text
                                                        style={[
                                                            appStyles.text_label,
                                                            {
                                                                color:
                                                                    index === indexGender
                                                                        ? appColors.white
                                                                        : appColors.text_dark_blue,
                                                            },
                                                        ]}
                                                    >
                                                        {sexual}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Text
                                            style={[
                                                appStyles.text_label,
                                                {
                                                    fontFamily: AppFonts.medium,
                                                    color: appColors.light_gray,
                                                },
                                            ]}
                                        >
                                            {t('reg.birth_date')}
                                        </Text>
                                        <View style={styles.date_picker}>
                                            <DatePicker
                                                fadeToColor="none"
                                                textColor={appColors.text_dark_blue}
                                                locale="he"
                                                mode="date"
                                                date={dateTime}
                                                onDateChange={date => {
                                                    handleOnDate(date);
                                                }}
                                                androidVariant="nativeAndroid"
                                            />
                                        </View>
                                    </View>
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
                                        headerTitle={t('fav_summary.group')}
                                        headerSkip={t('settings.sleep')}
                                        iconName={appIcons.ic_left_ios}
                                        leftIcon={false}
                                    />

                                    <View style={styles.item_render}>
                                        {teams.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={styles.item_container}
                                                >
                                                    {_.isEmpty(item) ? (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_add}
                                                                onPress={() => addFavTeam(index)}
                                                            >
                                                                <Icon
                                                                    name={appIcons.ic_plus}
                                                                    size={getSize.m(14)}
                                                                    color={appColors.blue_light}
                                                                />
                                                            </TouchableOpacity>
                                                            <Text style={styles.txt_no_group}>
                                                                {t('fav_summary.add_group')}
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_img}
                                                                onPress={() =>
                                                                    changeFavTeam(item._id)
                                                                }
                                                            >
                                                                <Image
                                                                    resizeMode="cover"
                                                                    source={{ uri: item.logo_url }}
                                                                    style={styles.img_team}
                                                                />
                                                            </TouchableOpacity>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={styles.txt_add_group}
                                                            >
                                                                {item.name_he}
                                                            </Text>
                                                        </>
                                                    )}
                                                </View>
                                            );
                                        })}
                                    </View>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.mr_top_component}>
                                    <HeaderAdded
                                        backFav={backFavPlayer}
                                        leftIcon={false}
                                        headerTitle={t('fav_summary.favorite')}
                                        headerSkip={t('settings.sleep')}
                                        iconName={appIcons.ic_left_ios}
                                    />
                                    <View style={styles.item_render}>
                                        {players.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={styles.item_container}
                                                >
                                                    {_.isEmpty(item) ? (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_add}
                                                                onPress={() => addFavPlayer(index)}
                                                            >
                                                                <Icon
                                                                    name={appIcons.ic_plus}
                                                                    size={getSize.m(14)}
                                                                    color={appColors.blue_light}
                                                                />
                                                            </TouchableOpacity>
                                                            <Text style={styles.txt_no_group}>
                                                                {t('fav_summary.add_actress')}
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_img}
                                                                onPress={() =>
                                                                    changeFavPlayer(index)
                                                                }
                                                            >
                                                                <Image
                                                                    resizeMode="cover"
                                                                    source={{ uri: item.image_url }}
                                                                    style={styles.img_player}
                                                                />
                                                            </TouchableOpacity>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={styles.txt_add_group}
                                                            >
                                                                {item.name_he}
                                                            </Text>
                                                        </>
                                                    )}
                                                </View>
                                            );
                                        })}
                                    </View>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.mr_top_component}>
                                    <HeaderAdded
                                        backFav={backFavTopTeam}
                                        leftIcon={false}
                                        headerTitle={t('fav_summary.national_team')}
                                        headerSkip={t('settings.sleep')}
                                        iconName={appIcons.ic_left_ios}
                                    />
                                    <View style={styles.item_render}>
                                        {topTeams.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={styles.item_container}
                                                >
                                                    {_.isEmpty(item) ? (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_add}
                                                                onPress={() => addFavTopTeam(index)}
                                                            >
                                                                <Icon
                                                                    name={appIcons.ic_plus}
                                                                    size={getSize.m(14)}
                                                                    color={appColors.blue_light}
                                                                />
                                                            </TouchableOpacity>
                                                            <Text style={styles.txt_no_group}>
                                                                {t('fav_summary.add_squad')}
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_img}
                                                                onPress={() =>
                                                                    changeFavTopTeam(item._id)
                                                                }
                                                            >
                                                                <Image
                                                                    resizeMode="cover"
                                                                    source={{ uri: item.logo_url }}
                                                                    style={styles.img_top_team}
                                                                />
                                                            </TouchableOpacity>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={styles.txt_add_group}
                                                            >
                                                                {item.name_he}
                                                            </Text>
                                                        </>
                                                    )}
                                                </View>
                                            );
                                        })}
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
                                        {t('settings.notify_1')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch1}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled1
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                                justifyContent: 'center',
                                                alignItems: isEnabled1 ? 'flex-end' : 'flex-start',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.notify_2')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch2}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled2
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                                justifyContent: 'center',
                                                alignItems: isEnabled2 ? 'flex-end' : 'flex-start',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.notify_3')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch3}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled3
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                                justifyContent: 'center',
                                                alignItems: isEnabled3 ? 'flex-end' : 'flex-start',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.notify_4')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch4}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled4
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                                justifyContent: 'center',
                                                alignItems: isEnabled4 ? 'flex-end' : 'flex-start',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.notify_5')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch5}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled5
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                                justifyContent: 'center',
                                                alignItems: isEnabled5 ? 'flex-end' : 'flex-start',
                                            },
                                        ]}
                                    >
                                        <View style={styles.btn_switch_circle} />
                                    </TouchableOpacity>
                                </View>
                                <Spacer heightSpacer={getSize.m(1)} color={appColors.separator} />
                                <View style={styles.block_notifications}>
                                    <Text style={styles.txt_before_game}>
                                        {t('settings.notify_6')}
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        onPress={toggleSwitch6}
                                        style={[
                                            styles.btn_switch,
                                            {
                                                backgroundColor: isEnabled6
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                                justifyContent: 'center',
                                                alignItems: isEnabled6 ? 'flex-end' : 'flex-start',
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
                            <TouchableOpacity
                                onPress={handleNotSaveChange}
                                style={styles.btn_delete_account}
                            >
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
