import { useMount } from '@football/app/utils/hooks/useMount';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { Season } from '@football/core/models/PlayerResponse';
import { IDataPlayerTeamScreenProps } from './DataPlayerTeamScreen.type';

const useViewState = () => {
    const [selectedSeason, setSelectedSeason] = useState<Season>();
    const [openModal, setOpenModal] = useState(false);

    return {
        selectedSeason,
        setSelectedSeason,
        openModal,
        setOpenModal,
    };
};

export const useViewModel = ({ player }: IDataPlayerTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const state = useViewState();

    useMount(() => {
        if (player?.team?.seasons?.length) {
            state.setSelectedSeason(player.team.seasons[0]);
        }
    });

    return {
        t,
        onGoBack,
        ...state,
    };
};
