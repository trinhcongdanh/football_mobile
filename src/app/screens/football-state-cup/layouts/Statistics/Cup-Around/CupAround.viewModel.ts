import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ICupAroundProps } from '@football/app/screens/football-state-cup/layouts/Statistics/Cup-Around/CupAround.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { MAX_CUP_CYCLES_DETAILS_ITEMS } from '@football/core/api/configs/config';
import { CupSeasonCycleDetails } from '@football/core/models/CupSeasonModelResponse';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ cyclesDetails, cup }: ICupAroundProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();

    const handleStatisticDetailsScreen = () => {
        navigate(ScreenName.CupsPage, { cup, cyclesDetails });
    };

    const [details, setDetails] = useState<CupSeasonCycleDetails[]>([]);

    useEffect(() => {
        const detailsFiltered = cyclesDetails.slice(0, MAX_CUP_CYCLES_DETAILS_ITEMS);
        setDetails(detailsFiltered);
    }, [cyclesDetails]);
    return {
        t,
        details,
        handleStatisticDetailsScreen,
    };
};
