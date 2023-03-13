import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { IModalProps } from '@football/app/components/modal/Modal.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '@football/app/components/button';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { styles } from './Modal.styles';

export const Modal = ({ title, subTitle, onClose, onOk, onDismiss }: IModalProps) => {
    const { t } = useTranslation();

    return (
        <>
            <View style={[appStyles.container]}>
                <View style={[appStyles.flex_row_space_center, { padding: getSize.m(10) }]}>
                    <TouchableOpacity onPress={onDismiss}>
                        <IconIonicons
                            name={appIcons.ic_close}
                            color={appColors.black}
                            size={getSize.m(20)}
                            style={styles.close}
                        />
                    </TouchableOpacity>
                    {/* <View></View> */}
                </View>

                <View style={[appStyles.flex_row_align_center]}>
                    <View style={[appStyles.flex_align_center]}>
                        <FastImage
                            style={{
                                width: getSize.m(40),
                                height: getSize.m(40),
                                borderRadius: getSize.m(40),
                            }}
                            source={AppImages.img_israel}
                        />
                    </View>
                </View>

                <View style={[appStyles.align_justify]}>
                    <View
                        style={[
                            appStyles.flex_row_align_center,
                            { paddingVertical: getSize.m(15) },
                        ]}
                    >
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={[appStyles.flex_row_align_center]}>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
                <View style={[{ width: '100%', marginTop: getSize.m(30) }]}>
                    <Button style={styles.button_ok} title={t('welcome.start')} onPress={onOk} />
                    <TouchableOpacity style={styles.button_sign_up} onPress={onClose}>
                        <Text style={styles.text_button_sign_up}>{t('welcome.create')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};
