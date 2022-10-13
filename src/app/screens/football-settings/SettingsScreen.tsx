import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import Input from '@football/app/components/input/Input';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CheckBox } from './layout/check-box/CheckBox';
import { styles } from './SettingsScreen.styles';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { useViewModel } from './SettingsScreen.viewModel';

export function SettingsScreen(props: ISettingsScreenProps) {
    const { goBack, navigate, t } = useViewModel(props);
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
                    <View style={appStyles.container}>
                        <CardGoBack
                            goBack={goBack}
                            iconName={appIcons.ic_x_circle}
                            iconStyle={styles.ic_circle}
                            title={t('settings.user_settings')}
                        />
                        <View style={styles.card_view_container}>
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
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
