import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import { ISettingsScreenProps } from './SettingsScreen.type';

export const useViewModel = (props: ISettingsScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate } = useAppNavigator();
    const [image, setImage] = useState<any>();

    const date = new Date();

    const user = { username: '', gender: '', date: '' };

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

    return {
        date,
        image,
        isEnabled,
        t,
        goBack,
        navigate,
        handleOnDate,
        onImagePicker,
        toggleSwitch,
    };
};
