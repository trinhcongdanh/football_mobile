import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardHeaderView } from '@football/app/components/connect-signup/header-connect-signup/CardHeaderView';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IVerifyScreenProps } from './VerifyScreen.type';
import styles from './VerifyScreen.styles';
import { useViewModel } from './VerifyScreen.viewModel';
import { appColors } from '../../utils/constants/appColors';

// type Props = {};

export const VerifyScreen = ({ navigation, route }: IVerifyScreenProps) => {
    const { t } = useTranslation();
    const {
        errors,
        OTP,
        nextInputIndex,
        input,
        inputs,
        onGoBack,
        reSendVerify,
        handleChangeText,
        onVerifyCode,
        number,
        otp,
        numberPhone,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            {otp.loading === true ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            ) : null}
            {numberPhone.loadingRegister === true ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            ) : null}
            {numberPhone.loadingLogin === true ? (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            ) : null}
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                        />
                        <CardHeaderView title={t('verify.title')} />
                        <View style={styles.connect_container}>
                            <View style={{ paddingHorizontal: getSize.m(56) }}>
                                <Text style={[appStyles.text_header]}>{t('verify.header')}</Text>
                                <Text style={[appStyles.text_sub_header]}>{number}</Text>
                            </View>

                            {/* OTP Verify */}
                            <View style={styles.otp_Container}>
                                {inputs.map((inp: string, index: number) => {
                                    return (
                                        <TextInput
                                            key={index}
                                            value={OTP[index]}
                                            style={[
                                                styles.otp_Text,
                                                {
                                                    borderColor:
                                                        index === nextInputIndex
                                                            ? appColors.blue_light
                                                            : appColors.medium_gray,
                                                },
                                            ]}
                                            keyboardType="number-pad"
                                            maxLength={1}
                                            onEndEditing={onVerifyCode}
                                            ref={nextInputIndex === index ? input : null}
                                            onChangeText={text => handleChangeText(text, index)}
                                        />
                                    );
                                })}
                            </View>

                            {/* End */}
                            <View style={{ marginTop: getSize.m(15) }}>
                                <Text
                                    style={[
                                        styles.timeSend,
                                        // eslint-disable-next-line react-native/no-inline-styles
                                    ]}
                                >
                                    {t('verify.time_send')}
                                </Text>
                            </View>
                            {errors.verifyError !== '' && (
                                <View style={{ marginTop: getSize.m(15) }}>
                                    <Text style={styles.error}>{t('verify.error')}</Text>
                                </View>
                            )}
                            <View style={[styles.footer_opt, { marginTop: getSize.m(38) }]}>
                                <Text style={styles.text_not_reach}>
                                    {t('verify.text_not_reach')}
                                </Text>
                                <TouchableOpacity onPress={reSendVerify}>
                                    <Text style={styles.text_link}>{t('verify.text_link')}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
