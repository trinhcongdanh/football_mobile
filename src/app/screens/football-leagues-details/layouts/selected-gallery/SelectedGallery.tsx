import { View, Text, Image } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { appIcons } from '@football/app/assets/icons/appIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './SelectedGallery.style';
import { ISelectedGalleryProps } from './SelectedGallery.type';
import { useViewModel } from './SelectedGallery.viewModel';

const SelectedGallery = ({}: ISelectedGalleryProps) => {
    const { t, data, width } = useViewModel({});

    return (
        <View>
            <Text
                style={[appStyles.text_topic, { marginLeft: getSize.m(6), color: appColors.white }]}
            >
                {t('leagues_details.gallery.title')}
            </Text>
            <View style={{ marginHorizontal: getSize.m(-16), marginTop: getSize.m(18) }}>
                <GestureHandlerRootView style={appStyles.flex}>
                    <Carousel
                        loop
                        pagingEnabled={true}
                        snapEnabled
                        width={width}
                        height={getSize.m(280)}
                        scrollAnimationDuration={1000}
                        mode="parallax"
                        modeConfig={{
                            parallaxScrollingScale: 1,
                            parallaxScrollingOffset: getSize.m(160),
                            parallaxAdjacentItemScale: 0.9,
                        }}
                        autoPlay={true}
                        data={data}
                        renderItem={({ item, index }) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}
                            >
                                <View>
                                    <Image source={item.image} style={[styles.image]} />
                                    <View style={styles.minutes}>
                                        <Text style={styles.text_minutes}>{item.minutes}</Text>
                                    </View>
                                    <View style={styles.play_video}>
                                        <Icon
                                            name={appIcons.ic_caretright}
                                            size={getSize.m(16)}
                                            color={appColors.white}
                                        />
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.text_content}>{item.content}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </GestureHandlerRootView>
            </View>
        </View>
    );
};

export default SelectedGallery;
