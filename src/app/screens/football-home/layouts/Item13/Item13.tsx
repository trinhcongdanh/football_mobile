import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/Item13/Item13.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item13/Item13.viewModel';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

export const Item13 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, data, openInstagram } = useViewModel(
        {}
    );
    return (
        <View style={styles.container}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    { marginTop: getSize.m(30), marginHorizontal: getSize.m(16) },
                ]}
            >
                <Text style={styles.header}>{t('home_page.instagram')}</Text>
                <TouchableOpacity style={styles.button} onPress={openInstagram}>
                    <View style={appStyles.flex_row_align}>
                        <Text style={styles.instagram}>isr.fa</Text>
                        <FastImage
                            source={AppImages.img_instagram}
                            style={{ width: getSize.m(16.6), height: getSize.m(16.6) }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container_image}>
                {data.map((item, index) => {
                    return (
                        <View style={styles.item_image} key={index}>
                            <FastImage
                                source={item.img}
                                style={{
                                    width: getSize.m(165),
                                    height: getSize.m(165),
                                    borderRadius: getSize.m(15),
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
