import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import Icon from 'react-native-vector-icons/AntDesign';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import LinearGradient from 'react-native-linear-gradient';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from '@football/app/screens/football-question/QuestionScreen.style';
import { useViewModel } from '@football/app/screens/football-question/QuestionScreen.viewModel';
import { IQuestionScreenProps } from '@football/app/screens/football-question/QuestionScreen.type';

export const QuestionScreen = ({ navigation, route }: IQuestionScreenProps) => {
    const {
        t,
        onGoBack,
        barProgress,
        timeLeft,
        handleAnswer,
        answerCurrent,
        progress,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground
                source={AppImages.img_bg}
                style={[appStyles.flex, { backgroundColor: appColors.text_dark_blue }]}
            >
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <View style={[appStyles.flex_row_space_center, styles.header]}>
                            <View>
                                <Image source={AppImages.img_x_circle} />
                            </View>

                            <Text style={[appStyles.text_title, { width: getSize.m(240) }]}>
                                כמה אתה מכיר את נבחרת ישראל?
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
                        <View
                            style={[appStyles.flex_row_space_center, { marginTop: getSize.m(40) }]}
                        >
                            <View style={styles.question_result}>
                                <View
                                    style={[
                                        styles.question_progress,
                                        {
                                            left: getSize.m(-22),
                                            marginLeft: `${barProgress - 15}%`,
                                        },
                                    ]}
                                >
                                    <Image source={AppImages.img_medium_ball} />
                                </View>

                                <LinearGradient
                                    colors={['#235ba7', '#153db0']}
                                    style={[
                                        styles.question_bar_progress,
                                        { width: `${barProgress}%` },
                                    ]}
                                />
                            </View>

                            <View style={appStyles.flex_row_align}>
                                <Text style={styles.question_total}>/6</Text>
                                <Text style={styles.question_current}>{progress}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: getSize.m(36) }}>
                            <View style={{ borderRadius: getSize.m(12) }}>
                                <ImageBackground
                                    source={AppImages.img_image_question}
                                    imageStyle={styles.question_background}
                                >
                                    <LinearGradient
                                        colors={[
                                            'rgba(16, 32, 100, 0)',
                                            'rgba(9, 17, 54, 0.81)',
                                            'rgba(0, 0, 0, 1)',
                                        ]}
                                        style={{
                                            width: '100%',
                                            height: getSize.m(200),
                                            borderRadius: getSize.m(12),
                                        }}
                                    >
                                        <Text style={styles.question_title}>
                                            נגד איזו נבחרת כבש בן שהר את שער הבכורה שלו?
                                        </Text>
                                    </LinearGradient>
                                </ImageBackground>
                                <View style={appStyles.flex_row_content_center}>
                                    <LinearGradient
                                        colors={[
                                            timeLeft >= 10
                                                ? 'rgba(44, 196, 255, 1)'
                                                : 'rgba(255, 43, 94, 1)',
                                            timeLeft >= 10
                                                ? 'rgba(26, 117, 255, 1)'
                                                : 'rgba(204, 10, 45, 1)',
                                        ]}
                                        style={styles.question_time}
                                    >
                                        {timeLeft >= 10 && (
                                            <Text style={styles.question_time_text}>
                                                00:{timeLeft}
                                            </Text>
                                        )}
                                        {timeLeft < 10 && (
                                            <Text style={styles.question_time_text}>
                                                00:0{timeLeft}
                                            </Text>
                                        )}
                                    </LinearGradient>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(30) }}>
                                {answerCurrent.map((answer: any) => {
                                    return (
                                        <TouchableOpacity
                                            key={answer.id}
                                            onPress={() => handleAnswer(answer)}
                                            style={{ marginVertical: getSize.m(10) }}
                                        >
                                            <LinearGradient
                                                colors={[
                                                    answer.answerRight
                                                        ? 'rgba(44, 196, 255, 1)'
                                                        : 'rgba(8, 66, 114,1)',
                                                    answer.answerRight
                                                        ? 'rgba(26, 117, 255, 1)'
                                                        : 'rgba(3, 16, 41, 1)',
                                                ]}
                                                style={styles.answer}
                                            >
                                                <Text style={styles.answer_text}>
                                                    {answer.text}
                                                </Text>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
