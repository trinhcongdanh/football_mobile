import { AppImages } from '@football/app/assets/images';
import { AppJsons } from '@football/app/assets/images/AppImages';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ISplashScreenProps } from '@football/app/screens/splash-screen/SplashScreen.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { Lottie } from '@football/core/models/SplashModelResponse';
import { useSplashAnimations } from '@football/core/services/SplashScreen.service';
import { isEmpty, isNil } from 'lodash';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import qs from 'qs';
import { ImageBackground, StatusBar, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileUser } from 'src/store/user/getProfile.slice';
import { addGuestId } from 'src/store/user/GuestId.slice';
import { ACTION } from '@football/core/api/auth/config';

const useViewModel = () => {};

export const SplashScreen = ({ navigation, route }: ISplashScreenProps) => {
    const { t, i18n } = useTranslation();
    const { navigate } = useAppNavigator();
    const [splashData, setSplashData] = useState<Lottie>();

    const uuid = require('uuid');
    const id = uuid.v4();
    const dispatch = useDispatch<any>();

    const guestId = useSelector((state: any) => state.guestId.guestId);

    // const getSplashData = useCallback(async () => {
    //     try {
    //         const { data } = await axiosClient.post(`${BASE_URL}/find`, {
    //             dataSource: DATA_SOURCE,
    //             database: DB,
    //             collection: 'splash_animation',
    //         });
    //         if (!isEmpty(data.documents)) {
    //             setSplashData(data.documents[0].lottie);
    //         }
    //     } catch (error: any) {
    //         Alert.alert(error);
    //     }
    // }, []);

    // const getSplashData = useCallback(async () => {
    //     const [error, res] = await splashAnimationService.findAll();
    //     if (error) {
    //         return;
    //     }

    //     if (!isEmpty(res.documents)) {
    //         setSplashData(res.documents[0].lottie);
    //     }
    // }, []);
    const { data: splashAnimationData, isLoading } = useSplashAnimations();
    // useEffect(() => {
    //     if (!splashAnimationData) {
    //         return;
    //     }
    //     const [error, res] = splashAnimationData;
    //     if (!error && res?.data?.documents?.length) {
    //         setSplashData(res.data.documents[0].lottie);
    //     }
    // }, [splashAnimationData]);

    // useMount(() => {
    //     getSplashData();
    // });
    const [authLoaded, setAuthLoaded] = useState(false);
    useEffect(() => {
        if (guestId.length === 0) {
            const action = addGuestId(id);
            dispatch(action);
        }
    }, []);
    // useEffect(() => {
    //     if (!isLoading) {
    //         setTimeout(() => {
    //             setAuthLoaded(true);
    //         }, 4000);
    //     }
    // }, [splashData, isLoading]);

    setTimeout(() => {
        setAuthLoaded(true);
    }, 4000);

    const login = useSelector((state: any) => state.login);

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }
    useEffect(() => {
        if (login.success === true) {
            dispatch(
                getProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: login.login.token,
                        call: AuthData.GET_PROFILE,
                        item: login.login.user.item_id,
                    })
                )
            );
        }
    }, [login.success]);

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
                <LottieView source={AppJsons.splash} autoPlay loop />
            </ImageBackground>
        </View>
    );
};
