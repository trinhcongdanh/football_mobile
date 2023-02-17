import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/Item2/Item2.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

export const Item2 = () => {
    return (
        <ImageBackground
            source={AppImages.img_background_home_2}
            style={[appStyles.flex, { height: getSize.m(528), marginTop: getSize.m(46) }]}
        >
            <View style={appStyles.align_justify}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={AppImages.img_israel}
                        style={{
                            width: getSize.m(58),
                            height: getSize.m(58),
                            borderRadius: getSize.m(62),
                        }}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text style={styles.text_details}>מכבי תל אביב בוגרים</Text>
                    <LinearGradient
                        colors={['rgba(255, 43, 94, 1)', 'rgba(204, 10, 45, 1)']}
                        style={styles.icon_arrow_left}
                    >
                        <FastImage
                            source={AppImages.img_angle_down}
                            style={{ width: getSize.m(9), height: getSize.m(12) }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    );
};
