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

export const NotificationScreen = ({ navigation, route }: INotificationScreenProps) => {
    const { t, onGoBack, contents, getTranslationText } = useViewModel({ navigation, route });

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
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
                                {contents.length} {t('notification.active')}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        <ScrollView>
                            {contents.map(content => {
                                return (
                                    <TouchableOpacity style={styles.container_notification}>
                                        <View>
                                            <Text style={styles.text_notification}>
                                                {getTranslationText({
                                                    textHe: content?.content_he,
                                                    textEn: content?.content_en,
                                                })}
                                            </Text>
                                            <View
                                                style={[
                                                    appStyles.flex_row_align,
                                                    { marginTop: getSize.m(4) },
                                                ]}
                                            >
                                                <Text style={styles.date_time}>{content.time}</Text>
                                                <Text style={styles.date_time}>{content.date}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </BackGround>
        </View>
    );
};
