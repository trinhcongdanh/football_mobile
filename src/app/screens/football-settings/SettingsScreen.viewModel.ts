import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import { ISettingsScreenProps } from './SettingsScreen.type';

export const useViewModel = (props: ISettingsScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate, replace } = useAppNavigator();
    const [image, setImage] = useState<any>();

    const date = new Date();

    const user = { username: '', gender: '', date: '' };

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    const handleOnDate = (e: Date) => {
        user.date = e.toString();
    };

    const onImagePicker = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        // eslint-disable-next-line array-callback-return
        result.assets?.map(item => {
            setImage(item.uri);
        });
    };

    const backFavTeam = () => {
        replace(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const backFavPlayer = () => {
        replace(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const backFavTopTeam = () => {
        replace(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const handleSaveChange = () => {};
    return {
        date,
        image,
        isEnabled1,
        isEnabled2,
        isEnabled3,
        t,
        goBack,
        navigate,
        handleOnDate,
        onImagePicker,
        toggleSwitch1,
        toggleSwitch2,
        toggleSwitch3,
        backFavPlayer,
        backFavTeam,
        backFavTopTeam,
        handleSaveChange,
    };
};
