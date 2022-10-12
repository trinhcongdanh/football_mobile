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
                user_settings: 'User Settings',
                name: 'Ido Abrahami',
                email: 'IdoAvrahami@Fmail.com',
                gender: 'Gender',
                male: 'Male',
                female: 'Female',
                other_gender: 'Irrelevant',
                dob: 'Date of Birth',
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
