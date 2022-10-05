import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    heb: {
        translation: {
            splash: 'עמוד ספלאש',
            title: 'ההתאחדות לכדורגל בישראל',
            info: 'הצטרפו אלינו וקבלו את כל המידע הכי חם על הקבוצה או השחקן שלכם!',
            start: 'התחל',
            account: 'כבר יש לך משתמש?',
            create: 'התחבר',
        },
    },
    en: {
        translation: {
            splash: 'Splash page',
            title: 'The Israel Football Association',
            info: 'Join us and get all the hottest information about your team or player!',
            start: 'start',
            account: 'Already have a user?',
            create: 'Connect',
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: I18nManager.isRTL ? 'en' : 'heb', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
