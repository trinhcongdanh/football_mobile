import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from '@football/app/screens/football-playground/layouts/Quizzes/Quizzes.style';
import { useViewModel } from '@football/app/screens/football-playground/layouts/Quizzes/Quizzes.viewModel';
import { IQuizzesProps } from '@football/app/screens/football-playground/layouts/Quizzes/Quizzes.type';

export const Quizzes = ({}: IQuizzesProps) => {
    const { t, quizzes, handleDiscussionRequired } = useViewModel({});
    return (
        <View style={styles.img_quizzes_container}>
            {quizzes.map(quizze => {
                return (
                    <TouchableOpacity
                        key={quizze.id}
                        style={{ width: '48%' }}
                        onPress={handleDiscussionRequired}
                    >
                        <LinearGradient
                            colors={[
                                'rgba(17, 81, 181, 1)',
                                'rgba(15, 55, 157, 1)',
                                'rgba(16, 42, 126, 1)',
                            ]}
                            style={styles.item_quizzes}
                        >
                            <Image
                                source={AppImages.img_archive}
                                style={styles.item_quizzes_background}
                            />
                            <Text style={styles.item_quizzes_test}>
                                {t('play_ground.quizzes.test_yourself')}
                            </Text>
                            <Image
                                source={AppImages.img_attach}
                                style={styles.item_quizzes_attach}
                            />
                            <LinearGradient
                                colors={['rgba(212, 222, 231, 1)', 'rgba(154, 183, 213, 1)']}
                                style={styles.item_quizzes_border_logo}
                            >
                                <LinearGradient
                                    colors={['rgba(44, 196, 255, 1)', 'rgba(26, 117, 255, 1)']}
                                    style={styles.item_quizzes_background_logo}
                                >
                                    <Image
                                        source={AppImages.img_logo}
                                        style={styles.item_quizzes_logo}
                                    />
                                </LinearGradient>
                            </LinearGradient>
                            <View style={{ marginTop: getSize.m(12) }}>
                                <Text style={styles.item_quizzes_title}>
                                    כמה אתה מכיר את נבחרת ישראל?
                                </Text>
                            </View>
                            <LinearGradient
                                colors={[
                                    'rgba(28, 99, 239, 0.07)',
                                    'rgba(160, 191, 254, 0.57)',
                                    'rgba(13, 87, 233, 1)',
                                ]}
                                style={styles.item_quizzes_line}
                            />
                            <View
                                style={[
                                    appStyles.flex_row_align,
                                    { marginTop: getSize.m(6), marginBottom: getSize.m(8) },
                                ]}
                            >
                                <Text style={styles.item_quizzes_point}>
                                    {t('play_ground.quizzes.accumulated')} 2,000
                                </Text>
                                <Image
                                    source={AppImages.img_coin}
                                    style={styles.item_quizzes_img_point}
                                />
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_align,
                                    { marginTop: getSize.m(6), marginBottom: getSize.m(8) },
                                ]}
                            >
                                <Text style={styles.item_quizzes_quality}>19,200</Text>
                                <Text style={styles.item_quizzes_participant}>
                                    {t('play_ground.quizzes.participants')}
                                </Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
