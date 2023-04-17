import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { AccumulationReds } from './layout/accumulation-reds/AccumulationReds';
import { AccumulationYellows } from './layout/accumulation-yellows/AccumulationYellows';
import { AverageRebounds } from './layout/average-rebounds/AverageRebounds';
import { AverageScores } from './layout/average-scores/AverageScores';
import { AverageYellows } from './layout/average-yellows/AverageYellows';
import { HistoryChampionShips } from './layout/history-championships/HistoryChampionShips';
import { LeaguesAverage } from './layout/leagues-average/LeaguesAverage';
import { ScoresGoals } from './layout/scores-goals/ScoresGoals';
import styles from './StatisticsLeaguesScreen.style';
import { IStatisticsLeaguesScreenProps } from './StatisticsLeaguesScreen.type';
import { useViewModel } from './StatisticsLeaguesScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

export const StatisticsLeaguesScreen = ({ navigation, route }: IStatisticsLeaguesScreenProps) => {
    const { t, onGoBack, leagueSeasonStats } = useViewModel({
        navigation,
        route,
    });
    const { getTranslationText } = useTranslationText();
    return (
        <View style={appStyles.flex}>
            {leagueSeasonStats && (
                <BackGround>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('statistics.group.title')}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo
                            text={getTranslationText({
                                textHe: leagueSeasonStats.league_name_he,
                                textEn: leagueSeasonStats.league_name_en,
                            })}
                            avt={{ uri: leagueSeasonStats.league_logo_url }}
                        />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <ScoresGoals
                                goalKickers={leagueSeasonStats.goal_kickers || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                        <View style={appStyles.package}>
                            <AccumulationYellows
                                yellowCards={leagueSeasonStats.yellow_cards || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                        <View style={appStyles.package}>
                            <AccumulationReds
                                redCards={leagueSeasonStats.red_cards || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                        <View style={appStyles.package}>
                            <AverageYellows
                                avgCards={leagueSeasonStats.avg_game_yellow_cards || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                        <View style={appStyles.package}>
                            <AverageScores
                                avgGoalKicker={leagueSeasonStats.avg_game_goals_kicked || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                        <View style={appStyles.package}>
                            <AverageRebounds
                                avgRebounds={leagueSeasonStats.avg_game_goals_received || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                        <View style={appStyles.package}>
                            <LeaguesAverage data={leagueSeasonStats} />
                        </View>
                        {/* <View style={appStyles.package}>
                            <TeamCompetition />
                        </View> */}
                        <View style={appStyles.package}>
                            <HistoryChampionShips
                                championshipHistory={leagueSeasonStats.championship_history || []}
                                leagueSeasonStats={leagueSeasonStats}
                            />
                        </View>
                    </ScrollView>
                </BackGround>
            )}
        </View>
    );
};
