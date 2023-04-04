import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CustomCarousel } from '@football/app/components/carousel/Carousel';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import {
    MAX_TOPTEAM_LASTCAMPAIGN_GAMES,
    MAX_TOPTEAM_LASTCAMPAIGN_PLAYERAPPEARANCE,
} from '@football/core/api/configs/config';
import { isEmpty } from 'lodash';
import moment from 'moment';
import React, { useState } from 'react';
import {
    I18nManager,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './NationalTeamScreen.style';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';
import { useViewModel } from './NationalTeamScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';
import { MainVideo } from '@football/app/screens/football-national-team/layout/main-video/MainVideo';
import { VideoGallery } from '@football/app/screens/football-national-team/layout/video-gallery/VideoGallery';
import { FutureEvents } from '@football/app/screens/football-national-team/layout/future-events/FutureEvents';
import { Rankings } from '@football/app/screens/football-national-team/layout/rankings/Rankings';
import { GamesList } from '@football/app/screens/football-national-team/layout/games-list/GamesList';
import { GoalKickers } from '@football/app/screens/football-national-team/layout/goal-kickers/GoalKickers';
import { Appearances } from '@football/app/screens/football-national-team/layout/appearances/Appearances';
import { TeamPersonnel } from '@football/app/screens/football-national-team/layout/team-personnel/TeamPersonnel';
import { ImageGallery } from '@football/app/screens/football-national-team/layout/image-gallery/ImageGallery';

export const NationalTeamScreen = ({ navigation, route }: INationalTeamScreenProps) => {
    const { t, onGoBack, handleNavigation, topTeam } = useViewModel({
        navigation,
        route,
    });
    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_angle_arrow}
                            color_pre={appColors.black}
                            color_after={appColors.black}
                            handlePressFunction={onGoBack}
                        />
                    </View>
                    <ScrollView>
                        <View style={appStyles.container}>
                            <View style={appStyles.align_justify}>
                                <View style={styles.container_image}>
                                    <Image
                                        source={{ uri: topTeam?.logo_url }}
                                        style={styles.image_logo}
                                    />
                                </View>
                                <Text style={styles.text_title}>
                                    {getTranslationText({
                                        textHe: topTeam?.name_he,
                                        textEn: topTeam?.name_en,
                                    })}
                                </Text>
                            </View>
                            {/* Main Video */}
                            <MainVideo topTeam={topTeam} />

                            {/* Video Fallery */}
                            <VideoGallery topTeam={topTeam} />

                            {/* Future Events */}
                            <FutureEvents topTeam={topTeam} />
                        </View>
                        <View>
                            <HeaderLogo
                                text={getTranslationText({
                                    textHe: topTeam?.last_campaign?.name_he,
                                    textEn: topTeam?.last_campaign?.name_en,
                                })}
                                avt={AppImages.img_israel}
                                details={t('national_team.previous_campaigns')}
                                icon={appIcons.ic_left_ios}
                                handleNavigation={() => handleNavigation()}
                            />
                            <View
                                style={[
                                    appStyles.package,
                                    { marginTop: getSize.m(-1), backgroundColor: appColors.white },
                                ]}
                            >
                                <View>
                                    <View>
                                        <Text style={appStyles.statistics_title}>
                                            {t('national_team.ranking_table.title')}
                                        </Text>
                                    </View>
                                    <View style={{ marginTop: getSize.m(26) }}>
                                        <Position
                                            position={getTranslationText({
                                                textHe: topTeam?.last_campaign?.group_name_he,
                                                textEn: topTeam?.last_campaign?.group_name_en,
                                            })}
                                            color={appColors.text_dark_blue}
                                            fontFamily={AppFonts.bold}
                                            fontSize={getSize.m(11)}
                                            backgroundColor={appColors.white}
                                        />
                                        {/* Rankings */}
                                        <Rankings topTeam={topTeam} />
                                    </View>
                                </View>
                            </View>
                            <View style={appStyles.package}>
                                {/* Game List */}
                                <GamesList topTeam={topTeam} />
                            </View>
                            <View style={appStyles.package}>
                                {/* Goal Kickers */}
                                <GoalKickers topTeam={topTeam} />
                            </View>
                            <View style={appStyles.package}>
                                {/* Appearances */}
                                <Appearances topTeam={topTeam} />
                            </View>
                        </View>
                        {/* Team Personnel */}
                        <TeamPersonnel topTeam={topTeam} />

                        {/* Image gallery */}
                        <ImageGallery topTeam={topTeam} />
                    </ScrollView>
                </SafeAreaView>
            </BackGround>
        </View>
    );
};
