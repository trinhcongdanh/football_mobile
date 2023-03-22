/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Image,
} from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { isEmpty } from 'lodash';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { Button } from '@football/app/components/button';
import { AppFonts } from '@football/app/assets/fonts';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import styles from './FavoriteTopTeam.style';
import { IFavoriteTeamProps } from './FavoriteTopTeam.types';

export const FavoriteTopTeam = ({
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
    const { getTranslationText } = useTranslationText();

    const [favTopTeams, setFavTopTeams] = useState<TopTeamModel[]>();
    useEffect(() => {
        const filterTopTeams = newFav
            .map(topTeam => ({
                ...topTeam,
                isSelected: favSelected.filter(t => t._id === topTeam._id).length > 0,
            }))
            .sort((a, b) => {
                return (b.isSelected ? 1 : 0) - (a.isSelected ? 1 : 0);
            });
        setFavTopTeams(filterTopTeams);
        // console.log('favSelected', favSelected);
    }, [favSelected, newFav]);

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
                                    <View
                                        style={{
                                            marginTop: getSize.m(15),
                                        }}
                                    >
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
                                </View>

                                <ScrollView>
                                    <View style={styles.content_item}>
                                        {favTopTeams?.map((item: TopTeamModel, index: number) => {
                                            return (
                                                <TouchableOpacity
                                                    key={item._id}
                                                    style={[
                                                        styles.item,
                                                        {
                                                            backgroundColor:
                                                                item.isSelected === true
                                                                    ? 'rgba(20, 36, 86, 1)'
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
                                                    <Image
                                                        source={{ uri: item.logo_url }}
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

                                                    <Text
                                                        numberOfLines={2}
                                                        style={styles.name_item}
                                                    >
                                                        {getTranslationText({
                                                            textHe: item.name_he,
                                                            textEn: item.name_en,
                                                        })}
                                                    </Text>
                                                    {item.isSelected === true && (
                                                        <View style={styles.check}>
                                                            <Icon
                                                                name={appIcons.ic_check}
                                                                size={getSize.m(10)}
                                                                color={appColors.white}
                                                                style={styles.ic_check}
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
                                    {favSelected.map((item: TopTeamModel, index: number) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={{ marginLeft: getSize.m(6) }}
                                            >
                                                <Image
                                                    source={{ uri: item.logo_url }}
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
                                    <View style={styles.result_number_container}>
                                        <Text
                                            style={{
                                                fontFamily: AppFonts.regular,
                                                fontSize: getSize.m(14),
                                                color: appColors.white,
                                                lineHeight: getSize.m(24),
                                            }}
                                        >
                                            {chosen}
                                        </Text>
                                        <View style={styles.result_number}>
                                            <Text
                                                style={{
                                                    fontFamily: AppFonts.regular,
                                                    fontSize: getSize.m(14),
                                                    color: appColors.white,
                                                    lineHeight: getSize.m(24),
                                                }}
                                            >
                                                /{number}
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
                                                    fontSize: getSize.m(14),
                                                    lineHeight: getSize.m(24),
                                                }}
                                            >
                                                {favSelected.length}
                                            </Text>
                                        </View>
                                    </View>
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
