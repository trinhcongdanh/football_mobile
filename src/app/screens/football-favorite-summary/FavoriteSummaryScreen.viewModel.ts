import { useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';

import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const [firstImage, setFirstImage] = useState<any>();
    const [secondImage, setSecondImage] = useState<any>();
    const [thirdImage, setThirdImage] = useState<any>();
    const images = [firstImage, secondImage, thirdImage];
    const [onCheck, setonCheck] = useState(false);

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const onImagePicker = async (index: number) => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        // eslint-disable-next-line array-callback-return
        result.assets?.map(item => {
            switch (index) {
                case 0:
                    setFirstImage(item);
                    break;
                case 1:
                    setSecondImage(item);
                    break;
                case 2:
                    setThirdImage(item);
                    break;

                default:
                    setFirstImage('');
                    setSecondImage('');
                    setThirdImage('');
                    break;
            }
        });
    };

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    return {
        t,
        onGoBack,
        onGoSkip,
        onImagePicker,
        toggleOnCheck,
        images,
        onCheck,
    };
};
