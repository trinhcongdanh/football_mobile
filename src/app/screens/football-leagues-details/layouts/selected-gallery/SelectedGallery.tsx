import { View, Text, Image, useWindowDimensions, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { appIcons } from '@football/app/assets/icons/appIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import Pagination from '@football/app/components/pagination/Pagination';
import styles from './SelectedGallery.style';
import { useViewModel } from './SelectedGallery.viewModel';
import { ISelectedGalleryProps } from './SelectedGallery.type';
import FastImage from 'react-native-fast-image';

const SelectedGallery = ({ autoPlay, pagination }: ISelectedGalleryProps) => {
    const { t, activeIndexNumber, setActiveIndexNumber, data } = useViewModel({});
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

    useEffect(() => {
        console.log('');
    }, [x.value]);

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
                {newData.map((item: any, index: any) => {
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
                    if (!item.image) {
                        return <View style={{ width: SPACER }} key={index} />;
                    }
                    return (
                        <View style={{ width: SIZE }} key={index}>
                            <Animated.View style={[styles.imageContainer, style]}>
                                <Image source={item.image} style={styles.image} />
                            </Animated.View>
                        </View>
                    );
                })}
            </Animated.ScrollView>
        </View>
    );
};

export default SelectedGallery;
