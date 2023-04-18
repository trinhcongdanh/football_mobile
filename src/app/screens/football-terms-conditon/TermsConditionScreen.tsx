import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { useViewModel } from '@football/app/screens/football-terms-conditon/TermsConditionScreen.viewModel';
import styles from '@football/app/screens/football-terms-conditon/TermsConditionScreen.style';
import { ITermsConditionScreenProps } from '@football/app/screens/football-terms-conditon/TermsConditionScreen.type';
import { BackGround } from '@football/app/components/background/BackGround';
import { getSize } from '@football/app/utils/responsive/scale';

export const TermsConditionScreen = ({ navigation, route }: ITermsConditionScreenProps) => {
    const { t, onGoBack } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={[appStyles.container]}>
                    <View style={{ marginTop: getSize.m(16) }}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('terms.title')}
                        />
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(34) }}>
                    <ScrollView>
                        <View style={styles.terms_container}>
                            <View>
                                <View>
                                    <Text style={styles.terms_container_content}>
                                        {t('terms.header')}
                                    </Text>
                                </View>
                                <View style={{ marginTop: getSize.m(20) }}>
                                    <Text style={styles.terms_container_content}>
                                        {t('terms.text')}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </BackGround>
        </View>
    );
};
