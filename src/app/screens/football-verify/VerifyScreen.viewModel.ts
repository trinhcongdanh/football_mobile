import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { IVerifyScreenProps } from './VerifyScreen.type';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { numberPhoneUser } from 'src/store/user/RegisterNumberPhone';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { isVerifyOtp, otpUser } from 'src/store/user/OTP.slice';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { isVerify, loginUser } from 'src/store/user/Login.slice';

export const useViewModel = ({ navigation, route }: IVerifyScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const [errors, setErrors] = useState({
        verifyError: '',
    });

    const onGoBack = (): void => {
        goBack();
    };
    const handleError = (errorMessage: string, input: string): void => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

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
    const otp = useSelector((state: any) => state.otpUser);
    const routes = useRoute();
    const { number }: any = route.params;

    const reSendVerify = (): void => {
        // setTimeSend(true);
        // console.log(routes.params!.previous_screen);
        if (routes.params!.previous_screen === ScreenName.RegisterPage) {
            dispatch(
                numberPhoneUser(
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
                loginUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.LOGIN,
                        sms_phone: encodeURIComponent(number),
                    })
                )
            );
            dispatch(isVerify(false));
            handleError('', 'verifyError');
        }
    };

    const onVerifyCode = async () => {
        let codeOtp = '';
        Object.values(OTP).forEach(code => {
            codeOtp += code;
        });
        if (codeOtp.length === 4) {
            if (routes.params!.previous_screen === ScreenName.RegisterPage) {
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
                    loginUser(
                        serializeParams({
                            action: ACTION,
                            token: TOKEN,
                            call: AuthData.LOGIN,
                            sms_phone: encodeURIComponent(number),
                            sms_code: codeOtp,
                        })
                    )
                );
                dispatch(isVerify(true));
            }
        }
    };

    useEffect(() => {
        // console.log(otp.success);
        // console.log(otp.loading);
        // console.log(otp.isVerifyOtp);

        if (otp.success === true && otp.isVerifyOtp === true) {
            navigate(ScreenName.RegPage);
        }
    }, [otp.success, otp.isVerifyOtp]);
    useEffect(() => {
        if (otp.success === false && otp.loading === false && otp.isVerifyOtp === true) {
            handleError(t('verify.error'), 'verifyError');
        }
    }, [otp.loading]);
    useEffect(() => {
        if (login.success === true && login.isVerify === true) {
            navigate(ScreenName.SideBar);
        }
    }, [login.success, login.isVerify]);
    useEffect(() => {
        if (login.success === false && login.loading === false && otp.isVerify === true) {
            handleError(t('verify.error'), 'verifyError');
        }
    }, [login.loading]);
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
    };
};
