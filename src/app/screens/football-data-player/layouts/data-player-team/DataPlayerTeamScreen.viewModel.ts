import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IDataPlayerTeamScreenProps } from './DataPlayerTeamScreen.type';

export const useViewModel = ({}: IDataPlayerTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const [openModal, setOpenModal] = useState(false);

    const [selected, setSelected] = useState('2023/2022');
    const years = ['2023/2022', '2022/2021', '2021/2020', '2020/2019', '2019/2018'];
    const gates = [
        { id: 1, frame: 'ליגה', gate: 1 },
        { id: 2, frame: 'גביע המדינה', gate: 2 },
        { id: 3, frame: 'גביע הטוטו/גביע הליגה', gate: 0 },
        { id: 4, frame: 'סך הכל', gate: 3 },
    ];
    const tickets = [
        { id: 1, type: 'צהוב - ליגה/גביע המדינה', amount: 1 },
        { id: 2, type: 'צהוב - גביע הטוטו/גביע הליגה', amount: 2 },
        { id: 3, type: 'אדום', amount: 0 },
        { id: 4, type: 'סך הכל', amount: 3 },
    ];

    const datas = [
        {
            id: 1,
            home: 'מ.ס אשדוד',
            away: 'מכבי חיפה',
            date: '16/09/20',
            result: '3:0',
            time: "46'",
        },
        {
            id: 2,
            home: 'מ.ס אשדוד',
            away: 'מכבי חיפה',
            date: '18/09/20',
            result: '1:1',
            time: "73'",
        },
        {
            id: 3,
            home: 'מ.ס אשדוד',
            away: 'מכבי חיפה',
            date: '20/09/20',
            result: '0:0',
            time: "84'",
        },
    ];

    return {
        t,
        onGoBack,
        setOpenModal,
        setSelected,
        openModal,
        years,
        gates,
        tickets,
        selected,
        datas,
    };
};
