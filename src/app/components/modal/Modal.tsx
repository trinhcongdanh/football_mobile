import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { Button } from '@football/app/components/button';
import { IModalProps } from '@football/app/components/modal/Modal.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, BackHandler, Modal, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { styles } from './Modal.styles';

const AlertModal = ({
    title,
    subTitle,
    onOption1,
    onOption2,
    onDismiss,
    visible,
    option1,
    option2,
    exitApp,
}: IModalProps) => {
    const { t } = useTranslation();

    if (!visible) {
        return <></>;
    }

    const dismiss = () => {
        global.props.closeAlert();
        onDismiss?.();
    };

    return (
        <>
            <Modal
                animationType="fade"
                transparent
                statusBarTranslucent
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    global.props.closeAlert();
                }}
            >
                <View style={[styles.centeredView]}>
                    <View
                        style={[
                            appStyles.container,
                            {
                                backgroundColor: appColors.white,
                                paddingBottom: getSize.m(30),
                                margin: getSize.m(15),
                                borderRadius: getSize.m(20),
                            },
                        ]}
                    >
                        <View
                            style={[appStyles.flex_row_space_center, { paddingTop: getSize.m(15) }]}
                        >
                            {exitApp ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        global.props.closeAlert();
                                        BackHandler.exitApp();
                                    }}
                                >
                                    <IconIonicons
                                        name={appIcons.ic_close}
                                        color={appColors.black}
                                        size={getSize.m(20)}
                                        style={styles.close}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={dismiss}>
                                    <IconIonicons
                                        name={appIcons.ic_close}
                                        color={appColors.black}
                                        size={getSize.m(20)}
                                        style={styles.close}
                                    />
                                </TouchableOpacity>
                            )}

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
                                    source={AppImages.img_logo}
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
                            {subTitle && (
                                <View style={[appStyles.flex_row_align_center]}>
                                    <Text style={styles.subTitle}>{subTitle}</Text>
                                </View>
                            )}
                        </View>
                        <View style={[{ width: '100%', marginTop: getSize.m(30) }]}>
                            {option1 && (
                                <Button
                                    style={styles.button_ok}
                                    title={option1}
                                    onPress={onOption1}
                                />
                            )}
                            {option2 && (
                                <TouchableOpacity style={styles.button_sign_up} onPress={onOption2}>
                                    <Text style={styles.text_button_sign_up}>{option2}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default AlertModal;
