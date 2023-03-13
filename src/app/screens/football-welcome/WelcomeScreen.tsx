import { View, Image, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { ScreenName } from '@football/app/utils/constants/enum';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Button } from '@football/app/components/button';
import styles from './WelcomeScreen.styles';
import { IWelcomeScreenProps } from './WelcomeScreen.type';
import { useViewModel } from '@football/app/screens/football-welcome/WelcomeScreen.viewModel';
import { getSize } from '@football/app/utils/responsive/scale';

export const WelcomeScreen = ({ navigation, route }: IWelcomeScreenProps) => {
    const { i18n } = useTranslation();
    const { t, onNavigateFavTeam, onNavigateConnect } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex_center}>
                <StatusBar translucent backgroundColor="transparent" />
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image resizeMode="contain" source={AppImages.img_logo} style={styles.image} />
                    <View style={{ marginTop: getSize.m(22), marginBottom: getSize.m(62) }}>
                        <Text style={styles.text_header}>{t('welcome.title')}</Text>
                    </View>
                    <View style={{ marginHorizontal: getSize.m(46) }}>
                        <Text style={styles.text_desc}>{t('welcome.info')}</Text>
                    </View>
                    <Button
                        style={styles.button_start}
                        title={t('welcome.start')}
                        onPress={onNavigateFavTeam}
                    />
                    <View style={{ marginTop: getSize.m(24) }}>
                        <Text style={styles.text_question}>{t('welcome.account')}</Text>
                    </View>
                    <TouchableOpacity style={styles.button_sign_up} onPress={onNavigateConnect}>
                        <Text style={styles.text_button_sign_up}>{t('welcome.create')}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};
