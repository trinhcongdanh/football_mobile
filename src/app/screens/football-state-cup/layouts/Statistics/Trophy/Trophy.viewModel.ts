import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ITrophyProps } from '@football/app/screens/football-state-cup/layouts/Statistics/Trophy/Trophy.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { MAX_CUP_HOLDERS_ITEMS } from '@football/core/api/configs/config';
import { CupHolder } from '@football/core/models/CupModelResponse';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ cupHolders, cup }: ITrophyProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const [holders, setHolders] = useState<CupHolder[]>([]);

    const handleCupAround = () => {
        navigate(ScreenName.CupsPage, { cupHolders, cup });
    };

    useEffect(() => {
        const cupHoldersFiltered = cupHolders.slice(0, MAX_CUP_HOLDERS_ITEMS);
        setHolders(cupHoldersFiltered);
    }, [cupHolders]);

    return {
        t,
        holders,
        handleCupAround,
    };
};
