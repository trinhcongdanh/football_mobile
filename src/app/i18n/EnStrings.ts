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
        },
    },
};

I18nManager.forceRTL(true);

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: I18nManager.isRTL ? 'heb' : 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
