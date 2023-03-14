import { useTranslation } from 'react-i18next';

interface ITranslationTextProps {
    textHe: string | undefined;
    textEn: string | undefined;
}

export enum Locale {
    en = 'en',
    heb = 'heb',
}

export const useTranslationText = () => {
    const { i18n } = useTranslation();
    const locale = i18n.language;

    const getTranslationText = ({ textHe, textEn }: ITranslationTextProps) => {
        if (locale === Locale.en) {
            return textEn;
        }
        return textHe;
    };
    return { getTranslationText };
};
