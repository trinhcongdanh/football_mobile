import { appIcons } from '@football/app/assets/icons/appIcons';
import { CustomCarousel } from '@football/app/components/carousel/Carousel';
import styles from '@football/app/screens/football-home/layouts/Magazine/Magazine.style';
import { IMagazineProps } from '@football/app/screens/football-home/layouts/Magazine/Magazine.type';
import { useViewModel } from '@football/app/screens/football-home/layouts/Magazine/Magazine.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

export const Magazine = ({ homePage }: IMagazineProps) => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, dots, onClickImage } = useViewModel({
        homePage,
    });
    const { getTranslationText } = useTranslationText();

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: getSize.m(20), marginLeft: getSize.m(18) }}>
                <Text style={styles.header}>{t('home_page.magazine')}</Text>
            </View>

            <CustomCarousel
                data={homePage.magazine}
                height={getSize.m(300)}
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
                                onPress={() => onClickImage(item.link)}
                            >
                                <LinearGradient
                                    colors={['transparent', 'rgba(0, 0, 0, 0.92)']}
                                    start={{ x: 0, y: 0.3 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.gradient_img}
                                />
                                <Image source={{ uri: item.image_url }} style={styles.image} />
                                <View style={styles.content}>
                                    <Text style={styles.text_content}>
                                        {getTranslationText({
                                            textHe: item.caption_he,
                                            textEn: item.caption_en,
                                        })}
                                        <Icon
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
