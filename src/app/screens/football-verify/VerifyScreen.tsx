import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React from 'react';
import { IVerifyScreenProps } from './VerifyScreen.type';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import styles from './VerifyScreen.styles';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from './VerifyScreen.viewModel';
import { CardHeaderView } from '@football/app/components/connect-signup/header-connect-signup/CardHeaderView';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';

// type Props = {};

export const VerifyScreen = ({ navigation, route }: IVerifyScreenProps) => {
    const { t } = useTranslation();
    const {
        timeSend,
        errors,
        OTP,
        nextInputIndex,
        input,
        inputs,
        onGoBack,
        reSendVerify,
        handleChangeText,
        VerifyCode,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent"></StatusBar>
                <SafeAreaView style={appStyles.flex}>
                    <CardGoBack goBack={onGoBack}></CardGoBack>

                    <CardHeaderView title={t('verify.title')} />
                    <View style={styles.connect_container}>
                        <Text style={[appStyles.text_header]}>{t('verify.header')}</Text>
                        <Text style={[appStyles.text_sub_header]}>052-5381648</Text>

                        {/* OTP Verify */}
                        <View style={styles.otp_Container}>
                            {inputs.map((inp: string, index: number) => {
                                return (
                                    <View style={styles.otp_Box} key={index.toString()}>
                                        <TextInput
                                            value={OTP[index]}
                                            style={styles.otp_Text}
                                            keyboardType="number-pad"
                                            maxLength={1}
                                            onEndEditing={VerifyCode}
                                            ref={nextInputIndex === index ? input : null}
                                            onChangeText={text => handleChangeText(text, index)}
                                        />
                                    </View>
                                );
                            })}
                        </View>

                        {/* End */}

                        <Text
                            style={[
                                appStyles.text_sub_title,
                                { display: timeSend ? 'flex' : 'none', marginTop: getSize.m(15) },
                            ]}
                        >
                            {t('verify.time_send')}
                        </Text>
                        {errors.verifyError != '' && (
                            <Text style={styles.error}>{t('verify.error')}</Text>
                        )}
                        <View style={styles.footer_opt}>
                            <Text style={styles.text_not_reach}>{t('verify.text_not_reach')}</Text>
                            <TouchableOpacity onPress={reSendVerify}>
                                <Text style={styles.text_link}>{t('verify.text_link')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
