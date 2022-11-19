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
import styles from './StatisticDetailsScreen.style';
import { useViewModel } from './StatisticDetailsScreen.viewModel';
import { IStatisticDetailsScreenProps } from './StatisticDetailsScreen.type';

export const StatisticDetailsScreen = ({ navigation, route }: IStatisticDetailsScreenProps) => {
    const { t, onGoBack, listGoals } = useViewModel({
        navigation,
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
                            title={t('statistics.leagues.goal')}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="ליגת הבורסה לניירות ערך" avt={AppImages.img_leagues} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <View style={appStyles.item_statistics}>
                                <View
                                    style={[
                                        appStyles.flex_row_space_center,
                                        {
                                            paddingHorizontal: getSize.m(4),
                                        },
                                    ]}
                                >
                                    <View style={{ width: getSize.m(120) }}>
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                { textAlign: 'left' },
                                            ]}
                                        >
                                            {t('statistics.leagues.name_club')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(120) }}>
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                { textAlign: 'left' },
                                            ]}
                                        >
                                            {t('statistics.leagues.name_player')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(40) }}>
                                        <Text style={appStyles.statistics_header}>
                                            {t('statistics.leagues.gate')}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: getSize.m(10) }}>
                                    {listGoals.map(item => {
                                        return (
                                            <View
                                                key={item.id}
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    appStyles.statistic_row,
                                                    {
                                                        backgroundColor:
                                                            item.id % 2 === 1
                                                                ? appColors.blue_matte
                                                                : appColors.gray,
                                                    },
                                                ]}
                                            >
                                                <View
                                                    style={{
                                                        width: getSize.m(120),
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                        }}
                                                    >
                                                        <Avatar
                                                            source={item.avt_club}
                                                            rounded
                                                            size={18}
                                                        />
                                                        <Text
                                                            style={[
                                                                appStyles.statistics_content,
                                                                {
                                                                    marginLeft: getSize.m(10),
                                                                },
                                                            ]}
                                                        >
                                                            {item.name_club}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(120),
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                        }}
                                                    >
                                                        <Avatar
                                                            source={item.avt_player}
                                                            rounded
                                                            size={18}
                                                        />
                                                        <Text
                                                            style={[
                                                                appStyles.statistics_content,
                                                                {
                                                                    marginLeft: getSize.m(10),
                                                                },
                                                            ]}
                                                        >
                                                            {item.name_player}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(40),
                                                    }}
                                                >
                                                    <Text style={appStyles.statistics_content}>
                                                        {item.gate}
                                                    </Text>
                                                </View>
                                            </View>
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
