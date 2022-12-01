/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    TextInput,
    ScrollView,
    ActivityIndicator,
} from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppImages } from '@football/app/assets/images';
import { SvgUri } from 'react-native-svg';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { isEmpty } from 'lodash';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { Button } from '@football/app/components/button';
import styles from './FavoriteTeam.style';
import { IFavoriteTeamProps } from './FavoriteTeam.types';

export const FavoriteTeam = ({
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
}: IFavoriteTeamProps) => {
    return (
        <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
            <StatusBar translucent backgroundColor="transparent" />
            {isEmpty(newFav) ? (
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
                                    {newFav?.map((item: TeamModel, index: number) => {
                                        return (
                                            <TouchableOpacity
                                                key={item._id}
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
                                                onPress={() => {
                                                    handleSelected(item);
                                                }}
                                            >
                                                <SvgUri
                                                    // uri={item.logo_url}
                                                    width={getSize.m(25)}
                                                    height={getSize.m(28)}
                                                    uri={item.logo_url}
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
                                                <Text style={styles.name_item}>{item.name_he}</Text>
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
                                {favSelected.map((item: TeamModel, index: number) => {
                                    return (
                                        <View
                                            key={index.toString()}
                                            style={{ marginLeft: getSize.m(6) }}
                                        >
                                            <SvgUri
                                                // uri={item.logo_url}
                                                width={getSize.m(25)}
                                                height={getSize.m(28)}
                                                uri={item.logo_url}
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
                        <View
                            style={{
                                paddingHorizontal: getSize.m(32),
                                paddingBottom: getSize.m(36),
                            }}
                        >
                            <Button title={button} onPress={handleContinue} />
                        </View>
                    </View>
                </>
            )}
        </ImageBackground>
    );
};
