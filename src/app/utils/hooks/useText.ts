interface ITextTeam {
    textTeam: string | undefined;
}

export enum Locale {
    en = 'en',
    heb = 'heb',
}

export const useTextTeam = () => {
    const getTextTeam = ({ textTeam }: ITextTeam) => {
        return textTeam?.split(' ').slice(0, 3).join(' ');
    };

    return { getTextTeam };
};
