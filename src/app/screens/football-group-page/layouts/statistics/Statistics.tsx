import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Button } from '@football/app/components/button';
import { ScorersOfGoals } from './scorers-of-goals/ScorersOfGoals';
import { TopScorers } from './top-scorers/TopScorers';
import { YellowsCup } from './yellows-cup/YellowsCup';
import { YellowsLeagues } from './yellows-leagues/YellowsLeagues';
import { RedCard } from './red-card/RedCard';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import styles from './Statistics.style';
import { useViewModel } from './Statistics.viewModel';

export const Statistics = () => {
    const {
        t,
        statistics,
        showDetail,
        handleShowDetail,
        handleCloseDetail,
        handleMoreStatistics,
    } = useViewModel({});
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(30) }}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            marginHorizontal: getSize.m(6),
                        },
                    ]}
                >
                    <Text style={styles.title}>2021/2022</Text>
                    <TouchableOpacity style={appStyles.flex_row_space_center}>
                        <Text style={styles.see_all}>{t('group_page.statistics.see_all')}</Text>
                        <Icon
                            name={appIcons.ic_arrow_left}
                            size={getSize.m(10)}
                            color={appColors.button_dark_blue}
                            style={styles.ic_arrow}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            marginHorizontal: getSize.m(6),
                            marginTop: getSize.m(18),
                        },
                    ]}
                >
                    <View style={{ width: getSize.m(120) }}>
                        <Text style={[styles.header, { textAlign: 'left' }]}>
                            {t('group_page.statistics.player')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(80) }}>
                        <Text style={[styles.header]}>{t('group_page.statistics.gates')}</Text>
                    </View>
                    <View style={{ width: getSize.m(80) }}>
                        <Text style={[styles.header]}>{t('group_page.statistics.yellow')}</Text>
                    </View>
                    <View style={{ width: getSize.m(20) }} />
                </View>
                <View>
                    {statistics.map(item => {
                        return (
                            <View
                                key={item.id}
                                style={{
                                    marginTop: getSize.m(6),
                                }}
                            >
                                {!showDetail ? (
                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                backgroundColor:
                                                    item.id % 2 !== 0
                                                        ? appColors.blue_matte
                                                        : appColors.gray,
                                                paddingHorizontal: getSize.m(6),
                                                paddingVertical: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        <Text style={[styles.text_content, { textAlign: 'left' }]}>
                                            מאור בוזגלו
                                        </Text>
                                        <TouchableOpacity onPress={handleShowDetail}>
                                            <Icon
                                                name={appIcons.ic_arrow_down}
                                                size={getSize.m(10)}
                                                color={appColors.button_dark_blue}
                                                style={styles.ic_arrow}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View
                                        style={{
                                            backgroundColor:
                                                item.id % 2 !== 0
                                                    ? appColors.blue_matte
                                                    : appColors.gray,
                                            height: getSize.m(200),
                                        }}
                                    >
                                        <View
                                            style={[
                                                appStyles.flex_row_space_center,
                                                {
                                                    paddingHorizontal: getSize.m(6),
                                                    paddingVertical: getSize.m(10),
                                                    borderColor: appColors.black,
                                                    borderBottomWidth: getSize.m(1),
                                                },
                                            ]}
                                        >
                                            <View style={{ width: getSize.m(120) }}>
                                                <Text
                                                    style={[
                                                        styles.text_content,
                                                        { textAlign: 'left' },
                                                    ]}
                                                >
                                                    מאור בוזגלו
                                                </Text>
                                            </View>
                                            <View style={{ width: getSize.m(80) }}>
                                                <Text style={[styles.text_content]}>14</Text>
                                            </View>
                                            <View style={{ width: getSize.m(80) }}>
                                                <Text style={[styles.text_content]}>14</Text>
                                            </View>
                                            <TouchableOpacity
                                                onPress={handleCloseDetail}
                                                style={{ width: getSize.m(20) }}
                                            >
                                                <Icon
                                                    name={appIcons.ic_arrow_up}
                                                    size={getSize.m(10)}
                                                    color={appColors.button_dark_blue}
                                                    style={styles.ic_arrow}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </View>
                        );
                    })}
                </View>
                <View style={{ marginHorizontal: getSize.m(28), marginTop: getSize.m(84) }}>
                    <Button title={t('group_page.statistics.btn')} onPress={handleMoreStatistics} />
                </View>
                <View style={{ marginTop: getSize.m(20) }}>
                    <ScorersOfGoals />
                </View>
                <View style={{ marginTop: getSize.m(20) }}>
                    <TopScorers />
                </View>
                <View style={{ marginTop: getSize.m(20) }}>
                    <YellowsCup />
                </View>
                <View style={{ marginTop: getSize.m(20) }}>
                    <YellowsLeagues />
                </View>
                <View style={{ marginTop: getSize.m(20) }}>
                    <RedCard />
                </View>
            </View>
        </View>
    );
};
