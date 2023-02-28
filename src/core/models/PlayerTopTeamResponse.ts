export interface PlayerTopTeamModel {
    _id: string;
    league_title_he: string;
    league_title_en: string;
    player_name_he: string;
    player_name_en: string;
    player_image_url: string;
    games_by_context: Gamesbycontext[];
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
    team1: Team;
    team2: Team;
    goals: number;
    yellow_cards: number;
    red_cards: number;
    on_field?: number;
    off_field: number;
}

interface Team {
    name_he: string;
    name_en: string;
    logo_url: string;
}
