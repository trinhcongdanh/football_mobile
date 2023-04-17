import { appIcons } from '@football/app/assets/icons/appIcons';
import { BackGround } from '@football/app/components/background/BackGround';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { INotificationScreenProps } from '@football/app/screens/football-notification/NotificationScreen.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useViewModel } from './NotificationScreen.viewModel';
import styles from './NotificationScreen.style';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import FastImage from 'react-native-fast-image';
import { AppImages } from '@football/app/assets/images';
import { useDateTime } from '@football/app/utils/hooks/useDateTime';
import moment from 'moment';

export const NotificationScreen = ({ navigation, route }: INotificationScreenProps) => {
    const {
        t,
        onGoBack,
        contents,
        getTranslationText,
        notifications,
        handleNotification,
    } = useViewModel({
        navigation,
        route,
    });

    const { getDate } = useDateTime();

    console.log('notifications', notifications);

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <CardGoBack
                        iconName={appIcons.ic_right_ios}
                        iconStyle={styles.ic_back}
                        goBack={onGoBack}
                        title={t('notification.title')}
                    />
                </View>

                <View
                    style={[
                        appStyles.main_container,
                        {
                            marginTop: getSize.m(38),
                            backgroundColor: appColors.white,
                        },
                    ]}
                >
                    <View style={[appStyles.align_justify, { marginTop: getSize.m(-50) }]}>
                        <View style={styles.icon_notification}>
                            <FastImage
                                source={AppImages.img_big_bell}
                                style={{ width: getSize.m(40), height: getSize.m(44) }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    </View>
                    <View style={styles.number_notification_active}>
                        <Text style={styles.number_notification_active_text}>
                            {notifications.length} {t('notification.active')}
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        {notifications.map(notification => {
                            return (
                                <TouchableOpacity
                                    style={styles.container_notification}
                                    onPress={() => handleNotification(notification.payload)}
                                >
                                    <View>
                                        <View>
                                            <Text style={styles.text_notification}>
                                                {notification.title}
                                            </Text>
                                            <Text style={styles.text_notification}>
                                                {notification.message}
                                            </Text>
                                        </View>
                                        <View
                                            style={[
                                                appStyles.flex_row_align,
                                                { marginTop: getSize.m(4) },
                                            ]}
                                        >
                                            <Text style={styles.date_time}>
                                                {moment(
                                                    notification.tc_item_creation,
                                                    'DD-MM-YYY'
                                                ).format('DD/MM')}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </BackGround>
        </View>
    );
};
