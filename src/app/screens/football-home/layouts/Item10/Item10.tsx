/* eslint-disable no-underscore-dangle */
import { appIcons } from '@football/app/assets/icons/appIcons';
import DropdownField from '@football/app/components/dropdown-field/DropdownField';
import styles from '@football/app/screens/football-home/layouts/Item10/Item10.style';
import { IItem10Props } from '@football/app/screens/football-home/layouts/Item10/Item10.type';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item10/Item10.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import IconEntypo from 'react-native-vector-icons/Entypo';

export const Item10 = ({ league }: IItem10Props) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        selectSeason,
        setSelectSeason,
        selectCycle,
        setSelectCycle,
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
                    <DropdownField
                        options={league.seasons || []}
                        selectedValue={selectSeason}
                        onPressItem={season => {
                            setSelectSeason(season);
                        }}
                        itemTitleField="league_season_name"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <DropdownField
                        options={leagueSeason?.cycles || []}
                        selectedValue={selectCycle}
                        onPressItem={cycle => {
                            setSelectCycle(cycle);
                        }}
                        itemTitleField="cycle_name_he"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <DropdownField
                        options={selectCycle?.rounds || []}
                        selectedValue={selectRound}
                        onPressItem={round => {
                            setSelectRound(round);
                        }}
                        itemTitleField="round_name_he"
                    />
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
                        zIndex: 1,
                    }}
                >
                    {selectRound?.leader_board?.slice(0, 10).map((item, index) => {
                        return (
                            <LinearGradient
                                key={item.team_id}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    index % 2 === 0 ? appColors.linearLight : appColors.white,
                                    index % 2 !== 0 ? appColors.linearDark : appColors.white,
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
