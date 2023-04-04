import { CustomCarousel } from '@football/app/components/carousel/Carousel';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './ImageGallery.style';
import { IImageGalleryProps } from '@football/app/screens/football-national-team/layout/image-gallery/ImageGallery.type';

export const ImageGallery = ({ topTeam }: IImageGalleryProps) => {
    return (
        <View style={{ marginVertical: getSize.m(50) }}>
            <CustomCarousel
                data={topTeam ? topTeam.image_gallery : []}
                height={getSize.m(300)}
                activePageColor={appColors.white}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginHorizontal: getSize.m(10),
                            }}
                        >
                            <View>
                                <Image source={{ uri: item.image_url }} style={[styles.image]} />
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
