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
import { BackGround } from '@football/app/components/background/BackGround';

export const CupsScreen = ({ route }: ICupsScreenProps) => {
    const { t, onGoBack, cupHolders, getTranslationText, cup, cyclesDetails } = useViewModel({
        route,
    });

    const isCupHolders = !!cupHolders;
    const data = isCupHolders ? cupHolders : cyclesDetails;

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
                            title={
                                isCupHolders ? t('state_cup.cup.trophy') : t('state_cup.cup.around')
                            }
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo
                            text={getTranslationText({
                                textHe: cup?.name_he,
                                textEn: cup?.name_en,
                            })}
                            avt={{ uri: cup?.logo_url }}
                        />
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
                                    <View style={{ width: getSize.m(84) }}>
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
                                            {isCupHolders
                                                ? t('state_cup.cup.year')
                                                : t('state_cup.cup.date')}
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
                                    {data.map((item: any, index) => {
                                        return (
                                            <LinearGradient
                                                key={index}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                colors={[
                                                    index % 2 === 1
                                                        ? appColors.linearLight
                                                        : appColors.gray,
                                                    index % 2 === 1
                                                        ? appColors.linearDark
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
                                                        width: getSize.m(84),
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
                                                        {isCupHolders
                                                            ? item.cup_season_name
                                                            : item.date}
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
                                                        {isCupHolders && (
                                                            <Avatar
                                                                source={{
                                                                    uri: item.team_image_url,
                                                                }}
                                                                rounded
                                                                size={18}
                                                            />
                                                        )}

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
                                                                textEn: isCupHolders
                                                                    ? item.team_name_en
                                                                    : item.group_name_en,
                                                                textHe: isCupHolders
                                                                    ? item.team_name_he
                                                                    : item.group_name_he,
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
            </BackGround>
        </View>
    );
};
