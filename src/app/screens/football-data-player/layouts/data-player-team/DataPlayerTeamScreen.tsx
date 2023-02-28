/* eslint-disable react/no-array-index-key */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
// import { IDataPlayerTeamScreenProps } from './DataPlayerTeamScreen.type';
import { AppFonts } from '@football/app/assets/fonts';
import { IDataPlayerTeamScreenProps } from '@football/app/screens/football-data-player/layouts/data-player-team/DataPlayerTeamScreen.type';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { Season } from '@football/core/models/PlayerResponse';
import styles from './DataPlayerTeamScreen.style';
import { useViewModel } from './DataPlayerTeamScreen.viewModel';

export const DataPlayerTeamScreen = ({ player }: IDataPlayerTeamScreenProps) => {
    const {
        t,
        onGoBack,
        setOpenModal,
        setSelectedSeason,
        openModal,
        selectedSeason,
    } = useViewModel({ player });

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {player && (
                <View style={styles.container_club}>
                    <View style={[appStyles.align_justify, styles.club_team]}>
                        <View style={styles.logo_club}>
                            <Avatar
                                source={{ uri: player.team.logo_url }}
                                size={getSize.m(50)}
                                rounded
                            />
                        </View>
                        <View style={[appStyles.align_justify, { marginTop: getSize.m(54) }]}>
                            <Text style={styles.club_name}>{player.team.name_he}</Text>
                            <Text style={styles.club_desc}>({player.team.league_name_he})</Text>
                        </View>
                        <View style={[appStyles.align_justify, { marginVertical: getSize.m(16) }]}>
                            <TouchableOpacity
                                onPress={() => {
                                    setOpenModal(!openModal);
                                }}
                                style={styles.calender}
                            >
                                <Text style={styles.text_calender}>{selectedSeason?.name}</Text>
                                <Icon
                                    name={appIcons.ic_chevron_down}
                                    color={appColors.light_gray}
                                    size={getSize.m(20)}
                                />
                            </TouchableOpacity>
                        </View>
                        {openModal && (
                            <View style={styles.drop_down_calender}>
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    nestedScrollEnabled
                                >
                                    {player.team.seasons.map((season: Season, index: number) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setSelectedSeason(season);
                                                    setOpenModal(false);
                                                }}
                                                key={index.toString()}
                                                style={styles.btn_drop_down_calender}
                                            >
                                                <Text style={{ textAlign: 'left' }}>
                                                    {season.name}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                        )}
                    </View>
                    <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                        <View style={{ marginLeft: getSize.m(22) }}>
                            <Text style={styles.text_label}>{t('data_player.gates')}</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={['rgba(16, 32, 100, 0.04)', 'rgba(59, 168, 225, 0.04)']}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={styles.text_header}>{t('data_player.frame')}</Text>
                            <Text style={styles.text_header}>{t('data_player.gates')}</Text>
                        </LinearGradient>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            {selectedSeason?.goals.map((item, index) => {
                                return (
                                    <View
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            { marginTop: getSize.m(14) },
                                        ]}
                                    >
                                        <Text style={appStyles.text_label}>{item.context_he}</Text>
                                        <Text style={appStyles.number}>{item.goals}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                    <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                        <View style={{ marginLeft: getSize.m(22) }}>
                            <Text style={styles.text_label}>{t('data_player.ticket.label')}</Text>
                        </View>
                        <LinearGradient
                            colors={['rgba(16, 32, 100, 0.04)', 'rgba(59, 168, 225, 0.04)']}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={styles.text_header}>{t('data_player.ticket.type')}</Text>
                            <Text style={styles.text_header}>{t('data_player.ticket.amount')}</Text>
                        </LinearGradient>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            {selectedSeason?.cards.map((item, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            { marginTop: getSize.m(14) },
                                        ]}
                                    >
                                        <Text style={appStyles.text_label}>{item.name_he}</Text>
                                        <Text style={appStyles.number}>{item.num_of_cards}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{ marginLeft: getSize.m(22), marginTop: getSize.m(30) }}>
                        <Text style={styles.text_label}>{t('data_player.games_in_season')}</Text>
                    </View>
                    {selectedSeason?.games_by_context.map((item, index) => {
                        return (
                            <View key={index}>
                                <View
                                    style={[
                                        styles.title_frame,
                                        { marginHorizontal: getSize.m(22) },
                                    ]}
                                >
                                    <Text style={styles.frame}>{t('data_player.frame')}:</Text>
                                    <Text style={appStyles.text_label}>{item.context_he}</Text>
                                </View>
                                <View
                                    style={[
                                        {
                                            marginHorizontal: getSize.m(10),
                                            marginTop: getSize.m(12),
                                        },
                                    ]}
                                >
                                    {item.games.map((game, gameIndex) => {
                                        return (
                                            <LinearGradient
                                                colors={[
                                                    gameIndex % 2 === 0
                                                        ? 'rgba(16, 32, 100,0.04)'
                                                        : appColors.gray,
                                                    gameIndex % 2 !== 0
                                                        ? 'rgba(59, 168, 225, 0.04)'
                                                        : appColors.gray,
                                                ]}
                                                style={[appStyles.flex_row_align, styles.result]}
                                                key={gameIndex}
                                            >
                                                <View style={{ width: getSize.m(50) }}>
                                                    <Text style={styles.date}>{game.date}</Text>
                                                </View>
                                                <View
                                                    style={[
                                                        appStyles.flex_row_space_center,
                                                        {
                                                            marginHorizontal: getSize.m(15),
                                                            width: getSize.m(120),
                                                        },
                                                    ]}
                                                >
                                                    <View style={[appStyles.flex_row_align_center]}>
                                                        <Text style={styles.name_club}>
                                                            {game.team1.name_he}
                                                        </Text>
                                                        <View style={styles.avt_club}>
                                                            <FastImage
                                                                source={{
                                                                    uri: game.team1.logo_url,
                                                                }}
                                                                style={{
                                                                    width: getSize.m(24),
                                                                    height: getSize.m(24),
                                                                    borderRadius: getSize.m(24),
                                                                }}
                                                            />
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={{
                                                            marginHorizontal: getSize.m(12),
                                                        }}
                                                    >
                                                        <Text style={styles.score}>
                                                            {game.score}
                                                        </Text>
                                                    </View>
                                                    <View style={appStyles.flex_row_align_center}>
                                                        <View style={styles.avt_club}>
                                                            <FastImage
                                                                source={{
                                                                    uri: game.team2.logo_url,
                                                                }}
                                                                style={{
                                                                    width: getSize.m(24),
                                                                    height: getSize.m(24),
                                                                    borderRadius: getSize.m(24),
                                                                }}
                                                            />
                                                        </View>
                                                        <Text
                                                            style={styles.name_club}
                                                            numberOfLines={2}
                                                        >
                                                            {game.team2.name_he}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style={appStyles.flex_row_align_center}>
                                                    <View style={{ width: getSize.m(60) }}>
                                                        <Text
                                                            style={{
                                                                color: appColors.text_dark_blue,
                                                                fontSize: getSize.m(11),
                                                                lineHeight: getSize.m(16.5),
                                                                fontFamily: AppFonts.medium,
                                                                marginRight: getSize.m(2),
                                                            }}
                                                        >
                                                            {game.goals ? game.goals : '-'}
                                                        </Text>
                                                    </View>
                                                    <FastImage
                                                        source={
                                                            game.goals
                                                                ? AppImages.img_ball_dark
                                                                : AppImages.img_ball_light_gray
                                                        }
                                                        resizeMode={FastImage.resizeMode.contain}
                                                        style={{
                                                            width: getSize.m(12),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                    <View style={appStyles.flex_row_align}>
                                                        <FastImage
                                                            source={
                                                                game.red_cards &&
                                                                AppImages.img_ticket_red
                                                            }
                                                            resizeMode={
                                                                FastImage.resizeMode.contain
                                                            }
                                                            style={{
                                                                marginLeft: getSize.m(10),
                                                                width: getSize.m(14),
                                                                height: getSize.m(20),
                                                            }}
                                                        />
                                                        <Text
                                                            style={{
                                                                position: 'absolute',
                                                                left: getSize.m(13.5),
                                                                fontFamily: AppFonts.semibold,
                                                                fontSize: getSize.m(10),
                                                                color: appColors.white,
                                                            }}
                                                        >
                                                            {game.red_cards ? game.red_cards : ''}
                                                        </Text>
                                                    </View>
                                                    <View style={[appStyles.flex_row_align, {}]}>
                                                        <Text
                                                            style={[
                                                                styles.date,
                                                                { width: getSize.m(30) },
                                                            ]}
                                                        >
                                                            {`${game.off_field}'`}
                                                        </Text>
                                                        {game.on_field ? (
                                                            <Icon
                                                                name={appIcons.ic_arrow_down}
                                                                color={appColors.red_dark}
                                                                size={getSize.m(10)}
                                                            />
                                                        ) : (
                                                            <Icon
                                                                name={appIcons.ic_arrow_up}
                                                                color={appColors.green}
                                                                size={getSize.m(10)}
                                                            />
                                                        )}
                                                    </View>
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                                </View>
                                {/* <View
                                    style={[
                                        styles.title_frame,
                                        { marginHorizontal: getSize.m(22) },
                                    ]}
                                >
                                    <Text style={styles.frame}>{t('data_player.frame')}:</Text>
                                    <Text style={appStyles.text_label}>מסלול אירופה</Text>
                                </View>
                                <View
                                    style={[
                                        {
                                            marginHorizontal: getSize.m(10),
                                            marginTop: getSize.m(12),
                                        },
                                    ]}
                                >
                                    {datas.map(item => {
                                        return (
                                            <LinearGradient
                                                colors={[
                                                    item.id % 2 === 1
                                                        ? 'rgba(16, 32, 100, 0.04)'
                                                        : appColors.gray,
                                                    item.id % 2 === 1
                                                        ? 'rgba(59, 168, 225, 0.04)'
                                                        : appColors.gray,
                                                ]}
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    styles.result,
                                                ]}
                                                key={item.id}
                                            >
                                                <View>
                                                    <Text style={styles.date}>{item.date}</Text>
                                                </View>
                                                <View
                                                    style={[
                                                        appStyles.flex_row_space_center,
                                                        {
                                                            marginHorizontal: getSize.m(15),
                                                        },
                                                    ]}
                                                >
                                                    <View style={[appStyles.flex_row_align_center]}>
                                                        <Text style={styles.name_club}>
                                                            {item.home}
                                                        </Text>
                                                        <View style={styles.avt_club}>
                                                            <FastImage
                                                                source={AppImages.img_albania}
                                                                style={{
                                                                    width: getSize.m(24),
                                                                    height: getSize.m(24),
                                                                    borderRadius: getSize.m(24),
                                                                }}
                                                            />
                                                        </View>
                                                    </View>
                                                    <View
                                                        style={{ marginHorizontal: getSize.m(12) }}
                                                    >
                                                        <Text style={styles.score}>
                                                            {item.result}
                                                        </Text>
                                                    </View>
                                                    <View style={appStyles.flex_row_align_center}>
                                                        <View style={styles.avt_club}>
                                                            <FastImage
                                                                source={AppImages.img_albania}
                                                                style={{
                                                                    width: getSize.m(24),
                                                                    height: getSize.m(24),
                                                                    borderRadius: getSize.m(24),
                                                                }}
                                                            />
                                                        </View>
                                                        <Text
                                                            style={styles.name_club}
                                                            numberOfLines={2}
                                                        >
                                                            {item.away}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style={appStyles.flex_row_align_center}>
                                                    <View>
                                                        <Text
                                                            style={{
                                                                color: appColors.text_dark_blue,
                                                                fontSize: getSize.m(11),
                                                                lineHeight: getSize.m(16.5),
                                                                fontFamily: AppFonts.medium,
                                                                marginRight: getSize.m(2),
                                                            }}
                                                        >
                                                            -
                                                        </Text>
                                                    </View>
                                                    <FastImage
                                                        source={AppImages.img_light_volleyball}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                        style={{
                                                            width: getSize.m(12),
                                                            height: getSize.m(12),
                                                        }}
                                                    />
                                                    <FastImage
                                                        source={AppImages.img_ticket_red}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                        style={{
                                                            marginLeft: getSize.m(10),
                                                            width: getSize.m(14),
                                                            height: getSize.m(20),
                                                        }}
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.date,
                                                            { marginLeft: getSize.m(16) },
                                                        ]}
                                                    >
                                                        {item.time}
                                                    </Text>
                                                    <Icon
                                                        name={appIcons.ic_arrow_down}
                                                        color={appColors.red_dark}
                                                        size={getSize.m(10)}
                                                    />
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                                </View> */}
                            </View>
                        );
                    })}
                </View>
            )}
        </ScrollView>
    );
};
