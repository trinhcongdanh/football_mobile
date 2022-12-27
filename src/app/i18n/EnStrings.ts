import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    heb: {
        translation: {
            fav_summary: {
                group: 'קבוצות מועדפות',
                favorite: 'שחקנים מועדפים',
                national_team: 'נבחרות מועדפות',
                add_group: 'הוסף קבוצה',
                add_actress: 'הוסף שחקנ.ית',
                add_squad: 'הוסף נבחרת',
                save_agree: 'שמור העדפות והסכם',
                term_use: ' לתנאי שימוש',
                complete: 'השלמת הרשמה',
                guest: 'המשך כאורח',
                login_as_guest: 'לא לשמור, והיכנס כאורח',
            },
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
            favorite_team: {
                skip: 'דלג',
                title: 'בחר עד 3 קבוצות מועדפות',
                place_holder: 'חיפוש קבוצה...',
                chosen: 'נבחרו',
                button: 'המשך',
            },
            favorite_player: {
                skip: 'דלג',
                title: 'בחר עד 3 שחקנים מועדפים',
                place_holder: 'חיפוש קבוצה...',
                chosen: 'נבחרו',
                button: 'המשך',
            },
            favorite_top_team: {
                skip: 'דלג',
                title: 'בחר עד 2 נבחרות מועדפות',
                place_holder: 'חיפוש קבוצה...',
                chosen: 'נבחרו',
                button: 'המשך',
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
            national_team: {
                team_event: 'אירועי נבחרת',
                previous_campaigns: 'קמפיינים קודמים',
                ranking_table: {
                    title: 'טבלת דירוג',
                    place: 'מקום',
                    team: 'נבחרת',
                    time: 'שע׳',
                    mash: 'מש׳',
                    nch: 'נצ׳',
                    draw: 'תיקו',
                    the_p: 'הפ׳',
                    no: 'נק׳',
                },
                list_game: {
                    title: 'רשימת משחקים',
                    home_away: 'בית / חוץ',
                    house: 'בית',
                    outside: 'חוץ',
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
                season: 'עונה',
                club: 'מועדון',
                age_group: 'קבוצת גיל',
                position: 'תפקיד',
                game: 'משחקים',
                victory: 'נצחונות',
                loss: 'הפסדים',
                draw: 'תיקו',
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
            video: {
                title: 'סירטונים',
                priority: {
                    label: 'קבוצות מועדפות',
                },
                fav_player: {
                    label: 'שחקנים מועדפים',
                },
                fav_nation_team: {
                    label: 'נבחרות מועדפות',
                },
            },
            goblet: {
                title: 'גביע',
                state_cup: 'גביע מדינה',
                toto_cup: 'גביע טוטו',
            },
            state_cup: {
                title: 'גביע המדינה',
                season_game: 'עונת משחקים',
                early_stage_game: {
                    label: 'משחקי השלבים המוקדמים',
                    date: 'תאריך',
                    play: 'משחק',
                    etch: 'אצט׳',
                    hour: 'שעה',
                    toch: 'תוצ׳',
                },
                statistics: {
                    label: 'סטטיסטיקות',
                    trophy: 'מחזיקות גביע',
                    season: 'שנה',
                    group: 'שם הקבוצה',
                    see_all: 'ראה הכל',
                    cup_around: 'סיבובי הגביע',
                    date: 'תאריך',
                    round: 'סבב',
                },
            },
            group_page: {
                info_group: {
                    about: 'אודות הקבוצה',
                    age_group: 'קבוצת גיל',
                    governing: 'גוף מנהל',
                    office: 'משרד',
                    fax: 'פקס',
                    address: 'מען',
                    email: 'דוא״ל',
                    list: 'רשימת מגרשים',
                    stadium: 'איצטדיון',
                },
                cast: 'סגל שחקנים',
                official: 'בעלי תפקידים',
                list_games: {
                    title: 'רשימת משחקים',
                },
                statistics: {
                    title: 'סטטיסטיקות',
                    see_all: 'ראה הכל',
                    player: 'שחקן',
                    number_game: 'מספר משחקים',
                    gates: 'שערים',
                    yellow_league_cup: 'כ. צהובים ליגה/גביע',
                    yellow_tutu: 'כ. צהובים טוטו',
                    red_card: 'כרטיסים אדומים',
                    vehicle: 'הרכב נפתח',
                    enter_replacement: 'נכנס כמחליף',
                    switched: 'הוחלף',
                    subtlety: 'דקות במשחק',
                    btn: 'עוד נתונים סטטיסטים',
                },
            },
            team_staff: {
                title: 'סגל הקבוצה',
                option: {
                    cast: 'סגל שחקנים',
                    official: 'בעלי תפקידים',
                },
            },
            statistics: {
                group: {
                    title: 'סטטיסטיקות',
                    see_all: 'ראה הכל',
                    scorer_of_goal: 'כובשי שערים בליגה',
                    player_name: 'שם השחקן',
                    number: 'שערים',
                    top_scorers: 'כובשי שערים בגביע טוטו',
                    yellow_cup: 'צהובים בגביע הטוטו',
                    number_yellow: 'צהובים',
                    yellow_league: 'צהובים בליגה ובגביע',
                    number_red: 'אדומים',
                    red_card: 'כרטיסים אדומים',
                },
                leagues: {
                    goal: 'כובשי שערים',
                    see_all: 'ראה הכל',
                    name_club: 'שם הקבוצה',
                    name_player: 'שם השחקן',
                    gate: 'שערים',
                    accumulation_yellow: 'צבירת כרטיסים צהובים',
                    yellow: 'צהובים',
                    accumulation_red: 'צבירת כרטיסים אדומים',
                    red: 'אדומים',
                    average_yellow: 'ממוצע צהובים למשחק',
                    location: 'מיקום',
                    average: 'מס׳ צהובים',
                    average_score: 'ממוצע הבקעות למשחק',
                    average_league: 'ממוצע הליגה',
                    category: 'קטגוריה',
                    average_game: 'ממוצע למשחק',
                    average_cycle: 'ממוצע למחזור',
                    team_competition: 'תחרות הקבוצה ההוגנת',
                    total: 'סה״כ מש׳',
                    score: 'ניקוד',
                    history: 'הסטוריית אליפויות',
                    season: 'עונה',
                },
            },
            composition: {
                domestic: 'ביתית',
                guest: 'אורחת',
            },
            previous_campaigns: {
                title: 'קמפיינים קודמים',
                campaign_game: 'שם קמפיין',
                year: 'שנה',
            },
            campaign: {
                ranking_table: {
                    title: 'טבלת דירוג',
                    place: 'מקום',
                    team: 'נבחרת',
                    time: 'שע׳',
                    mash: 'מש׳',
                    nch: 'נצ׳',
                    draw: 'תיקו',
                    the_p: 'הפ׳',
                    no: 'נק׳',
                },
                list_game: {
                    title: 'רשימת משחקים',
                    home_away: 'בית / חוץ',
                    house: 'בית',
                    outside: 'חוץ',
                },
            },
            goal_national_team: {
                title: 'שערים בנבחרת הלאומית',
                red: 'אדומים',
                yellow: 'צהובים',
                goal: 'שערים',
            },
            pitch: {
                team_field: 'קבוצות המשתמשות במגרש',
                phone: 'טלפון',
                contact: 'איש קשר',
                address: 'כתובת',
                group: 'קבוצה',
                age: 'קבוצת גיל',
                home_training: 'בית/אימונים',
            },
            conquerors: {
                title: 'רשימת כובשים',
                name: 'שם שחקן',
                number: 'מס׳ שערים',
            },
            magazine: {
                title: 'חיזוק הקשר בין צוותי השיפוט למועדונים לטובת מיגור האלימות',
            },
            play_ground: {
                title: 'המשחקייה',
                awards: {
                    title: 'פרסים',
                    choose: 'בחר אותי',
                },
                archives: {
                    title: 'ארכיון',
                    test_yourself: 'בחן את עצמך',
                    place: 'מקום',
                    accumulated: 'צברת',
                },
                quizzes: {
                    title: 'חידונים',
                    test_yourself: 'בחן את עצמך',
                    accumulated: 'צבור עד',
                    participants: 'השתתפו בחידון',
                },
            },
            discussion: {
                title: 'בחן את עצמך',
                question: 'כמה אתה מכיר את נבחרת ישראל?',
                subtitle:
                    'לורם איפסום דולור סיט אמט, קונסק לורם איפס אדיפיסינג אלית קולהע צופעט למרקוח',
                rules: 'השתתף בחידון ותוכל לצבור עד',
                start: 'התחל משחק',
            },
        },
    },
    en: {
        translation: {
            fav_summary: {
                group: 'Preferred groups',
                favorite: 'Favorite players',
                national_team: 'Favorite national teams',
                add_group: 'Add a group',
                add_actress: 'Add an actress',
                add_squad: 'Add an squad',
                save_agree: 'Save preferences and agreement ',
                term_use: 'for terms of use',
                complete: 'Completion of registration',
                guest: 'Continue as a guest',
                login_as_guest: 'Do not save, and log in as a guest',
            },
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
            favorite_team: {
                skip: 'Skip',
                title: 'Select up to 3 favorite groups',
                place_holder: 'Search group...',
                chosen: 'were chosen',
                button: 'Continued',
            },
            favorite_player: {
                skip: 'Skip',
                title: 'Choose up to 3 favorite players',
                place_holder: 'Search group...',
                chosen: 'were chosen',
                button: 'Continued',
            },
            favorite_top_team: {
                skip: 'Skip',
                title: 'Choose up to 2 favorite teams',
                place_holder: 'Search group...',
                chosen: 'were chosen',
                button: 'Continued',
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
            national_team: {
                team_event: 'Team events',
                previous_campaigns: 'Previous campaigns',
                ranking_table: {
                    title: 'Ranking table',
                    place: 'Place',
                    team: 'Team',
                    time: 'Time',
                    mash: 'Mash',
                    nch: 'Nch',
                    draw: 'Draw',
                    the_p: 'The p',
                    no: 'No',
                },
                list_game: {
                    title: 'List of games',
                    home_away: 'Home / Away',
                    house: 'House',
                    outside: 'Outsidess',
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
                season: 'Season',
                club: 'Club',
                age_group: 'Age Group',
                position: 'Position',
                game: 'Game',
                victory: 'Victory',
                loss: 'Loss',
                draw: 'Draw',
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
            video: {
                title: 'Video',
                priority: {
                    label: 'Group Priority',
                },
                fav_player: {
                    label: 'Favorite players',
                },
                fav_nation_team: {
                    label: 'Favorite national teams',
                },
            },
            goblet: {
                title: 'Goblet',
                state_cup: 'State Cup',
                toto_cup: 'Toto Cup',
            },
            state_cup: {
                title: 'State cup',
                season_game: 'Game season',
                early_stage_game: {
                    label: 'Early stage games',
                    date: 'Date',
                    play: 'Play',
                    etch: 'Etch',
                    hour: 'Hour',
                    toch: 'Toch',
                },
                statistics: {
                    label: 'Statistics',
                    trophy: 'Holding a trophy',
                    season: 'Season',
                    group: 'The group',
                    see_all: 'See all',
                    cup_around: 'The cup rounds',
                    date: 'Date',
                    round: 'Round',
                },
            },
            group_page: {
                info_group: {
                    about: 'About the group',
                    age_group: 'Age group',
                    governing: 'Governing body',
                    office: 'Office',
                    fax: 'Fax',
                    address: 'Address',
                    email: 'Email',
                    list: 'List of lots',
                    stadium: 'Stadium',
                },
                cast: 'Cast',
                official: 'Officials',
                list_games: {
                    title: 'List of games',
                },
                statistics: {
                    title: 'Statistics',
                    see_all: 'See all',
                    player: 'Player',
                    number_game: 'Number game',
                    gates: 'שערים',
                    yellow_league_cup: 'about. yellow League/Cup',
                    yellow_tutu: 'Yellow tutu',
                    red_card: 'Red Cards',
                    vehicle: 'Vehicle',
                    enter_replacement: 'Enter replacement',
                    switched: 'Switched',
                    subtlety: 'Subtlety',
                    btn: 'More statistics',
                },
            },
            team_staff: {
                title: 'Team Staff',
                option: {
                    cast: 'Cast',
                    official: 'Officials',
                },
            },
            statistics: {
                group: {
                    title: 'Statistics',
                    see_all: 'See all',
                    scorer_of_goal: 'Scorers of goals in the league',
                    player_name: "The player's name",
                    number: 'Number',
                    top_scorers: 'Top scorers in the Toto Cup',
                    yellow_cup: 'Yellows in the Toto Cup',
                    number_yellow: 'yellow',
                    yellow_league: 'Yellows in the league and in the cup',
                    number_red: 'red',
                    red_card: 'Red Cards',
                },
                leagues: {
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
                    average: 'Average',
                    average_score: 'Average scoring per game',
                    average_league: 'League average',
                    category: 'Category',
                    average_game: 'Average per game',
                    average_cycle: 'Average per cycle',
                    team_competition: 'The fair team competition',
                    total: 'Total',
                    score: 'Score',
                    history: 'The history of championships',
                    season: 'Seasons',
                },
            },
            composition: {
                domestic: 'Domestic',
                guest: 'A guest',
            },
            previous_campaigns: {
                title: 'Previous campaigns',
                campaign_game: 'Campaign name',
                year: 'Year',
            },
            campaign: {
                ranking_table: {
                    title: 'Ranking table',
                    place: 'Place',
                    team: 'Team',
                    time: 'Time',
                    mash: 'Mash',
                    nch: 'Nch',
                    draw: 'Draw',
                    the_p: 'The p',
                    no: 'No',
                },
                list_game: {
                    title: 'List of games',
                    home_away: 'Home / Away',
                    house: 'House',
                    outside: 'Outsidess',
                },
            },
            goal_national_team: {
                title: 'Goals in the national team',
                red: 'Reds',
                yellow: 'Yellow',
                goal: 'Goal',
            },
            pitch: {
                team_field: 'Teams using the field',
                phone: 'Phone',
                contact: 'Contact',
                address: 'Address',
                group: 'Group',
                age: 'Age group',
                home_training: 'Home/Training',
            },
            conquerors: {
                title: 'List of conquerors',
                name: "A player's name",
                number: 'Number of gates',
            },
            magazine: {
                title:
                    'Strengthening the relationship between the refereeing teams and the clubs for the sake of eradicating violence',
            },
            play_ground: {
                title: 'The playground',
                awards: {
                    title: 'Awards',
                    choose: 'Choose me',
                },
                archives: {
                    title: 'Archives',
                    test_yourself: 'Test yourself',
                    place: 'Place',
                    accumulated: 'Accumulated',
                },
                quizzes: {
                    title: 'Quizzes',
                    test_yourself: 'Test yourself',
                    accumulated: 'Accumulate up to',
                    participants: 'participated in the quiz',
                },
            },
            discussion: {
                title: 'Test yourself',
                question: "how well do you know Israel's national team?",
                subtitle:
                    'Lorem Ipsum Dolor Sit Emt, Konsk Lorem Ips Edificing Alit Kolhe Tsofet for decoction',
                rules: 'Take the quiz and you can earn a witness',
                start: 'Start a game',
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
