import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import Input from '../../input/Input';
import { Button } from '../../button';
import { styles } from './CardView.style';
import { ICardViewProps } from './CardView.types';

export const CardView = ({ errors, handleOnChange, handleError, connect }: ICardViewProps) => {
    const { t } = useTranslation();
    return (
        <View style={styles.mr_top}>
            <View style={styles.connect_container}>
                <Text style={styles.txt_register}>{t('register.registerByPhone')}</Text>
                <Input
                    error={errors}
                    placeholder={t('register.phoneNumber')}
                    onChangeText={handleOnChange}
                    onFocus={handleError}
                />
                <Button onPress={connect} title={t('register.submit')} />
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        { marginTop: getSize.m(30), marginBottom: getSize.m(16) },
                    ]}
                >
                    <View style={styles.line} />
                    <Text style={styles.text_or}>{t('connect.or')}</Text>
                    <View style={styles.line} />
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
        </View>
    );
};
