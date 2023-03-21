import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Text,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslation } from 'react-i18next';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardView } from '@football/app/components/connect-signup/card-connect-signup/CardView';
import { CardHeaderView } from '@football/app/components/connect-signup/header-connect-signup/CardHeaderView';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IRegisterScreenProps } from './RegisterScreen.type';
import { styles } from './RegisterScreen.styles';
import { useViewModel } from './RegisterScreen.viewModel';

export const RegisterScreen = ({ navigation, route }: IRegisterScreenProps) => {
    const {
        onGoBack,
        errors,
        phoneNumberRef,
        phoneNumber,
        handleError,
        handleOnChange,
        connect,
        onNavigateConnect,
        connectFacebook,
        connectGoogle,
        connectApple,
        numberPhone,
    } = useViewModel({
        navigation,
        route,
    });
    const { t } = useTranslation();

    return (
        <View style={appStyles.flex}>
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
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                        />
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            showsVerticalScrollIndicator={false}
                        >
                            <CardHeaderView
                                option="1"
                                title={t('register.title')}
                                sub_title={t('register.sub_title')}
                            />
                            <CardView
                                option="1"
                                connectFacebook={connectFacebook}
                                connectGoogle={connectGoogle}
                                input={phoneNumber}
                                inputRef={phoneNumberRef}
                                errors={errors.numberPhone}
                                titleCard={t('register.registerByPhone')}
                                placeHolderText={t('register.phoneNumber')}
                                buttonTitle={t('register.submit')}
                                onChangeTextInput={handleOnChange}
                                handleError={() => {
                                    handleError('', 'numberPhone');
                                }}
                                connectApple={connectApple}
                                connect={connect}
                                facebook={t('register.fb')}
                                google={t('register.gg')}
                                apple={t('register.apple')}
                            />
                            <View
                                style={[
                                    appStyles.flex_row_center,
                                    { marginTop: getSize.m(67), marginBottom: getSize.m(35) },
                                ]}
                            >
                                <Text style={styles.txt_have_user}>
                                    {t('register.alreadyUser')}
                                </Text>
                                <TouchableOpacity
                                    onPress={onNavigateConnect}
                                    style={styles.btn_connect}
                                >
                                    <Text style={styles.txt_connect}>{t('register.connect')}</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
