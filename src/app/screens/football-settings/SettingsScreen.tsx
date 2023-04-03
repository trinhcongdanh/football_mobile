/* eslint-disable react/no-array-index-key */
/* eslint-disable react-native/no-inline-styles */
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
import React, { useRef } from 'react';
import {
    ActivityIndicator,
    I18nManager,
    Image,
    ImageBackground,
    LogBox,
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
import { styles } from './SettingsScreen.styles';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { useViewModel } from './SettingsScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

export function SettingsScreen(props: ISettingsScreenProps) {
    const {
        setProfile,
        getProfile,
        onGoBack,
        t,
        getTranslationText,
        handleSaveChange,
        handleNotSaveChange,
        onImagePicker,
        errors,
        handleError,
        userName,
        setUserName,
        email,
        setEmail,
        genders,
        gender,
        birthDate,
        handleOnSelectGender,
        handleChangeBirthDate,
        notifications,
        handleChangeNotification,
        selectedTeams,
        selectedPlayers,
        selectedTopTeams,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        scrollBottom,
    } = useViewModel(props);
    const scrollViewRef = useRef<any>();

    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
    return (
        <View style={appStyles.flex}>
            {setProfile.loading && (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" />
                </View>
            )}

            <BackGround>
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
                        scrollToOverflowEnabled
                        ref={scrollViewRef}
                        onContentSizeChange={() =>
                            scrollBottom && scrollViewRef.current?.scrollToEnd()
                        }
                        style={[appStyles.flex, { marginTop: getSize.m(10) }]}
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
                                    onChangeTextInput={setUserName}
                                    onFocus={() => {
                                        handleError('', 'userName');
                                    }}
                                    input={userName}
                                />
                                <Input
                                    styleInput={styles.input_container}
                                    error={errors.email}
                                    placeholder={t('settings.email')}
                                    onChangeTextInput={setEmail}
                                    onFocus={() => {
                                        handleError('', 'email');
                                    }}
                                    input={email}
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
                                        {genders.map((sexual: any, index: number) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index.toString()}
                                                    onPress={() => {
                                                        handleOnSelectGender(sexual.value);
                                                    }}
                                                    style={[
                                                        styles.select_gender,
                                                        {
                                                            backgroundColor:
                                                                sexual.value === gender
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
                                                                    sexual.value === gender
                                                                        ? appColors.white
                                                                        : appColors.text_dark_blue,
                                                            },
                                                        ]}
                                                    >
                                                        {sexual.text}
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
                                                locale={I18nManager.isRTL ? 'he' : 'en'}
                                                mode="date"
                                                date={birthDate}
                                                onDateChange={date => {
                                                    handleChangeBirthDate(date);
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
                                        {selectedTeams.map((item, index) => {
                                            return (
                                                <View key={index} style={styles.item_container}>
                                                    {item ? (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_img}
                                                                onPress={backFavTeam}
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
                                                                {getTranslationText({
                                                                    textHe: item.name_he,
                                                                    textEn: item.name_en,
                                                                })}
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_add}
                                                                onPress={backFavTeam}
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
                                        {selectedPlayers.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={styles.item_container}
                                                >
                                                    {item ? (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_img}
                                                                onPress={backFavPlayer}
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
                                                                {getTranslationText({
                                                                    textHe: item.name_he,
                                                                    textEn: item.name_en,
                                                                })}
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_add}
                                                                onPress={backFavPlayer}
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
                                        {selectedTopTeams.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={styles.item_container}
                                                >
                                                    {item ? (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_img}
                                                                onPress={backFavTopTeam}
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
                                                                {getTranslationText({
                                                                    textHe: item.name_he,
                                                                    textEn: item.name_en,
                                                                })}
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <TouchableOpacity
                                                                style={styles.btn_add}
                                                                onPress={backFavTopTeam}
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
                                {notifications.map(notification => {
                                    return (
                                        <View key={notification.id}>
                                            <View style={styles.block_notifications}>
                                                <Text style={styles.txt_before_game}>
                                                    {notification.text}
                                                </Text>
                                                <TouchableOpacity
                                                    activeOpacity={0.7}
                                                    onPress={() =>
                                                        handleChangeNotification(notification)
                                                    }
                                                    style={[
                                                        styles.btn_switch,
                                                        {
                                                            backgroundColor: notification.isOn
                                                                ? appColors.blue_light
                                                                : appColors.separator,
                                                            justifyContent: 'center',
                                                            alignItems: notification.isOn
                                                                ? 'flex-end'
                                                                : 'flex-start',
                                                        },
                                                    ]}
                                                >
                                                    <View style={styles.btn_switch_circle} />
                                                </TouchableOpacity>
                                            </View>
                                            <Spacer
                                                heightSpacer={getSize.m(1)}
                                                color={appColors.separator}
                                            />
                                        </View>
                                    );
                                })}
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
            </BackGround>
        </View>
    );
}
