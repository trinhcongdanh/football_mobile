import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { getSize } from '@football/app/utils/responsive/scale';
import LinearGradient from 'react-native-linear-gradient';
import { ICupsScreenProps } from '@football/app/screens/football-cups/CupsScreen.type';
import { useViewModel } from '@football/app/screens/football-cups/CupsScreen.viewModel';
import styles from '@football/app/screens/football-cups/CupsScreen.style';

export const CupsScreen = ({ route }: ICupsScreenProps) => {
    const { t, onGoBack, cupHolders, getTranslationText, cup } = useViewModel({
        route,
    });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title="מחזיקות גביע"
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text={cup?.name_he} avt={{ uri: cup?.logo_url }} />
                        <View
                            style={[
                                appStyles.package,
                                { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                            ]}
                        >
                            <View style={appStyles.item_statistics}>
                                <View
                                    style={[
                                        appStyles.flex_row_space_center,
                                        {
                                            paddingHorizontal: getSize.m(4),
                                        },
                                    ]}
                                >
                                    <View style={{ width: getSize.m(80) }}>
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                {
                                                    textAlign: 'left',
                                                    fontSize: getSize.m(12),
                                                    left: getSize.m(10),
                                                },
                                            ]}
                                        >
                                            {t('state_cup.cup.year')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(180) }}>
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                { textAlign: 'left', fontSize: getSize.m(12) },
                                            ]}
                                        >
                                            {t('state_cup.cup.name')}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: getSize.m(10) }}>
                                    {cupHolders.map((item, index) => {
                                        return (
                                            <LinearGradient
                                                key={item.cup_season_id}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                colors={[
                                                    index % 2 === 1
                                                        ? 'rgba(16, 32, 100, 0.04)'
                                                        : appColors.gray,
                                                    index % 2 === 1
                                                        ? 'rgba(59, 168, 225, 0.04)'
                                                        : appColors.gray,
                                                ]}
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    appStyles.statistic_row,
                                                ]}
                                            >
                                                <View
                                                    style={{
                                                        overflow: 'hidden',
                                                        width: getSize.m(80),
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                fontSize: getSize.m(14),
                                                            },
                                                        ]}
                                                    >
                                                        {item.cup_season_name}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(180),
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                        }}
                                                    >
                                                        <Avatar
                                                            source={{ uri: item.team_image_url }}
                                                            rounded
                                                            size={18}
                                                        />
                                                        <Text
                                                            style={[
                                                                appStyles.statistics_content,
                                                                {
                                                                    marginLeft: getSize.m(10),
                                                                    fontSize: getSize.m(14),
                                                                },
                                                            ]}
                                                        >
                                                            {getTranslationText({
                                                                textEn: item.team_name_en,
                                                                textHe: item.team_name_he,
                                                            })}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
