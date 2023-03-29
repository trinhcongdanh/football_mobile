import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IItem12Props } from '@football/app/screens/football-home/layouts/Video/Video.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ videos }: IItem12Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(videos.length).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const dots = Array(videos.length).fill('');

    const onClickAllVideo = () => {
        navigate(ScreenName.SideBar, { isBackVideo: true });
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
