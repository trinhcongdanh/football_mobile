import DropdownField from '@football/app/components/dropdown-field/DropdownField';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { ListOfGames } from '../list-of-games/ListOfGames';
import styles from './LeagueTable.style';
import { ILeagueTableProps } from './LeagueTable.type';
import { useViewModel } from './LeagueTable.viewModel';

export const LeagueTable = ({ leagueSeasonId }: ILeagueTableProps) => {
    const {
        t,
        selectCycle,
        selectedRound,
        setSelectedRound,
        navigate,
        setSelectCycle,
        leagueSeason,
    } = useViewModel({ leagueSeasonId });
    const { getTranslationText } = useTranslationText();
    return (
        <>
            <View style={[appStyles.package, { backgroundColor: appColors.white, zIndex: 10 }]}>
                <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                    {t('group_page.league_table.title')}
                </Text>
                <View style={[appStyles.flex, { zIndex: 10 }]}>
                    <View style={styles.drop_down_filter}>
                        <View style={{ flex: 0.9 }}>
                            <DropdownField
                                options={leagueSeason?.cycles || []}
                                selectedValue={selectCycle}
                                onPressItem={cycle => {
                                    setSelectCycle(cycle);
                                }}
                                itemTitleField={getTranslationText({
                                    textHe: 'cycle_name_he',
                                    textEn: 'cycle_name_en',
                                })}
                            />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <DropdownField
                                options={selectCycle?.rounds || []}
                                selectedValue={selectedRound}
                                onPressItem={round => {
                                    setSelectedRound(round);
                                }}
                                itemTitleField={getTranslationText({
                                    textHe: 'round_name_he',
                                    textEn: 'round_name_en',
                                })}
                            />
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
                        {selectedRound?.leader_board?.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigate(ScreenName.GroupPagePage);
                                    }}
                                    key={item?.team_id}
                                >
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={
                                            index % 2 === 0
                                                ? [appColors.linearLight, appColors.linearDark]
                                                : [appColors.white, appColors.white]
                                        }
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
                                            <View style={appStyles.flex_row_align}>
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        {
                                                            marginRight: getSize.m(10),
                                                            textAlign: 'left',
                                                        },
                                                    ]}
                                                >
                                                    {item?.place}
                                                </Text>

                                                <Avatar
                                                    source={{ uri: item?.logo_url }}
                                                    rounded
                                                    size={18}
                                                />
                                                <View style={{ width: '60%' }}>
                                                    <Text
                                                        numberOfLines={2}
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                textAlign: 'left',
                                                            },
                                                        ]}
                                                    >
                                                        {getTranslationText({
                                                            textHe: item?.name_he,
                                                            textEn: item?.name_en,
                                                        })}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item?.games}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item?.wins}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item?.ties}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item?.difference}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item?.goals}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item?.score}
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* <TouchableOpacity style={styles.more_result}>
                    <Text style={styles.text_more_result}>{t('group_page.league_table.more')}</Text>
                    <Icon
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(10)}
                        style={styles.ic_more_result}
                    />
                </TouchableOpacity> */}
            </View>
        </>
    );
};
