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
import { appColors } from '@football/app/utils/constants/appColors';

export const CardView = ({
    errors,
    input,
    inputRef,
    onChangeTextInput,
    handleError,
    connect,
    connectFacebook,
    connectGoogle,
    option,
}: ICardViewProps) => {
    const { t } = useTranslation();
    return (
        <View style={styles.mr_top}>
            <View style={styles.connect_container}>
                {option === '1' && (
                    <Text style={styles.txt_register}>{t('register.registerByPhone')}</Text>
                )}

                <Input
                    input={input}
                    inputRef={inputRef}
                    error={errors}
                    placeholder={t('register.phoneNumber')}
                    onChangeTextInput={onChangeTextInput}
                    onFocus={handleError}
                />
                <Button
                    style={{ borderRadius: getSize.m(15) }}
                    disabled={input !== '' ? false : true}
                    onPress={connect}
                    title={t('register.submit')}
                />

                <View style={{ paddingHorizontal: getSize.m(17) }}>
                    <View
                        style={[
                            appStyles.flex_row_space_center,
                            { marginTop: getSize.m(29), marginBottom: getSize.m(35) },
                        ]}
                    >
                        <View style={styles.line} />
                        <Text style={styles.text_or}>{t('connect.or')}</Text>
                        <View style={styles.line} />
                    </View>

                    <TouchableOpacity
                        onPress={connectFacebook}
                        style={[appStyles.flex_row_center, styles.button_link]}
                    >
                        <Image
                            resizeMode="contain"
                            source={AppImages.img_fb}
                            style={styles.image_link}
                        />
                        <Text style={styles.text_link}>{t('connect.fb')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={connectGoogle}
                        style={[appStyles.flex_row_center, styles.button_link]}
                    >
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
        </View>
    );
};
