import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { getSize } from '@football/app/utils/responsive/scale';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { ScorersOfGoals } from './layouts/scorers-of-goals/ScorersOfGoals';
import { TopScorers } from './layouts/top-scorers/TopScorers';
import { YellowsCup } from './layouts/yellows-cup/YellowsCup';
import { YellowsLeagues } from './layouts/yellows-leagues/YellowsLeagues';
import { RedCard } from './layouts/red-card/RedCard';
import styles from './StatisticsGroupScreen.style';
import { useViewModel } from './StatisticsGroupScreen.viewModel';
import { IStatisticsGroupScreenProps } from './StatisticsGroupScreen.type';

export const StatisticsGroupScreen = ({ navigation, route }: IStatisticsGroupScreenProps) => {
    const { t, onGoBack } = useViewModel({
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
                            title={t('statistics.group.title')}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="הפועל באר שבע" avt={AppImages.img_aviv} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <ScorersOfGoals />
                        </View>
                        <View style={appStyles.package}>
                            <TopScorers />
                        </View>
                        <View style={appStyles.package}>
                            <YellowsCup />
                        </View>
                        <View style={appStyles.package}>
                            <YellowsLeagues />
                        </View>
                        <View style={appStyles.package}>
                            <RedCard />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
