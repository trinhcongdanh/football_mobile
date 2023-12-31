import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../utils/constants/enum';
import { RegScreen } from '../screens/football-reg/RegScreen';
import { WelcomeScreen } from '../screens/football-welcome/WelcomeScreen';
import { RegisterScreen } from '../screens/football-register/RegisterScreen';
import { ConnectScreen } from '../screens/football-connect/ConnectScreen';
import { VerifyScreen } from '../screens/football-verify/VerifyScreen';
import { SettingsScreen } from '../screens/football-settings/SettingsScreen';
import { TeamScreen } from '../screens/football-team/TeamScreen';
import { TeamSquadScreen } from '../screens/football-team-squad/TeamSquadScreen';
import { MatchScreen } from '../screens/football-match/MatchScreen';
import {
    AwardScreen,
    SplashScreen,
    CampaignScreen,
    ConfirmationScreen,
    ConquerorsScreen,
    ConversationalDiscussionScreen,
    DiscussionScreen,
    FavoritePlayersScreen,
    FavoriteSummaryScreen,
    FavoriteTeamsScreen,
    FavoriteTopTeamsScreen,
    GameCompositionScreen,
    GoalsNationalTeamScreen,
    GobletScreen,
    GroupPageScreen,
    HomeScreen,
    LeaguesDetailsScreen,
    LeaguesScreen,
    MagazineScreen,
    NationalTeamScreen,
    PitchScreen,
    PlayGroundScreen,
    PreviousCampaignsScreen,
    QuestionScreen,
    StateCupScreen,
    StatisticDetailsScreen,
    StatisticsGroupScreen,
    StatisticsLeaguesScreen,
    TeamStaffScreen,
    VideoScreen,
    CupsScreen,
    ListGameScreen,
    ContactUsScreen,
    TermsConditionScreen,
} from '../screens';
import { HistoryScreen } from '../screens/football-history/HistoryScreen';
import { DataPlayerScreen } from '../screens/football-data-player/DataPlayerScreen';
import { DataCoachScreen } from '../screens/football-data-coach/DataCoachScreen';
import { BottomTabStack } from './BottomTab';
import { SideBar } from '@football/app/routes/side-bar/SideBar';

const Auth = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName={ScreenName.SplashPage}
            screenOptions={{ headerShown: false }}
        >
            <Auth.Screen name={ScreenName.SplashPage} component={SplashScreen} />
            <Auth.Screen name={ScreenName.OpeningPage} component={WelcomeScreen} />
            <Auth.Screen name={ScreenName.ConnectPage} component={ConnectScreen} />
            <Auth.Screen name={ScreenName.RegisterPage} component={RegisterScreen} />
            <Auth.Screen name={ScreenName.FavTeamPage} component={FavoriteTeamsScreen} />
            <Auth.Screen name={ScreenName.FavPlayerPage} component={FavoritePlayersScreen} />
            <Auth.Screen name={ScreenName.FavTopTeamPage} component={FavoriteTopTeamsScreen} />
            <Auth.Screen name={ScreenName.FavSummaryPage} component={FavoriteSummaryScreen} />
            <Auth.Screen name={ScreenName.VerifyPage} component={VerifyScreen} />
            <Auth.Screen name={ScreenName.SettingsPage} component={SettingsScreen} />
            <Auth.Screen name={ScreenName.RegPage} component={RegScreen} />
            <Auth.Screen name={ScreenName.TeamPage} component={TeamScreen} />
            <Auth.Screen name={ScreenName.NationalTeamPage} component={NationalTeamScreen} />
            <Auth.Screen name={ScreenName.TeamSquadPage} component={TeamSquadScreen} />
            <Auth.Screen name={ScreenName.MatchPage} component={MatchScreen} />
            <Auth.Screen name={ScreenName.HomePage} component={HomeScreen} />
            <Auth.Screen name={ScreenName.DataPlayerPage} component={DataPlayerScreen} />
            <Auth.Screen name={ScreenName.DataCoachPage} component={DataCoachScreen} />
            <Auth.Screen
                name={ScreenName.PreviousCampaignsPage}
                component={PreviousCampaignsScreen}
            />
            <Auth.Screen name={ScreenName.CampaignPage} component={CampaignScreen} />
            <Auth.Screen
                name={ScreenName.GoalsNationalTeamPage}
                component={GoalsNationalTeamScreen}
            />
            <Auth.Screen name={ScreenName.PitchPage} component={PitchScreen} />
            <Auth.Screen name={ScreenName.ConquerorsPage} component={ConquerorsScreen} />
            <Auth.Screen name={ScreenName.HistoryPage} component={HistoryScreen} />
            <Auth.Screen name={ScreenName.BottomTab} component={BottomTabStack} />
            <Auth.Screen name={ScreenName.SideBar} component={SideBar} />
            <Auth.Screen name={ScreenName.LeaguesPage} component={LeaguesScreen} />
            <Auth.Screen name={ScreenName.LeaguesDetailsPage} component={LeaguesDetailsScreen} />
            <Auth.Screen
                name={ScreenName.StatisticsLeaguesPage}
                component={StatisticsLeaguesScreen}
            />
            <Auth.Screen
                name={ScreenName.StatisticDetailsPage}
                component={StatisticDetailsScreen}
            />
            <Auth.Screen name={ScreenName.VideoPage} component={VideoScreen} />
            <Auth.Screen name={ScreenName.GobletPage} component={GobletScreen} />
            <Auth.Screen name={ScreenName.StateCupPage} component={StateCupScreen} />
            <Auth.Screen name={ScreenName.GroupPagePage} component={GroupPageScreen} />
            <Auth.Screen name={ScreenName.TeamStaffPage} component={TeamStaffScreen} />
            <Auth.Screen name={ScreenName.GameCompositionPage} component={GameCompositionScreen} />
            <Auth.Screen name={ScreenName.StatisticsGroupPage} component={StatisticsGroupScreen} />
            <Auth.Screen name={ScreenName.MagazinePage} component={MagazineScreen} />
            <Auth.Screen name={ScreenName.PlayGroundPage} component={PlayGroundScreen} />
            <Auth.Screen name={ScreenName.DiscussionPage} component={DiscussionScreen} />
            <Auth.Screen name={ScreenName.QuestionPage} component={QuestionScreen} />
            <Auth.Screen
                name={ScreenName.ConversationalDiscussionPage}
                component={ConversationalDiscussionScreen}
            />
            <Auth.Screen name={ScreenName.AwardPage} component={AwardScreen} />
            <Auth.Screen name={ScreenName.ConfirmationPage} component={ConfirmationScreen} />
            <Auth.Screen name={ScreenName.CupsPage} component={CupsScreen} />
            <Auth.Screen name={ScreenName.ListGamePage} component={ListGameScreen} />
            <Auth.Screen name={ScreenName.ContactUsPage} component={ContactUsScreen} />
            <Auth.Screen name={ScreenName.TermsConditionPage} component={TermsConditionScreen} />
        </Auth.Navigator>
    );
};
