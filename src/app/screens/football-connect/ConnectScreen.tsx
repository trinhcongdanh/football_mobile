import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
    Keyboard,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';

import styles from './ConnectScreen.styles';
import { AppImages } from '@football/app/assets/images';
import { Button } from '@football/app/components/button';
import { useTranslation } from 'react-i18next';
import { AppFonts } from '@football/app/assets/fonts';
import { Input } from '@football/app/components/input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { IConnectScreenProps } from './ConnectScreen.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';

// type Props = {};

export const ConnectScreen = ({ navigation, route }: IConnectScreenProps) => {
    const { t, i18n } = useTranslation();

    const [inputs, setInputs] = useState({
        numberPhone: '',
    });

    const [errors, setErrors] = useState({
        numberPhone: '',
    });

    const handleOnChange = (text: string, input: string) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const goBack = () => {
        navigation.goBack();
    };

    const Connect = () => {
        Keyboard.dismiss();
        if (!inputs.numberPhone) {
            handleError('מספר לא מזוהה', 'numberPhone');
        }
    };

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent"></StatusBar>
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
                    <View
                        style={[
                            appStyles.flex_align_center,
                            { marginTop: getSize.m(10), marginBottom: getSize.m(40), flex: 0 },
                        ]}
                    >
                        <Image
                            resizeMode="contain"
                            source={AppImages.img_logo}
                            style={styles.logo}
                        />
                        <Text style={[appStyles.text_title]}>{t('connect.title')}</Text>
                    </View>
                    <View style={styles.connect_container}>
                        <Input
                            error={errors.numberPhone}
                            placeholder={t('connect.placeholder')}
                            onChangeText={() => handleOnChange('', 'numberPhone')}
                            onFocus={() => {
                                handleError('', 'numberPhone');
                            }}
                        ></Input>
                        <Button onPress={Connect} title={t('connect.button')}></Button>
                        <View
                            style={[
                                appStyles.flex_row_space_center,
                                { marginTop: getSize.m(30), marginBottom: getSize.m(16) },
                            ]}
                        >
                            <View style={styles.line}></View>
                            <Text style={styles.text_or}>{t('connect.or')}</Text>
                            <View style={styles.line}></View>
                        </View>

                        <TouchableOpacity style={[appStyles.flex_row_center, styles.button_link]}>
                            <Image
                                resizeMode="contain"
                                source={AppImages.img_fb}
                                style={styles.image_link}
                            />
                            <Text style={styles.text_link}>{t('connect.fb')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[appStyles.flex_row_center, styles.button_link]}>
                            <Image
                                resizeMode="contain"
                                source={AppImages.img_google}
                                style={styles.image_link}
                            />
                            <Text style={styles.text_link}> {t('connect.gg')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[appStyles.flex_row_center, styles.button_link]}>
                            <Image
                                resizeMode="contain"
                                source={AppImages.img_apple}
                                style={styles.image_link}
                            />
                            <Text style={styles.text_link}> {t('connect.apple')} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[appStyles.flex_row_center]}>
                        <Text style={{ color: appColors.white }}> {t('connect.nosignUp')}</Text>
                        <TouchableOpacity>
                            <Text style={{ color: appColors.white, fontFamily: AppFonts.bold }}>
                                {t('connect.signup')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
