import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/AntDesign';
import { appIcons } from '@football/app/assets/icons/appIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from '@football/app/screens/football-discussion/DiscussionScreen.style';
import { useViewModel } from '@football/app/screens/football-discussion/DiscussionScreen.viewModel';
import { IDiscussionScreenProps } from '@football/app/screens/football-discussion/DiscussionScreen.type';

export const DiscussionScreen = ({ navigation, route }: IDiscussionScreenProps) => {
    const { t, onGoBack, handleQuestion } = useViewModel({ navigation, route });

    return (
        <View style={appStyles.flex}>
            <ImageBackground
                source={AppImages.img_bg}
                style={[appStyles.flex, { backgroundColor: appColors.text_dark_blue }]}
            >
                <ImageBackground
                    source={AppImages.img_background_discussion}
                    style={[appStyles.flex, { backgroundColor: appColors.text_dark_blue }]}
                >
                    <StatusBar translucent backgroundColor="transparent" />
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={appStyles.container}>
                            <View style={appStyles.flex_row_space_center}>
                                <TouchableOpacity onPress={onGoBack}>
                                    <LinearGradient
                                        colors={['rgba(44, 196, 255, 1)', 'rgba(0, 139, 193, 1)']}
                                        style={styles.discussion_close}
                                    >
                                        <Icon
                                            name={appIcons.ic_close}
                                            size={getSize.m(20)}
                                            color={appColors.white}
                                        />
                                    </LinearGradient>
                                </TouchableOpacity>
                                <Text style={styles.txt_title}>{t('discussion.title')}</Text>
                            </View>
                            <View style={{ marginTop: getSize.m(190) }}>
                                <Text style={styles.discussion_question}>
                                    {t('discussion.question')}
                                </Text>
                            </View>
                            <View style={{ marginTop: getSize.m(14) }}>
                                <Text style={styles.discussion_subtitle}>
                                    {t('discussion.subtitle')}
                                </Text>
                            </View>
                            <View style={styles.discussion_line} />
                            <View>
                                <Text style={styles.discussion_rules}>{t('discussion.rules')}</Text>
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_align_center,
                                    { justifyContent: 'center', marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={styles.discussion_point}>800</Text>
                                <Image source={AppImages.img_coin} />
                            </View>
                            <View style={{ marginTop: getSize.m(50) }}>
                                <TouchableOpacity onPress={handleQuestion}>
                                    <LinearGradient
                                        colors={['rgba(15, 157, 253,1)', 'rgba(38, 93, 199, 1)']}
                                        style={styles.discussion_start}
                                    >
                                        <Text style={styles.discussion_start_text}>
                                            {t('discussion.start')}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: getSize.m(20) }}>
                                <Text style={styles.discussion_participant}>
                                    19,200 השתתפו בחידון
                                </Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </ImageBackground>
        </View>
    );
};
