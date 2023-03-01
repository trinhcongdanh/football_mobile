import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from '@football/app/screens/football-home/layouts/Item7/Item7.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item7/Item7.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { IItem7Props } from './Item7.type';

export const Item7 = ({ homePage }: IItem7Props) => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, onClickImage } = useViewModel();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onClickImage(homePage.ads.link)}>
                <FastImage
                    source={{ uri: homePage.ads.image_url }}
                    style={{
                        width: getSize.m(347),
                        height: getSize.m(247),
                        borderRadius: getSize.m(17),
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                {/* <FastImage
                    resizeMode={FastImage.resizeMode.contain}
                    source={AppImages.img_logo_player}
                    style={styles.logo_player}
                /> */}
                <View style={styles.main}>
                    {/* <Text style={styles.title}>אחריות חברתית</Text>
                    <Text style={styles.content}>
                        בואו לקחת חלק מ-לורם איפסום דולור סיט אמט, קונסקטורר ולדיק אדיפיסינג אלית
                        קולהע!
                    </Text> */}
                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>{t('home_page.read_more')}</Text>
                        <IconEntypo
                            name={appIcons.ic_arrow_left}
                            size={getSize.m(20)}
                            color={appColors.white}
                        />
                    </TouchableOpacity> */}
                </View>
            </TouchableOpacity>
        </View>
    );
};
