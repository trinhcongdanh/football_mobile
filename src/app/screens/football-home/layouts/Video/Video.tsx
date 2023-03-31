import { appIcons } from '@football/app/assets/icons/appIcons';
import { CustomCarousel } from '@football/app/components/carousel/Carousel';
import styles from '@football/app/screens/football-home/layouts/Video/Video.style';
import { IVideoProps } from '@football/app/screens/football-home/layouts/Video/Video.type';
import { useViewModel } from '@football/app/screens/football-home/layouts/Video/Video.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';

export const Video = ({ videos, handlePlayVideo }: IVideoProps) => {
    const { t, activeIndexNumber, setActiveIndexNumber, dots, onClickAllVideo } = useViewModel({
        videos,
        handlePlayVideo,
    });
    const { getTranslationText } = useTranslationText();

    return (
        <View style={styles.container}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(18),
                        marginTop: getSize.m(28),
                        marginBottom: getSize.m(14),
                    },
                ]}
            >
                <Text style={styles.header}>{t('home_page.league_gallery')}</Text>
                <TouchableOpacity onPress={onClickAllVideo}>
                    <View style={appStyles.flex_row_align}>
                        <Text style={styles.details}>{t('home_page.all_video')}</Text>
                        <IconEntypo
                            name={appIcons.ic_left_ios}
                            size={getSize.m(13)}
                            color={appColors.white}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <CustomCarousel
                data={videos}
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
                                activeOpacity={1}
                                onPress={() => handlePlayVideo(item)}
                            >
                                <LinearGradient
                                    colors={['transparent', 'rgba(0, 0, 0, 0.92)']}
                                    start={{ x: 0, y: 0.3 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.gradient_img}
                                />
                                <Image source={{ uri: item.image_url }} style={styles.image} />
                                <View style={styles.date}>
                                    <Text style={styles.text_date}>{item.length}</Text>
                                </View>
                                <View style={styles.play_video}>
                                    <IconAntDesign
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
    );
};
