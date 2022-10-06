import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    I18nManager,
    Image,
    Text,
} from 'react-native';
import React, { useEffect } from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { useTranslation } from 'react-i18next';
import { getSize } from '@football/app/utils/responsive/scale';
import { IRegisterScreenProps } from './RegisterScreen.type';
import { styles } from './RegisterScreen.styles';
import { useViewModel } from './RegisterScreen.viewModel';

export const RegisterScreen = ({ navigation, route }: IRegisterScreenProps) => {
    const { onGoBack } = useViewModel({ navigation, route });
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (i18n.language === 'en') {
            I18nManager.forceRTL(false);
        } else {
            I18nManager.forceRTL(true);
        }
    }, [i18n.language]);

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
                    <View style={[appStyles.flex_align_center, { marginTop: getSize.m(10) }]}>
                        <Image
                            resizeMode="contain"
                            source={AppImages.img_logo}
                            style={styles.logo}
                        />
                        <Text style={appStyles.text_title}>{t('sign_up')}</Text>
                        <Text style={appStyles.text_sub_title}>{t('join_us')}</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
