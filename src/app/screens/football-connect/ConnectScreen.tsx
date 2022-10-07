import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React from 'react';

import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { AppFonts } from '@football/app/assets/fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardView } from '@football/app/components/card-connect-signup/CardView';
import styles from './ConnectScreen.styles';
import { IConnectScreenProps } from './ConnectScreen.type';
import { useViewModel } from './ConnectScreen.viewModel';

// type Props = {};

export const ConnectScreen = ({ navigation, route }: IConnectScreenProps) => {
    const { t } = useTranslation();
    const {
        inputs,
        errors,
        handleError,
        handleOnChange,
        onNavigateSignUp,
        Connect,
        goBack,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.flex}>
                    <View style={appStyles.container}>
                        <TouchableOpacity style={styles.icon_back} onPress={goBack}>
                            <Icon
                                name={appIcons.ic_right_android}
                                size={20}
                                color={appColors.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={styles.logo_container}>
                            <Image
                                resizeMode="contain"
                                source={AppImages.img_logo}
                                style={styles.logo}
                            />
                            <Text style={[appStyles.text_title]}>{t('connect.title')}</Text>
                        </View>
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
