import moment from 'moment';
import { useTranslation } from 'react-i18next';

interface IDateTimeProps {
    date?: string;
    time?: string;
}

export enum Locale {
    en = 'en',
    heb = 'heb',
}

export const useDateTime = () => {
    const { i18n } = useTranslation();
    const locale = i18n.language;

    const getDate = ({ date }: IDateTimeProps) => {
        if (locale === Locale.en) {
            return moment(date, 'YYYY-MM-DD').format('MM/DD/YY');
        }
        return moment(date, 'YYYY-MM-DD').format('DD.MM.YY');
    };

    const getTime = ({ time }: IDateTimeProps) => {
        return moment(time, 'HH:mm:ss').format('HH:mm');
    };

    return { getDate, getTime };
};
