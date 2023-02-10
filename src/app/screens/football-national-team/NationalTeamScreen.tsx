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
import styles from './NationalTeamScreen.style';
import { useViewModel } from './NationalTeamScreen.viewModel';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';
import LinearGradient from 'react-native-linear-gradient';

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
        video,
        display,
        data,
        width,
        sourceVideo,
        autoPlay,
        listGames,
        listTeams,
        options,
        select,
        listMatches,
        teamSquads,
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
                    {display && (
                        <View style={styles.video_container}>
                            <View style={styles.ic_close}>
                                <Icon
                                    onPress={() => {
                                        setDisplay(false);
                                        setAutoPlay(true);
                                    }}
                                    name="close"
                                    size={getSize.m(18)}
                                    color={appColors.white}
                                />
                            </View>
                            <View style={styles.ic_share}>
                                <Icon
                                    onPress={() => {}}
                                    name="sharealt"
                                    size={getSize.m(18)}
                                    color={appColors.white}
                                />
                            </View>

                            <View>
                                <Video
                                    loop
                                    video={sourceVideo}
                                    thumbnail={AppImages.img_thumbnail}
                                    endThumbnail={AppImages.img_thumbnail}
                                    videoWidth={getSize.m(1600)}
                                    videoHeight={getSize.m(900)}
                                    resizeMode="contain"
                                    showDuration
                                    onEnd={() => {
                                        setDisplay(false);
                                        setAutoPlay(true);
                                    }}
                                />
                            </View>
                        </View>
                    )}
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
                                    <Image source={AppImages.img_logo} style={styles.image_logo} />
                                </View>
                                <Text style={styles.text_title}>נבחרת לאומית גברים</Text>
                            </View>
                            <View style={{ marginTop: getSize.m(20) }}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => handlePlayVideo(video)}
                                >
                                    <Image
                                        source={AppImages.img_team_israel}
                                        style={styles.image_team}
                                    />
                                    <View style={styles.date}>
                                        <Text style={styles.text_date}>01:23</Text>
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
                                            נבחרת ישראל זכתה במדליית זהב במכבייה בפעם השנייה
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
                                <GestureHandlerRootView style={appStyles.flex}>
                                    <Carousel
                                        loop={false}
                                        pagingEnabled={true}
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
                                            setIndexDot(index);
                                        }}
                                        data={data}
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
                                                    onPress={() => handlePlayVideo(item.video)}
                                                >
                                                    <Image
                                                        source={item.image}
                                                        style={[styles.image]}
                                                    />
                                                    <View style={styles.date}>
                                                        <Text style={styles.text_date}>
                                                            {item.minute}
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
                                                            {item.content}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    />
                                </GestureHandlerRootView>
                                <View style={styles.indicatorContainer}>
                                    {data.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={[
                                                    styles.normalDots,
                                                    {
                                                        width:
                                                            index === indexDot
                                                                ? getSize.m(18)
                                                                : getSize.m(5),
                                                        backgroundColor:
                                                            index === indexDot
                                                                ? appColors.white
                                                                : appColors.text_option_unselect,
                                                    },
                                                ]}
                                            />
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(44) }}>
                                <Text style={styles.text_title}>
                                    {t('national_team.team_event')}
                                </Text>
                                <View>
                                    {listGames.map(item => {
                                        return (
                                            <ListGame
                                                key={item.id}
                                                tournament={item.tournament}
                                                logo_home={item.logoHome}
                                                logo_away={item.logoAway}
                                                nameHome={item.nameHome}
                                                nameAway={item.nameAway}
                                                location={item.location}
                                                date={item.date}
                                                result={item.result}
                                                schedule={item.schedule}
                                                // completed={item.completed}
                                                color={appColors.text_dark_blue}
                                                handleDetailMatch={handleDetailMatch}
                                            />
                                        );
                                    })}
                                </View>
                            </View>
                        </View>
                        <View>
                            <HeaderLogo
                                text='ליגת האומות של אופ"א 2022/23'
                                avt={AppImages.img_israel}
                                details={t('national_team.previous_campaigns')}
                                icon={appIcons.ic_arrow_left}
                                handleNavigation={() => handleNavigation()}
                            />
                            <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                                <View>
                                    <Text style={appStyles.statistics_title}>
                                        {t('national_team.ranking_table.title')}
                                    </Text>
                                    <View style={{ marginTop: getSize.m(26) }}>
                                        <Position
                                            position="בית 9"
                                            color={appColors.text_dark_blue}
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
                                                {listTeams.map(item => {
                                                    return (
                                                        <LinearGradient
                                                            key={item.id}
                                                            colors={[
                                                                item.id % 2 === 1
                                                                    ? 'rgba(255, 255, 255, 0.05)'
                                                                    : appColors.gray,
                                                                item.id % 2 === 1
                                                                    ? 'rgba(16, 32, 100, 0.05)'
                                                                    : appColors.gray,
                                                                item.id % 2 === 1
                                                                    ? 'rgba(59, 168, 225, 0.05)'
                                                                    : appColors.gray,
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
                                                                    {item.id}
                                                                </Text>
                                                                <View>
                                                                    <Icon
                                                                        name={appIcons.ic_up}
                                                                        size={11}
                                                                        color={appColors.green}
                                                                    />
                                                                    <Icon
                                                                        name={appIcons.ic_down}
                                                                        size={11}
                                                                        color={appColors.red}
                                                                    />
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
                                                                        source={{ uri: item.logo }}
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
                                                                        {item.name}
                                                                    </Text>
                                                                </View>
                                                            </View>
                                                            <View style={{ width: getSize.m(30) }}>
                                                                <Text
                                                                    style={
                                                                        appStyles.statistics_content
                                                                    }
                                                                >
                                                                    {item.mash}
                                                                </Text>
                                                            </View>
                                                            <View style={{ width: getSize.m(30) }}>
                                                                <Text
                                                                    style={
                                                                        appStyles.statistics_content
                                                                    }
                                                                >
                                                                    {item.nch}
                                                                </Text>
                                                            </View>
                                                            <View style={{ width: getSize.m(30) }}>
                                                                <Text
                                                                    style={
                                                                        appStyles.statistics_content
                                                                    }
                                                                >
                                                                    {item.draw}
                                                                </Text>
                                                            </View>
                                                            <View style={{ width: getSize.m(30) }}>
                                                                <Text
                                                                    style={
                                                                        appStyles.statistics_content
                                                                    }
                                                                >
                                                                    {item.the_p}
                                                                </Text>
                                                            </View>
                                                            <View style={{ width: getSize.m(40) }}>
                                                                <Text
                                                                    style={
                                                                        appStyles.statistics_content
                                                                    }
                                                                >
                                                                    {item.time}
                                                                </Text>
                                                            </View>
                                                            <View style={{ width: getSize.m(30) }}>
                                                                <Text
                                                                    style={
                                                                        appStyles.statistics_content
                                                                    }
                                                                >
                                                                    {item.no}
                                                                </Text>
                                                            </View>
                                                        </LinearGradient>
                                                    );
                                                })}
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={appStyles.package}>
                                <View>
                                    <Text style={appStyles.statistics_title}>
                                        {t('national_team.list_game.title')}
                                    </Text>
                                    <View style={{ marginTop: getSize.m(26) }}>
                                        <Position
                                            position="בית 9"
                                            color={appColors.text_dark_blue}
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
                                                                    fontWeight:
                                                                        index === select
                                                                            ? '700'
                                                                            : '500',
                                                                },
                                                            ]}
                                                        >
                                                            {option}
                                                        </Text>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </View>
                                        {select === 0 && (
                                            <View>
                                                {listMatches.map(item => {
                                                    return (
                                                        <ListGame
                                                            key={item.id}
                                                            logo_home={item.logoHome}
                                                            logo_away={item.logoAway}
                                                            nameHome={item.nameHome}
                                                            nameAway={item.nameAway}
                                                            location={item.location}
                                                            date={item.date}
                                                            result={item.result}
                                                            schedule={item.schedule}
                                                            // completed={item.completed}
                                                            icon={appIcons.ic_arrow_left}
                                                            color={appColors.gray}
                                                            details={item.details}
                                                            handleDetailMatch={handleDetailMatch}
                                                        />
                                                    );
                                                })}
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={appStyles.container}>
                            {teamSquads.map(item => {
                                return (
                                    <TouchableOpacity
                                        style={[
                                            appStyles.flex_row_space_center,
                                            styles.content_team_squad,
                                        ]}
                                        key={item.id}
                                    >
                                        <View style={appStyles.flex_row_align}>
                                            <Avatar
                                                source={item.avt}
                                                size={getSize.m(26)}
                                                rounded
                                            />
                                            <Text style={styles.name_player}>{item.name}</Text>
                                        </View>
                                        <IconFeather
                                            name={appIcons.ic_arrow_left}
                                            color={appColors.text_dark_blue}
                                            style={{ fontWeight: '700' }}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
