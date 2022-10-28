import React from 'react';
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
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import { useViewModel } from './FavoritePlayersScreen.viewModel';
import styles from './FavoritePlayersScreen.style';

export const FavoritePlayersScreen = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        playerSelected,
        newPlayers,
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
                        <HeaderFav goSkip={onGoSkip} goBack={onGoBack} onIndex={1} />

                        <Text style={appStyles.text_title}>{t('favorite_player.title')}</Text>
                        <View style={[appStyles.flex_row_space_center, styles.search]}>
                            <TextInput
                                placeholder={t('favorite_player.place_holder')}
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
                        <View style={{ marginBottom: getSize.m(10) }}>
                            <Text style={styles.name_club}>הפועל באר שבע</Text>
                        </View>
                        <ScrollView>
                            <View style={styles.content_player}>
                                {newPlayers.map(player => {
                                    return (
                                        <TouchableOpacity
                                            key={player.id}
                                            style={[
                                                styles.item_player,
                                                {
                                                    backgroundColor:
                                                        player.isSelected === true
                                                            ? 'rgba(44, 196, 255, 0.3)'
                                                            : 'transparent',
                                                    borderWidth:
                                                        player.isSelected === true
                                                            ? getSize.m(1)
                                                            : getSize.m(0),
                                                },
                                            ]}
                                            onPress={() => handleSelected(player)}
                                        >
                                            <Image
                                                source={player.avt_player}
                                                style={styles.logo_player}
                                            />
                                            <Text style={styles.name_player}>{player.name}</Text>
                                            {player.isSelected === true && (
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
                <View style={styles.select_player}>
                    <View style={styles.result_select}>
                        <View style={styles.logo_select}>
                            {playerSelected.map((item, index) => {
                                return (
                                    <View key={index} style={{ marginLeft: getSize.m(6) }}>
                                        <Image
                                            source={item.avt_player}
                                            style={styles.logo_player}
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
                                {t('favorite_player.chosen')}{' '}
                                <Text style={{ color: appColors.blue_light }}>
                                    {playerSelected.length}
                                </Text>
                                /3
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ paddingHorizontal: getSize.m(32), paddingBottom: getSize.m(36) }}
                    >
                        <Button title={t('favorite_player.button')} onPress={handleContinue} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
