import { useTranslation } from 'react-i18next';

interface IResult {
    result: string;
}

export enum Locale {
    en = 'en',
    heb = 'heb',
}

export const useResult = () => {
    const { i18n } = useTranslation();
    const locale = i18n.language;
    const getResult = ({ result }: IResult) => {
        if (locale === Locale.en) {
            return result;
        }
        return result.split('').reverse().join('');
    };

    return { getResult };
};
