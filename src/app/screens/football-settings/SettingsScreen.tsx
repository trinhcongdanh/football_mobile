import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderAdded } from '@football/app/components/header-added/HeaderAdded';
import Input from '@football/app/components/input/Input';
import { Spacer } from '@football/app/components/spacer/Spacer';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
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
    const { goBack, navigate, t, date, handleOnDate, onImagePicker, image } = useViewModel(props);
    const [itemSelected, setItemSelected] = useState<string>();
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
                    <ScrollView showsVerticalScrollIndicator={false} style={appStyles.flex}>
                        <View style={appStyles.container}>
                            <CardGoBack
                                goBack={goBack}
                                iconName={appIcons.ic_x_circle}
                                iconStyle={styles.ic_circle}
                                title={t('settings.user_settings')}
                            />
                        </View>
                        <View style={styles.card_view_container}>
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
                                        headerTitle={t('settings.favorite')}
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
                                                {t('settings.add_actress')}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.mr_top_component}>
                                    <HeaderAdded
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
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
