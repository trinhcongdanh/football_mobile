import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { IDataPlayerNationalScreenProps } from './DataPlayerNationalScreen.type';
import { IDataPlayerNationalScreenProps } from '@football/app/screens/football-data-player/layouts/data-player-national/DataPlayerNationalScreen.type';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './DataPlayerNationalScreen.style';
import { useViewModel } from './DataPlayerNationalScreen.viewModel';

export const DataPlayerNationalScreen = ({ player }: IDataPlayerNationalScreenProps) => {
    const { t, onNavigateGoalTopTeam } = useViewModel({ player });
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {player && (
                <View style={styles.container_national}>
                    <View style={[appStyles.align_justify, styles.team_national]}>
                        <View style={styles.logo_club}>
                            <FastImage
                                source={{ uri: player.top_team.logo_url }}
                                style={{ width: getSize.m(50), height: getSize.m(56) }}
                            />
                        </View>
                        <View
                            style={[
                                appStyles.align_justify,
                                { marginTop: getSize.m(54), marginBottom: getSize.m(20) },
                            ]}
                        >
                            <Text style={styles.name_national}>{player.top_team.name_he}</Text>
                        </View>
                    </View>
                    <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                        <View style={{ marginLeft: getSize.m(22) }}>
                            <Text style={styles.text_label}>{t('data_player.info')}</Text>
                        </View>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            <View style={[appStyles.flex_row_space_center, styles.info_player]}>
                                <Text style={appStyles.text_label}>{t('data_player.count')}</Text>
                                <Text style={appStyles.number}>{player.top_team.appearances}</Text>
                            </View>
                            <View style={styles.line_space} />
                            <View style={[appStyles.flex_row_space_center, styles.info_player]}>
                                <Text style={appStyles.text_label}>{t('data_player.debut')}</Text>
                                <View style={appStyles.flex_row_align}>
                                    <View style={styles.team_national_date}>
                                        <Text style={appStyles.text_label}>
                                            {player.top_team.debut_game_against.name_he}
                                        </Text>
                                        <Text style={styles.date}>
                                            {player.top_team.debut_game_against.date}
                                        </Text>
                                    </View>
                                    <View style={styles.logo_national}>
                                        <FastImage
                                            source={{
                                                uri: player.top_team.debut_game_against.logo_url,
                                            }}
                                            style={{
                                                width: getSize.m(28),
                                                height: getSize.m(28),
                                                borderRadius: getSize.m(28),
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.line_space} />
                            <View style={[appStyles.flex_row_space_center, styles.info_player]}>
                                <Text style={appStyles.text_label}>{t('data_player.last')}</Text>
                                <View style={appStyles.flex_row_align}>
                                    <View style={styles.team_national_date}>
                                        <Text style={appStyles.text_label}>
                                            {player.top_team.last_game_against.name_he}
                                        </Text>
                                        <Text style={styles.date}>
                                            {player.top_team.last_game_against.date}
                                        </Text>
                                    </View>

                                    <View style={styles.logo_national}>
                                        <FastImage
                                            source={{
                                                uri: player.top_team.last_game_against.logo_url,
                                            }}
                                            style={{
                                                width: getSize.m(28),
                                                height: getSize.m(28),
                                                borderRadius: getSize.m(28),
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: getSize.m(30) }}>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            <Text style={styles.text_label}>{t('data_player.goal')}</Text>
                        </View>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[appColors.linearLight, appColors.linearDark]}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={[styles.text_header, { width: '40%' }]}>
                                {t('data_player.team')}
                            </Text>
                            <Text style={[styles.text_header]}>{t('data_player.games')}</Text>
                            <Text style={styles.text_header}>{t('data_player.gates')}</Text>
                            <Text style={styles.text_header}>{t('data_player.details')}</Text>
                        </LinearGradient>
                        <View style={{ marginHorizontal: getSize.m(22) }}>
                            {player.top_team.goals.map((item, index) => {
                                return (
                                    <View
                                        key={item.player_top_team_goals_id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            styles.goal_team,
                                            {
                                                borderBottomWidth:
                                                    index === player.top_team.goals.length - 1
                                                        ? getSize.m(0)
                                                        : getSize.m(1),
                                            },
                                        ]}
                                    >
                                        <Text style={[appStyles.text_label, { width: '40%' }]}>
                                            {item.context_he}
                                        </Text>
                                        <Text style={[appStyles.number]}>{item.games}</Text>
                                        <Text style={[appStyles.number]}>{item.goals}</Text>
                                        <TouchableOpacity
                                            onPress={() =>
                                                onNavigateGoalTopTeam(item.player_top_team_goals_id)
                                            }
                                            style={[styles.details]}
                                        >
                                            <Icon
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(18)}
                                                color={appColors.text_option_unselect}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    );
};
