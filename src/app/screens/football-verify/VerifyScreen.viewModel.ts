import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { IVerifyScreenProps } from './VerifyScreen.type';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearPhoneNumber,
    loginNumberPhoneUser,
    registerNumberPhoneUser,
} from 'src/store/user/RegisterNumberPhone.slice';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { isVerifyOtp, otpUser } from 'src/store/user/OTP.slice';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { statusSetProfile } from 'src/store/user/setProfile.slice';
import { serializeParams } from '@football/app/utils/functions/quick-functions';

export const useViewModel = ({ navigation, route }: IVerifyScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const [errors, setErrors] = useState({
        verifyError: '',
    });
    const handleError = (errorMessage: string, input: string): void => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const onGoBack = () => {
        dispatch(clearPhoneNumber([]));

        goBack();
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    const dispatch = useDispatch<any>();
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const login = useSelector((state: any) => state.login);
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const otp = useSelector((state: any) => state.otpUser);
    const { number }: any = route.params;

    const [codeOtp, setCodeOtp] = useState('');

    const onChangeCode = useCallback((value: string) => {
        setCodeOtp(value);
    }, []);

    const reSendVerify = (): void => {
        if (route.params!.previous_screen === ScreenName.RegisterPage) {
            dispatch(
                registerNumberPhoneUser(
                    serializeParams({
                        action: ACTION,
                        token: login.login.token,
                        call: AuthData.REGISTER_SMS,
                        guest_guid: guestId[0],
                        guest_id: login.login.user.item_id,
                        item: {
                            sms_phone: encodeURIComponent(number),
                        },
                    })
                )
            );
            dispatch(isVerifyOtp(false));
            handleError('', 'verifyError');
        } else if (route.params!.previous_screen === ScreenName.ConnectPage) {
            dispatch(
                loginNumberPhoneUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.LOGIN,
                        sms_phone: encodeURIComponent(number),
                    })
                )
            );
            dispatch(isVerifyOtp(false));
            handleError('', 'verifyError');
        }
    };

    const onFullFill = async (value: string) => {
        handleError('', 'verifyError');
        if (value.length === 4) {
            if (route.params!.previous_screen === ScreenName.RegisterPage) {
                console.log('danh');
                dispatch(
                    otpUser(
                        serializeParams({
                            action: ACTION,
                            token: login.login.token,
                            call: AuthData.REGISTER_SMS,
                            guest_guid: guestId[0],
                            guest_id: login.login.user.item_id,
                            item: {
                                sms_phone: encodeURIComponent(number),
                                sms_code: value,
                            },
                        })
                    )
                );
                dispatch(isVerifyOtp(true));
            } else if (route.params!.previous_screen === ScreenName.ConnectPage) {
                dispatch(
                    otpUser(
                        serializeParams({
                            action: ACTION,
                            token: TOKEN,
                            call: AuthData.LOGIN,
                            sms_phone: encodeURIComponent(number),
                            sms_code: value,
                        })
                    )
                );
                dispatch(isVerifyOtp(true));
            }
        }
    };
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) return;
        if (
            otp.success === true &&
            otp.isVerifyOtp === true &&
            numberPhone.successRegister === true
        ) {
            dispatch(statusSetProfile(null));
            navigate(ScreenName.RegPage);
        }
    }, [otp.success, otp.isVerifyOtp, numberPhone.successRegister]);
    useEffect(() => {
        if (numberPhone.successLogin === true && otp.isVerifyOtp === true && otp.success === true) {
            navigate(ScreenName.SideBar);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SideBar as never }],
            });
        }
    }, [numberPhone.successLogin, otp.isVerifyOtp, otp.success]);
    useEffect(() => {
        if (otp.success === false && otp.loading === false && otp.isVerifyOtp === true) {
            handleError(t('verify.error'), 'verifyError');
        }
    }, [otp.loading, otp.isVerifyOtp]);
    useEffect(() => {
        if (numberPhone.successLogin === false && numberPhone.loadingLogin === false) {
            handleError(t('verify.error'), 'verifyError');
        }
    }, [numberPhone.loadingLogin, otp.isVerifyOtp]);

    useEffect(() => {
        handleError('', 'verifyError');
    }, []);
    return {
        // inputs,
        errors,
        // OTP,
        // nextInputIndex,
        // input,
        handleError,
        onGoBack,
        reSendVerify,
        // onVerifyCode,
        // handleChangeText,
        number,
        otp,
        numberPhone,
        codeOtp,
        onChangeCode,
        onFullFill,
    };
};
