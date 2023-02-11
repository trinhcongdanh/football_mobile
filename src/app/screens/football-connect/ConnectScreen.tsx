import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React from 'react';

import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardView } from '@football/app/components/connect-signup/card-connect-signup/CardView';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { CardHeaderView } from '@football/app/components/connect-signup/header-connect-signup/CardHeaderView';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IConnectScreenProps } from './ConnectScreen.type';
import { useViewModel } from './ConnectScreen.viewModel';
import styles from './ConnectScreen.styles';

// type Props = {};

export const ConnectScreen = ({ navigation, route }: IConnectScreenProps) => {
    const { t } = useTranslation();
    const {
        errors,
        handleError,
        handleOnChange,
        onNavigateSignUp,
        Connect,
        onGoBack,
        connectFacebook,
        connectGoogle,
        connectApple,
        phoneNumberRef,
        phoneNumber,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                        />
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <CardHeaderView
                                option="0"
                                style={{
                                    fontSize: getSize.m(20),
                                    lineHeight: getSize.m(26),
                                    marginTop: getSize.m(16),
                                }}
                                title={t('connect.title')}
                            />
                            <CardView
                                option="0"
                                placeHolderText={t('connect.placeholder')}
                                buttonTitle={t('connect.button')}
                                errors={errors.numberPhone}
                                input={phoneNumber}
                                inputRef={phoneNumberRef}
                                onChangeTextInput={handleOnChange}
                                handleError={() => {
                                    handleError('', 'numberPhone');
                                }}
                                connect={Connect}
                                connectApple={connectApple}
                                connectFacebook={connectFacebook}
                                connectGoogle={connectGoogle}
                            />
                            <View
                                style={[
                                    appStyles.flex_row_center,
                                    { marginTop: getSize.m(23), marginBottom: getSize.m(30) },
                                ]}
                            >
                                <Text
                                    style={{
                                        color: appColors.text_grey,
                                        fontFamily: AppFonts.regular,
                                        lineHeight: getSize.m(24),
                                        fontSize: getSize.m(14),
                                    }}
                                >
                                    {' '}
                                    {t('connect.nosignUp')}
                                </Text>
                                <TouchableOpacity onPress={onNavigateSignUp}>
                                    <Text
                                        style={{
                                            color: appColors.text_grey,
                                            fontFamily: AppFonts.bold,
                                            lineHeight: getSize.m(24),
                                            fontSize: getSize.m(14),
                                        }}
                                    >
                                        {t('connect.signup')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
