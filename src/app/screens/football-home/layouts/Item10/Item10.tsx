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

export const Item10 = () => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        openModalYear,
        setOpenModalYear,
        selectYear,
        setSelectYear,
        years,
        openModalCycles,
        setOpenModalCycles,
        selectCycles,
        setSelectCycles,
        cycles,
        openModalRound,
        setOpenModalRound,
        selectRound,
        setSelectRound,
        rounds,
        data,
    } = useViewModel({});
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
                <Text style={styles.header}>ליגת העל לנוער</Text>
                <View style={appStyles.flex_row_align}>
                    <Text style={styles.details}>לטבלה המלאה</Text>
                    <IconEntypo
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(13)}
                        color={appColors.button_dark_blue}
                    />
                </View>
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
                        <Text style={styles.text_cycle}>{selectYear}</Text>
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
                                {years.map((year, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectYear(year);
                                                setOpenModalYear(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={styles.btn_drop_down_calender_text}>
                                                {year}
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
                        <Text style={styles.text_cycle}>{selectYear}</Text>
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
                                {rounds.map((round, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectRound(round);
                                                setOpenModalRound(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={styles.btn_drop_down_calender_text}>
                                                {round}
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
                        <Text style={styles.text_cycle}>{selectCycles}</Text>
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
                                {cycles.map((cycle, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelectCycles(cycle);
                                                setOpenModalCycles(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={styles.btn_drop_down_calender_text}>
                                                {cycle}
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
                    {data.map((item, index) => {
                        return (
                            <LinearGradient
                                key={item.id}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    item.id % 2 === 1 ? 'rgba(16, 32, 100, 0.04)' : appColors.white,
                                    item.id % 2 === 1
                                        ? 'rgba(59, 168, 225, 0.04)'
                                        : appColors.white,
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
                                            {index + 1}
                                        </Text>
                                        <Avatar source={item.avt} rounded size={18} />
                                        <Text
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginLeft: getSize.m(10),
                                                },
                                            ]}
                                        >
                                            {item.name}
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
