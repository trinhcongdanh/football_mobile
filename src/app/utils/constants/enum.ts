export enum ScreenName {
    SplashPage = 'SplashPage',
    OpeningPage = 'OpeningPage',
    HomePage = 'HomePage',
    FavTeamPage = 'FavTeamPage',
    FavPlayerPage = 'FavPlayerPage',
    FavTopTeamPage = 'FavTopTeamPage',
    FavSummaryPage = 'FavSummaryPage',
    RegisterPage = 'RegisterPage',
    ConnectPage = 'ConnectPage',
    VerifyPage = 'VerifyPage',
    SettingsPage = 'SettingsPage',
    RegPage = 'RegPage',
    TeamPage = 'TeamPage',
    NationalTeamPage = 'NationalTeamPage',
    TeamSquadPage = 'TeamSquadPage',
    MatchPage = 'MatchPage',
    DataPlayerPage = 'DataPlayerPage',
    DataCoachPage = 'DataCoachPage',
    PreviousCampaignsPage = 'PreviousCampaignsPage',
    CampaignPage = 'CampaignPage',
    GoalsNationalTeamPage = 'GoalsNationalTeamPage',
    PitchPage = 'PitchPage',
    ConquerorsPage = 'ConquerorsPage',
    GoalKickerListPage = 'GoalKickerListPage',
    HistoryPage = 'HistoryPage',
    BottomTab = 'BottomTab',
    LeaguesPage = 'LeaguesPage',
    LeaguesDetailsPage = 'LeaguesDetailsPage',
    StatisticsLeaguesPage = 'StatisticsLeaguesPage',
    StatisticDetailsPage = 'StatisticDetailsPage',
    VideoPage = 'VideoPage',
    GobletPage = 'GobletPage',
    StateCupPage = 'StateCupPage',
    GroupPagePage = 'GroupPagePage',
    TeamStaffPage = 'TeamStaffPage',
    StatisticsGroupPage = 'StatisticsGroupPage',
    GameCompositionPage = 'GameCompositionPage',
    MagazinePage = 'MagazinePage',
    PlayGroundPage = 'PlayGroundPage',
    DiscussionPage = 'DiscussionPage',
    QuestionPage = 'QuestionPage',
    ConversationalDiscussionPage = 'ConversationalDiscussionPage',
    AwardPage = 'AwardPage',
    ConfirmationPage = 'ConfirmationPage',
    CupsPage = 'CupsPage',
    ListGamePage = 'ListGamePage',
    ContactUsPage = 'ContactUsPage',
    TermsConditionPage = 'TermsConditionPage',
    SideBar = 'SideBar',
}

export enum LeagueQueryKey {
    GetLeagueTypes = 'get-league-types',
}

export enum LeagueSeasonQueryKey {
    GetLeagueSeason = 'get-league-season',
}

export enum ScreenTopTap {
    CompositionPage = 'CompositionPage',
    GamePage = 'GamePage',
    SchedulePage = 'SchedulePage',
    StandingPage = 'StandingPage',
    LeaguesYouthPage = 'LeaguesYouthPage',
    LeaguesWomenPage = 'LeaguesWomenPage',
    LeaguesGraduatesPage = 'LeaguesGraduatesPage',
    LeaguesBoysAPage = 'LeaguesBoysAPage',
    LeaguesBoysBPage = 'LeaguesBoysBPage',
    LeaguesBoysCPage = 'LeaguesBoysCPage',
    FavSummaryPage = 'FavSummaryPage',
    LeagueItemPage = 'LeagueItemPage',
}

export enum ScreenDataPlayer {
    DataPlayerTeamPage = 'DataPlayerTeamPage',
    DataPlayerNationalPage = 'DataPlayerNationalPage',
}

export enum TopTeamPlayerType {
    GoalKickers = 'GoalKickers',
    Appearances = 'Appearances',
}

export enum ScreenDataCoach {
    DataCoachGamesPage = 'DataCoachGamesPage',
    DataCoachTeamsPage = 'DataCoachTeamsPage',
}

export enum ScreenStack {
    AuthStack = 'AuthStack',
    MainStack = 'MainStack',
}

export enum OfflineData {
    splash_animation = 'SPLASH_ANIMATION',
    fav_teams = 'TEAMS_DATA',
    fav_players = 'PLAYERS_DATA',
    fav_national = 'NATIONAL_DATA',
    team_page = 'TEAM_PAGE',
    coach_page = 'COACH_PAGE',
    game_page = 'GAME_PAGE',
    phone_number = 'PHONE_NUMBER',
    create_profile = 'CREATE_PROFILE',
    login = 'LOGIN',
}

export enum AuthData {
    ECHO = 'echo',
    CREATE_PROFILE = 'create_profile',
    REGISTER = 'register',
    LOGIN = 'login',
    SET_PROFILE = 'set_profile',
    REGISTER_SMS = 'register_sms',
}
