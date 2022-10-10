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
import { IConnectScreenProps } from './ConnectScreen.type';
import { useViewModel } from './ConnectScreen.viewModel';
import { CardHeaderView } from '@football/app/components/connect-signup/header-connect-signup/CardHeaderView';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';

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
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.flex}>
                    <CardGoBack goBack={onGoBack}></CardGoBack>
                    <ScrollView>
                        <CardHeaderView title={t('connect.title')} />
                        <CardView
                            placeHolderText={t('connect.placeholder')}
                            buttonTitle={t('connect.button')}
                            errors={errors.numberPhone}
                            handleOnChange={() => handleOnChange('', 'numberPhone')}
                            handleError={() => {
                                handleError('', 'numberPhone');
                            }}
                            connect={Connect}
                        />
                        <View style={[appStyles.flex_row_center, { marginTop: getSize.m(30) }]}>
                            <Text style={{ color: appColors.white }}> {t('connect.nosignUp')}</Text>
                            <TouchableOpacity onPress={onNavigateSignUp}>
                                <Text style={{ color: appColors.white, fontFamily: AppFonts.bold }}>
                                    {t('connect.signup')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
