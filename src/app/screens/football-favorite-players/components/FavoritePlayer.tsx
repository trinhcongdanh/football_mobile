import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { Button } from '@football/app/components/button';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { isEmpty } from 'lodash';
import { AppFonts } from '@football/app/assets/fonts';
import React from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './FavoritePlayer.style';
import { IFavoritePlayerProps } from './FavoritePlayer.types';

export const FavoritePlayer = ({
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
    searchText,
    searchFavPlayer,
    submitSearchFavPlayer,
}: IFavoritePlayerProps) => {
    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                {isEmpty(newFav) ? (
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={[appStyles.flex, appStyles.container]}>
                            <HeaderFav goSkip={onGoSkip} goBack={onGoBack} onIndex={onIndex} />
                            <View style={{ marginTop: getSize.m(15) }}>
                                <Text
                                    style={[
                                        appStyles.text_title,
                                        {
                                            marginTop: getSize.m(0),
                                        },
                                    ]}
                                >
                                    {title}
                                </Text>
                            </View>

                            <View style={[appStyles.flex_row_space_center, styles.search]}>
                                <TextInput
                                    value={searchText}
                                    placeholder={placeholder}
                                    style={styles.text_search}
                                    placeholderTextColor={appColors.blue_gray_dark}
                                    onChangeText={searchFavPlayer}
                                    onBlur={submitSearchFavPlayer}
                                />
                                <Icon
                                    style={{ marginRight: getSize.m(14) }}
                                    name={appIcons.ic_search}
                                    color={appColors.blue_gray_dark}
                                    size={getSize.m(16)}
                                />
                            </View>

                            <ActivityIndicator
                                style={appStyles.flex_center}
                                size="large"
                                color={appColors.blue_dark}
                            />
                        </View>
                    </SafeAreaView>
                ) : (
                    <>
                        <SafeAreaView style={appStyles.safe_area}>
                            <View style={[appStyles.flex, { marginTop: getSize.m(10) }]}>
                                <View style={{ paddingHorizontal: getSize.m(16) }}>
                                    <HeaderFav
                                        goSkip={onGoSkip}
                                        goBack={onGoBack}
                                        onIndex={onIndex}
                                    />

                                    <View style={{ marginTop: getSize.m(15) }}>
                                        <Text
                                            style={[
                                                appStyles.text_title,
                                                {
                                                    marginTop: getSize.m(0),
                                                },
                                            ]}
                                        >
                                            {title}
                                        </Text>
                                    </View>

                                    <View style={[appStyles.flex_row_space_center, styles.search]}>
                                        <TextInput
                                            value={searchText}
                                            placeholder={placeholder}
                                            style={styles.text_search}
                                            placeholderTextColor={appColors.blue_gray_dark}
                                            onChangeText={searchFavPlayer}
                                            onBlur={submitSearchFavPlayer}
                                        />
                                        <Icon
                                            style={{ marginRight: getSize.m(14) }}
                                            name={appIcons.ic_search}
                                            color={appColors.blue_gray_dark}
                                            size={getSize.m(16)}
                                        />
                                    </View>
                                </View>
                                <ScrollView>
                                    {newFav.map((items: any, index: number) => {
                                        return (
                                            <View key={index.toString()}>
                                                <View
                                                    style={{
                                                        marginTop: getSize.m(13),
                                                        paddingHorizontal: getSize.m(16),
                                                    }}
                                                >
                                                    <Text style={styles.name_club}>
                                                        {items.label}
                                                    </Text>
                                                </View>

                                                <View style={styles.content_item}>
                                                    {items.listFavPlayers.map(
                                                        (item: any, index: number) => {
                                                            return (
                                                                <TouchableOpacity
                                                                    key={index.toString()}
                                                                    style={[
                                                                        styles.item,
                                                                        {
                                                                            backgroundColor:
                                                                                item.isSelected ===
                                                                                true
                                                                                    ? 'rgba(20, 36, 86, 1)'
                                                                                    : 'transparent',
                                                                            borderWidth:
                                                                                item.isSelected ===
                                                                                true
                                                                                    ? getSize.m(1)
                                                                                    : getSize.m(0),
                                                                        },
                                                                    ]}
                                                                    onPress={() => {
                                                                        handleSelected(item);
                                                                    }}
                                                                >
                                                                    <Image
                                                                        source={{
                                                                            uri: item.image_url,
                                                                        }}
                                                                        style={[
                                                                            styles.image_item,
                                                                            {
                                                                                borderRadius:
                                                                                    onIndex === 1
                                                                                        ? getSize.m(
                                                                                              28
                                                                                          )
                                                                                        : getSize.m(
                                                                                              0
                                                                                          ),
                                                                            },
                                                                        ]}
                                                                    />
                                                                    <Text
                                                                        numberOfLines={2}
                                                                        style={styles.name_item}
                                                                    >
                                                                        {item.name_he}
                                                                    </Text>
                                                                    {item.isSelected === true && (
                                                                        <View style={styles.check}>
                                                                            <Icon
                                                                                name={
                                                                                    appIcons.ic_check
                                                                                }
                                                                                size={getSize.m(10)}
                                                                                color={
                                                                                    appColors.white
                                                                                }
                                                                                style={
                                                                                    styles.ic_check
                                                                                }
                                                                            />
                                                                        </View>
                                                                    )}
                                                                </TouchableOpacity>
                                                            );
                                                        }
                                                    )}
                                                </View>
                                            </View>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                        </SafeAreaView>
                        <View style={styles.select_item}>
                            <View style={styles.result_select}>
                                <View style={styles.image_select}>
                                    {favSelected.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={{ marginLeft: getSize.m(6) }}
                                            >
                                                <Image
                                                    source={{ uri: item.image_url }}
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
                                                <View style={styles.index}>
                                                    <Text style={styles.text_index}>
                                                        {index + 1}
                                                    </Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                                <View>
                                    <Text style={styles.result_number}>
                                        <Text
                                            style={{
                                                fontFamily: AppFonts.regular,
                                            }}
                                        >
                                            {chosen}
                                        </Text>

                                        <Text
                                            style={{
                                                color:
                                                    favSelected.length > 0
                                                        ? appColors.blue_light
                                                        : appColors.white,
                                                fontFamily:
                                                    favSelected.length > 0
                                                        ? AppFonts.semibold
                                                        : AppFonts.regular,
                                            }}
                                        >
                                            {favSelected.length}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: AppFonts.regular,
                                            }}
                                        >
                                            /{number}
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingHorizontal: getSize.m(32),
                                    paddingBottom: getSize.m(36),
                                }}
                            >
                                <Button
                                    style={styles.button_continue}
                                    title={button}
                                    onPress={handleContinue}
                                />
                            </View>
                        </View>
                    </>
                )}
            </ImageBackground>
        </View>
    );
};
