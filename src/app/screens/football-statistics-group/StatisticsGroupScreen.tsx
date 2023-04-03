import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { getSize } from '@football/app/utils/responsive/scale';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { MAX_LEAGUE_SEASON_STATS_ITEMS } from '@football/core/api/configs/config';
import { ScorersOfGoals } from './layouts/scorers-of-goals/ScorersOfGoals';
import { TopScorers } from './layouts/top-scorers/TopScorers';
import { YellowsCup } from './layouts/yellows-cup/YellowsCup';
import { YellowsLeagues } from './layouts/yellows-leagues/YellowsLeagues';
import { RedCard } from './layouts/red-card/RedCard';
import styles from './StatisticsGroupScreen.style';
import { useViewModel } from './StatisticsGroupScreen.viewModel';
import { IStatisticsGroupScreenProps, TeamGoalKickersListType } from './StatisticsGroupScreen.type';
import { ScoresOfGoalsStateCup } from '@football/app/screens/football-statistics-group/layouts/scores-of-goals-state-cup/ScoresOfGoalsStateCup';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { BackGround } from '@football/app/components/background/BackGround';

export const StatisticsGroupScreen = ({ navigation, route }: IStatisticsGroupScreenProps) => {
    const { t, onGoBack, teamSeasonStats, handleTeamGoalKickersList } = useViewModel({
        navigation,
        route,
    });
    const { getTranslationText } = useTranslationText();
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
                            title={t('statistics.group.title')}
                        />
                    </View>
                    {teamSeasonStats && (
                        <ScrollView>
                            <HeaderLogo
                                text={getTranslationText({
                                    textHe: teamSeasonStats.team_name_he,
                                    textEn: teamSeasonStats.team_name_en,
                                })}
                                avt={{ uri: teamSeasonStats.team_logo_url }}
                            />
                            <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                                <ScorersOfGoals
                                    listGames={teamSeasonStats.goal_kickers_league.slice(
                                        0,
                                        MAX_LEAGUE_SEASON_STATS_ITEMS
                                    )}
                                    handleTeamGoalKickersList={() =>
                                        handleTeamGoalKickersList(
                                            TeamGoalKickersListType.GoalKickersLeague
                                        )
                                    }
                                />
                            </View>
                            <View style={[appStyles.package]}>
                                <ScoresOfGoalsStateCup
                                    listGames={teamSeasonStats.goal_kickers_national_cup.slice(
                                        0,
                                        MAX_LEAGUE_SEASON_STATS_ITEMS
                                    )}
                                    handleTeamGoalKickersList={() =>
                                        handleTeamGoalKickersList(
                                            TeamGoalKickersListType.GoalKickersNationalCup
                                        )
                                    }
                                />
                            </View>
                            <View style={appStyles.package}>
                                <TopScorers
                                    listGames={teamSeasonStats.goal_kickers_toto_cup.slice(
                                        0,
                                        MAX_LEAGUE_SEASON_STATS_ITEMS
                                    )}
                                    handleTeamGoalKickersList={() =>
                                        handleTeamGoalKickersList(
                                            TeamGoalKickersListType.GoalKickersTotoCup
                                        )
                                    }
                                />
                            </View>
                            <View style={appStyles.package}>
                                <YellowsCup
                                    listGames={teamSeasonStats.yellow_cards_toto_cup.slice(
                                        0,
                                        MAX_LEAGUE_SEASON_STATS_ITEMS
                                    )}
                                    handleTeamGoalKickersList={() =>
                                        handleTeamGoalKickersList(
                                            TeamGoalKickersListType.YellowCardsTotoCup
                                        )
                                    }
                                />
                            </View>

                            <View style={appStyles.package}>
                                <YellowsLeagues
                                    listGames={teamSeasonStats.yellow_cards_league.slice(
                                        0,
                                        MAX_LEAGUE_SEASON_STATS_ITEMS
                                    )}
                                    handleTeamGoalKickersList={() =>
                                        handleTeamGoalKickersList(
                                            TeamGoalKickersListType.YellowCardsLeague
                                        )
                                    }
                                />
                            </View>
                            <View style={appStyles.package}>
                                <RedCard
                                    listGames={teamSeasonStats.red_cards.slice(
                                        0,
                                        MAX_LEAGUE_SEASON_STATS_ITEMS
                                    )}
                                    handleTeamGoalKickersList={() =>
                                        handleTeamGoalKickersList(TeamGoalKickersListType.RedCards)
                                    }
                                />
                            </View>
                        </ScrollView>
                    )}
                </SafeAreaView>
            </BackGround>
        </View>
    );
};
