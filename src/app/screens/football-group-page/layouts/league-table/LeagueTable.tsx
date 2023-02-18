import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';
import { useViewModel } from './LeagueTable.viewModel';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import styles from './LeagueTable.style';
import { DropDown } from '@football/app/components/drop-down/DropDown';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { ScreenName } from '@football/app/utils/constants/enum';

export const LeagueTable = () => {
    const {
        t,
        handleSelectedCycle,
        handleSelectedPlayOff,
        setOpenModalCycle,
        setOpenModalPlayOff,
        openModalCycle,
        cycles,
        selectCycle,
        openModalPlayOff,
        selectPlayoff,
        playOffs,
        handleCloseModal,
        listTeams,
        navigate,
    } = useViewModel({});
    return (
        <View>
            {/* {openModalCycle && (
                <DropDown
                    data={cycles}
                    handleSelected={(item: any) => handleSelectedCycle(item)}
                    handleCloseModal={handleCloseModal}
                />
            )}
            {openModalPlayOff && (
                <DropDown
                    data={playOffs}
                    handleSelected={(item: any) => handleSelectedPlayOff(item)}
                    handleCloseModal={handleCloseModal}
                />
            )} */}
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
                    <TouchableOpacity
                        onPress={() => {
                            setOpenModalPlayOff(!openModalPlayOff);
                        }}
                        style={[styles.cycle, { marginRight: getSize.m(12), flex: 0.9 }]}
                    >
                        <Text style={styles.text_cycle}>{selectPlayoff}</Text>
                        <Icon
                            name={appIcons.ic_chevron_down}
                            size={getSize.m(14)}
                            color={appColors.light_gray}
                            style={styles.chevron_down}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setOpenModalCycle(!openModalCycle);
                        }}
                        style={[styles.cycle, { flex: 0.5 }]}
                    >
                        <Text style={styles.text_cycle}>{selectCycle}</Text>
                        <Icon
                            name={appIcons.ic_chevron_down}
                            size={getSize.m(14)}
                            color={appColors.light_gray}
                            style={styles.chevron_down}
                        />
                    </TouchableOpacity>
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
                    {listTeams.map(item => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigate(ScreenName.GroupPagePage);
                                }}
                                key={item.id}
                            >
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={[
                                        item.id % 2 === 1
                                            ? 'rgba(16, 32, 100, 0.04)'
                                            : appColors.white,
                                        item.id % 2 === 1
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
                                                {item.id}
                                            </Text>
                                            <Avatar source={item.logo} rounded size={18} />
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
                                        <Text style={appStyles.statistics_content}>
                                            {item.from}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>{item.nch}</Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.draw}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.the_p}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(40) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.time}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>{item.no}</Text>
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
    );
};
