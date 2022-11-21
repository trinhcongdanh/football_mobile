import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import styles from './MagazineScreen.style';
import { useViewModel } from './MagazineScreen.viewModel';
import { IMagazineScreenProps } from './MagazineScreen.type';

export const MagazineScreen = ({ navigation, route }: IMagazineScreenProps) => {
    const { t, onGoBack, contents } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('magazine.title')}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.main}>
                            <View style={styles.time}>
                                <Text style={styles.text_time}>11.01.22 | 13:32</Text>
                            </View>
                            <View style={{ marginTop: getSize.m(12) }}>
                                <Text style={styles.text_title}>
                                    יו״ר ועד איגוד השופטים ומנהל הליגות החובבניות בהתאחדות לכדורגל
                                    ביקרו אתמול באימון קבוצת צעירי לוד מליגה ג'
                                </Text>
                            </View>
                            <View style={{ marginTop: getSize.m(20) }}>
                                <Image source={AppImages.img_team} style={styles.image} />
                            </View>
                            <View style={{ marginTop: getSize.m(20) }}>
                                {contents.map((item, index) => {
                                    return (
                                        <Text style={styles.item_content} key={index}>
                                            {item}
                                        </Text>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
