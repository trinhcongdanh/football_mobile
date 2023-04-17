import { View, Text, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { Avatar } from 'react-native-elements';
import { getSize } from '@football/app/utils/responsive/scale';
import styles from './HistoryScreen.style';
import { useViewModel } from './HistoryScreen.viewModel';
import { IHistoryScreenProps } from './HistoryScreen.type';
import { BackGround } from '@football/app/components/background/BackGround';

export const HistoryScreen = ({ navigation, route }: IHistoryScreenProps) => {
    const { onGoBack, t, datas } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <CardGoBack
                        iconName={appIcons.ic_right_ios}
                        iconStyle={styles.ic_back}
                        goBack={onGoBack}
                        title={t('history.title')}
                    />
                </View>
                <View style={[appStyles.flex, appStyles.main_container]}>
                    <View style={[appStyles.flex_row_center, { flex: 0 }]}>
                        <View style={styles.logo_club}>
                            <Avatar source={AppImages.img_logo} size={getSize.m(20)} />
                        </View>
                        <Text style={[appStyles.text_header, { marginLeft: getSize.m(14) }]}>
                            {t('history.header')}
                        </Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                                marginHorizontal: getSize.m(15),
                                marginTop: getSize.m(34),
                                marginBottom: getSize.m(15),
                            }}
                        >
                            <View style={[appStyles.flex_row_space_center, styles.label]}>
                                <Text style={styles.text_label}>{t('history.campaign_name')}</Text>
                                <Text style={styles.text_label}>{t('history.year')}</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: getSize.m(29) }}>
                            {datas.map(item => {
                                return (
                                    <View
                                        key={item.id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            { paddingVertical: getSize.m(10) },
                                        ]}
                                    >
                                        <Text style={styles.campaign}>{item.campaign}</Text>
                                        <Text style={styles.year}>{item.year}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </BackGround>
        </View>
    );
};
