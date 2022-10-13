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
