import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Image,
    Text,
    ScrollView,
} from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { useTranslation } from 'react-i18next';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardView } from '@football/app/components/card-connect-signup/CardView';
import { IRegisterScreenProps } from './RegisterScreen.type';
import { styles } from './RegisterScreen.styles';
import { useViewModel } from './RegisterScreen.viewModel';

export const RegisterScreen = ({ navigation, route }: IRegisterScreenProps) => {
    const {
        onGoBack,
        inputs,
        errors,
        handleError,
        handleOnChange,
        connect,
        onNavigateConnect,
    } = useViewModel({
        navigation,
        route,
    });
    const { t, i18n } = useTranslation();

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.flex}>
                    <View style={appStyles.container}>
                        <TouchableOpacity style={styles.ic_back} onPress={onGoBack}>
                            <Icon name={appIcons.ic_right_ios} size={20} color={appColors.white} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <View style={[appStyles.flex_align_center, { marginTop: getSize.m(10) }]}>
                            <Image
                                resizeMode="contain"
                                source={AppImages.img_logo}
                                style={styles.logo}
                            />
                            <Text style={appStyles.text_title}>{t('welcome.sign_up')}</Text>
                            <Text style={appStyles.text_sub_title}>{t('welcome.join_us')}</Text>
                        </View>
                        <CardView
                            errors={errors.numberPhone}
                            titleCard={t('register.registerByPhone')}
                            placeHolderText={t('register.phoneNumber')}
                            buttonTitle={t('register.submit')}
                            handleOnChange={() => handleOnChange('', 'numberPhone')}
                            handleError={() => {
                                handleError('', 'numberPhone');
                            }}
                            connect={connect}
                        />
                        <View style={[appStyles.flex_row_center, { marginTop: getSize.m(60) }]}>
                            <Text style={styles.txt_have_user}>{t('register.alreadyUser')}</Text>
                            <TouchableOpacity
                                onPress={onNavigateConnect}
                                style={styles.btn_connect}
                            >
                                <Text style={styles.txt_connect}>{t('register.connect')}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
