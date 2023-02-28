import { AxiosResponse } from 'axios';

// export interface TopTeamModel {
//     _id: string;
//     logo_height: number;
//     logo_url: string;
//     logo_width: number;
//     name_en: string;
//     name_he: string;
//     popularity: number;
//     search_terms: string;
//     isSelected: boolean;
// }
export interface ImageGallery {
    image_url: string;
}

export interface MainVideo {
    video_url: string;
    image_url: string;
    length: string;
    caption_he: string;
    caption_en: string;
}

export interface VideoGallery {
    video_url: string;
    image_url: string;
    length: string;
    caption_he: string;
    caption_en: string;
}

export interface Team {
    name_he: string;
    name_en: string;
    logo_url: string;
}

export interface FutureEvent {
    event_type: number;
    name_he: string;
    name_en: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    link?: any;
    object_id?: any;
    team1: Team;
    team2: Team;
    score: string;
}

export interface LeaderBoard {
    place: number;
    place_change: string;
    name_he: string;
    name_en: string;
    logo_url: string;
    games: number;
    wins: number;
    ties: number;
    difference: number;
    goals: string;
    score: number;
}

export interface Game {
    game_id: string;
    date: string;
    time: string;
    stadium_id: string;
    stadium_he: string;
    stadium_en: string;
    score: string;
    team1: Team;
    team2: Team;
    is_home_game: boolean;
}

export interface LastCampaign {
    name_he: string;
    name_en: string;
    season: string;
    group_name_he: string;
    group_name_en: string;
    leader_board: LeaderBoard[];
    games: Game[];
    goal_kickers: GoalKicker[];
    players_appearances: PlayersAppearance[];
}

export interface GoalKicker {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    num_of_goals: number;
}

export interface PlayersAppearance {
    player_id: string;
    name_he: string;
    name_en: string;
    image_url: string;
    num_of_appearances: number;
}

export interface TopTeamModel {
    _id: string;
    search_terms: string;
    name_en: string;
    logo_url: string;
    logo_width: number;
    logo_height: number;
    popularity: number;
    name_he: string;
    main_video: MainVideo;
    video_gallery: VideoGallery[];
    future_events: FutureEvent[];
    last_campaign: LastCampaign;
    goal_kickers: GoalKicker[];
    players_appearances: PlayersAppearance[];
    isSelected: boolean;
    image_gallery: ImageGallery[];
    team_personnel_id: string;
    homepage_info: HomePageInfo;
}

interface Card {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    yellow_cards: number;
    red_cards: number;
}

interface HomePageInfo {
    goal_kickers: GoalKicker1[];
    cards: Card[];
    games: Game[];
}

interface GoalKicker1 {
    player_id: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    games: number;
    goals: number;
}

export type TopTeamModelResponse = AxiosResponse<{
    documents: TopTeamModel[];
}>;
