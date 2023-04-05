import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './MainVideo.style';
import { useViewModel } from './MainVideo.viewModel';
import { IMainVideoProps } from '@football/app/screens/football-national-team/layout/main-video/MainVideo.type';

export const MainVideo = ({ topTeam }: IMainVideoProps) => {
    const { getTranslationText, handlePlayVideo } = useViewModel({
        topTeam,
    });

    return (
        <View>
            {topTeam?.main_video ? (
                <View style={{ marginTop: getSize.m(20) }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => handlePlayVideo(topTeam?.main_video)}
                    >
                        <LinearGradient
                            colors={['transparent', 'rgba(0, 0, 0, 0.90)']}
                            start={{ x: 0, y: 0.3 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.gradient_img}
                        />
                        <FastImage
                            source={{ uri: topTeam?.main_video?.image_url }}
                            style={styles.image_team}
                        />
                        <View style={styles.date}>
                            <Text style={styles.text_date}>{topTeam?.main_video?.length}</Text>
                        </View>
                        <View style={styles.play_video_main}>
                            <Icon
                                name={appIcons.ic_caretright}
                                size={getSize.m(16)}
                                color={appColors.white}
                            />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.text_content}>
                                {getTranslationText({
                                    textHe: topTeam?.main_video?.caption_he,
                                    textEn: topTeam?.main_video?.caption_en,
                                })}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    );
};
