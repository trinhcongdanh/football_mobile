export interface PlayerModel {
    _id: string;
    search_terms: string;
    name_en: string;
    image_url: string;
    image_width: number;
    image_height: number;
    name_he: string;
    team: Team;
    top_team: Topteam;
    date_of_birth: string;
    citizenship_he: string;
    citizenship_en: string;
    citizenship_image_url: string;
    num_of_games: number;
    video_gallery: Videogallery[];
    homepage_info: Homepageinfo;
}

interface Homepageinfo {
    season_name: string;
    games: Game2[];
    goals: Goals;
    yellow_cards: Yellowcards;
    red_cards: Yellowcards;
}

interface Yellowcards {
    league_cards: number;
    national_cup_cards: number;
    toto_cup_cards: number;
    total_cards: number;
}

interface Goals {
    league_goals: number;
    national_cup_goals: number;
    toto_cup_goals: number;
    total_goals: number;
}

interface Game2 {
    game_id: string;
    date: string;
    score: string;
    team1: Team1;
    team2: Team1;
    goals: number;
    yellow_cards: number;
    red_cards: number;
    on_field: number;
}

interface Videogallery {
    video_url: string;
    image_url: string;
    length: string;
    caption_he: string;
    caption_en: string;
}

interface Topteam {
    top_team_id: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    appearances: number;
    debut_game_against: Debutgameagainst;
    last_game_against: Debutgameagainst;
    goals: Goal2[];
    games_by_context: Gamesbycontext[];
}

interface Goal2 {
    top_team_id: string;
    context_he: string;
    context_en: string;
    games: number;
    goals: number;
    player_top_team_goals_id: string;
}

interface Debutgameagainst {
    date: string;
    name_he: string;
    name_en: string;
    logo_url: string;
}

interface Team {
    team_id: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    league_name_he: string;
    league_name_en: string;
    seasons: Season[];
}

export interface Season {
    name: string;
    goals: Goal[];
    cards: Card[];
    games_by_context: Gamesbycontext[];
    goals_league: number;
    goals_national_cup: number;
    goals_toto_cup: number;
    goals_total: number;
    yellow_cards_league: number;
    yellow_cards_toto_cup: number;
    red_cards: number;
    total_cards: number;
}

interface Gamesbycontext {
    context_he: string;
    context_en: string;
    games: Game[];
}

interface Game {
    game_id: string;
    date: string;
    score: string;
    team1: Team1;
    team2: Team1;
    goals: number;
    yellow_cards: number;
    red_cards: number;
    on_field?: number;
    off_field: number;
}

interface Team1 {
    name_he: string;
    name_en: string;
    logo_url: string;
}

interface Card {
    name_he: string;
    name_en: string;
    num_of_cards: number;
}

interface Goal {
    context_he: string;
    context_en: string;
    goals: number;
}
