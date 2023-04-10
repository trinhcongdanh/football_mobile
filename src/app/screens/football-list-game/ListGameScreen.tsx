import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    I18nManager,
} from 'react-native';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import styles from '@football/app/screens/football-list-game/ListGameScreen.style';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from '@football/app/screens/football-list-game/ListGameScreen.viewModel';
import { IListGameScreenProps } from '@football/app/screens/football-list-game/ListGameScreen.type';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { appColors } from '@football/app/utils/constants/appColors';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { Game } from '@football/core/models/TeamModelResponse';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import moment from 'moment';
import { BackGround } from '@football/app/components/background/BackGround';
import { useDateTime } from '@football/app/utils/hooks/useDateTime';

export const ListGameScreen = ({ navigation, route }: IListGameScreenProps) => {
    const topTeam = route?.params?.topTeam as TopTeamModel;
    const { t, onGoBack, onNavigateGame, onNavigateStadium } = useViewModel({
        navigation,
        route,
    });
    const { getTranslationText } = useTranslationText();
    const { getDate } = useDateTime();

    console.log('I18nManager.isRTL', I18nManager.isRTL);

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('national_team.list_game.title')}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo
                            text={getTranslationText({
                                textHe: topTeam.last_campaign.name_he,
                                textEn: topTeam.last_campaign.name_en,
                            })}
                            avt={{ uri: topTeam.logo_url }}
                        />
                        <View
                            style={[
                                appStyles.package,
                                {
                                    marginTop: getSize.m(0),
                                    minHeight: getSize.m(900),
                                    paddingHorizontal: getSize.m(0),
                                    paddingLeft: getSize.m(5),
                                    paddingRight: getSize.m(10),
                                },
                            ]}
                        >
                            <View>
                                {topTeam?.last_campaign.games.map((item: Game, index: number) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => onNavigateGame(item.game_id)}
                                            key={item.game_id}
                                            style={{ width: '100%' }}
                                        >
                                            <LinearGradient
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                colors={[
                                                    index % 2 === 1
                                                        ? appColors.linearLight
                                                        : appColors.gray,
                                                    index % 2 === 1
                                                        ? appColors.linearDark
                                                        : appColors.gray,
                                                ]}
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    {
                                                        paddingVertical: getSize.m(11),
                                                        paddingHorizontal: getSize.m(8),
                                                        borderRadius: getSize.m(5),
                                                    },
                                                ]}
                                            >
                                                <View
                                                    style={[
                                                        appStyles.flex_row_align,
                                                        {
                                                            width: '20%',
                                                        },
                                                    ]}
                                                >
                                                    <FastImage
                                                        source={AppImages.img_calendar}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                        style={{
                                                            width: getSize.m(10),
                                                            height: getSize.m(13),
                                                        }}
                                                    />
                                                    <Text style={styles.calendar}>
                                                        {getDate({
                                                            date: item?.date,
                                                        })}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={[
                                                        appStyles.flex_row_space_center,
                                                        {
                                                            width: '60%',
                                                            marginHorizontal: getSize.m(4),
                                                        },
                                                    ]}
                                                >
                                                    <View
                                                        style={{
                                                            width: '40%',
                                                        }}
                                                    >
                                                        <Text
                                                            numberOfLines={2}
                                                            style={[styles.name_club]}
                                                        >
                                                            {getTranslationText({
                                                                textHe: item.team1.name_he,
                                                                textEn: item.team1.name_en,
                                                            })}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            width: '20%',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <Text style={styles.score}>
                                                            {item.score}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={{
                                                            width: '40%',
                                                        }}
                                                    >
                                                        <Text
                                                            numberOfLines={2}
                                                            style={[styles.name_club]}
                                                        >
                                                            {getTranslationText({
                                                                textHe: item.team2.name_he,
                                                                textEn: item.team2.name_en,
                                                            })}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        onNavigateStadium(item?.stadium_id)
                                                    }
                                                    key={item.game_id}
                                                    style={{ width: '20%' }}
                                                >
                                                    {item?.stadium_id ? (
                                                        <View style={appStyles.flex_row_align}>
                                                            <FastImage
                                                                source={AppImages.img_location_dot}
                                                                resizeMode={
                                                                    FastImage.resizeMode.contain
                                                                }
                                                                style={{
                                                                    width: getSize.m(9),
                                                                    height: getSize.m(11),
                                                                }}
                                                            />
                                                            <View style={{ width: '80%' }}>
                                                                <Text
                                                                    numberOfLines={2}
                                                                    style={styles.location}
                                                                >
                                                                    {getTranslationText({
                                                                        textHe: item.stadium_he,
                                                                        textEn: item.stadium_en,
                                                                    })}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    ) : null}
                                                </TouchableOpacity>
                                            </LinearGradient>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </BackGround>
        </View>
    );
};
