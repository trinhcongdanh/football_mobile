import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from '@football/app/screens/football-conversational-discussion/ConversationalDiscussionScreen.style';
import { useViewModel } from '@football/app/screens/football-conversational-discussion/ConversationalDiscussionScreen.viewModel';
import { IConversationalDiscussionScreenProps } from '@football/app/screens/football-conversational-discussion/ConversationalDiscussionScreen.type';

export const ConversationalDiscussionScreen = ({
    navigation,
    route,
}: IConversationalDiscussionScreenProps) => {
    const { t, onGoBack, conversational, handleQuiz } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background_award} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <ScrollView>
                        <View style={appStyles.container}>
                            {conversational.map((item, index) => {
                                return (
                                    <View key={index}>
                                        <View
                                            style={[appStyles.flex_row_space_center, styles.header]}
                                        >
                                            <View>
                                                <Image source={AppImages.img_x_circle} />
                                            </View>

                                            <Text
                                                style={[
                                                    appStyles.text_title,
                                                    { width: getSize.m(240) },
                                                ]}
                                            >
                                                כמה אתה מכיר את נבחרת ישראל?
                                            </Text>

                                            <TouchableOpacity onPress={onGoBack}>
                                                <LinearGradient
                                                    colors={[
                                                        'rgba(44, 196, 255, 1)',
                                                        'rgba(0, 139, 193, 1)',
                                                    ]}
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
                                        <View style={{ marginTop: getSize.m(51) }}>
                                            <LinearGradient
                                                colors={[
                                                    'rgba(32, 134, 255, 0)',
                                                    'rgba(32, 134, 255, 0.24)',
                                                    'rgba(32, 134, 255, 0)',
                                                ]}
                                                start={{ x: 0.0, y: 0.0 }}
                                                end={{ x: 1.0, y: 1.0 }}
                                                style={styles.container_star}
                                            >
                                                <View style={styles.star}>
                                                    <Image
                                                        source={item.star}
                                                        style={{ height: getSize.m(120) }}
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={styles.star_title}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        marginVertical: getSize.m(10),
                                                        width: '100%',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <LinearGradient
                                                        colors={[
                                                            'rgba(255, 255, 255, 0)',
                                                            'rgba(255, 255, 255, 1)',
                                                            'rgba(255, 255, 255, 0)',
                                                        ]}
                                                        start={{ x: 0.0, y: 0.0 }}
                                                        end={{ x: 1.0, y: 1.0 }}
                                                        style={styles.star_line}
                                                    ></LinearGradient>
                                                </View>
                                                <View
                                                    style={{
                                                        width: '80%',
                                                        marginBottom: getSize.m(20),
                                                    }}
                                                >
                                                    <Text style={styles.star_subtitle}>
                                                        לורם איפסום דולור סיט אמט, קונסקטורר ינגלורם
                                                        איפסום דולור סיט אמט קטסט
                                                    </Text>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                        <View
                                            style={[
                                                appStyles.flex_row_center,
                                                { flex: 0, marginVertical: getSize.m(22) },
                                            ]}
                                        >
                                            <Text style={styles.accumulated_text}>
                                                {t('conversational.accumulated')}
                                            </Text>
                                            <View
                                                style={[
                                                    appStyles.flex_row_align,
                                                    { marginHorizontal: getSize.m(10) },
                                                ]}
                                            >
                                                <Text style={styles.accumulated_number}>
                                                    {item.coin}
                                                </Text>
                                                <Image source={AppImages.img_coin} />
                                            </View>
                                            <Text style={styles.accumulated_total}>
                                                {t('conversational.out_of')} 800
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.question}>
                                                {t('conversational.question')}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            style={[
                                                appStyles.flex_row_content_center,
                                                { marginVertical: getSize.m(20) },
                                            ]}
                                        >
                                            <LinearGradient
                                                colors={[
                                                    'rgba(247, 214, 79,1)',
                                                    'rgba(199, 113, 38, 1)',
                                                ]}
                                                style={styles.button}
                                            >
                                                <Text style={styles.button_text}>
                                                    {t('conversational.time')}
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <View>
                                            <LinearGradient
                                                colors={[
                                                    'rgba(16, 13, 101, 0)',
                                                    'rgba(36, 50, 160, 0.65)',
                                                    'rgba(47, 70, 191, 1)',
                                                    'rgba(39, 55, 168, 0.74)',
                                                    'rgba(16, 13, 101, 0)',
                                                ]}
                                                start={{ x: 0.0, y: 0.0 }}
                                                end={{ x: 1.0, y: 1.0 }}
                                                style={styles.results}
                                            >
                                                <LinearGradient
                                                    colors={[
                                                        'rgba(0, 150, 255, 1)',
                                                        'rgba(79, 25, 246, 1)',
                                                    ]}
                                                    style={styles.time}
                                                >
                                                    <Image source={AppImages.img_time} />
                                                </LinearGradient>
                                                <View style={{ marginLeft: getSize.m(14) }}>
                                                    <Text style={styles.minutes}>4:02 דקות </Text>
                                                    <Text style={styles.total_time}>מתוך 6:00</Text>
                                                </View>
                                            </LinearGradient>
                                            <LinearGradient
                                                colors={[
                                                    'rgba(16, 13, 101, 0)',
                                                    'rgba(36, 50, 160, 0.65)',
                                                    'rgba(47, 70, 191, 1)',
                                                    'rgba(39, 55, 168, 0.74)',
                                                    'rgba(16, 13, 101, 0)',
                                                ]}
                                                start={{ x: 0.0, y: 0.0 }}
                                                end={{ x: 1.0, y: 1.0 }}
                                                style={styles.results}
                                            >
                                                <LinearGradient
                                                    colors={[
                                                        'rgba(0, 150, 255, 1)',
                                                        'rgba(79, 25, 246, 1)',
                                                    ]}
                                                    style={styles.time}
                                                >
                                                    <Image source={AppImages.img_time} />
                                                </LinearGradient>
                                                <View style={{ marginLeft: getSize.m(14) }}>
                                                    <Text style={styles.minutes}>
                                                        2 תשובות נכונות
                                                    </Text>
                                                    <Text style={styles.total_time}>מתוך 8</Text>
                                                </View>
                                            </LinearGradient>
                                            <LinearGradient
                                                colors={[
                                                    'rgba(16, 13, 101, 0)',
                                                    'rgba(36, 50, 160, 0.65)',
                                                    'rgba(47, 70, 191, 1)',
                                                    'rgba(39, 55, 168, 0.74)',
                                                    'rgba(16, 13, 101, 0)',
                                                ]}
                                                start={{ x: 0.0, y: 0.0 }}
                                                end={{ x: 1.0, y: 1.0 }}
                                                style={[
                                                    styles.results,
                                                    {
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'space-between',
                                                    },
                                                ]}
                                            >
                                                <View style={appStyles.flex_row_align}>
                                                    <LinearGradient
                                                        colors={[
                                                            'rgba(0, 150, 255, 1)',
                                                            'rgba(79, 25, 246, 1)',
                                                        ]}
                                                        style={styles.time}
                                                    >
                                                        <Image source={AppImages.img_time} />
                                                    </LinearGradient>
                                                    <View style={{ marginLeft: getSize.m(14) }}>
                                                        <Text style={styles.minutes}>מקום 57</Text>
                                                        <Text style={styles.total_time}>
                                                            {' '}
                                                            מתוך 12,594 שחקנים
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <Text style={styles.date}>22/11/22</Text>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                        <View style={{ marginVertical: getSize.m(40) }}>
                                            <TouchableOpacity onPress={handleQuiz}>
                                                <LinearGradient
                                                    colors={[
                                                        'rgba(60, 147, 232,1)',
                                                        'rgba(38, 93, 199, 1)',
                                                    ]}
                                                    style={styles.button}
                                                >
                                                    <Text style={styles.button_text}>
                                                        {t('conversational.next_quiz')}
                                                    </Text>
                                                </LinearGradient>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
