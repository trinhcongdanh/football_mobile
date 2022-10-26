import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    heb: {
        translation: {
            welcome: {
                splash: 'עמוד ספלאש',
                title: 'ההתאחדות לכדורגל בישראל',
                info: 'הצטרפו אלינו וקבלו את כל המידע הכי חם על הקבוצה או השחקן שלכם!',
                start: 'התחל',
                account: 'כבר יש לך משתמש?',
                create: 'התחבר',
                sign_up: 'הרשמה לאפליקציית\n ההתאחדות לכדורגל בישראל',
                join_us: 'הצטרפו אלינו וקבלו את כל המידע הכי חם על\n הקבוצה או השחקן שלכם!',
            },
            register: {
                registerByPhone: 'הרשמה באמצעות טלפון',
                phoneNumber: '* מס׳ טלפון',
                submit: 'שלח קוד אימות',
                alreadyUser: 'כבר יש לך משתמש?',
                connect: 'התחבר',
                invalid: 'מס׳ טלפון לא תקין',
            },
            connect: {
                title: 'התחברות',
                placeholder: 'מס׳ טלפון',
                button: 'התחבר',
                error: 'מספר לא מזוההרשום',
                or: 'או',
                fb: 'התחברות באמצעות פייסבוק',
                gg: 'התחברות באמצעות גוגל',
                apple: 'התחברות באמצעות אפל',
                signup: '? הרשם עכשיו',
                nosignUp: 'עדיין לא רשום',
            },
            verify: {
                title: 'הרשמה באמצעות טלפון',
                header: 'הזן קוד אימות שנשלח לנייד',
                text_link: ' שלח שוב',
                text_not_reach: 'לא הגיע,',
                time_send: 'קוד אימות ישלח אלייך בעוד 12 שניות',
                error: 'קוד שגוי, נסה שוב',
            },
            settings: {
                user_settings: 'הגדרות משתמש',
                name: 'עידו אברהמי',
                email: 'IdoAvrahami@Fmail.com',
                gender: 'מגדר',
                male: 'זכר',
                female: 'נקבה',
                other_gender: 'לא רלוונטי',
                dob: 'תאריך לידה',
                personal: 'העדפות אישיות',
                add_group: 'הוסף קבוצה',
                add_actress: 'הוסף שחקנ.ית',
                add_squad: 'הוסף נבחרת',
                group: 'קבוצות מועדפות',
                sleep: 'שנה',
                favorite: 'שחקנים מועדפים',
                national_team: 'נבחרות מועדפות',
                notifications: 'הגדרת התראות',
                tutorial: 'שלחו לי התראת ״Push” במקרים הבאים',
                before_every_game: 'לפני כל משחק',
                before_game_of_team: 'לפני משחק של קבוצות שהגדרתי',
                point_received: 'כשמתקבלים נקודות',
                save_changes: 'שמירת שינויים',
                delete_account: 'מחיקת חשבון',
            },
            reg: {
                title: 'וולקם! מלאו את הפרטים',
                sub_title: 'הצטרפו אלינו וקבלו את כל המידע הכי חם על\n הקבוצה או השחקן שלכם!',
                place_holder_name: '* שם / כינוי',
                error: {
                    error_empty: 'נא להזין שם',
                    error_valid: 'שימוש בתווים לא תקינים',
                },
                gender: {
                    label: 'מגדר',
                    male: 'זכר',
                    female: 'נקבה',
                    other: 'לא רלוונטי',
                },
                birth_date: 'תאריך לידה',
                agree: 'קראתי ואני מסכים',
                provision: ' לתנאי שימוש',
                button: 'עלה על הדשא',
            },
            team: {
                title: 'נבחרות',
                group: {
                    temp: 'הנבחרת הצעירה',
                },
            },
            team_squad: {
                title: 'סגל נבחרת',
                option: {
                    players: 'שחקני הנבחרת',
                    officials: 'בעלי תפקידים',
                },

                gk: 'שוערים',
                df: 'הגנה',
                mf: 'קישור',
                st: 'התקפה',
            },
            match: {
                title: 'ליגת האומות של אופ"א \n2022/23',
                club: {
                    israel: 'ישראל',
                    albania: 'אלבניה',
                },
                status: 'הסתיים',
                stadium: 'בלומפילד',
                composition: {
                    title: 'הרכב',
                    main_lineup: 'הרכב פותח',
                    replace: 'מחליפים',
                    not_partner: 'לא שותפו',
                    coach: 'מאמן',
                },
                game_move: {
                    title: 'מהלך משחק',
                    start: 'שריקת פתיחה',
                },
                schedule: {
                    title: 'משחקים בבית',
                },
                standing: {
                    title: 'טבלת הבית',
                    place: 'מקום',
                    team: 'נבחרת',
                    time: 'שע׳',
                    mash: 'מש׳',
                    nch: 'נצ׳',
                    draw: 'תיקו',
                    the_p: 'הפ׳',
                    no: 'נק׳',
                },
            },
            data_player: {
                number: 'מס׳ משחקים',
                national: {
                    israel: 'ישראל',
                    title: 'אזרחות',
                },
                birthday: 'תאריך לידה',
                option: {
                    club: 'נתוני שחקן בקבוצה',
                    national: 'נתוני שחקן בנבחרת',
                },
                gates: 'שערים',
                frame: 'מסגרת',
                ticket: {
                    label: 'כרטיסים',
                    type: 'סוג כרטיס',
                    amount: 'מס׳ כרטיסים',
                },
                games_in_season: 'משחקים בעונה',
                info: 'מידע כללי',
                count: 'מס׳ הופעות בנבחרת',
                debut: 'הופעות בכורה נגד',
                last: 'משחק אחרון',
                goal: 'שערים בנבחרת',
                team: 'נבחרת',
                games: 'משחקים',
                details: 'פרטים',
            },
            coach: {
                debut_game: 'משחק בכורה',
                game_details: 'פרטי משחק',
                israel: 'ישראל',
                iceland: 'איסלנד',
                option: {
                    team: 'קבוצות/נבחרות',
                    games: 'משחקים',
                },
                content: {
                    answers: 'עונה',
                    club: 'מועדון',
                    age_group: 'קבוצת גיל',
                    role: 'תפקיד',
                    start_date: 'תאריך התחלה',
                    end_date: 'תאריך סיום',
                    number_of_games: 'מספר משחקים',
                    number_of_victories: 'מספר נצחונות',
                    several_losses: 'מספר הפסדים',
                    draw_number: 'מספר תיקו',
                },
                tournaments: 'פלייאוף לאליפות אירופה',
            },
            history: {
                title: 'קמפיינים קודמים',
                header: 'נבחרת לאומית גברים',
                campaign_name: 'שם קמפיין',
                year: 'שנה',
            },
            leagues: {
                title: 'ליגות',
                place_holder: 'חיפוש ליגה...',
                graduates: {
                    title: 'בוגרים',
                },
                women: {
                    title: 'נשים',
                },
                youth: {
                    title: 'נוער',
                },
                boys_a: {
                    title: 'נערים א',
                },
                boys_b: {
                    title: 'נערים ב',
                },
                boys_c: {
                    title: 'נערים ג',
                },
            },
            leagues_details: {
                season_game: 'עונת משחקים',
                top_playoff: 'פלייאוף עליון',
                league_table: {
                    title: 'טבלת ליגה',
                    group: 'קבוצה',
                    from: 'מש׳',
                    nch: 'נצ׳',
                    draw: 'תיקו',
                    the_p: 'הפ׳',
                    time: 'שע׳',
                    no: 'נק׳',
                },
                list_games: {
                    title: 'רשימת משחקים',
                },
                statistics: {
                    title: 'סטטסטיקות',
                    ranking_home: 'דרוג משחקי בית',
                    ranking_away: 'דרוג משחקי חוץ',
                    more: 'עוד נתונים סטטיסטים',
                    goal: 'כובשי שערים',
                    see_all: 'ראה הכל',
                    name_club: 'שם הקבוצה',
                    name_player: 'שם השחקן',
                    gate: 'שערים',
                    accumulation_yellow: 'צבירת צהובים',
                    yellow: 'צהובים',
                    accumulation_red: 'צבירת כרטיסים אדומים',
                    red: 'אדומים',
                    average_yellow: 'ממוצע צהובים למשחק',
                    location: 'מיקום',
                    number_yellow: 'מס׳ צהובים',
                    history: 'הסטוריית אליפויות',
                    season: 'עונה',
                },
                about: {
                    title: 'אודות הליגה',
                    cycles: 'מחזורים',
                    rounds: 'סבבים',
                    seasons: 'עונה',
                    rising: 'עולות',
                    groups: 'קבוצות',
                    age_group: 'קבוצת גיל',
                    exchanges: 'חילופים',
                    pause: 'הפסקה',
                    down: 'יורדות',
                },
                gallery: {
                    title: 'גלריית נבחרת',
                },
                magazine: {
                    title: 'מגזין נבחרת',
                },
            },
        },
    },
    en: {
        translation: {
            welcome: {
                splash: 'Splash page',
                title: 'The Israel Football Association',
                info: 'Join us and get all the hottest information about your team or player!',
                start: 'Start',
                account: 'Already have a user?',
                create: 'Connect',
                sign_up: 'Sign up for the app\nThe Israel Football Association',
                join_us: 'Join us and get all the hottest information about\nyour team or player!',
            },
            register: {
                registerByPhone: 'Registration by phone',
                phoneNumber: 'Phone Number *',
                submit: 'Submit a verification code',
                alreadyUser: 'Already have a user?',
                connect: 'Connect',
                invalid_phone_number: 'Invalid phone number',
            },
            connect: {
                title: 'Connection',
                placeholder: 'Phone Number',
                button: 'Connect',
                error: 'Unidentified number registered',
                or: 'or',
                fb: 'Login via Facebook',
                gg: 'Login using Google',
                apple: 'Logging in via Apple',
                signup: 'Register now ?',
                nosignUp: 'Not registered yet',
            },
            verify: {
                title: 'Registration by phone',
                header: 'Enter verification code sent to mobile',
                text_link: 'Send again',
                text_not_reach: 'Not reached,',
                time_send: 'A verification code will be sent to you in 12 seconds',
                error: 'Wrong code, try again',
            },
            settings: {
                user_settings: 'User settings',
                name: 'Ido Abrahami',
                email: 'IdoAvrahami@Fmail.com',
                gender: 'Gender',
                male: 'Male',
                female: 'Female',
                other_gender: 'Irrelevant',
                dob: 'Date of Birth',
                personal: 'Personal preferences',
                add_group: 'Add a group',
                add_actress: 'Add an actress',
                add_squad: 'Add an squad',
                group: 'Preferred groups',
                sleep: 'Sleep',
                favorite: 'Favorite players',
                national_team: 'Favorite national teams',
                notifications: 'Set notifications',
                tutorial: 'Send me a "Push" notification in the following cases',
                before_every_game: 'Before every game',
                before_game_of_team: 'Before a game of teams I defined',
                point_received: 'When points are received',
                save_changes: 'Save changes',
                delete_account: 'Delete account',
            },
            reg: {
                title: 'Welcome! Fill in the details',
                sub_title:
                    'Join us and get all the hottest information about\n Your team or player!',
                place_holder_name: '* Nickname',
                error: {
                    error_empty: 'Please enter name',
                    error_valid: 'Use of invalid characters',
                },
                gender: {
                    label: 'Gender',
                    male: 'Male',
                    female: 'Female',
                    other: 'Other',
                },
                birth_date: 'Date of birth',
                agree: 'I read and I agree',
                provision: 'for terms of use',
                button: 'Got on the grass',
            },
            team: {
                title: 'Teams',
                group: {
                    temp: 'the chosen one the young woman',
                },
            },
            team_squad: {
                title: 'Team squad',
                option: {
                    players: 'The team players',
                    officials: 'Officials',
                },
                gk: 'Goalkeepers',
                df: 'Defenders',
                mf: 'Midfielders',
                st: 'Striker',
            },
            match: {
                title: 'UEFA Nations League \n2022/23',
                club: {
                    israel: 'Israel',
                    albania: 'Albania',
                },
                status: 'Ended',
                stadium: 'Bloomfield',
                composition: {
                    title: 'Composition',
                    main_lineup: 'Main Line Up',
                    replace: 'Replace',
                    not_partner: 'not_partner',
                    coach: 'Coach ',
                },
                game_move: {
                    title: 'Game move',
                    start: 'Play start',
                },
                schedule: {
                    title: 'Schedule',
                },
                standing: {
                    title: 'Standing',
                    place: 'Place',
                    team: 'Team',
                    time: 'Time',
                    mash: 'Mash',
                    nch: 'Nch',
                    draw: 'Draw',
                    the_p: 'The p',
                    no: 'No',
                },
            },
            data_player: {
                number: 'No. of games',
                national: {
                    israel: 'Israel',
                    title: 'Nationality',
                },
                birthday: 'Date of birth',
                option: {
                    club: 'Player data in the team',
                    national: 'Player data in the national team',
                },
                gates: 'Gates',
                frame: 'Frame',
                ticket: {
                    label: 'Tickets',
                    type: 'Card Type',
                    amount: 'Amount',
                },
                games_in_season: 'Games in season',
                info: 'General Information',
                count: 'Number of appearances in the team',
                debut: 'Debuts vs',
                last: 'Last game',
                goal: 'Goals in the team',
                team: 'Team',
                games: 'Games',
                details: 'Details',
            },
            coach: {
                debut_game: 'Debut game',
                game_details: 'Game details',
                israel: 'Israel',
                iceland: 'Iceland',
                option: {
                    team: 'Teams/Teams',
                    games: 'Games',
                },
                content: {
                    answers: 'Answers',
                    club: 'Club',
                    age_group: 'Age Group',
                    role: 'Role',
                    start_date: 'Start date',
                    end_date: 'End start',
                    number_of_games: 'Number of games',
                    number_of_victories: 'Number of victories',
                    several_losses: 'Several losses',
                    draw_number: 'Draw number',
                },
                tournaments: 'Playoff for the European Championship',
            },
            history: {
                title: 'Previous campaigns',
                header: "Men's national team",
                campaign_name: 'Campaign name',
                year: 'Year',
            },
            leagues: {
                title: 'Leagues',
                place_holder: 'League search...',
                graduates: {
                    title: 'Graduates',
                },
                women: {
                    title: 'Women',
                },
                youth: {
                    title: 'Youth',
                },
                boys_a: {
                    title: 'Boys a',
                },
                boys_b: {
                    title: 'Boys b',
                },
                boys_c: {
                    title: 'Boys c',
                },
            },
            leagues_details: {
                season_game: 'Game season',
                top_playoff: 'Top playoff',
                league_table: {
                    title: 'League table',
                    group: 'Group',
                    from: 'From',
                    nch: 'Nch',
                    draw: 'Draw',
                    the_p: 'The p',
                    time: 'Time',
                    no: 'No',
                },
                list_games: {
                    title: 'List of games',
                },
                statistics: {
                    title: 'Statistics',
                    ranking_home: 'Ranking home games',
                    ranking_away: 'Ranking away games',
                    more: 'More statistics',
                    goal: 'Scorers of goals',
                    see_all: 'See all',
                    name_club: 'The name of the group',
                    name_player: 'The player name',
                    gate: 'Gates',
                    accumulation_yellow: 'Accumulation of yellows',
                    yellow: 'Yellow',
                    accumulation_red: 'Accumulation of red cards',
                    red: 'Red',
                    average_yellow: 'Average yellows per game',
                    location: 'Location',
                    number_yellow: 'Yellow numbers',
                    history: 'The history of championships',
                    season: 'Seasons',
                },
                about: {
                    title: 'About the league',
                    cycles: 'Cycles',
                    rounds: 'Rounds',
                    seasons: 'Seasons',
                    rising: 'Rising',
                    groups: 'Groups',
                    age_group: 'Age group',
                    exchanges: 'Exchanges',
                    pause: 'Pause',
                    down: 'Going down',
                },

                gallery: {
                    title: 'Selected gallery',
                },
                magazine: {
                    title: 'Selected magazine',
                },
            },
        },
    },
};

I18nManager.forceRTL(true);

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: I18nManager.isRTL ? 'heb' : 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
