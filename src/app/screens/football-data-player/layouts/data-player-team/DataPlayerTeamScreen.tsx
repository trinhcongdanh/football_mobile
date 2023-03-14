/* eslint-disable react/no-array-index-key */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { I18nManager, ScrollView, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
// import { IDataPlayerTeamScreenProps } from './DataPlayerTeamScreen.type';
import { AppFonts } from '@football/app/assets/fonts';
import DropdownField from '@football/app/components/dropdown-field/DropdownField';
import { IDataPlayerTeamScreenProps } from '@football/app/screens/football-data-player/layouts/data-player-team/DataPlayerTeamScreen.type';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './DataPlayerTeamScreen.style';
import { useViewModel } from './DataPlayerTeamScreen.viewModel';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const DataPlayerTeamScreen = ({ player }: IDataPlayerTeamScreenProps) => {
    const { t, onGoBack, setSelectedSeason, selectedSeason } = useViewModel({ player });
    const { getTranslationText } = useTranslationText();

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
                            <Text style={styles.club_name}>
                                {' '}
                                {getTranslationText({
                                    textHe: player.team.name_he,
                                    textEn: player.team.name_en,
                                })}
                            </Text>
                            <Text style={styles.club_desc}>
                                (
                                {getTranslationText({
                                    textHe: player.team.league_name_he,
                                    textEn: player.team.league_name_en,
                                })}
                                )
                            </Text>
                        </View>
                        <View
                            style={{ flex: 1, marginBottom: getSize.m(20), width: getSize.m(130) }}
                        >
                            <DropdownField
                                options={player.team.seasons || []}
                                selectedValue={selectedSeason}
                                onPressItem={season => {
                                    setSelectedSeason(season);
                                }}
                                itemTitleField="name"
                            />
                        </View>
                    </View>
                    <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                        <View style={{ marginLeft: getSize.m(22) }}>
                            <Text style={styles.text_label}>{t('data_player.gates')}</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[appColors.linearLight, appColors.linearDark]}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={styles.text_header}>{t('data_player.frame')}</Text>
                            <Text style={styles.text_header}>{t('data_player.gates')}</Text>
                        </LinearGradient>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            {/* {selectedSeason?.goals.map((item, index) => {
                                return (
                                    
                                );
                            })} */}

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>{t('home_page.league')}</Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.goals_league}
                                </Text>
                            </View>

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>{t('state_cup.title')}</Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.goals_national_cup}
                                </Text>
                            </View>

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>
                                    {t('data_player.league_cup_toto')}
                                </Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.goals_toto_cup}
                                </Text>
                            </View>

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>{t('data_player.total')}</Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.goals_total}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                        <View style={{ marginLeft: getSize.m(22) }}>
                            <Text style={styles.text_label}>{t('data_player.ticket.label')}</Text>
                        </View>
                        <LinearGradient
                            colors={[appColors.linearLight, appColors.linearDark]}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={styles.text_header}>{t('data_player.ticket.type')}</Text>
                            <Text style={styles.text_header}>{t('data_player.ticket.amount')}</Text>
                        </LinearGradient>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            {/* {selectedSeason?.cards.map((item, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            { marginTop: getSize.m(14) },
                                        ]}
                                    >
                                        <Text style={appStyles.text_label}>{item.name_he}</Text>
                                        <Text
                                            style={[
                                                appStyles.number,
                                                { paddingLeft: getSize.m(10) },
                                            ]}
                                        >
                                            {item.num_of_cards}
                                        </Text>
                                    </View>
                                );
                            })} */}
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>
                                    {t('data_player.yellow_league')}
                                </Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.yellow_cards_league}
                                </Text>
                            </View>

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>
                                    {t('data_player.yellow_cup_toto')}
                                </Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.yellow_cards_toto_cup}
                                </Text>
                            </View>

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>{t('data_player.red')}</Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.red_cards}
                                </Text>
                            </View>

                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    { marginTop: getSize.m(14) },
                                ]}
                            >
                                <Text style={appStyles.text_label}>{t('data_player.total')}</Text>
                                <Text style={[appStyles.number, { paddingLeft: getSize.m(10) }]}>
                                    {selectedSeason?.total_cards}
                                </Text>
                            </View>
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
                                    <Text style={appStyles.text_label}>
                                        {getTranslationText({
                                            textHe: item.context_he,
                                            textEn: item.context_en,
                                        })}
                                    </Text>
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
                                                        ? appColors.linearLight
                                                        : appColors.gray,
                                                    gameIndex % 2 !== 0
                                                        ? appColors.linearDark
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
                                                            {getTranslationText({
                                                                textHe: game.team1.name_he,
                                                                textEn: game.team1.name_en,
                                                            })}
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
                                                            {getTranslationText({
                                                                textHe: game.team2.name_he,
                                                                textEn: game.team2.name_en,
                                                            })}
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
                                                                marginRight: I18nManager.isRTL
                                                                    ? getSize.m(2)
                                                                    : getSize.m(0),
                                                                marginLeft: I18nManager.isRTL
                                                                    ? getSize.m(0)
                                                                    : getSize.m(50),
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
                                                                marginRight: I18nManager.isRTL
                                                                    ? 0
                                                                    : getSize.m(2),
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
