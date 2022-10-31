import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TextInput,
    ScrollView,
} from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { HeaderFav } from '../header-fav/HeaderFav';
import { Button } from '../button';
import styles from './Favorite.style';
import { IFavoriteProps } from './Favorite.types';

export const Favorite = ({
    onGoSkip,
    onGoBack,
    handleSelected,
    handleContinue,
    onIndex,
    number,
    title,
    placeholder,
    newFav,
    favSelected,
    chosen,
    button,
}: IFavoriteProps) => {
    return (
        <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
            <StatusBar translucent backgroundColor="transparent" />
            <SafeAreaView style={appStyles.safe_area}>
                <View style={[appStyles.flex, appStyles.container]}>
                    <HeaderFav goSkip={onGoSkip} goBack={onGoBack} onIndex={onIndex} />

                    <Text
                        style={[
                            appStyles.text_title,
                            { marginBottom: onIndex === 2 ? getSize.m(16) : getSize.m(0) },
                        ]}
                    >
                        {title}
                    </Text>
                    {onIndex !== 2 && (
                        <View style={[appStyles.flex_row_space_center, styles.search]}>
                            <TextInput
                                placeholder={placeholder}
                                style={styles.text_search}
                                placeholderTextColor={appColors.blue_gray_light}
                            />
                            <Icon
                                style={{ marginRight: getSize.m(14) }}
                                name={appIcons.ic_search}
                                color={appColors.blue_gray_light}
                                size={getSize.m(16)}
                            />
                        </View>
                    )}
                    {onIndex === 1 && (
                        <View style={{ marginBottom: getSize.m(10) }}>
                            <Text style={styles.name_club}>הפועל באר שבע</Text>
                        </View>
                    )}

                    <ScrollView>
                        <View style={styles.content_item}>
                            {newFav.map((item: any) => {
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            styles.item,
                                            {
                                                backgroundColor:
                                                    item.isSelected === true
                                                        ? 'rgba(44, 196, 255, 0.3)'
                                                        : 'transparent',
                                                borderWidth:
                                                    item.isSelected === true
                                                        ? getSize.m(1)
                                                        : getSize.m(0),
                                            },
                                        ]}
                                        onPress={() => handleSelected(item)}
                                    >
                                        <Image
                                            source={item.image}
                                            style={[
                                                styles.image_item,
                                                {
                                                    borderRadius:
                                                        onIndex === 1
                                                            ? getSize.m(28)
                                                            : getSize.m(0),
                                                },
                                            ]}
                                        />
                                        <Text style={styles.name_item}>{item.name}</Text>
                                        {item.isSelected === true && (
                                            <View style={styles.check}>
                                                <Icon
                                                    name={appIcons.ic_check}
                                                    size={getSize.m(10)}
                                                    color={appColors.white}
                                                />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
            <View style={styles.select_item}>
                <View style={styles.result_select}>
                    <View style={styles.image_select}>
                        {favSelected.map((item: any, index: any) => {
                            return (
                                <View key={index} style={{ marginLeft: getSize.m(6) }}>
                                    <Image
                                        source={item.image}
                                        style={[
                                            styles.image_item,
                                            {
                                                borderRadius:
                                                    onIndex === 1 ? getSize.m(28) : getSize.m(0),
                                            },
                                        ]}
                                    />
                                    <View style={styles.index}>
                                        <Text style={styles.text_index}>{index + 1}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                    <View>
                        <Text style={styles.result_number}>
                            {chosen}{' '}
                            <Text style={{ color: appColors.blue_light }}>
                                {favSelected.length}
                            </Text>
                            /{number}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: getSize.m(32), paddingBottom: getSize.m(36) }}>
                    <Button title={button} onPress={handleContinue} />
                </View>
            </View>
        </ImageBackground>
    );
};
