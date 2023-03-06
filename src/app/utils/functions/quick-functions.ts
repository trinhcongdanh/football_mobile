import qs from 'qs';

export const serializeParams = (obj: any) => {
    const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
    return a;
};
