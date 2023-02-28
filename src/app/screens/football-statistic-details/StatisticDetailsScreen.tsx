import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { getSize } from '@football/app/utils/responsive/scale';
import LinearGradient from 'react-native-linear-gradient';
import {
    AvgGameGoalsKicked,
    AvgGameYellowCard,
    Card,
    ChampionshipHistory,
    GoalKicker,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';
import styles from './StatisticDetailsScreen.style';
import { useViewModel } from './StatisticDetailsScreen.viewModel';
import { IStatisticDetailsScreenProps } from './StatisticDetailsScreen.type';

export enum ListType {
    NormalGame = 0,
    AvgGame = 1,
    HistoryGame = 2,
}

export const StatisticDetailsScreen = ({ navigation, route }: IStatisticDetailsScreenProps) => {
    const leagueSeasonStats = route?.params?.leagueSeasonStats as LeagueSeasonStatModel;
    const title = route?.params?.title as string;
    const data = (route?.params?.data as GoalKicker[] | Card[]) || [];
    const avgData = (route?.params?.avgData as AvgGameYellowCard[] | AvgGameGoalsKicked[]) || [];
    const hisData = (route?.params?.hisData as ChampionshipHistory[]) || [];

    const { t, onGoBack } = useViewModel({
        navigation,
        route,
    });

    const renderLists = (listType: ListType) => {
        switch (listType) {
            case ListType.NormalGame:
                return (
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        <View style={appStyles.item_statistics}>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        paddingHorizontal: getSize.m(4),
                                    },
                                ]}
                            >
                                <View style={{ width: getSize.m(120) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { textAlign: 'left', fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.name_player')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(120) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { textAlign: 'left', fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.name_club')}
                                    </Text>
                                </View>

                                <View style={{ width: getSize.m(40) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.gate')}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(10) }}>
                                {data.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={item.player_id}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                index % 2 === 0
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.gray,
                                                index % 2 !== 0
                                                    ? 'rgba(59, 168, 225, 0.04)'
                                                    : appColors.gray,
                                            ]}
                                            style={[
                                                appStyles.flex_row_space_center,
                                                appStyles.statistic_row,
                                            ]}
                                        >
                                            {!('player_id' in item) && (
                                                <View
                                                    style={{
                                                        width: getSize.m(30),
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            { fontSize: getSize.m(14) },
                                                        ]}
                                                    >
                                                        {index + 1}
                                                    </Text>
                                                </View>
                                            )}

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
                                                    <Avatar
                                                        source={{
                                                            uri: item.player_image_url,
                                                        }}
                                                        rounded
                                                        size={18}
                                                    />
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                fontSize: getSize.m(14),
                                                            },
                                                        ]}
                                                    >
                                                        {item.player_name_he}
                                                    </Text>
                                                </View>
                                            </View>
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
                                                    <Avatar
                                                        source={{
                                                            uri: item.team_image_url,
                                                        }}
                                                        rounded
                                                        size={18}
                                                    />
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                fontSize: getSize.m(14),
                                                            },
                                                        ]}
                                                    >
                                                        {item.team_name_he}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(40),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(14) },
                                                    ]}
                                                >
                                                    {'num_of_cards' in item
                                                        ? item.num_of_cards
                                                        : item.num_of_goals}
                                                </Text>
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                );

            case ListType.AvgGame:
                return (
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        <View style={appStyles.item_statistics}>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        paddingHorizontal: getSize.m(4),
                                    },
                                ]}
                            >
                                <View style={{ width: getSize.m(40) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { textAlign: 'left', fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.location')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(160) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { textAlign: 'left', fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.name_club')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(60) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.average')}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(10) }}>
                                {avgData.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={item.team_id}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                index % 2 === 0
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.gray,
                                                index % 2 !== 0
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
                                                    width: getSize.m(30),
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(14) },
                                                    ]}
                                                >
                                                    {index + 1}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(160),
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                    }}
                                                >
                                                    <Avatar
                                                        source={{ uri: item.team_image_url }}
                                                        rounded
                                                        size={18}
                                                    />
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                fontSize: getSize.m(14),
                                                            },
                                                        ]}
                                                    >
                                                        {item.team_name_he}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={[
                                                    appStyles.flex_row_center,
                                                    {
                                                        width: getSize.m(60),
                                                        flex: 0,
                                                    },
                                                ]}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(14) },
                                                    ]}
                                                >
                                                    {'num_of_cards' in item
                                                        ? item.num_of_cards
                                                        : item.num_of_goals}
                                                </Text>
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                );

            case ListType.HistoryGame:
                return (
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        <View style={appStyles.item_statistics}>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        paddingHorizontal: getSize.m(4),
                                    },
                                ]}
                            >
                                <View style={{ width: getSize.m(80) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { textAlign: 'left', fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.season')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(200) }}>
                                    <Text
                                        style={[
                                            appStyles.statistics_header,
                                            { textAlign: 'left', fontSize: getSize.m(12) },
                                        ]}
                                    >
                                        {t('statistics.leagues.name_club')}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(10) }}>
                                {hisData.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={item.team_id}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                index % 2 === 0
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.gray,
                                                index % 2 !== 0
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
                                                    width: getSize.m(80),
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        {
                                                            textAlign: 'left',
                                                            fontSize: getSize.m(14),
                                                        },
                                                    ]}
                                                >
                                                    {item.season}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(200),
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                    }}
                                                >
                                                    <Avatar
                                                        source={{ uri: item.team_image_url }}
                                                        rounded
                                                        size={18}
                                                    />
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                fontSize: getSize.m(14),
                                                            },
                                                        ]}
                                                    >
                                                        {item.team_name_he}
                                                    </Text>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                );
            default:
                return null;
        }
    };
    return (
        <View style={appStyles.flex}>
            {leagueSeasonStats && (
                <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={appStyles.container}>
                            <CardGoBack
                                iconName={appIcons.ic_right_ios}
                                iconStyle={styles.ic_back}
                                goBack={onGoBack}
                                title={title}
                            />
                        </View>
                        <ScrollView>
                            <HeaderLogo
                                text={leagueSeasonStats.league_name_he}
                                avt={{ uri: leagueSeasonStats.league_logo_url }}
                            />
                            {renderLists(
                                // eslint-disable-next-line no-nested-ternary
                                data?.length
                                    ? ListType.NormalGame
                                    : avgData?.length
                                    ? ListType.AvgGame
                                    : ListType.HistoryGame
                            )}
                        </ScrollView>
                    </SafeAreaView>
                </ImageBackground>
            )}
        </View>
    );
};
