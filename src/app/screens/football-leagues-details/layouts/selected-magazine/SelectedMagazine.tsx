import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import Carousel from 'react-native-reanimated-carousel';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './SelectedMagazine.style';
import { useViewModel } from './SelectedMagazine.viewModel';
import { ISelectedMagazineProps } from './SelectedMagazine.type';

export const SelectedMagazine = ({}: ISelectedMagazineProps) => {
    const { t, data, width } = useViewModel({});

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.magazine.title')}
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
                            parallaxScrollingOffset: getSize.m(140),
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
                                <TouchableOpacity activeOpacity={0.9}>
                                    <Image source={item.image} style={[styles.image]} />
                                    <View style={styles.date}>
                                        <Text style={styles.text_date}>{item.date}</Text>
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.text_content}>
                                            {item.content}{' '}
                                            <Icon
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(12)}
                                                color={appColors.white}
                                                style={styles.ic_arrow_left}
                                            />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </GestureHandlerRootView>
            </View>
        </View>
    );
};
