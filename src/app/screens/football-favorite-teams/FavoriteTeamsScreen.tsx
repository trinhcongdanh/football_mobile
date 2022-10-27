import React, { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from '@football/app/components/button';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { useViewModel } from './FavoriteTeamsScreen.viewModel';
import styles from './FavoriteTeamsScreen.style';

export const FavoriteTeamsScreen = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        teamSelected,
        newTeams,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={[appStyles.flex, appStyles.container]}>
                        <HeaderFav goSkip={onGoSkip} goBack={onGoBack} />

                        <Text style={appStyles.text_title}>{t('favorite_team.title')}</Text>
                        <View style={[appStyles.flex_row_space_center, styles.search]}>
                            <TextInput
                                placeholder={t('favorite_team.place_holder')}
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
                        <ScrollView>
                            <View style={styles.content_team}>
                                {newTeams.map(team => {
                                    return (
                                        <TouchableOpacity
                                            key={team.id}
                                            style={[
                                                styles.item_team,
                                                {
                                                    backgroundColor:
                                                        team.isSelected === true
                                                            ? 'rgba(44, 196, 255, 0.3)'
                                                            : 'transparent',
                                                    borderWidth:
                                                        team.isSelected === true
                                                            ? getSize.m(1)
                                                            : getSize.m(0),
                                                },
                                            ]}
                                            onPress={() => {
                                                handleSelected(team);
                                            }}
                                        >
                                            <Image
                                                source={team.logo_club}
                                                style={styles.logo_club}
                                            />
                                            <Text style={styles.name_club}>{team.name}</Text>
                                            {team.isSelected === true && (
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
                <View style={styles.select_team}>
                    <View style={styles.result_select}>
                        <View style={styles.logo_select}>
                            {teamSelected.map((item, index) => {
                                return (
                                    <View key={index} style={{ marginLeft: getSize.m(6) }}>
                                        <Image source={item.logo_club} style={styles.logo_club} />
                                        <View style={styles.index}>
                                            <Text style={styles.text_index}>{index + 1}</Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            <Text style={styles.result_number}>
                                {t('favorite_team.chosen')}{' '}
                                <Text style={{ color: appColors.blue_light }}>
                                    {teamSelected.length}
                                </Text>
                                /3
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ paddingHorizontal: getSize.m(32), paddingBottom: getSize.m(36) }}
                    >
                        <Button title={t('favorite_team.button')} onPress={handleContinue} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
