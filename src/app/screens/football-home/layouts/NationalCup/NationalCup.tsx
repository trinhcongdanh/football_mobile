import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/NationalCup/NationalCup.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/NationalCup/NationalCup.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import IconEntypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { INationalCupProps } from '@football/app/screens/football-home/layouts/NationalCup/NationalCup.type';

export const NationalCup = ({ homePage }: INationalCupProps) => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, onClickCup } = useViewModel({
        homePage,
    });
    return (
        <TouchableOpacity onPress={() => onClickCup(homePage.national_cup?.cup_id)}>
            <View style={styles.container}>
                <FastImage
                    source={AppImages.img_mask_group_1}
                    style={{ width: getSize.m(347), height: getSize.m(199) }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <FastImage
                    source={{ uri: homePage?.national_cup?.image_url }}
                    resizeMode={FastImage.resizeMode.contain}
                    style={styles.logo}
                />
                {/* <FastImage
                    source={AppImages.img_cup_state}
                    resizeMode={FastImage.resizeMode.contain}
                    style={styles.cup}
                /> */}
                {/* <TouchableOpacity style={styles.button}>
                    <FastImage
                        source={AppImages.img_button}
                        style={{ width: getSize.m(154), height: getSize.m(33) }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <View style={[appStyles.flex_row_align, styles.content_button]}>
                        <Text style={styles.text_button}>{t('home_page.state_cup')}</Text>
                        <IconEntypo
                            name={appIcons.ic_left_ios}
                            size={getSize.m(20)}
                            color={appColors.white}
                        />
                    </View>
                </TouchableOpacity> */}
            </View>
        </TouchableOpacity>
    );
};
