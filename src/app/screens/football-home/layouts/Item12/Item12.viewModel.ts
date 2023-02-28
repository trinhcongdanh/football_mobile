import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IItem12Props } from '@football/app/screens/football-home/layouts/Item12/Item12.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ videos }: IItem12Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const dots = Array(videos.length).fill('');

    const onClickAllVideo = () => {
        navigate(ScreenName.VideoPage);
    };
    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        onClickAllVideo,
    };
};
