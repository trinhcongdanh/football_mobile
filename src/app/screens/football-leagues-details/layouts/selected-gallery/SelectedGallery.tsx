/* eslint-disable react/no-array-index-key */
import { View, Image, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { Gallery } from '@football/core/models/LeagueSeasonModelResponse';
import styles from './SelectedGallery.style';
import { useViewModel } from './SelectedGallery.viewModel';
import { ISelectedGalleryProps } from './SelectedGallery.type';

const SelectedGallery = ({ autoPlay, pagination, galleries }: ISelectedGalleryProps) => {
    const { t, activeIndexNumber, setActiveIndexNumber, data } = useViewModel({ galleries });
    const { width } = useWindowDimensions();
    const [newData] = useState([{ key: 'spacer-left' }, ...data, { key: 'spacer-right' }]);

    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    useEffect(() => {}, [x.value]);

    return (
        <View>
            <Animated.ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={16}
                snapToInterval={SIZE}
                decelerationRate="fast"
                onScroll={onScroll}
            >
                {newData.map((item: Gallery, index: number) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const style = useAnimatedStyle(() => {
                        const scale = interpolate(
                            x.value,
                            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                            [0.8, 1, 0.8]
                        );
                        return {
                            transform: [{ scale }],
                        };
                    });
                    if (!item.image_url) {
                        return <View style={{ width: SPACER }} key={index} />;
                    }
                    return (
                        <View style={{ width: SIZE }} key={index}>
                            <Animated.View style={[styles.imageContainer, style]}>
                                <Image source={{ uri: item.image_url }} style={styles.image} />
                            </Animated.View>
                        </View>
                    );
                })}
            </Animated.ScrollView>
        </View>
    );
};

export default SelectedGallery;
