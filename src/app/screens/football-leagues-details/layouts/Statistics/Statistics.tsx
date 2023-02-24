import { Button } from '@football/app/components/button';
import { ButtonOption } from '@football/app/components/button_option';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { AppFonts } from '@football/app/assets/fonts';
import { useViewModel } from './Statistics.viewModel';
import { IStatisticsProps } from './Statistics.type';

export const Statistics = ({ selectedRoundName, statistics, statisticsId }: IStatisticsProps) => {
    const {
        t,
        setOnSelect,
        handleMoreStatistics,
        onSelect,
        externalGames,
        homeGames,
    } = useViewModel({
        selectedRoundName,
        statistics,
        statisticsId,
    });

    const renderStatistics = (data: any[]) => {
        return (
            <View style={{ marginTop: getSize.m(20) }}>
                <Position
                    color={appColors.text_dark_blue}
                    position={selectedRoundName}
                    width={getSize.m(130)}
                    fontFamily={AppFonts.bold}
                />
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
                        {data.map((item, index) => {
                            return (
                                <LinearGradient
                                    key={item.team_id}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={[
                                        index % 2 === 1
                                            ? 'rgba(16, 32, 100, 0.04)'
                                            : appColors.gray,
                                        index % 2 === 0
                                            ? 'rgba(59, 168, 225, 0.04)'
                                            : appColors.gray,
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
                                                {index + 1}
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
                            );
                        })}
                    </View>
                </View>
                <View style={{ paddingHorizontal: getSize.m(16) }}>
                    <Button
                        style={{ borderRadius: getSize.m(15) }}
                        title={t('leagues_details.statistics.more')}
                        onPress={handleMoreStatistics}
                    />
                </View>
            </View>
        );
    };
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(20) }}>
                <View style={{ marginHorizontal: getSize.m(-24) }}>
                    <ButtonOption
                        option_one={t('leagues_details.statistics.ranking_home')}
                        option_two={t('leagues_details.statistics.ranking_away')}
                        onSelect={setOnSelect}
                    />
                </View>
                {onSelect === 0 ? renderStatistics(homeGames) : renderStatistics(externalGames)}
            </View>
        </View>
    );
};
