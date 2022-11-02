import {
    View,
    Image,
    Text,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    I18nManager,
} from 'react-native';
import React, { useEffect } from 'react';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { ScreenName } from '@football/app/utils/constants/enum';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Button } from '@football/app/components/button';
import { MongoClient, ObjectId } from 'mongodb';
import { useCallback } from 'react';
import { useMemo } from 'react';
import styles from './WelcomeScreen.styles';
import { IWelcomeScreenProps } from './WelcomeScreen.type';

export const WelcomeScreen = ({ navigation, route }: IWelcomeScreenProps) => {
    const { t, i18n } = useTranslation();

    const uri =
        'mongodb+srv://dogma_dev:tJQTMB78bPAe3YpJ@football.fa1e6d9.mongodb.net/test?retryWrites=true&w=majority';

    const client = useMemo(() => {
        return new MongoClient(uri);
    }, []);

    const getApi = useCallback(async () => {
        try {
            console.log(client);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }, [client]);

    useEffect(() => {
        getApi().catch(console.dir);
        if (i18n.language === 'en') {
            I18nManager.forceRTL(false);
        } else {
            I18nManager.forceRTL(true);
        }
    }, [getApi, i18n.language]);

    const onNavigateFavTeam = () => {
        navigation.navigate(ScreenName.FavTeamPage, {
            isReset: true,
        });
    };

    const onNavigateConnect = () => {
        navigation.navigate(ScreenName.ConnectPage, {
            isReset: true,
        });
    };

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex_center}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image resizeMode="contain" source={AppImages.img_logo} style={styles.image} />
                <Text style={styles.text_header}>{t('welcome.title')}</Text>
                <Text style={styles.text_desc}>{t('welcome.info')}</Text>
                <View style={{ width: '90%' }}>
                    <Button title={t('welcome.start')} onPress={onNavigateFavTeam} />
                </View>
                <Text style={styles.text_question}>{t('welcome.account')}</Text>
                <TouchableOpacity style={styles.button_sign_up} onPress={onNavigateConnect}>
                    <Text style={styles.text_button_sign_up}>{t('welcome.create')}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};
