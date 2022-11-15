import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { getSize } from '@football/app/utils/responsive/scale';
import { ScoresGoals } from './layout/scores-goals/ScoresGoals';
import { AccumulationYellows } from './layout/accumulation-yellows/AccumulationYellows';
import { AccumulationReds } from './layout/accumulation-reds/AccumulationReds';
import { AverageYellows } from './layout/average-yellows/AverageYellows';
import { AverageScores } from './layout/average-scores/AverageScores';
import { AverageRebounds } from './layout/average-rebounds/AverageRebounds';
import { LeaguesAverage } from './layout/leagues-average/LeaguesAverage';
import { TeamCompetition } from './layout/team-competition/TeamCompetition';
import { HistoryChampionShips } from './layout/history-championships/HistoryChampionShips';
import styles from './StatisticsLeaguesScreen.style';
import { useViewModel } from './StatisticsLeaguesScreen.viewModel';
import { IStatisticsLeaguesScreenProps } from './StatisticsLeaguesScreen.type';
export const StatisticsLeaguesScreen = ({ navigation, route }: IStatisticsLeaguesScreenProps) => {
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
                        <HeaderLogo text="הפועל באר שבע" avt={AppImages.img_leagues} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <ScoresGoals />
                        </View>
                        <View style={appStyles.package}>
                            <AccumulationYellows />
                        </View>
                        <View style={appStyles.package}>
                            <AccumulationReds />
                        </View>
                        <View style={appStyles.package}>
                            <AverageYellows />
                        </View>
                        <View style={appStyles.package}>
                            <AverageScores />
                        </View>
                        <View style={appStyles.package}>
                            <AverageRebounds />
                        </View>
                        <View style={appStyles.package}>
                            <LeaguesAverage />
                        </View>
                        <View style={appStyles.package}>
                            <TeamCompetition />
                        </View>
                        <View style={appStyles.package}>
                            <HistoryChampionShips />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
