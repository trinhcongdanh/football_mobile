import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Video from 'react-native-video-player';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { Position } from '@football/app/components/position/Position';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AppFonts } from '@football/app/assets/fonts';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {
    MAX_TOPTEAM_LASTCAMPAIGN_GAMES,
    MAX_TOPTEAM_LASTCAMPAIGN_PLAYERAPPEARANCE,
} from '@football/core/api/configs/config';
import styles from './NationalTeamScreen.style';
import { useViewModel } from './NationalTeamScreen.viewModel';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';

export const NationalTeamScreen = ({ navigation, route }: INationalTeamScreenProps) => {
    const {
        t,
        onGoBack,
        handlePlayVideo,
        setDisplay,
        setAutoPlay,
        handleDetailMatch,
        handleNavigation,
        selectOption,
        display,
        width,
        sourceVideo,
        autoPlay,
        options,
        select,
        teamSquads,
        activeIndexNumber,
        handleDetails,
        handleStadium,
        onNavigateGoalKickers,
        onNavigateAppearances,
        onNavigatePlayerData,
        navigate,
        topTeam,
        setActiveIndexNumber,
    } = useViewModel({
        navigation,
        route,
    });
    const [indexDot, setIndexDot] = useState(0);
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_angle_right}
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
                                <Text style={styles.text_title}>{topTeam?.name_he}</Text>
                            </View>
                            <View style={{ marginTop: getSize.m(20) }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => handlePlayVideo(topTeam?.main_video)}
                                >
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0, 0, 0, 0.90)']}
                                        start={{ x: 0, y: 0.3 }}
                                        end={{ x: 0, y: 1 }}
                                        style={styles.gradient_img}
                                    />
                                    <FastImage
                                        source={{ uri: topTeam?.main_video?.image_url }}
                                        style={styles.image_team}
                                    />
                                    <View style={styles.date}>
                                        <Text style={styles.text_date}>
                                            {topTeam?.main_video?.length}
                                        </Text>
                                    </View>
                                    <View style={styles.play_video_main}>
                                        <Icon
                                            name={appIcons.ic_caretright}
                                            size={getSize.m(16)}
                                            color={appColors.white}
                                        />
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.text_content}>
                                            {topTeam?.main_video?.caption_he}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    marginHorizontal: getSize.m(-16),
                                    marginTop: getSize.m(18),
                                }}
                            >
                                {/* <GestureHandlerRootView style={appStyles.flex}>
                                    <Carousel
                                        loop={false}
                                        pagingEnabled
                                        snapEnabled
                                        width={width}
                                        height={getSize.m(280)}
                                        scrollAnimationDuration={1000}
                                        autoPlayInterval={4000}
                                        mode="parallax"
                                        modeConfig={{
                                            parallaxScrollingScale: 1,
                                            parallaxScrollingOffset: getSize.m(160),
                                            parallaxAdjacentItemScale: 0.9,
                                        }}
                                        autoPlay={autoPlay}
                                        defaultIndex={0}
                                        onSnapToItem={index => {
                                            // setIndexDot(index);
                                        }}
                                        data={topTeam?.video_gallery}
                                        renderItem={({ item, index }) => (
                                            <View
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <TouchableOpacity
                                                    activeOpacity={0.9}
                                                    onPress={() => handlePlayVideo(item.video_url)}
                                                >
                                                    <Image
                                                        source={{ uri: item.image_url }}
                                                        style={[styles.image]}
                                                    />
                                                    <View style={styles.date}>
                                                        <Text style={styles.text_date}>
                                                            {item.length}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.play_video}>
                                                        <Icon
                                                            name={appIcons.ic_caretright}
                                                            size={getSize.m(16)}
                                                            color={appColors.white}
                                                        />
                                                    </View>
                                                    <View style={styles.content}>
                                                        <Text style={styles.text_content}>
                                                            {item.caption_he}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    />
                                </GestureHandlerRootView> */}
                                <ScrollView
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    directionalLockEnabled
                                    onScroll={e => {
                                        const slide = Math.round(
                                            e.nativeEvent.contentOffset.x /
                                                e.nativeEvent.layoutMeasurement.width
                                        );
                                        if (slide !== activeIndexNumber) {
                                            setActiveIndexNumber(slide); // here we will set our active index num
                                        }
                                    }}
                                >
                                    {topTeam?.video_gallery.map((item, index) => {
                                        return (
                                            <View
                                                // eslint-disable-next-line react/no-array-index-key
                                                key={index}
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    marginHorizontal: getSize.m(12),
                                                }}
                                            >
                                                <TouchableOpacity
                                                    activeOpacity={0.9}
                                                    onPress={() => handlePlayVideo(item)}
                                                >
                                                    <LinearGradient
                                                        colors={[
                                                            'transparent',
                                                            'rgba(0, 0, 0, 0.90)',
                                                        ]}
                                                        start={{ x: 0, y: 0.3 }}
                                                        end={{ x: 0, y: 1 }}
                                                        style={styles.gradient_img}
                                                    />
                                                    <Image
                                                        source={{ uri: item.image_url }}
                                                        style={styles.image}
                                                    />
                                                    <View style={styles.date}>
                                                        <Text style={styles.text_date}>
                                                            {item.length}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.play_video}>
                                                        <Icon
                                                            name={appIcons.ic_caretright}
                                                            size={getSize.m(16)}
                                                            color={appColors.white}
                                                        />
                                                    </View>
                                                    <View style={styles.content}>
                                                        <Text style={styles.text_content}>
                                                            {item.caption_he}{' '}
                                                            <IconFeather
                                                                name={appIcons.ic_arrow_left}
                                                                size={getSize.m(12)}
                                                                color={appColors.white}
                                                                style={styles.ic_arrow_left}
                                                            />
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    })}
                                </ScrollView>
                                <View style={styles.dotContainer}>
                                    {topTeam?.video_gallery.map((_, index) => {
                                        return (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <View key={index}>
                                                <View
                                                    style={[
                                                        styles.dot,
                                                        {
                                                            width:
                                                                index === activeIndexNumber
                                                                    ? getSize.m(18)
                                                                    : getSize.m(5),
                                                            backgroundColor:
                                                                index === activeIndexNumber
                                                                    ? appColors.blue_light
                                                                    : appColors.soft_grey,
                                                        },
                                                    ]}
                                                />
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(44) }}>
                                <Text style={styles.text_title}>
                                    {t('national_team.team_event')}
                                </Text>
                                <View style={{ marginTop: getSize.m(8) }}>
                                    {topTeam?.future_events?.map((item, index) => {
                                        return (
                                            <ListGame
                                                // eslint-disable-next-line react/no-array-index-key
                                                key={index}
                                                tournament={item.name_he}
                                                logo_home={item.team1.logo_url}
                                                logo_away={item.team2.logo_url}
                                                nameHome={item.team1.name_he}
                                                nameAway={item.team2.name_he}
                                                location={item.stadium_he}
                                                date={item.date}
                                                result={item.score}
                                                schedule={item.time}
                                                // completed={item.completed}
                                                color={appColors.text_dark_blue}
                                                handleDetailMatch={() =>
                                                    handleDetailMatch(item.object_id)
                                                }
                                                handleStadium={() => handleStadium(item.stadium_id)}
                                                isLive={moment().isBetween(
                                                    moment(
                                                        `${item.date} ${item.time}`,
                                                        'DD.M.YY HH:mm'
                                                    ),
                                                    moment(
                                                        `${item.date} ${item.time}`,
                                                        'DD.M.YY HH:mm'
                                                    ).add(2, 'hours')
                                                )}
                                                style={{ marginTop: getSize.m(12) }}
                                            />
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <HeaderLogo
                                text={topTeam?.last_campaign?.name_he}
                                avt={AppImages.img_israel}
                                details={t('national_team.previous_campaigns')}
                                icon={appIcons.ic_arrow_left}
                                handleNavigation={() => handleNavigation()}
                            />
                            <View
                                style={[
                                    appStyles.package,
                                    { marginTop: getSize.m(0), backgroundColor: appColors.white },
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
                                            position={topTeam?.last_campaign?.group_name_he}
                                            color={appColors.text_dark_blue}
                                            fontFamily={AppFonts.bold}
                                            fontSize={getSize.m(11)}
                                            width={getSize.m(130)}
                                        />
                                        <View>
                                            <View
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    {
                                                        paddingHorizontal: getSize.m(4),
                                                    },
                                                ]}
                                            >
                                                <View style={{ width: getSize.m(30) }}>
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_header,
                                                            { textAlign: 'left' },
                                                        ]}
                                                    >
                                                        {t('national_team.ranking_table.place')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(80) }}>
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_header,
                                                            { textAlign: 'left' },
                                                        ]}
                                                    >
                                                        {t('national_team.ranking_table.team')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(30) }}>
                                                    <Text style={appStyles.statistics_header}>
                                                        {t('national_team.ranking_table.mash')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(30) }}>
                                                    <Text style={appStyles.statistics_header}>
                                                        {t('national_team.ranking_table.nch')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(30) }}>
                                                    <Text style={appStyles.statistics_header}>
                                                        {t('national_team.ranking_table.draw')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(30) }}>
                                                    <Text style={appStyles.statistics_header}>
                                                        {t('national_team.ranking_table.the_p')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(40) }}>
                                                    <Text style={appStyles.statistics_header}>
                                                        {t('national_team.ranking_table.time')}
                                                    </Text>
                                                </View>
                                                <View style={{ width: getSize.m(30) }}>
                                                    <Text style={appStyles.statistics_header}>
                                                        {t('national_team.ranking_table.no')}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View>
                                                {topTeam?.last_campaign?.leader_board.map(
                                                    (item, index) => {
                                                        return (
                                                            <LinearGradient
                                                                // eslint-disable-next-line react/no-array-index-key
                                                                key={index}
                                                                start={{ x: 0, y: 0 }}
                                                                end={{ x: 1, y: 1 }}
                                                                colors={[
                                                                    index % 2 === 1
                                                                        ? appColors.linearLight
                                                                        : appColors.white,
                                                                    index % 2 === 1
                                                                        ? appColors.linearDark
                                                                        : appColors.white,
                                                                ]}
                                                                style={[
                                                                    appStyles.flex_row_space_center,
                                                                    appStyles.statistic_row,
                                                                ]}
                                                            >
                                                                <View
                                                                    style={[
                                                                        appStyles.flex_row_align,
                                                                        { width: getSize.m(30) },
                                                                    ]}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.place}
                                                                    </Text>
                                                                    <View
                                                                        style={{
                                                                            marginLeft: getSize.m(
                                                                                2
                                                                            ),
                                                                            marginTop: getSize.m(2),
                                                                        }}
                                                                    >
                                                                        {item.place_change ===
                                                                            'up' && (
                                                                            <Icon
                                                                                name={
                                                                                    appIcons.ic_up
                                                                                }
                                                                                size={8}
                                                                                color={
                                                                                    appColors.green
                                                                                }
                                                                            />
                                                                        )}

                                                                        {item.place_change ===
                                                                            'down' && (
                                                                            <Icon
                                                                                name={
                                                                                    appIcons.ic_down
                                                                                }
                                                                                size={8}
                                                                                color={
                                                                                    appColors.red
                                                                                }
                                                                            />
                                                                        )}
                                                                    </View>
                                                                </View>
                                                                <View
                                                                    style={[
                                                                        {
                                                                            width: getSize.m(80),
                                                                            overflow: 'hidden',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <View
                                                                        style={{
                                                                            flexDirection: 'row',
                                                                        }}
                                                                    >
                                                                        <Avatar
                                                                            source={{
                                                                                uri: item.logo_url,
                                                                            }}
                                                                            rounded
                                                                            size={20}
                                                                        />
                                                                        <Text
                                                                            style={[
                                                                                appStyles.statistics_content,
                                                                                {
                                                                                    marginLeft: getSize.m(
                                                                                        6
                                                                                    ),
                                                                                },
                                                                            ]}
                                                                        >
                                                                            {item.name_he}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                                <View
                                                                    style={{ width: getSize.m(30) }}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.games}
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={{ width: getSize.m(30) }}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.wins}
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={{ width: getSize.m(30) }}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.ties}
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={{ width: getSize.m(30) }}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.difference}
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={{ width: getSize.m(40) }}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.goals}
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={{ width: getSize.m(30) }}
                                                                >
                                                                    <Text
                                                                        style={
                                                                            appStyles.statistics_content
                                                                        }
                                                                    >
                                                                        {item.score}
                                                                    </Text>
                                                                </View>
                                                            </LinearGradient>
                                                        );
                                                    }
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={appStyles.package}>
                                <View>
                                    <View style={appStyles.flex_row_space_center}>
                                        <Text style={appStyles.statistics_title}>
                                            {t('national_team.list_game.title')}
                                        </Text>
                                        <TouchableOpacity
                                            style={[
                                                appStyles.flex_row_center,
                                                { flex: 0, marginTop: getSize.m(12) },
                                            ]}
                                            onPress={handleDetails}
                                        >
                                            <Text style={styles.details}>
                                                {t('national_team.ranking_table.details')}
                                            </Text>
                                            <IconFeather
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(10)}
                                                color={appColors.button_dark_blue}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: getSize.m(26) }}>
                                        <Position
                                            position={topTeam?.last_campaign?.group_name_he}
                                            color={appColors.text_dark_blue}
                                            fontFamily={AppFonts.bold}
                                            fontSize={getSize.m(11)}
                                            width={getSize.m(130)}
                                        />
                                        <View style={[appStyles.flex_row_space, styles.option]}>
                                            {options.map((option: string, index: number) => {
                                                return (
                                                    <TouchableOpacity
                                                        style={[
                                                            styles.button_option_dark,
                                                            {
                                                                backgroundColor:
                                                                    index === select
                                                                        ? appColors.button_dark_blue
                                                                        : appColors.separator,
                                                            },
                                                        ]}
                                                        key={index.toString()}
                                                        onPress={() => selectOption(index)}
                                                    >
                                                        <Text
                                                            style={[
                                                                styles.text_option,
                                                                {
                                                                    color:
                                                                        index === select
                                                                            ? appColors.white
                                                                            : appColors.text_option_unselect,

                                                                    fontFamily:
                                                                        index === select
                                                                            ? AppFonts.bold
                                                                            : AppFonts.medium,
                                                                },
                                                            ]}
                                                        >
                                                            {option}
                                                        </Text>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </View>
                                        <View style={{ marginTop: getSize.m(8) }}>
                                            {topTeam?.last_campaign.games
                                                .slice(0, MAX_TOPTEAM_LASTCAMPAIGN_GAMES)
                                                .filter(game => {
                                                    switch (select) {
                                                        case 0:
                                                            return true;
                                                        case 1:
                                                            return game.is_home_game;

                                                        case 2:
                                                            return !game.is_home_game;

                                                        default:
                                                            return true;
                                                    }
                                                })
                                                .map(item => {
                                                    return (
                                                        <ListGame
                                                            key={item.game_id}
                                                            logo_home={item.team1.logo_url}
                                                            logo_away={item.team2.logo_url}
                                                            nameHome={item.team1.name_he}
                                                            nameAway={item.team2.name_he}
                                                            location={item.stadium_he}
                                                            date={item.date}
                                                            result={item.score}
                                                            schedule={item.time}
                                                            // completed={item.completed}
                                                            icon={appIcons.ic_arrow_left}
                                                            color={appColors.gray}
                                                            details={item.game_id}
                                                            handleDetailMatch={() =>
                                                                handleDetailMatch(item.game_id)
                                                            }
                                                            handleStadium={() =>
                                                                handleStadium(item.stadium_id)
                                                            }
                                                            isLive={moment().isBetween(
                                                                moment(
                                                                    `${item.date} ${item.time}`,
                                                                    'DD.M.YY HH:mm'
                                                                ),
                                                                moment(
                                                                    `${item.date} ${item.time}`,
                                                                    'DD.M.YY HH:mm'
                                                                ).add(2, 'hours')
                                                            )}
                                                            style={{ marginTop: getSize.m(12) }}
                                                        />
                                                    );
                                                })}
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={appStyles.package}>
                                <View style={appStyles.item_statistics}>
                                    <View style={[appStyles.flex_row_space_center]}>
                                        <Text
                                            style={[
                                                appStyles.statistics_title,
                                                { fontSize: getSize.m(16) },
                                            ]}
                                        >
                                            {t('national_team.conquerors.title')}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={onNavigateGoalKickers}
                                            style={appStyles.flex_row_space_center}
                                        >
                                            <Text style={appStyles.statistics_see_all}>
                                                {t('national_team.conquerors.full_list')}
                                            </Text>
                                            <IconFeather
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(10)}
                                                color={appColors.button_dark_blue}
                                                style={appStyles.statistic_ic_arrow}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: getSize.m(10) }}>
                                        {topTeam?.last_campaign?.goal_kickers
                                            .slice(0, MAX_TOPTEAM_LASTCAMPAIGN_PLAYERAPPEARANCE)
                                            .map((item, index) => {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            onNavigatePlayerData(item.player_id)
                                                        }
                                                        key={item.player_id}
                                                        style={[
                                                            appStyles.flex_row_space_center,
                                                            appStyles.statistic_row,
                                                            {
                                                                paddingHorizontal: getSize.m(0),
                                                            },
                                                        ]}
                                                    >
                                                        <View style={appStyles.flex_row_align}>
                                                            <FastImage
                                                                source={{ uri: item.image_url }}
                                                                style={{
                                                                    width: getSize.m(20),
                                                                    height: getSize.m(20),
                                                                    borderRadius: getSize.m(20),
                                                                }}
                                                            />
                                                            <Text
                                                                style={[
                                                                    appStyles.statistics_content,
                                                                    // eslint-disable-next-line react-native/no-inline-styles
                                                                    {
                                                                        textAlign: 'left',
                                                                        marginLeft: getSize.m(10),
                                                                        fontFamily: AppFonts.medium,
                                                                        fontSize: getSize.m(14),
                                                                    },
                                                                ]}
                                                            >
                                                                {item.name_he}
                                                            </Text>
                                                        </View>
                                                        <View>
                                                            <Text
                                                                style={[
                                                                    appStyles.statistics_content,
                                                                    // eslint-disable-next-line react-native/no-inline-styles
                                                                    {
                                                                        textAlign: 'left',
                                                                        fontSize: getSize.m(16),
                                                                    },
                                                                ]}
                                                            >
                                                                {item.num_of_goals}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                    </View>
                                </View>
                            </View>
                            <View style={appStyles.package}>
                                <View style={appStyles.item_statistics}>
                                    <View style={[appStyles.flex_row_space_center]}>
                                        <Text
                                            style={[
                                                appStyles.statistics_title,
                                                { fontSize: getSize.m(16) },
                                            ]}
                                        >
                                            {t('national_team.performances.title')}
                                        </Text>
                                        <TouchableOpacity
                                            onPress={onNavigateAppearances}
                                            style={appStyles.flex_row_space_center}
                                        >
                                            <Text style={appStyles.statistics_see_all}>
                                                {t('national_team.performances.full_list')}
                                            </Text>
                                            <IconFeather
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(10)}
                                                color={appColors.button_dark_blue}
                                                style={appStyles.statistic_ic_arrow}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: getSize.m(10) }}>
                                        {topTeam?.last_campaign?.players_appearances
                                            .slice(0, MAX_TOPTEAM_LASTCAMPAIGN_PLAYERAPPEARANCE)
                                            .map(item => {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            onNavigatePlayerData(item.player_id)
                                                        }
                                                        key={item.player_id}
                                                        style={[
                                                            appStyles.flex_row_space_center,
                                                            appStyles.statistic_row,
                                                            {
                                                                paddingHorizontal: getSize.m(0),
                                                            },
                                                        ]}
                                                    >
                                                        <View style={appStyles.flex_row_align}>
                                                            <FastImage
                                                                source={{ uri: item.image_url }}
                                                                style={{
                                                                    width: getSize.m(20),
                                                                    height: getSize.m(20),
                                                                    borderRadius: getSize.m(20),
                                                                }}
                                                            />
                                                            <Text
                                                                style={[
                                                                    appStyles.statistics_content,
                                                                    {
                                                                        textAlign: 'left',
                                                                        marginLeft: getSize.m(10),
                                                                        fontFamily: AppFonts.medium,
                                                                        fontSize: getSize.m(14),
                                                                    },
                                                                ]}
                                                            >
                                                                {item.name_he}
                                                            </Text>
                                                        </View>
                                                        <View>
                                                            <Text
                                                                style={[
                                                                    appStyles.statistics_content,
                                                                    {
                                                                        textAlign: 'left',
                                                                        fontSize: getSize.m(16),
                                                                    },
                                                                ]}
                                                            >
                                                                {item.num_of_appearances}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={appStyles.container}>
                            {teamSquads.map(item => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigate(item.screen, {
                                                topTeamPersonnelId: topTeam?.team_personnel_id,
                                                selectedTab: item.selectedTab,
                                                fromTopTeam: true,
                                            });
                                        }}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            styles.content_team_squad,
                                        ]}
                                        key={item.id}
                                    >
                                        <View style={appStyles.flex_row_align}>
                                            <Avatar
                                                source={{ uri: topTeam?.logo_url }}
                                                size={getSize.m(26)}
                                                rounded
                                            />
                                            <Text style={styles.name_player}>{item.name}</Text>
                                        </View>
                                        <IconFeather
                                            name={appIcons.ic_arrow_left}
                                            color={appColors.text_dark_blue}
                                            style={{ fontFamily: AppFonts.bold }}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        <View style={{ marginVertical: getSize.m(50) }}>
                            {/* <GestureHandlerRootView style={appStyles.flex}>
                                <Carousel
                                    loop
                                    pagingEnabled
                                    snapEnabled
                                    width={width}
                                    height={getSize.m(280)}
                                    scrollAnimationDuration={1000}
                                    mode="parallax"
                                    modeConfig={{
                                        parallaxScrollingScale: 1,
                                        parallaxScrollingOffset: getSize.m(160),
                                        parallaxAdjacentItemScale: 0.9,
                                    }}
                                    autoPlay
                                    // onSnapToItem={index => setActiveIndexNumber(index)}
                                    data={topTeam?.image_gallery}
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <View>
                                                <Image
                                                    source={{ uri: item.image_url }}
                                                    style={[styles.image]}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </GestureHandlerRootView> */}
                            <ScrollView
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                directionalLockEnabled
                                onScroll={e => {
                                    const slide = Math.round(
                                        e.nativeEvent.contentOffset.x /
                                            e.nativeEvent.layoutMeasurement.width
                                    );
                                    if (slide !== activeIndexNumber) {
                                        setActiveIndexNumber(slide); // here we will set our active index num
                                    }
                                }}
                            >
                                {topTeam?.image_gallery.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                marginHorizontal: getSize.m(10),
                                            }}
                                        >
                                            <View>
                                                <Image
                                                    source={{ uri: item.image_url }}
                                                    style={[styles.image]}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                            <View style={styles.dotContainer}>
                                {topTeam?.image_gallery.map((_, index) => {
                                    return (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <View key={index}>
                                            <View
                                                style={[
                                                    styles.dot,
                                                    {
                                                        width:
                                                            index === activeIndexNumber
                                                                ? getSize.m(18)
                                                                : getSize.m(5),
                                                        backgroundColor:
                                                            index === activeIndexNumber
                                                                ? appColors.blue_light
                                                                : appColors.soft_grey,
                                                    },
                                                ]}
                                            />
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
