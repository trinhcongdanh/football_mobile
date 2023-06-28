import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/Instagram/Instagram.style';
import { IInstagramProps } from '@football/app/screens/football-home/layouts/Instagram/Instagram.type';
import { useViewModel } from '@football/app/screens/football-home/layouts/Instagram/Instagram.viewModel';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize, width } from '@football/app/utils/responsive/scale';
import { InstagramProp } from '@football/core/models/HomePageModelResponse';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import RenderHtml from 'react-native-render-html';
import WebView from 'react-native-webview';

export const Instagram = ({ homePage }: IInstagramProps) => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, data, openInstagram } = useViewModel(
        { homePage }
    );

    console.log('homepage', homePage?.instagram);
    return (
        <View
            style={[
                styles.container,
                {
                    paddingHorizontal: getSize.m(16),
                },
            ]}
        >
            <View style={[appStyles.flex_row_space_center, { marginTop: getSize.m(30) }]}>
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
                {homePage?.instagram.map((item: InstagramProp, index) => {
                    return (
                        <View key={index}>
                            <RenderHtml contentWidth={width} source={{ html: item.embed_code }} />
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
