import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { useViewModel } from '@football/app/screens/football-terms-conditon/TermsConditionScreen.viewModel';
import styles from '@football/app/screens/football-terms-conditon/TermsConditionScreen.style';
import { ITermsConditionScreenProps } from '@football/app/screens/football-terms-conditon/TermsConditionScreen.type';

export const TermsConditionScreen = ({ navigation, route }: ITermsConditionScreenProps) => {
    const { t, onGoBack } = useViewModel({ navigation, route });
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
                            title={t('terms.title')}
                        />
                    </View>
                    <ScrollView>
                        <View style={styles.terms_container}>
                            <View>
                                <Text style={styles.terms_container_content}>
                                    {t('terms.text')}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
