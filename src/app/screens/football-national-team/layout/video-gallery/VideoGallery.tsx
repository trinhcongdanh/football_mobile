import { appIcons } from '@football/app/assets/icons/appIcons';
import { CustomCarousel } from '@football/app/components/carousel/Carousel';
import { IVideoGalleryProps } from '@football/app/screens/football-national-team/layout/video-gallery/VideoGallery.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { isEmpty } from 'lodash';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './VideoGallery.style';
import { useViewModel } from './VideoGallery.viewModel';

export const VideoGallery = ({ topTeam }: IVideoGalleryProps) => {
    const { getTranslationText, handlePlayVideo } = useViewModel({
        topTeam,
    });
    return (
        <View>
            {!isEmpty(topTeam?.video_gallery) ? (
                <View
                    style={{
                        marginHorizontal: getSize.m(-16),
                        marginTop: getSize.m(18),
                    }}
                >
                    <CustomCarousel
                        data={topTeam ? topTeam.video_gallery : []}
                        height={getSize.m(300)}
                        activePageColor={appColors.white}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        marginHorizontal: getSize.m(12),
                                    }}
                                >
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => handlePlayVideo(item)}
                                    >
                                        <LinearGradient
                                            colors={['transparent', 'rgba(0, 0, 0, 0.90)']}
                                            start={{ x: 0, y: 0.3 }}
                                            end={{ x: 0, y: 1 }}
                                            style={styles.gradient_img}
                                        />
                                        <Image
                                            source={{ uri: item.image_url }}
                                            style={styles.image}
                                        />
                                        <View style={styles.date}>
                                            <Text style={styles.text_date}>{item.length}</Text>
                                        </View>
                                        <View style={styles.play_video}>
                                            <Icon
                                                name={appIcons.ic_caretright}
                                                size={getSize.m(16)}
                                                color={appColors.white}
                                            />
                                        </View>
                                        <View style={styles.content}>
                                            <Text style={styles.text_content}>
                                                {getTranslationText({
                                                    textHe: item.caption_he,
                                                    textEn: item.caption_en,
                                                })}
                                                <IconFeather
                                                    name={appIcons.ic_left_ios}
                                                    size={getSize.m(12)}
                                                    color={appColors.white}
                                                    style={styles.ic_arrow_left}
                                                />
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </View>
            ) : null}
        </View>
    );
};
