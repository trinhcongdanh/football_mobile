import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, BackHandler, Keyboard } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { IVerifyScreenProps } from './VerifyScreen.type';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import {
    clearPhoneNumber,
    loginNumberPhoneUser,
    registerNumberPhoneUser,
} from 'src/store/user/RegisterNumberPhone.slice';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { isVerifyOtp, otpUser } from 'src/store/user/OTP.slice';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { isVerify, loginUser } from 'src/store/user/Login.slice';
import { RootState } from 'src/store/store';
import { statusSetProfile } from 'src/store/user/setProfile.slice';

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

    // const handleBackButtonClick = () => {
    //     dispatch(clearPhoneNumber([]));
    //     goBack();
    //     return true;
    // };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    const inputs = Array(4).fill('');

    const [OTP, setOTP] = useState<any>({ 0: '', 1: '', 2: '', 3: '' });

    const input = useRef<any>();

    let newInputIndex = 0;

    const [nextInputIndex, setNextInputIndex] = useState(0);

    const handleChangeText = (text: string, index: number): void => {
        const newOTP = { ...OTP };
        newOTP[index] = text;
        setOTP(newOTP);

        const lastInputIndex = inputs.length - 1;

        if (!text) {
            newInputIndex = index === 0 ? 0 : index - 1;
        } else {
            newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
            if (index === lastInputIndex) {
                Keyboard.dismiss();
            }
        }

        setNextInputIndex(newInputIndex);
    };

    useEffect(() => {
        input.current?.focus();
    }, [nextInputIndex]);

    const [confirm, setConfirm] = useState<any>(null);

    const dispatch = useDispatch<any>();
    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const login = useSelector((state: any) => state.login);
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const profileUser = useSelector((state: RootState) => state.setProfile);
    const otp = useSelector((state: any) => state.otpUser);
    const routes = useRoute();
    const { number }: any = route.params;

    const reSendVerify = (): void => {
        // setTimeSend(true);
        // console.log(routes.params!.previous_screen);
        if (routes.params!.previous_screen === ScreenName.RegisterPage) {
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
                            // sms_phone: ''.
                        },
                    })
                )
            );
            dispatch(isVerifyOtp(false));
            handleError('', 'verifyError');
        } else if (routes.params!.previous_screen === ScreenName.ConnectPage) {
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

    const onVerifyCode = async () => {
        handleError('', 'verifyError');
        let codeOtp = '';
        Object.values(OTP).forEach(code => {
            codeOtp += code;
        });
        if (codeOtp.length === 4) {
            if (routes.params!.previous_screen === ScreenName.RegisterPage) {
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
                                sms_code: codeOtp,
                            },
                        })
                    )
                );
                dispatch(isVerifyOtp(true));
            } else if (routes.params!.previous_screen === ScreenName.ConnectPage) {
                dispatch(
                    otpUser(
                        serializeParams({
                            action: ACTION,
                            token: TOKEN,
                            call: AuthData.LOGIN,
                            sms_phone: encodeURIComponent(number),
                            sms_code: codeOtp,
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
            setOTP({ 0: '', 1: '', 2: '', 3: '' });
            setNextInputIndex(0);
        }
    }, [otp.loading, otp.isVerifyOtp]);
    useEffect(() => {
        if (numberPhone.successLogin === false && numberPhone.loadingLogin === false) {
            handleError(t('verify.error'), 'verifyError');
            setOTP({ 0: '', 1: '', 2: '', 3: '' });
            setNextInputIndex(0);
        }
    }, [numberPhone.loadingLogin, otp.isVerifyOtp]);

    useEffect(() => {
        handleError('', 'verifyError');
    }, []);
    return {
        inputs,
        errors,
        OTP,
        nextInputIndex,
        input,
        handleError,
        onGoBack,
        reSendVerify,
        onVerifyCode,
        handleChangeText,
        number,
        otp,
        numberPhone,
    };
};
