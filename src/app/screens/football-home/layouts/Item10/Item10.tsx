/* eslint-disable no-underscore-dangle */
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from '@football/app/screens/football-home/layouts/Item10/Item10.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item10/Item10.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { IItem10Props } from '@football/app/screens/football-home/layouts/Item10/Item10.type';

export const Item10 = ({ league }: IItem10Props) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        openModalYear,
        setOpenModalYear,
        selectSeason,
        setSelectSeason,
        openModalCycles,
        setOpenModalCycles,
        selectCycle,
        setSelectCycle,
        openModalRound,
        setOpenModalRound,
        selectRound,
        setSelectRound,
        onClickAllLeagues,
        leagueSeason,
    } = useViewModel({ league });
    return (
        <View style={styles.container}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(18),
                        marginTop: getSize.m(16),
                    },
                ]}
            >
                <Text style={styles.header}>{league.name_he}</Text>
                <TouchableOpacity onPress={() => onClickAllLeagues(league._id)}>
                    <View style={appStyles.flex_row_align}>
                        <Text style={styles.details}>{t('home_page.full_table')}</Text>
                        <IconEntypo
                            name={appIcons.ic_arrow_left}
                            size={getSize.m(13)}
                            color={appColors.button_dark_blue}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.drop_down_filter}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setOpenModalYear(!openModalYear);
                        }}
                        style={[
                            styles.cycle,
                            {
                                borderColor: openModalYear
                                    ? appColors.blue_light
                                    : appColors.border,
                            },
                        ]}
                    >
                        <Text style={styles.text_cycle}>{selectSeason?.league_season_name}</Text>
                        <IconFeather
                            name={openModalYear ? appIcons.ic_chevron_up : appIcons.ic_chevron_down}
                            size={getSize.m(14)}
                            color={openModalYear ? appColors.blue_light : appColors.light_gray}
                            style={styles.chevron_down}
                        />
                    </TouchableOpacity>
                    {openModalYear && (
                        <View style={[styles.drop_down_calender, { width: '80%' }]}>
                            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                                {league.seasons.map((season, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectSeason(season);
                                                setOpenModalYear(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={styles.btn_drop_down_calender_text}>
                                                {season.league_season_name}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setOpenModalCycles(!openModalCycles);
                        }}
                        style={[
                            styles.cycle,
                            {
                                borderColor: openModalCycles
                                    ? appColors.blue_light
                                    : appColors.border,
                            },
                        ]}
                    >
                        <Text style={styles.text_cycle}>{selectCycle?.cycle_name_he}</Text>
                        <IconFeather
                            name={
                                openModalCycles ? appIcons.ic_chevron_up : appIcons.ic_chevron_down
                            }
                            size={getSize.m(14)}
                            color={openModalCycles ? appColors.blue_light : appColors.light_gray}
                            style={styles.chevron_down}
                        />
                    </TouchableOpacity>
                    {openModalCycles && (
                        <View style={[styles.drop_down_calender, { width: '80%' }]}>
                            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                                {leagueSeason?.cycles.map((cycle, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectCycle(cycle);
                                                setOpenModalCycles(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={styles.btn_drop_down_calender_text}>
                                                {cycle.cycle_name_he}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    )}
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => {
                            setOpenModalRound(!openModalRound);
                        }}
                        style={[
                            styles.cycle,
                            {
                                borderColor: openModalRound
                                    ? appColors.blue_light
                                    : appColors.border,
                            },
                        ]}
                    >
                        <Text style={styles.text_cycle}>{selectRound?.round_name_he}</Text>
                        <IconFeather
                            name={
                                openModalRound ? appIcons.ic_chevron_up : appIcons.ic_chevron_down
                            }
                            size={getSize.m(14)}
                            color={openModalRound ? appColors.blue_light : appColors.light_gray}
                            style={styles.chevron_down}
                        />
                    </TouchableOpacity>
                    {openModalRound && (
                        <View style={[styles.drop_down_calender, { width: '80%' }]}>
                            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                                {selectCycle?.rounds.map((round, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectRound(round);
                                                setOpenModalCycles(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={styles.btn_drop_down_calender_text}>
                                                {round.round_name_he}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    )}
                </View>
            </View>
            <View style={{ marginTop: getSize.m(14) }}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            paddingHorizontal: getSize.m(25),
                        },
                    ]}
                >
                    <View style={{ width: getSize.m(120), left: getSize.m(30) }}>
                        <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                            {t('leagues_details.league_table.group')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={appStyles.statistics_header}>
                            {t('leagues_details.league_table.from')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={appStyles.statistics_header}>
                            {t('leagues_details.league_table.nch')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={appStyles.statistics_header}>
                            {t('leagues_details.league_table.draw')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={appStyles.statistics_header}>
                            {t('leagues_details.league_table.the_p')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(40) }}>
                        <Text style={appStyles.statistics_header}>
                            {t('leagues_details.league_table.time')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={appStyles.statistics_header}>
                            {t('leagues_details.league_table.no')}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: getSize.m(14),
                        marginHorizontal: getSize.m(17),
                        marginBottom: getSize.m(20),
                    }}
                >
                    {selectRound?.leader_board?.slice(0, 10).map((item, index) => {
                        return (
                            <LinearGradient
                                key={item.team_id}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    index % 2 === 0 ? 'rgba(16, 32, 100, 0.04)' : appColors.white,
                                    index % 2 !== 0 ? 'rgba(59, 168, 225, 0.04)' : appColors.white,
                                ]}
                                style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
                            >
                                <View
                                    style={{
                                        width: getSize.m(120),
                                        overflow: 'hidden',
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Text
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginRight: getSize.m(10),
                                                },
                                            ]}
                                        >
                                            {item.place}
                                        </Text>
                                        <Avatar source={{ uri: item.logo_url }} rounded size={18} />
                                        <Text
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginLeft: getSize.m(10),
                                                },
                                            ]}
                                        >
                                            {item.name_he}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={appStyles.statistics_content}>{item.games}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={appStyles.statistics_content}>{item.wins}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={appStyles.statistics_content}>{item.ties}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={appStyles.statistics_content}>
                                        {item.difference}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={appStyles.statistics_content}>{item.goals}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={appStyles.statistics_content}>{item.score}</Text>
                                </View>
                            </LinearGradient>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
