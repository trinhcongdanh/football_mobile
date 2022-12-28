import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { InputDark } from '@football/app/components/input_dark/InputDark';
import styles from '@football/app/screens/football-confirmation/ConfirmationScreen.style';
import { useViewModel } from '@football/app/screens/football-confirmation/ConfirmationScreen.viewModel';
import { IConfirmationScreenProps } from '@football/app/screens/football-confirmation/ConfirmationScreen.type';
export const ConfirmationScreen = ({ navigation, route }: IConfirmationScreenProps) => {
    const {
        t,
        onGoBack,
        fullNameRef,
        emailRef,
        phoneNumberRef,
        cityRef,
        streetRef,
        noHomeRef,
        fullName,
        email,
        phoneNumber,
        city,
        street,
        noHome,
        setFullName,
        setEmail,
        setPhoneNumber,
        setCity,
        setStreet,
        setNoHome,
        toggleOnCheck,
        onCheck,
    } = useViewModel({ navigation, route });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background_award} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <View style={[appStyles.flex_row_space_center, styles.header]}>
                            <View>
                                <Image source={AppImages.img_x_circle} />
                            </View>

                            <Text
                                style={[
                                    appStyles.text_title,
                                    { width: getSize.m(240), marginTop: getSize.m(0) },
                                ]}
                            >
                                {t('reward.title')}
                            </Text>

                            <TouchableOpacity onPress={onGoBack}>
                                <LinearGradient
                                    colors={['rgba(44, 196, 255, 1)', 'rgba(0, 139, 193, 1)']}
                                    style={styles.question_close}
                                >
                                    <Icon
                                        name={appIcons.ic_close}
                                        size={getSize.m(20)}
                                        color={appColors.white}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.confirmation}>
                            <View style={{ marginTop: getSize.m(-50) }}>
                                <LinearGradient
                                    colors={['rgba(212, 222, 231, 1)', 'rgba(154, 183, 213, 1)']}
                                    style={styles.confirmation_reward_bg_logo}
                                >
                                    <LinearGradient
                                        colors={[
                                            'rgba(122, 211, 255, 0.25)',
                                            'rgba(81, 184, 235, 0.09)',
                                        ]}
                                        style={styles.confirmation_reward_score_bg_logo}
                                    >
                                        <Image
                                            source={AppImages.img_scarf}
                                            style={{ width: getSize.m(45), height: getSize.m(36) }}
                                        />
                                    </LinearGradient>
                                </LinearGradient>
                            </View>
                            <View>
                                <Text style={styles.confirmation_reward_title}>
                                    צעיף ADIDAS מונדיאל 2022
                                </Text>
                                <Text style={styles.confirmation_reward_subtitle}>
                                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף
                                    קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו
                                    בלוקריה שיצמה ברורק.
                                </Text>
                                <LinearGradient
                                    colors={[
                                        'rgba(255, 255, 255, 0)',
                                        'rgba(255, 255, 255, 1)',
                                        'rgba(255, 255, 255, 0)',
                                    ]}
                                    start={{ x: 0.0, y: 0.0 }}
                                    end={{ x: 1.0, y: 1.0 }}
                                    style={styles.confirmation_reward_line}
                                />
                                <Text style={styles.confirmation_reward_require}>
                                    {t('confirmation.require')}
                                </Text>
                            </View>
                            <View style={{ width: '100%', marginTop: getSize.m(18) }}>
                                <InputDark
                                    label={t('confirmation.full_name')}
                                    inputRef={fullNameRef}
                                    input={fullName}
                                    OnChangeTextInput={text => setFullName(text)}
                                />
                                <InputDark
                                    label={t('confirmation.email')}
                                    inputRef={emailRef}
                                    input={email}
                                    OnChangeTextInput={text => setEmail(text)}
                                />
                                <InputDark
                                    label={t('confirmation.phone')}
                                    inputRef={phoneNumberRef}
                                    input={phoneNumber}
                                    OnChangeTextInput={text => setPhoneNumber(text)}
                                />
                                <InputDark
                                    label={t('confirmation.city')}
                                    inputRef={cityRef}
                                    input={city}
                                    OnChangeTextInput={text => setCity(text)}
                                />
                                <InputDark
                                    label={t('confirmation.street')}
                                    inputRef={streetRef}
                                    input={street}
                                    OnChangeTextInput={text => setStreet(text)}
                                />
                                <InputDark
                                    label={t('confirmation.no_home')}
                                    inputRef={noHomeRef}
                                    input={noHome}
                                    OnChangeTextInput={text => setNoHome(text)}
                                />
                            </View>
                            <View style={appStyles.flex_row_content_center}>
                                <TouchableOpacity
                                    style={[
                                        styles.confirmation_reward_check,
                                        {
                                            backgroundColor: onCheck
                                                ? appColors.blue_light
                                                : appColors.white,
                                        },
                                    ]}
                                    onPress={toggleOnCheck}
                                >
                                    {onCheck && (
                                        <Icon name={appIcons.ic_check} color={appColors.white} />
                                    )}
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.confirmation_reward_provision}>
                                        {t('confirmation.provision')}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(30), width: '100%' }}>
                                <TouchableOpacity>
                                    <LinearGradient
                                        colors={['rgba(60, 147, 232,1)', 'rgba(38, 93, 199, 1)']}
                                        style={styles.confirmation_button}
                                    >
                                        <Text style={styles.confirmation_button_text}>
                                            {t('confirmation.button')}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
