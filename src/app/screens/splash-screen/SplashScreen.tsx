import { View, ImageBackground, Alert, StatusBar, Image } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import localStorage from '@football/core/helpers/localStorage';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { isEmpty, isNil } from 'lodash';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { useMount } from '@football/app/utils/hooks/useMount';
import { appStyles } from '@football/app/utils/constants/appStyles';
import LottieView from 'lottie-react-native';
import { Lottie } from '@football/core/models/SplashModelResponse';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import styles from '@football/app/screens/splash-screen/SplashScreen.styles';
import { ISplashScreenProps } from '@football/app/screens/splash-screen/SplashScreen.type';
import { useDispatch, useSelector } from 'react-redux';
import { addGuestId } from 'src/store/user/GuestId.slice';

export const SplashScreen = ({ navigation, route }: ISplashScreenProps) => {
    const { t, i18n } = useTranslation();
    const { navigate } = useAppNavigator();
    const [splashData, setSplashData] = useState<Lottie>();

    const uuid = require('uuid');
    let id = uuid.v4();
    const dispatch = useDispatch();

    const guestId = useSelector((state: any) => state.guestId.guestId);

    const getSplashData = useCallback(async () => {
        try {
            const { data } = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'splash_animation',
            });
            if (!isEmpty(data.documents)) {
                setSplashData(data.documents[0].lottie);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);
    useMount(() => {
        getSplashData();
    });
    const [authLoaded, setAuthLoaded] = useState(false);
    useEffect(() => {
        if (guestId.length === 0) {
            const action = addGuestId(id);
            dispatch(action);
        }
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setAuthLoaded(true);
        }, 8000);
    }, []);
    const login = useSelector((state: any) => state.login);

    useEffect(() => {
        if (authLoaded) {
            if (!isEmpty(login.login) && !isNil(login.login)) {
                navigate(ScreenName.SideBar);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            } else {
                navigate(ScreenName.OpeningPage);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.OpeningPage as never }],
                });
            }
        }
    }, [authLoaded]);

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex_center}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image resizeMode="contain" source={AppImages.img_logo} style={styles.image} />
                {splashData ? <LottieView source={splashData} autoPlay loop /> : null}
                <View style={styles.background_blur} />
            </ImageBackground>
        </View>
    );
};
