import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

export const useViewModel = (topTeam: TopTeamModel) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();

    const handleSeeAll = () => {
        navigate(ScreenName.PreviousCampaignsPage, { topTeam });
    };

    return {
        t,
        handleSeeAll,
    };
};
