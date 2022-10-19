import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IDataPlayerNationalScreenProps } from './DataPlayerNationalScreen.type';

export const useViewModel = ({}: IDataPlayerNationalScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);

    const [selected, setSelected] = useState('2023/2022');
    const years = ['2023/2022', '2022/2021', '2021/2020', '2020/2019', '2019/2018'];

    const goals = [
        { id: 1, team: 'הנבחרת הלאומית', games: 12, gates: 0 },
        { id: 2, team: 'הנבחרת הצעירה', games: 2, gates: 1 },
        { id: 3, team: 'נוער עד גיל 19', games: 2, gates: 1 },
        { id: 4, team: 'נוער עד גיל 17', games: 2, gates: 1 },
    ];

    return { t, setSelected, setOpenModal, goals, years, selected, openModal };
};
