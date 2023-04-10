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
                change: 'שנה',
                login_as_guest: 'לא לשמור, והיכנס כאורח',
                popUp: {
                    title: 'להמשיך בלי לשמור?',
                    text: 'בטוחים שאתם רוצים להיכנס כאורחים בלי לשמור את המועדפים?',
                    option1: 'חזרה להרשמה',
                    option2: 'לא לשמור, והיכנס כאורח',
                },
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
                place_holder: 'חיפוש שחקן…',
                chosen: 'נבחרו',
                button: 'המשך',
                group: 'כל השחקנים',
            },
            favorite_top_team: {
                skip: 'דלג',
                title: 'בחר עד 2 נבחרות מועדפות',
                place_holder: 'חיפוש קבוצה...',
                chosen: 'נבחרו',
                button: 'המשך',
            },
            register: {
                title: 'הרשמה לאפליקציית\n ההתאחדות לכדורגל בישראל',
                sub_title: 'הצטרפו אלינו וקבלו את כל המידע הכי חם על\n הקבוצה או השחקן שלכם!',
                registerByPhone: 'הרשמה באמצעות טלפון',
                phoneNumber: 'מס׳ טלפון',
                submit: 'שלח קוד אימות',
                alreadyUser: 'כבר יש לך משתמש?',
                connect: 'התחבר',
                invalid: 'מס׳ טלפון לא תקין',
                fb: 'התחברות באמצעות פייסבוק',
                gg: 'התחברות באמצעות גוגל',
                apple: 'התחברות באמצעות אפל',
            },
            side_menu: {
                my_account: 'החשבון שלי',
                contact_us: 'צור קשר',
                definitions: 'הגדרות',
                terms: 'תנאי שימוש ומדינות פרטיות',
                guest: 'אורח',
                logout: 'התנתק',
                are_you_want_logout: 'בטוחים שאתם רוצים לצאת?',
                yes: 'כן',
                no: 'לא',
                notification: 'התראות',
                logout_with_guest: 'מחק מועדפים וצא?',
                logout_with_guest_title: 'מחק מועדפים וצא',
                ok: 'Ok',
                message: 'Message',
                thank_you: 'תודה. ההודעה שלך נשלחה.',
                language: 'For English',
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
                signup: 'הרשם עכשיו',
                nosignUp: 'עדיין לא רשום? ',
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
                name: 'שם מלא',
                email: 'דוא"ל',
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
                notify_1: 'התראות על הודעות/מבצעים/פרסים',
                notify_2: 'התראות על השחקן המועדף שלי',
                notify_3: 'התראות על הקבוצה המועדפת שלי',
                notify_4: 'התראות על הליגה של השחקן המועדף שלי',
                notify_5: 'התראות על הליגה של הקבוצה המועדפת שלי',
                notify_6: 'התראות על הנבחרת של השחקן/שחקנים המועדפים שלי',
            },
            reg: {
                title: 'וולקם! מלאו את הפרטים',
                sub_title: 'הצטרפו אלינו וקבלו את כל המידע הכי חם על\n הקבוצה או השחקן שלכם!',
                place_holder_name: 'שם / כינוי',
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
                    details: 'לכל המשחקים',
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
                conquerors: {
                    title: 'רשימת כובשים',
                    full_list: 'רשימה מלאה',
                },
                performances: {
                    title: 'הופעות בנבחרת',
                    full_list: 'רשימה מלאה',
                },
            },
            team_squad: {
                title: 'סגל נבחרת',
                option: {
                    players: 'סגל שחקנים',
                    officials: 'בעלי תפקידים',
                },
                top_team_personnel: 'סגל הנבחרת',
                team_personnel: 'סגל הקבוצה',
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
                    referees: 'שופטים',
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
                home: 'ביתית',
                guest: 'אורחת',
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
                league_cup_toto: 'גביע הטוטו/גביע הליגה',
                total: 'סך הכל',
                yellow_league: 'צהוב - ליגה/גביע המדינה',
                yellow_cup_toto: 'צהוב - גביע הטוטו/גביע הליגה',
                red: 'אדום',
            },
            coach: {
                debut_game: 'משחק בכורה',
                game_details: 'פרטי משחק',
                israel: 'ישראל',
                iceland: 'איסלנד',
                team_topteam: 'קבוצות \\ נבחרות',
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
                suggestion: 'הצעות',
                not_search_result: 'לא נמצאו תוצאות חיפוש',
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
                    minutes: 'דקות',
                },
                gallery: {
                    title: 'גלריית נבחרת',
                },
                magazine: {
                    title: 'מגזין נבחרת',
                },
            },
            video: {
                title: 'סרטונים',
                priority: {
                    label: 'קבוצות מועדפות',
                },
                fav_player: {
                    label: 'שחקנים מועדפים',
                },
                fav_nation_team: {
                    label: 'נבחרות מועדפות',
                },
                general_vod: {
                    label: 'סרטונים נבחרים',
                },
            },
            goblet: {
                title: 'גביע',
                state_cup: 'גביע מדינה',
                toto_cup: 'גביע טוטו',
                search_placeholder: 'חיפוש גביע',
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
                    trophy_around: 'סיבובי הגביע',
                    team_name: 'שם הקבוצה',
                },
                cup: {
                    year: 'שנה',
                    name: 'שם קבוצה',
                    date: 'תאריך',
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
                    league: 'ליגה',
                },
                cast: 'סגל שחקנים',
                official: 'בעלי תפקידים',
                list_games: {
                    title: 'רשימת משחקים',
                },
                league_table: {
                    title: 'טבלת ליגה',
                    more: 'לתוצאות המשחק בזמן אמת',
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
                    scorer_of_goal_state_cup: 'כובשי שערים בגביע המדינה',
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
                    average_rebounds: 'ממוצע ספיגות למשחק',
                    average_goal: 'ממוצע שערים',
                    team_competition: 'תחרות הקבוצה ההוגנת',
                    total: 'סה״כ מש׳',
                    score: 'ניקוד',
                    history: 'הסטוריית אליפויות',
                    season: 'עונה',
                    avg_game_goals: 'ממוצע שערים',
                    avg_game_yellow_cards: 'ממוצע כ. צהובים',
                    avg_game_red_cards: 'ממוצע כ. אדומים',
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
                    all_previous_seasons: 'לכל הקמפיינים',
                },
                list_game: {
                    title: 'רשימת משחקים',
                    home_away: 'בית / חוץ',
                    house: 'בית',
                    outside: 'חוץ',
                    see_all_games: 'לכל המשחקים',
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
                home: 'בית',
                training: 'אימונים',
                rating: 'דרוג:',
            },
            conquerors: {
                goal_kicker_title: 'רשימת כובשים',
                appearances_kicker_title: 'הופעות בנבחרת',
                name: 'שם שחקן',
                number: 'מס׳ שערים',
                number_of_goals: 'מספר שערים',
                appearances: 'הופעות בנבחרת',
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
            conversational: {
                accumulated: 'צברת',
                out_of: 'מתוך',
                question: 'רוצה להתחרות מול החברים שלך?',
                time: 'הזמן',
                next_quiz: 'לחידון הבא',
            },
            reward: {
                title: 'הפרס אוטוטו שלך!',
                rules: 'איך מקבלים?',
                button: 'בחר אותי',
            },
            confirmation: {
                require: 'רק רגע, אנחנו צריכים ממך כמה פרטים..',
                full_name: 'שם מלא',
                email: 'אימייל',
                phone: 'מס׳ טלפון',
                city: 'עיר',
                street: 'רחוב',
                no_home: 'מס׳ בית',
                provision: 'אני מאשר קבלת ניתן לבטל בכל רגע דרך מסך הגדרות תוכן פירסומי מההתאחדות ',
                button: 'אישור קבלת פרס',
            },
            contact_us: {
                contact_us: 'צור קשר',
                header: 'התאחדות לכדורגל בישראל',
                application: 'יישום',
                name: 'שם',
                email: ' דוא״ל',
                title: 'נושא / כותרת',
                content: 'תוכן',
                button: 'שליחה',
            },
            terms: {
                title: 'תנאי שימוש',
                text: `ברוכים הבאים לאתר הרשמי של ההתאחדות לכדורגל בישראל
                www.football.org.il, שער הכניסה לאינטרנט של ההתאחדות לכדורגל
                בישראל (להלן - "ההתאחדות"). הנך מתבקש לקרוא את תנאי שימוש אלה
                בעיון ובקפידה. על ידי גישה לאתר אינטרנט זה ו/או לכל דף שבו (להלן
                - "האתר"), אתה מביע את הסכמתך ואת הבנתך לתנאי השימוש שלהלן ולכל
                מידע המתייחס הן לאתר זה והן למידע כלשהו שבו. אם אינך מסכים לתנאי
                שימוש אלו, אל תיגש לאתר זה. בנוסף, בשימוש בשירותים מסוימים אחרים
                המוצעים האתר, תידרש להסכים גם לתנאים מיוחדים לאותם שירותים אשר
                יופיעו באתר מעת לעת. האמור בתנאי שימוש אלה בלשון זכר נועד לנוחות
                בלבד, והם מתייחסים, כמובן, גם לנשים.ההתאחדות שומרת לעצמה את
                הזכות לשנות בכל עת את תנאי שימוש אלו מבלי לתת לך הודעה. על כן,
                אתה אחראי לעקוב באופן שוטף אחר תנאי שימוש אלו. המשך שימוש באתר
                זה בעקבות שינויים כלשהם כאלה יהווה הסכמתך לשינויים כאמור.אלא אם
                כן צוין מפורשות אחרת, החומר המפורסם באתר מיועד לצרכי מידע בלבד.
                האתר מאפשר למצוא תכנים ומידע המתפרסמים באינטרנט. יתכן ותמצא כי
                מידע ותכנים אלה אינם הולמים את צרכיך, או שאתה מתנגד לתוכנם, או
                סבור כי הם מקוממים, פוגעים, מרגיזים, בלתי נאותים, בלתי
                חוקיים.ההתאחדות אינה אחראית בכל צורה שהיא לתוכנם של האתרים
                שאליהם מוליכים הקישורים באתר. העובדה שתמצא באתר קישור לאתר מסוים
                אינה מהוה אישור לכך שהמידע באתר זה מלא, מהימן, עדכני או אמין.
                ההתאחדות לא תהיה אחראית לכל נזק ישיר או עקיף, כספי או אחר,
                שייגרם לך כתוצאה משימוש או הסתמכות על המידע המתפרסם באתרים
                חיצוניים, שאליהם תגיע באמצעות איזה מהשירותים באתר.באתר מתפרסם
                מידע - כדוגמת סגלי קבוצות ו/או זכיות בתארים ו/או מועדי משחקים
                ו/או לוחות משחקים ו/או טבלאות ובהן נתונים שונים. מידע זה מוגש
                כשירות לציבור בלבד והוא עשוי להתעדכן מעת לעת. ההתאחדות אינה
                אחראית על תוכנו של המידע. קודם להסתמכות על כל מידע כאמור, מומלץ
                לבדוק במקרה המתאים את תוכנו באופן עצמאי.באתר תמצא מידע על מועדי
                משחקים ו/או לוחות משחקים ו/או טבלאות ליגות ובהן נתונים שונים
                ו/או נתונים אודות קבוצות המסונפות להתאחדות. ההתאחדות פועלת כמיטב
                יכולתה כדי לרכז ולעבד את הנתונים הללו תוך זמן קצר מקבלתם. עם זאת
                יתכן שבתהליך קליטתם, עיבודם ופרסומם יפלו טעויות. בנוסף, המידע
                עשוי לא להיות מעודכן במועד פרסומו, לכן, אם ברצונך להשתמש במידע
                זה עליך לבדוק אותו ולאמתו טרם השימוש. ההתאחדות לא תישא באחריות
                לטעויות בנתונים, ואין בפרסומם משום אישור רשמי של ההתאחדות. על אף
                שההתאחדות נתנה את כל תשומת הלב הנדרשת לכך שהמידע הכלול באתר זה
                יהיה מדויק במועד הפרסום, לא ניתנים כל מצג או אחריות (לרבות חבות
                כלפי צדדים שלישיים), בין מפורשים ובין משתמעים, לגבי דיוקו,
                אמינותו או שלמותו. לכן, כל החלטה בדבר השימוש במידע שתמצא באתר
                יעשה על אחריותך בלבד.ההתאחדות מעודדת אותך להתייחס בזהירות
                ובביקורתיות למידע שמתפרסם באתר, ובכלל זה למידע שמתפרסם באינטרנט,
                ובכלל זה למידע שמפרסמים משתמשים באתר בכלל, בקבוצות הדיון או בדף
                הצא'ט בפרט. התייחס למידע זה בזהירות ובקפידה. המידע אינו מתפרסם
                מטעמה של ההתאחדות, ולפיכך היא אינה אחראית למהימנותו, אמינותו,
                דיוקו, עדכניותו או שלמותו. ההתאחדות אינה אחראית לאינפורמציה או
                לדעות שיתפרסמו בדף הצ'אט באתר - המידע וההודאות באתרים אלו אינם
                על דעתה של ההתאחדות והיא אינה עומדת מאחוריהם.אתה מאשר ומסכים כי
                להתאחדות אין אחריות בנוגע לדיוק או לזמינות של מידע, חומר או תוכן
                המסופקים על ידי אתרים מקושרים של צדדים שלישיים (Links) או בנוגע
                לתוכן, תפקוד, תנאי השימוש או מדיניות שמירת הפרטיות כאמור. האתר
                כולל מידע מסחרי, הנמסר לפרסום מטעמם של מפרסמים שונים. מידע כאמור
                יכול שיהיה בטקסט, בתמונות, בקול או במולטימדיה. ההתאחדות לא תישא
                בכל אחריות לתוכן המידע המסחרי, הפרסומות ומודעות הלוח שיפורסמו
                באתר. ההתאחדות אינה כותבת, בודקת, מוודאת או עורכת את תוכן
                הפרסומים הללו או אמיתותם. האחריות היחידה לתוכן המודעות והמידע
                המסחרי חלה על המפרסמים. ההתאחדות עצמה אינה מכירה את משתמשי האתר,
                ואין ביכולתה לבקר את אמיתות המידע שהם מוסרים לפרסום.ההתאחדות לא
                תהיה אחראית, ולא תחוב, בין ישירות ובין בעקיפין, לכל נזק או הפסד
                שנגרם, או שנגרם לכאורה, על ידי או בקשר לשימוש או הסתמכות על כל
                תוכן, מוצרים או חומר אחר כזה המצוי באתר או באתרים מקושרים של
                צדדים שלישיים.השירותים והמידע באתר ניתנים לשימוש כמות שהם (As
                is) ובסיכונך האישי בלבד, ללא אחריות משום סוג, בין מפורשת ובין
                משתמעת. לא ניתן להתאימם לצרכיו של כל אדם ואדם. לא תהיה לך כל
                טענה, תביעה או דרישה כלפי ההתאחדות בגין תכונות של השירותים,
                יכולותיהם, מגבלותיהם, התאמתם לצרכיך או התגובות שיעורר (אם בכלל)
                פרסום פרטים, מידע או קבצים מטעמך באתר. השימוש בשירותים ייעשה
                אפוא על אחריותך הבלעדית והמלאה. המידע שתמסור לפרסום באתר יהיה
                חשוף לכל משתמשי האינטרנט. נהג בתבונה ובזהירות בתגובות ובפניות
                שיתקבלו אצלך בעקבות השימוש באתר זה או פרסום איזה מפרטיך בו, כשם
                שעליך לנהוג בכל יצירת קשר, שאינה נעשית באמצעות האינטרנט.ההתאחדות
                אינה מתחייבת, כי למסרים, למידע או למודעות שתפרסם באתר תהיה
                היענות. ההתאחדות אינה יכולה לדעת אילו תגובות (אם בכלל) תקבל
                בעקבות הפרסום ומי יגיע למידע שתפרסם, ולכן לא תישא כלפיך (או כלפי
                מי מטעמך) באחריות כלשהי לתגובות הללו, לזהות הפונים אליך או לכל
                תוצאה שתנבע מהפרסום. ההתאחדות לא תהיה גם אחראית לכל שימוש שייעשה
                על ידי צד שלישי בפרטים שיפורסמו על-ידך.ההתאחדות עצמה אינה מכירה
                את משתמשי האתר, ואין ביכולתה לבקר את אמיתות המידע שהם מוסרים
                לפרסום. ההתאחדות לא תישא באחריות כלשהי לכל תוצאה שתנבע ממידע
                שפורסם באתר זה על-ידי צדדים שלישיים.קישורית אל אתר זה אינה
                מאפשרת לך להשתמש בתוכן, שמות, סימנים, תמונות או סימנים רשומים של
                ההתאחדות ו/או צד שלישי, אלא אם הוסכם הדבר בכתב בנפרד על ידי בעלי
                הזכויות המתאימים.ההתאחדות אינה מתחייבת שהשירותים באתר לא יופרעו,
                יינתנו כסדרם או בלא הפסקות, יתקיימו בבטחה וללא טעויות ויהיו
                חסינים מפני גישה בלתי-מורשית למחשבי ההתאחדות או מפני נזקים,
                קלקולים, תקלות או כשלים - והכל, בחומרה, בתוכנה, בקווי ובמערכות
                תקשורת, אצל ההתאחדות או אצל מי מספקיה.ההתאחדות תוכל לשנות מעת
                לעת את מבנה האתר הכולל את מראם, היקפם, תוכנם וזמינותם של
                השירותים הניתנים באתר וכל היבט אחר הכרוך בהם - והכל, בלא צורך
                להודיע לך על כך מראש. שינויים כאלה יבוצעו, בין השאר, בהתחשב
                באופי הדינמי של האינטרנט ובשינויים הטכנולוגיים והאחרים המתרחשים
                בו. מטבעם, שינויים מסוג זה עלולים להיות כרוכים בתקלות או לעורר
                בתחילה אי-נוחות וכיו"ב. לא תהיה לך כל טענה, תביעה או דרישה כלפי
                ההתאחדות בגין ביצוע שינויים כאמור או תקלות שיתרחשו אגב
                ביצועם.השירותים באתר ניתנים בלא תשלום. מסיבה זאת רשאית ההתאחדות
                להפסיק בכל עת את מתן השירותים, כולם או מקצתם, על פי שיקול דעתה
                הבלעדי. ההתאחדות תהיה רשאית למחוק את החומר הכלול באתר בלא לשמור
                כל גיבוי ממנו ובלא לתת הודעה נוספת על כך.מבלי לפגוע באמור לעיל,
                אין ההתאחדות אחראית לכל אובדן של מידע מכל סוג, שייגרם מכל סיבה
                שהיא. לא תישמע כל טענה נגד ההתאחדות שמקורה בהסמכות כלשהי על מידע
                שהתפרסם בזמן מסוים באתר.כתנאי לשימוש באתר, אתה מסכים לשפות את
                ההתאחדות, בעלי התפקידים בה, עובדיה וסוכניה על כל החבויות,
                ההוצאות (לרבות שכר טרחת עורכי דין) והנזקים שמקורם מתביעות
                הנובעות משמושך באתר.על השימוש באתר יחולו אך ורק דיני מדינת
                ישראל.מקום השיפוט הבלעדי בגין כל דבר ועניין הנובע מהסכם זה או
                מהאתר הנו בבתי המשפט המוסכמים במחוזות תל-אביב והמרכז בישראל.`,
            },
            home_page: {
                statistics: 'סטטיסטיקות',
                see_all: 'ראה הכל',
                gates: 'שערים',
                league: 'ליגה',
                third_country: 'ג. מדינה',
                third_tutu: 'ג. טוטו',
                total: 'סה״כ',
                yellow_card: 'כרטיסים צהובים',
                red_card: 'כרטיסים אדומים',
                game_table: 'רשימת משחקים',
                tickets: 'כרטיסים',
                game_season: 'משחקים בעונה',
                state_cup: 'גביע המדינה',
                toto_cup: 'גביע הטוטו',
                total_goals: 'סה"כ',
                games: 'משחקים',
                list_of_game: 'רשימת משחקים',
                all_game: 'לכל המשחקים',
                read_more: 'קרא עוד',
                full_table: 'לטבלה המלאה',
                top_team_second_tab_title: 'טבלת משחק',
                edit_favorites: 'ערוך מועדפים',
                magazine: 'מגזין ההתאחדות',
                league_gallery: 'סרטונים',
                all_video: 'לכל הסרטונים',
                instagram: 'ההתאחדות באינסטגרם',
                composition: 'הרכב',
                game_detail: 'פרטי משחק',
            },
            list_game: {
                results: 'לתוצאות המשחק בזמן אמת',
                detail: 'פרטי המשחק',
                composition: 'הרכב',
            },
            drop_down: {
                title: 'ליגת הבורסה לניירות ערך',
                label: 'בחר עונה',
            },
            contact: {
                title: 'התאחדות לכדורגל בישראל',
            },
            table_game: {
                gates: 'שערים',
                tickets: 'כרטיסים',
                playing_time: 'זמן משחק',
            },
            bottom_tab: {
                home: 'בית',
                leagues: 'ליגות',
                teams: 'נבחרות',
                question: 'שאלון',
                goblet: 'גביע',
            },
            notification: {
                title: 'התראות',
                active: 'התראות פעילות',
            },
        },
    },
    en: {
        translation: {
            fav_summary: {
                group: 'Favorite teams',
                favorite: 'Favorite players',
                national_team: 'Favorite top teams',
                add_group: 'Add team',
                add_actress: 'Add player',
                add_squad: 'Add top team',
                save_agree: 'Save preferences and agree to the ',
                term_use: 'terms of use',
                complete: 'Finish Registration',
                guest: 'Enter as guest',
                change: 'Change',
                login_as_guest: "Don't save and enter as guest",
                popUp: {
                    title: 'Continue without saving?',
                    text: 'Are you sure you want to enter as guest without saving your favorites?',
                    option1: 'Back to registration',
                    option2: 'Don’t save and enter as guest',
                },
            },
            welcome: {
                splash: 'Splash page',
                title: 'The Israel Football Association',
                info: 'Join us and get all the info abput your team or players!',
                start: 'Start',
                account: 'Already have an account?',
                create: 'Connect',
                sign_up: 'Sign up for the app\nThe Israel Football Association',
                join_us: 'Join us and get all the hottest information about\nyour team or player!',
            },
            favorite_team: {
                skip: 'Skip',
                title: 'Choose up to 3 favorite teams',
                place_holder: 'Search team...',
                chosen: 'Selected ',
                button: 'Continue',
            },
            favorite_player: {
                skip: 'Skip',
                title: 'Choose up to 3 favorite players',
                place_holder: 'Search player…',
                chosen: 'Selected ',
                button: 'Continue',
                group: 'All Players',
            },
            favorite_top_team: {
                skip: 'Skip',
                title: 'Choose up to 2 favorite top teams',
                place_holder: 'Search group...',
                chosen: 'Selected ',
                button: 'Continue',
            },
            register: {
                title: 'Register to the Israeli Football Association Application',
                sub_title: 'Join us and receive all the information about your team or player!',
                registerByPhone: 'Registration with phone',
                phoneNumber: 'Phone number',
                submit: 'Send Verification Code',
                alreadyUser: 'Already have an account? ',
                connect: 'Login',
                invalid: 'Invalid phone number',
                fb: 'Register with Facebook',
                gg: 'Register with Google',
                apple: 'Register with Apple',
            },
            side_menu: {
                my_account: 'My account',
                contact_us: 'Contact us',
                definitions: 'Settings',
                terms: 'Terms of use and privacy policy',
                guest: 'Guest',
                logout: 'Logout',
                are_you_want_logout: 'Are you sure you want to logout?',
                yes: 'Yes',
                no: 'No',
                notification: 'Notifications',
                logout_with_guest: 'Delete my favorites and logout?',
                logout_with_guest_title: 'Delete favorites and logout',
                ok: 'Ok',
                message: 'Message',
                thank_you: 'Thank you. Your message was sent!',
                language: 'לחץ לעברית',
            },
            connect: {
                title: 'Login',
                placeholder: 'Phone number',
                button: 'Send Verification Code',
                error: 'Unidentified number registered',
                or: 'Or',
                fb: 'Register with Facebook',
                gg: 'Register with Google',
                apple: 'Register with Apple',
                signup: 'Register',
                nosignUp: "Don't have an account yet? ",
            },
            verify: {
                title: 'Register with phone',
                header: 'Enter the pin number sent to your phone',
                text_link: 'send again',
                text_not_reach: "I didn't receive, ",
                time_send: 'Verification code soon will be sent to you',
                error: 'Wrong code, try again',
            },
            settings: {
                user_settings: 'User Settings',
                name: 'Full Name',
                email: 'Email',
                gender: 'Gender',
                male: 'Male',
                female: 'Female',
                other_gender: 'N/A',
                dob: 'Date of Birth',
                personal: 'Personal preferences',
                add_group: 'Add a group',
                add_actress: 'Add an actress',
                add_squad: 'Add an squad',
                group: 'Preferred groups',
                sleep: 'Change',
                favorite: 'Favorite players',
                national_team: 'Favorite national teams',
                notifications: 'Notifications settings',
                tutorial: 'Send me push notifications for the following',
                before_every_game: 'Before every game',
                before_game_of_team: 'Before a game of teams I defined',
                point_received: 'When points are received',
                save_changes: 'Save Changes',
                delete_account: 'Delete account',
                notify_1: 'Notifications about messages/sales/prizes',
                notify_2: 'Notifications about a favorite player',
                notify_3: 'Notifications about a favorite team',
                notify_4: "Notifications about a favorite player's league",
                notify_5: "Notifications about a favorite team's league",
                notify_6: "Notifications about a favorite players's top team",
            },
            reg: {
                title: 'Welcome! Please fill the details',
                sub_title: 'Join us and get all the info about your team or players!',
                place_holder_name: 'Name / nickname',
                error: {
                    error_empty: 'Please enter name',
                    error_valid: 'Use of invalid characters',
                },
                gender: {
                    label: 'Gender',
                    male: 'Male',
                    female: 'Female',
                    other: 'N/A',
                },
                birth_date: 'Birth date',
                agree: 'I read and I agree to the ',
                provision: 'Terms & Conditions',
                button: 'Get On the Field',
            },
            team: {
                title: 'Top Teams',
                group: {
                    temp: 'the chosen one the young woman',
                },
            },
            national_team: {
                team_event: 'Team events',
                previous_campaigns: 'Previous campaigns',
                ranking_table: {
                    title: 'Leaderboard',
                    details: 'See all games',
                    place: 'Place',
                    team: 'Top Team',
                    time: 'goal',
                    mash: 'gms',
                    nch: 'win',
                    draw: 'tie',
                    the_p: 'dif',
                    no: 'pts',
                },
                list_game: {
                    title: 'Games list',
                    home_away: 'Home / Away',
                    house: 'Home',
                    outside: 'Away',
                },
                conquerors: {
                    title: 'Goal kickers',
                    full_list: 'Full list',
                },
                performances: {
                    title: 'Appearances',
                    full_list: 'Full list',
                },
            },
            team_squad: {
                title: 'Personal',
                option: {
                    players: 'Players',
                    officials: 'Staff',
                },
                top_team_personnel: 'Top Team Personnel',
                team_personnel: 'Team Personnel',
                gk: 'Goalkeepers',
                df: 'Defence',
                mf: 'Midfield',
                st: 'Attack',
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
                    title: 'Lineup',
                    main_lineup: 'Opening lineup',
                    replace: 'Substitutes',
                    not_partner: 'Not participated',
                    coach: 'Coach ',
                    referees: 'Referees',
                },
                game_move: {
                    title: 'Gameplay',
                    start: 'Start of game',
                },
                schedule: {
                    title: 'Games in House',
                },
                standing: {
                    title: 'House Table',
                    place: 'Place',
                    team: 'Top Team',
                    time: 'goal',
                    mash: 'gms',
                    nch: 'win',
                    draw: 'tie',
                    the_p: 'dif',
                    no: 'pts',
                },
                home: 'Home',
                guest: 'Guest',
            },
            data_player: {
                number: 'Games',
                national: {
                    israel: 'Israel',
                    title: 'Citizenship',
                },
                birthday: 'Date of birth',
                option: {
                    club: 'Details in team',
                    national: 'Details in top team',
                },
                gates: 'Goals',
                frame: 'Context',
                ticket: {
                    label: 'Cards',
                    type: 'Card type',
                    amount: 'Num of cards',
                },
                games_in_season: 'Games in season',
                info: 'General info',
                count: 'Num of appearances',
                debut: 'Debut appearance',
                last: 'Last game',
                goal: 'Goals in top team',
                team: 'Top team',
                games: 'Games',
                details: 'Details',
                league_cup_toto: 'League/Toto Cup',
                total: 'Total',
                yellow_league: 'Yellow - League',
                yellow_cup_toto: 'Yellow - Cup / Toto',
                red: 'Red',
            },
            coach: {
                debut_game: 'Debut game',
                game_details: 'Game details',
                israel: 'Israel',
                iceland: 'Iceland',
                option: {
                    team: 'Teams/Top Teams',
                    games: 'Games',
                },
                season: 'Season',
                club: 'Club',
                age_group: 'Age group',
                position: 'Role',
                game: 'Games',
                victory: 'Wins',
                loss: 'Loses',
                draw: 'Ties',
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
                suggestion: 'Suggestions',
                not_search_result: 'No search results found',
                place_holder: 'Search league...',
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
                    group: 'Team',
                    from: 'gms',
                    nch: 'win',
                    draw: 'tie',
                    the_p: 'dif',
                    time: 'goal',
                    no: 'pts',
                },
                list_games: {
                    title: 'List of games',
                },
                statistics: {
                    title: 'Statistics',
                    ranking_home: 'Home games',
                    ranking_away: 'External games',
                    more: 'More Statistics',
                },
                about: {
                    title: 'About the league',
                    cycles: 'Cycles',
                    rounds: 'Rounds',
                    seasons: 'Seasons',
                    rising: 'Ascending',
                    groups: 'Teams',
                    age_group: 'Age group',
                    exchanges: 'Exchanges',
                    minutes: 'Minutes',
                    pause: 'Halftime length',
                    down: 'Descending',
                },

                gallery: {
                    title: 'Selected gallery',
                },
                magazine: {
                    title: 'Selected magazine',
                },
            },
            video: {
                title: 'Clips',
                priority: {
                    label: 'Favorite teams',
                },
                fav_player: {
                    label: 'Favorite players',
                },
                fav_nation_team: {
                    label: 'Favorite top teams',
                },
                general_vod: {
                    label: 'Selected videos',
                },
            },
            goblet: {
                title: 'Cup',
                state_cup: 'National Cup',
                toto_cup: 'Toto Cup',
                search_placeholder: 'Search cup',
            },
            state_cup: {
                title: 'State cup',
                season_game: 'Season',
                early_stage_game: {
                    label: 'Early stage games',
                    date: 'Date',
                    play: 'Game',
                    etch: 'Stadium',
                    hour: 'Time',
                    toch: 'Score',
                },
                statistics: {
                    label: 'Statistics',
                    trophy: 'Cup holders',
                    season: 'Season',
                    group: 'Team name',
                    see_all: 'See all',
                    cup_around: 'The cup rounds',
                    date: 'Date',
                    round: 'Round',
                    trophy_around: 'Cup rounds',
                    team_name: 'Team name',
                },
                cup: {
                    year: 'Season',
                    name: 'Team name',
                    trophy: 'Cup holders',
                    around: 'Cup rounds',
                    date: 'Date',
                },
            },
            group_page: {
                info_group: {
                    about: 'About the team',
                    age_group: 'Age group',
                    governing: 'Management',
                    office: 'Office',
                    fax: 'Fax',
                    address: 'Address',
                    email: 'Email',
                    list: 'List of courts',
                    stadium: 'Stadium',
                    league: 'League',
                },
                cast: 'Players personnel',
                official: 'Staff',
                league_table: {
                    title: 'League table',
                    more: 'For the results of the game in real time',
                },
                list_games: {
                    title: 'Games list',
                },
                statistics: {
                    title: 'Statistics',
                    see_all: 'See all',
                    player: 'Player',
                    number_game: 'Num of games',
                    gates: 'Goals',
                    yellow_league_cup: 'Yellow in league/cup',
                    yellow_tutu: 'Yellow in Toto',
                    red_card: 'Red cards',
                    vehicle: 'Opening lineup',
                    enter_replacement: 'Entered as sub',
                    switched: 'Was substituted',
                    subtlety: 'Minus in game',
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
                    scorer_of_goal_state_cup: 'Goal scorers in the State Cup',
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
                    goal: 'Goal Kickers',
                    see_all: 'See all',
                    name_club: 'Team name',
                    name_player: 'Player name',
                    gate: 'Goals',
                    accumulation_yellow: 'Yellow Cards',
                    yellow: 'Yellow',
                    accumulation_red: 'Red Cards',
                    red: 'Red',
                    average_yellow: 'Avg. yellows per game',
                    location: 'Place',
                    average: 'Yellow',
                    average_score: 'Avg. goal kicks per game',
                    average_league: 'League averages',
                    category: 'Category',
                    average_game: 'Avg. Game',
                    average_cycle: 'Avg. Round',
                    average_goal: 'Average goals',
                    average_rebounds: 'Avg. goals received per game',
                    team_competition: 'The fair team competition',
                    total: 'Total',
                    score: 'Score',
                    history: 'Championship History',
                    season: 'Season',
                    avg_game_goals: 'Avg. Goals',
                    avg_game_yellow_cards: 'Avg. Yellow Cards',
                    avg_game_red_cards: 'Avg. Red Cards',
                },
            },
            composition: {
                domestic: 'Domestic',
                guest: 'A guest',
            },
            previous_campaigns: {
                title: 'Previous campaigns',
                campaign_game: 'Campaign name',
                year: 'Season',
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
                    all_previous_seasons: 'All campaigns',
                },
                list_game: {
                    title: 'List of games',
                    home_away: 'Home / Away',
                    house: 'House',
                    outside: 'Outsidess',
                    see_all_games: 'All campaigns',
                },
            },
            goal_national_team: {
                title: 'Goals in the national team',
                red: 'Reds',
                yellow: 'Yellow',
                goal: 'Goal',
            },
            pitch: {
                team_field: 'Teams using the stadium',
                phone: 'Phone',
                contact: 'Contact',
                address: 'Address',
                group: 'Group',
                age: 'Age group',
                home_training: 'Home/Training',
                rating: 'Rating:',
                home: 'Home',
                training: 'Training',
            },
            conquerors: {
                title: 'List of conquerors',
                name: "A player's name",
                number: 'Number of goals',
                goal_kicker_title: 'Goal Kickers',
                appearances_kicker_title: 'Appearances',
                number_of_goals: 'Number of goals',
                appearances: 'Appearances',
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
            conversational: {
                accumulated: 'Accumulated',
                out_of: 'Out of',
                question: 'Want to compete against your friends?',
                time: 'The time',
                next_quiz: 'For the next quiz',
            },
            reward: {
                title: 'Your auto prize!',
                rules: 'How do you get?',
                button: 'Choose me',
            },
            confirmation: {
                require: 'Just a moment, we need some details from you..',
                full_name: 'Full Name',
                email: 'Email',
                phone: 'Phone Number',
                city: 'City',
                street: 'Street',
                no_home: 'No. Home',
                provision:
                    'I confirm receipt can be canceled at any time through the advertising content settings screen from the association',
                button: 'Confirmation of receiving an award',
            },

            contact_us: {
                contact_us: 'Contact Us',
                header: 'Israel Football Association',
                application: 'Application',
                name: 'Name',
                email: 'Email',
                title: 'Title',
                content: 'Message',
                button: 'Send',
            },
            terms: {
                title: 'Terms of Use',
                text: `ברוכים הבאים לאתר הרשמי של ההתאחדות לכדורגל בישראל
                www.football.org.il, שער הכניסה לאינטרנט של ההתאחדות לכדורגל
                בישראל (להלן - "ההתאחדות"). הנך מתבקש לקרוא את תנאי שימוש אלה
                בעיון ובקפידה. על ידי גישה לאתר אינטרנט זה ו/או לכל דף שבו (להלן
                - "האתר"), אתה מביע את הסכמתך ואת הבנתך לתנאי השימוש שלהלן ולכל
                מידע המתייחס הן לאתר זה והן למידע כלשהו שבו. אם אינך מסכים לתנאי
                שימוש אלו, אל תיגש לאתר זה. בנוסף, בשימוש בשירותים מסוימים אחרים
                המוצעים האתר, תידרש להסכים גם לתנאים מיוחדים לאותם שירותים אשר
                יופיעו באתר מעת לעת. האמור בתנאי שימוש אלה בלשון זכר נועד לנוחות
                בלבד, והם מתייחסים, כמובן, גם לנשים.ההתאחדות שומרת לעצמה את
                הזכות לשנות בכל עת את תנאי שימוש אלו מבלי לתת לך הודעה. על כן,
                אתה אחראי לעקוב באופן שוטף אחר תנאי שימוש אלו. המשך שימוש באתר
                זה בעקבות שינויים כלשהם כאלה יהווה הסכמתך לשינויים כאמור.אלא אם
                כן צוין מפורשות אחרת, החומר המפורסם באתר מיועד לצרכי מידע בלבד.
                האתר מאפשר למצוא תכנים ומידע המתפרסמים באינטרנט. יתכן ותמצא כי
                מידע ותכנים אלה אינם הולמים את צרכיך, או שאתה מתנגד לתוכנם, או
                סבור כי הם מקוממים, פוגעים, מרגיזים, בלתי נאותים, בלתי
                חוקיים.ההתאחדות אינה אחראית בכל צורה שהיא לתוכנם של האתרים
                שאליהם מוליכים הקישורים באתר. העובדה שתמצא באתר קישור לאתר מסוים
                אינה מהוה אישור לכך שהמידע באתר זה מלא, מהימן, עדכני או אמין.
                ההתאחדות לא תהיה אחראית לכל נזק ישיר או עקיף, כספי או אחר,
                שייגרם לך כתוצאה משימוש או הסתמכות על המידע המתפרסם באתרים
                חיצוניים, שאליהם תגיע באמצעות איזה מהשירותים באתר.באתר מתפרסם
                מידע - כדוגמת סגלי קבוצות ו/או זכיות בתארים ו/או מועדי משחקים
                ו/או לוחות משחקים ו/או טבלאות ובהן נתונים שונים. מידע זה מוגש
                כשירות לציבור בלבד והוא עשוי להתעדכן מעת לעת. ההתאחדות אינה
                אחראית על תוכנו של המידע. קודם להסתמכות על כל מידע כאמור, מומלץ
                לבדוק במקרה המתאים את תוכנו באופן עצמאי.באתר תמצא מידע על מועדי
                משחקים ו/או לוחות משחקים ו/או טבלאות ליגות ובהן נתונים שונים
                ו/או נתונים אודות קבוצות המסונפות להתאחדות. ההתאחדות פועלת כמיטב
                יכולתה כדי לרכז ולעבד את הנתונים הללו תוך זמן קצר מקבלתם. עם זאת
                יתכן שבתהליך קליטתם, עיבודם ופרסומם יפלו טעויות. בנוסף, המידע
                עשוי לא להיות מעודכן במועד פרסומו, לכן, אם ברצונך להשתמש במידע
                זה עליך לבדוק אותו ולאמתו טרם השימוש. ההתאחדות לא תישא באחריות
                לטעויות בנתונים, ואין בפרסומם משום אישור רשמי של ההתאחדות. על אף
                שההתאחדות נתנה את כל תשומת הלב הנדרשת לכך שהמידע הכלול באתר זה
                יהיה מדויק במועד הפרסום, לא ניתנים כל מצג או אחריות (לרבות חבות
                כלפי צדדים שלישיים), בין מפורשים ובין משתמעים, לגבי דיוקו,
                אמינותו או שלמותו. לכן, כל החלטה בדבר השימוש במידע שתמצא באתר
                יעשה על אחריותך בלבד.ההתאחדות מעודדת אותך להתייחס בזהירות
                ובביקורתיות למידע שמתפרסם באתר, ובכלל זה למידע שמתפרסם באינטרנט,
                ובכלל זה למידע שמפרסמים משתמשים באתר בכלל, בקבוצות הדיון או בדף
                הצא'ט בפרט. התייחס למידע זה בזהירות ובקפידה. המידע אינו מתפרסם
                מטעמה של ההתאחדות, ולפיכך היא אינה אחראית למהימנותו, אמינותו,
                דיוקו, עדכניותו או שלמותו. ההתאחדות אינה אחראית לאינפורמציה או
                לדעות שיתפרסמו בדף הצ'אט באתר - המידע וההודאות באתרים אלו אינם
                על דעתה של ההתאחדות והיא אינה עומדת מאחוריהם.אתה מאשר ומסכים כי
                להתאחדות אין אחריות בנוגע לדיוק או לזמינות של מידע, חומר או תוכן
                המסופקים על ידי אתרים מקושרים של צדדים שלישיים (Links) או בנוגע
                לתוכן, תפקוד, תנאי השימוש או מדיניות שמירת הפרטיות כאמור. האתר
                כולל מידע מסחרי, הנמסר לפרסום מטעמם של מפרסמים שונים. מידע כאמור
                יכול שיהיה בטקסט, בתמונות, בקול או במולטימדיה. ההתאחדות לא תישא
                בכל אחריות לתוכן המידע המסחרי, הפרסומות ומודעות הלוח שיפורסמו
                באתר. ההתאחדות אינה כותבת, בודקת, מוודאת או עורכת את תוכן
                הפרסומים הללו או אמיתותם. האחריות היחידה לתוכן המודעות והמידע
                המסחרי חלה על המפרסמים. ההתאחדות עצמה אינה מכירה את משתמשי האתר,
                ואין ביכולתה לבקר את אמיתות המידע שהם מוסרים לפרסום.ההתאחדות לא
                תהיה אחראית, ולא תחוב, בין ישירות ובין בעקיפין, לכל נזק או הפסד
                שנגרם, או שנגרם לכאורה, על ידי או בקשר לשימוש או הסתמכות על כל
                תוכן, מוצרים או חומר אחר כזה המצוי באתר או באתרים מקושרים של
                צדדים שלישיים.השירותים והמידע באתר ניתנים לשימוש כמות שהם (As
                is) ובסיכונך האישי בלבד, ללא אחריות משום סוג, בין מפורשת ובין
                משתמעת. לא ניתן להתאימם לצרכיו של כל אדם ואדם. לא תהיה לך כל
                טענה, תביעה או דרישה כלפי ההתאחדות בגין תכונות של השירותים,
                יכולותיהם, מגבלותיהם, התאמתם לצרכיך או התגובות שיעורר (אם בכלל)
                פרסום פרטים, מידע או קבצים מטעמך באתר. השימוש בשירותים ייעשה
                אפוא על אחריותך הבלעדית והמלאה. המידע שתמסור לפרסום באתר יהיה
                חשוף לכל משתמשי האינטרנט. נהג בתבונה ובזהירות בתגובות ובפניות
                שיתקבלו אצלך בעקבות השימוש באתר זה או פרסום איזה מפרטיך בו, כשם
                שעליך לנהוג בכל יצירת קשר, שאינה נעשית באמצעות האינטרנט.ההתאחדות
                אינה מתחייבת, כי למסרים, למידע או למודעות שתפרסם באתר תהיה
                היענות. ההתאחדות אינה יכולה לדעת אילו תגובות (אם בכלל) תקבל
                בעקבות הפרסום ומי יגיע למידע שתפרסם, ולכן לא תישא כלפיך (או כלפי
                מי מטעמך) באחריות כלשהי לתגובות הללו, לזהות הפונים אליך או לכל
                תוצאה שתנבע מהפרסום. ההתאחדות לא תהיה גם אחראית לכל שימוש שייעשה
                על ידי צד שלישי בפרטים שיפורסמו על-ידך.ההתאחדות עצמה אינה מכירה
                את משתמשי האתר, ואין ביכולתה לבקר את אמיתות המידע שהם מוסרים
                לפרסום. ההתאחדות לא תישא באחריות כלשהי לכל תוצאה שתנבע ממידע
                שפורסם באתר זה על-ידי צדדים שלישיים.קישורית אל אתר זה אינה
                מאפשרת לך להשתמש בתוכן, שמות, סימנים, תמונות או סימנים רשומים של
                ההתאחדות ו/או צד שלישי, אלא אם הוסכם הדבר בכתב בנפרד על ידי בעלי
                הזכויות המתאימים.ההתאחדות אינה מתחייבת שהשירותים באתר לא יופרעו,
                יינתנו כסדרם או בלא הפסקות, יתקיימו בבטחה וללא טעויות ויהיו
                חסינים מפני גישה בלתי-מורשית למחשבי ההתאחדות או מפני נזקים,
                קלקולים, תקלות או כשלים - והכל, בחומרה, בתוכנה, בקווי ובמערכות
                תקשורת, אצל ההתאחדות או אצל מי מספקיה.ההתאחדות תוכל לשנות מעת
                לעת את מבנה האתר הכולל את מראם, היקפם, תוכנם וזמינותם של
                השירותים הניתנים באתר וכל היבט אחר הכרוך בהם - והכל, בלא צורך
                להודיע לך על כך מראש. שינויים כאלה יבוצעו, בין השאר, בהתחשב
                באופי הדינמי של האינטרנט ובשינויים הטכנולוגיים והאחרים המתרחשים
                בו. מטבעם, שינויים מסוג זה עלולים להיות כרוכים בתקלות או לעורר
                בתחילה אי-נוחות וכיו"ב. לא תהיה לך כל טענה, תביעה או דרישה כלפי
                ההתאחדות בגין ביצוע שינויים כאמור או תקלות שיתרחשו אגב
                ביצועם.השירותים באתר ניתנים בלא תשלום. מסיבה זאת רשאית ההתאחדות
                להפסיק בכל עת את מתן השירותים, כולם או מקצתם, על פי שיקול דעתה
                הבלעדי. ההתאחדות תהיה רשאית למחוק את החומר הכלול באתר בלא לשמור
                כל גיבוי ממנו ובלא לתת הודעה נוספת על כך.מבלי לפגוע באמור לעיל,
                אין ההתאחדות אחראית לכל אובדן של מידע מכל סוג, שייגרם מכל סיבה
                שהיא. לא תישמע כל טענה נגד ההתאחדות שמקורה בהסמכות כלשהי על מידע
                שהתפרסם בזמן מסוים באתר.כתנאי לשימוש באתר, אתה מסכים לשפות את
                ההתאחדות, בעלי התפקידים בה, עובדיה וסוכניה על כל החבויות,
                ההוצאות (לרבות שכר טרחת עורכי דין) והנזקים שמקורם מתביעות
                הנובעות משמושך באתר.על השימוש באתר יחולו אך ורק דיני מדינת
                ישראל.מקום השיפוט הבלעדי בגין כל דבר ועניין הנובע מהסכם זה או
                מהאתר הנו בבתי המשפט המוסכמים במחוזות תל-אביב והמרכז בישראל.`,
            },
            home_page: {
                statistics: 'Statistics',
                see_all: 'See all',
                gates: 'Goals',
                league: 'League',
                third_country: 'C. Nat',
                third_tutu: 'C. Toto',
                total: 'Total',
                yellow_card: 'Yellow cards',
                red_card: 'Red cards',
                game_table: 'Game list',
                tickets: 'Cards',
                game_season: 'Games in season',
                state_cup: 'National cup',
                toto_cup: 'Toto cup',
                total_goals: 'Total',
                games: 'Games',
                list_of_game: 'List of games',
                all_game: 'For all games',
                read_more: 'Read More',
                edit_favorites: 'Edit Favorites',
                top_team_second_tab_title: 'Table game',
                magazine: 'Magazine',
                full_table: 'Full table',
                league_gallery: 'Clips',
                all_video: 'See all',
                instagram: 'Instagram',
                composition: 'Lineup',
                game_detail: 'Game details',
            },
            list_game: {
                results: 'Game live data',
                detail: 'Game details',
                composition: 'Personnel',
            },
            drop_down: {
                title: 'Stock Exchange League',
                label: 'Choose season',
            },
            table_game: {
                gates: 'Goals',
                tickets: 'Cards',
                playing_time: 'Playing time',
            },
            bottom_tab: {
                home: 'Home',
                leagues: 'Leagues',
                teams: 'Teams',
                question: 'Question',
                goblet: 'Cups',
            },
            notification: {
                title: 'Notifications',
                active: 'active notifications',
            },
        },
    },
};

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: I18nManager.isRTL ? 'heb' : 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
