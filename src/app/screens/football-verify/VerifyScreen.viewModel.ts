import { IVerifyScreenProps } from './VerifyScreen.type';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';

export const useViewModel = ({ navigation, route }: IVerifyScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const [timeSend, setTimeSend] = useState(true);

    const [errors, setErrors] = useState({
        verifyError: '',
    });

    const onGoBack = (): void => {
        goBack();
    };

    const reSendVerify = (): void => {
        setTimeSend(true);
        handleError('', 'verifyError');
    };

    setTimeout(() => {
        setTimeSend(false);
    }, 12000);

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
            if (index == lastInputIndex) {
                Keyboard.dismiss();
            }
        }

        setNextInputIndex(newInputIndex);
    };

    useEffect(() => {
        input.current?.focus();
    }, [nextInputIndex]);

    const VerifyCode = (): void => {
        let codeOtp = '';
        Object.values(OTP).forEach(code => {
            codeOtp += code;
        });

        if (codeOtp != '1234' && codeOtp.length == 4) {
            handleError(t('verify.error'), 'verifyError');
        } else if (codeOtp.length < 4) {
            handleError('', 'verifyError');
        } else if (codeOtp == '1234' && codeOtp.length == 4) {
            handleError('', 'verifyError');
            console.log('Create Infomation');
        }
    };

    return {
        timeSend,
        inputs,
        errors,
        OTP,
        nextInputIndex,
        input,
        handleError,
        onGoBack,
        reSendVerify,
        VerifyCode,
        handleChangeText,
    };
};
