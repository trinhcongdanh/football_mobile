import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { IVerifyScreenProps } from './VerifyScreen.type';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { numberPhoneUser } from 'src/store/user/RegisterNumberPhone';
import { ACTION } from '@football/core/api/auth/config';
import { otpUser } from 'src/store/user/OTP.slice';

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
    const { number }: any = route.params;

    const reSendVerify = (): void => {
        // setTimeSend(true);
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
        handleError('', 'verifyError');
    };

    const onVerifyCode = async () => {
        let codeOtp = '';
        Object.values(OTP).forEach(code => {
            codeOtp += code;
        });

        if (codeOtp.length === 4) {
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
        }
        // if (confirm) {
        //     console.log('Success!');
        // }
        // if (codeOtp !== '1234' && codeOtp.length === 4) {
        //     handleError(t('verify.error'), 'verifyError');
        // } else if (codeOtp.length < 4) {
        //     handleError('', 'verifyError');
        // } else if (codeOtp === '1234' && codeOtp.length === 4) {
        //     handleError('', 'verifyError');
        //     navigate(ScreenName.BottomTab);
        // }
    };

    useEffect(() => {
        if (otp.success === true) {
            navigate(ScreenName.RegPage);
        } else if (otp.success === false && otp.loading === false) {
            handleError(t('verify.error'), 'verifyError');
        }
    }, [otp.success]);

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
