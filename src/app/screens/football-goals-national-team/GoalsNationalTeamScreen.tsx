import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appColors } from '@football/app/utils/constants/appColors';
import { Position } from '@football/app/components/position/Position';
import { AppFonts } from '@football/app/assets/fonts';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './GoalsNationalTeamScreen.style';
import { useViewModel } from './GoalsNationalTeamScreen.viewModel';
import { IGoalsNationalTeamScreenProps } from './GoalsNationalTeamScreen.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { BackGround } from '@football/app/components/background/BackGround';
import { useResult } from '@football/app/utils/hooks/useResult';

export const GoalsNationalTeamScreen = ({ navigation, route }: IGoalsNationalTeamScreenProps) => {
    const { t, onGoBack, player, getDate } = useViewModel({
        navigation,
        route,
    });
    const { getTranslationText } = useTranslationText();
    const { getResult } = useResult();
    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <CardGoBack
                        iconName={appIcons.ic_right_ios}
                        iconStyle={styles.ic_back}
                        goBack={onGoBack}
                        title={t('goal_national_team.title')}
                    />
                </View>
                <ScrollView>
                    <HeaderLogo
                        text={getTranslationText({
                            textHe: player?.player_name_he,
                            textEn: player?.player_name_en,
                        })}
                        avt={{ uri: player?.player_image_url }}
                    />
                    <View
                        style={[
                            appStyles.package,
                            {
                                marginTop: getSize.m(0),
                                paddingVertical: getSize.m(0),
                                minHeight: getSize.m(900),
                            },
                        ]}
                    >
                        {player?.games_by_context.map((item, index) => {
                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <View style={{ marginTop: getSize.m(20) }} key={index}>
                                    <Position
                                        position={getTranslationText({
                                            textHe: item?.context_he,
                                            textEn: item?.context_en,
                                        })}
                                        color={appColors.text_dark_blue}
                                        width={getSize.m(60)}
                                        fontFamily={AppFonts.bold}
                                        fontSize={getSize.m(12)}
                                    />
                                    <View style={{ marginTop: getSize.m(-10) }}>
                                        {item?.games?.map((game, gameIndex) => {
                                            return (
                                                <LinearGradient
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 1 }}
                                                    colors={[
                                                        gameIndex % 2 === 0
                                                            ? appColors.linearLight
                                                            : appColors.gray,
                                                        gameIndex % 2 === 0
                                                            ? appColors.linearDark
                                                            : appColors.gray,
                                                    ]}
                                                    // eslint-disable-next-line react/no-array-index-key
                                                    key={gameIndex}
                                                    style={[
                                                        appStyles.flex_row_space_center,
                                                        {
                                                            borderRadius: getSize.m(5),
                                                            paddingVertical: getSize.m(14),
                                                            paddingHorizontal: getSize.m(16),
                                                            width: '100%',
                                                        },
                                                    ]}
                                                >
                                                    <View style={{ width: '20%' }}>
                                                        <Text style={styles.calendar}>
                                                            {getDate({ date: game?.date })}
                                                        </Text>
                                                    </View>
                                                    <View
                                                        style={[
                                                            appStyles.flex_row_space_center,
                                                            {
                                                                width: '70%',
                                                                marginHorizontal: getSize.m(4),
                                                            },
                                                        ]}
                                                    >
                                                        <View style={{ width: '35%' }}>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={[styles.name_club]}
                                                            >
                                                                {getTranslationText({
                                                                    textHe: game?.team1?.name_he,
                                                                    textEn: game?.team1?.name_en,
                                                                })}
                                                            </Text>
                                                            {/* <View style={styles.avt_club}>
                                                                    <FastImage
                                                                        source={{
                                                                            uri:
                                                                                game?.team1
                                                                                    ?.logo_url,
                                                                        }}
                                                                        style={{
                                                                            width: getSize.m(22),
                                                                            height: getSize.m(22),
                                                                            borderRadius: getSize.m(
                                                                                22
                                                                            ),
                                                                        }}
                                                                    />
                                                                </View> */}
                                                        </View>
                                                        <View
                                                            style={{
                                                                width: '30%',
                                                            }}
                                                        >
                                                            <Text style={styles.score}>
                                                                {game?.score
                                                                    ? getResult({
                                                                          result: game?.score,
                                                                      })
                                                                    : '- : -'}
                                                            </Text>
                                                        </View>
                                                        <View style={{ width: '35%' }}>
                                                            {/* <View style={styles.avt_club}>
                                                                    <FastImage
                                                                        source={{
                                                                            uri:
                                                                                game?.team2
                                                                                    ?.logo_url,
                                                                        }}
                                                                        style={{
                                                                            width: getSize.m(22),
                                                                            height: getSize.m(22),
                                                                            borderRadius: getSize.m(
                                                                                22
                                                                            ),
                                                                        }}
                                                                    />
                                                                </View> */}
                                                            <Text
                                                                numberOfLines={2}
                                                                style={[styles.name_club]}
                                                            >
                                                                {getTranslationText({
                                                                    textHe: game?.team2?.name_he,
                                                                    textEn: game?.team2?.name_en,
                                                                })}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={[
                                                            appStyles.flex_row_align,
                                                            {
                                                                width: '10%',
                                                            },
                                                        ]}
                                                    >
                                                        <Text style={styles.location}>
                                                            {game?.goals}
                                                        </Text>
                                                        <FastImage
                                                            source={AppImages.img_ball}
                                                            style={{
                                                                width: getSize.m(12),
                                                                height: getSize.m(12),
                                                            }}
                                                        />
                                                    </View>
                                                </LinearGradient>
                                            );
                                        })}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </BackGround>
        </View>
    );
};
