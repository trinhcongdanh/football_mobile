import { ICarouselProps } from '@football/app/components/carousel/Carousel.types';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './Carousel.style';

export const CustomCarousel = ({
    data,
    itemPerPage,
    renderItem,
    height,
    widthPerItem,
    activePageColor = appColors.text_dark_blue,
}: ICarouselProps) => {
    const PAGE_WIDTH = Dimensions.get('window').width;
    const COUNT = itemPerPage || 1.5;
    const baseOptions = {
        vertical: false,
        width: PAGE_WIDTH / COUNT,
        height,
        style: {
            width: PAGE_WIDTH,
        },
    };

    const [active, setActive] = useState(0);
    return (
        <View style={{ alignItems: 'center' }}>
            <Carousel
                {...baseOptions}
                loop={false}
                data={data}
                scrollAnimationDuration={1000}
                mode="parallax"
                panGestureHandlerProps={{
                    activeOffsetX: [-10, 10],
                }}
                modeConfig={{
                    parallaxScrollingScale: 1,
                    parallaxScrollingOffset: widthPerItem ? widthPerItem * 0.92 : 50,
                    parallaxAdjacentItemScale: 0.9,
                }}
                pagingEnabled
                onSnapToItem={(index: number) => setActive(index)}
                renderItem={renderItem}
            />

            <View style={styles.dotContainer}>
                {data.map((_, index) => {
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <View key={index}>
                            <View
                                style={[
                                    styles.dot,
                                    {
                                        width: index === active ? getSize.m(18) : getSize.m(5),
                                        backgroundColor:
                                            index === active
                                                ? activePageColor
                                                : appColors.soft_grey,
                                    },
                                ]}
                            />
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
