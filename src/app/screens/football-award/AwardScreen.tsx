import { AppImages } from '@football/app/assets/images';

import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import styles from '@football/app/screens/football-award/AwardScreen.style';
import { useViewModel } from '@football/app/screens/football-award/AwardScreen.viewModel';
import { IAwardScreenProps } from '@football/app/screens/football-award/AwardScreen.type';

export const AwardScreen = ({ navigation, route }: IAwardScreenProps) => {
    const { t, onGoBack, handleConfirmation } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background_award} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <View style={[appStyles.flex_row_space_center, styles.header]}>
                            <View>
                                <Image source={AppImages.img_x_circle} />
                            </View>

                            <Text
                                style={[
                                    appStyles.text_title,
                                    { width: getSize.m(240), marginTop: getSize.m(0) },
                                ]}
                            >
                                {t('reward.title')}
                            </Text>

                            <TouchableOpacity onPress={onGoBack}>
                                <LinearGradient
                                    colors={['rgba(44, 196, 255, 1)', 'rgba(0, 139, 193, 1)']}
                                    style={styles.question_close}
                                >
                                    <Icon
                                        name={appIcons.ic_close}
                                        size={getSize.m(20)}
                                        color={appColors.white}
                                    />
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={styles.reward}>
                                <Text style={styles.reward_name}>צעיף ADIDAS מונדיאל 2022</Text>
                                <View
                                    style={{
                                        marginTop: getSize.m(26),
                                        marginBottom: getSize.m(15),
                                    }}
                                >
                                    <Image source={AppImages.img_scarf} />
                                </View>
                                <Text style={styles.reward_desc}>
                                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף
                                    קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו
                                    בלוקריה שיקר ברורק לורם איפסום דולור.
                                </Text>
                                <View
                                    style={[
                                        appStyles.flex_row_center,
                                        { flex: 0, marginTop: getSize.m(17) },
                                    ]}
                                >
                                    <Text style={styles.reward_coin}>עלות הפרס 1,200</Text>
                                    <Image source={AppImages.img_coin} />
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(24) }}>
                                <Text style={styles.reward_rules}>{t('reward.rules')}</Text>
                                <View style={styles.reward_rules_item}>
                                    <View style={styles.reward_rules_decoration} />
                                    <Text style={styles.reward_rules_guides}>
                                        לורם איפסום דולור סיט אמט, קונסקטורר
                                    </Text>
                                </View>
                                <View style={styles.reward_rules_item}>
                                    <View style={styles.reward_rules_decoration} />
                                    <Text style={styles.reward_rules_guides}>
                                        לורם איפסום דולור סיט אמט, קונסקטורר
                                    </Text>
                                </View>
                                <View style={styles.reward_rules_item}>
                                    <View style={styles.reward_rules_decoration} />
                                    <Text style={styles.reward_rules_guides}>
                                        לורם איפסום דולור סיט אמט, קונסקטורר
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(33) }}>
                                <TouchableOpacity onPress={handleConfirmation}>
                                    <LinearGradient
                                        colors={['rgba(60, 147, 232,1)', 'rgba(38, 93, 199, 1)']}
                                        style={styles.reward_button}
                                    >
                                        <Text style={styles.reward_button_text}>
                                            {t('reward.button')}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
