import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import { getSize } from '@football/app/utils/responsive/scale';
import { Cycle, Round } from '@football/core/models/TeamSeasonResponse';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { ListOfGames } from '../list-of-games/ListOfGames';
import styles from './LeagueTable.style';
import { ILeagueTableProps } from './LeagueTable.type';
import { useViewModel } from './LeagueTable.viewModel';

export const LeagueTable = ({ teamSeason }: ILeagueTableProps) => {
    const {
        t,
        setOpenModalCycle,
        setOpenModalPlayOff,
        openModalCycle,
        selectCycle,
        openModalPlayOff,
        selectedRound,
        setSelectedRound,
        navigate,
        setSelectCycle,
    } = useViewModel({ teamSeason });
    return (
        <>
            <View style={[appStyles.package, { backgroundColor: appColors.white }]}>
                <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                    {t('group_page.league_table.title')}
                </Text>
                <View
                    style={[
                        appStyles.flex,
                        {
                            paddingHorizontal: getSize.m(10.5),
                        },
                    ]}
                >
                    <View style={styles.drop_down_filter}>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setOpenModalPlayOff(!openModalPlayOff);
                                }}
                                style={[
                                    styles.cycle,
                                    {
                                        marginRight: getSize.m(12),
                                        borderColor: openModalPlayOff
                                            ? appColors.blue_light
                                            : appColors.border,
                                    },
                                ]}
                            >
                                <Text style={styles.text_cycle}>{selectCycle?.cycle_name_en}</Text>
                                <Icon
                                    name={
                                        openModalPlayOff
                                            ? appIcons.ic_chevron_up
                                            : appIcons.ic_chevron_down
                                    }
                                    size={getSize.m(14)}
                                    color={
                                        openModalPlayOff
                                            ? appColors.blue_light
                                            : appColors.light_gray
                                    }
                                    style={styles.chevron_down}
                                />
                            </TouchableOpacity>
                            {openModalPlayOff && (
                                <View
                                    style={[
                                        styles.drop_down_calender,
                                        { width: '90%', marginRight: getSize.m(4) },
                                    ]}
                                >
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        nestedScrollEnabled
                                    >
                                        {teamSeason.cycles.map((cycle: Cycle, index: number) => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setSelectCycle(cycle);
                                                        setOpenModalPlayOff(false);
                                                    }}
                                                    key={index.toString()}
                                                    style={styles.btn_drop_down_calender}
                                                >
                                                    <Text
                                                        style={styles.btn_drop_down_calender_text}
                                                    >
                                                        {cycle.cycle_name_en}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </ScrollView>
                                </View>
                            )}
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    setOpenModalCycle(!openModalCycle);
                                }}
                                style={[
                                    styles.cycle,
                                    {
                                        borderColor: openModalCycle
                                            ? appColors.blue_light
                                            : appColors.border,
                                    },
                                ]}
                            >
                                <Text style={styles.text_cycle}>
                                    {selectedRound?.round_name_en}
                                </Text>
                                <Icon
                                    name={
                                        openModalCycle
                                            ? appIcons.ic_chevron_up
                                            : appIcons.ic_chevron_down
                                    }
                                    size={getSize.m(14)}
                                    color={
                                        openModalCycle ? appColors.blue_light : appColors.light_gray
                                    }
                                    style={styles.chevron_down}
                                />
                            </TouchableOpacity>
                            {openModalCycle && (
                                <View
                                    style={[
                                        styles.drop_down_calender,
                                        { width: '90%', marginRight: getSize.m(-4) },
                                    ]}
                                >
                                    <ScrollView
                                        showsVerticalScrollIndicator={false}
                                        nestedScrollEnabled
                                    >
                                        {selectCycle?.rounds.map((round: Round, index: number) => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setSelectedRound(round);
                                                        setOpenModalCycle(false);
                                                    }}
                                                    key={index.toString()}
                                                    style={styles.btn_drop_down_calender}
                                                >
                                                    <Text
                                                        style={styles.btn_drop_down_calender_text}
                                                    >
                                                        {round.round_name_en}
                                                    </Text>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </ScrollView>
                                </View>
                            )}
                        </View>
                    </View>
                </View>
                <View>
                    <View
                        style={[
                            appStyles.flex_row_space_center,
                            {
                                paddingHorizontal: getSize.m(8),
                            },
                        ]}
                    >
                        <View style={{ width: getSize.m(120), left: getSize.m(18) }}>
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
                    <View style={{ marginTop: getSize.m(10) }}>
                        {selectedRound?.leader_board.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigate(ScreenName.GroupPagePage);
                                    }}
                                    key={item.team_id}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            index % 2 === 0
                                                ? 'rgba(16, 32, 100, 0.04)'
                                                : appColors.white,
                                            index % 2 !== 0
                                                ? 'rgba(59, 168, 225, 0.04)'
                                                : appColors.white,
                                        ]}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            appStyles.statistic_row,
                                        ]}
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
                                                <Avatar
                                                    source={{ uri: item.logo_url }}
                                                    rounded
                                                    size={18}
                                                />
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
                                            <Text style={appStyles.statistics_content}>
                                                {item.games}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.wins}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.ties}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.difference}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.goals}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.score}
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <TouchableOpacity style={styles.more_result}>
                    <Text style={styles.text_more_result}>{t('group_page.league_table.more')}</Text>
                    <Icon
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(10)}
                        style={styles.ic_more_result}
                    />
                </TouchableOpacity>
            </View>

            <View style={appStyles.package}>
                {selectedRound?.games && <ListOfGames listGames={selectedRound?.games} />}
            </View>
        </>
    );
};
