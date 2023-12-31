import { View, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { SvgUri } from 'react-native-svg';
import { useViewModel } from './DataCoachTeamsScreen.viewModel';
import { IDataCoachTeamsScreenProps } from './DataCoachTeamsScreen.type';
import LinearGradient from 'react-native-linear-gradient';

// type Props = {};

export const DataCoachTeamsScreen = ({ teams }: IDataCoachTeamsScreenProps) => {
    const { t, onGoBack } = useViewModel({ teams });

    return (
        <View>
            <View
                style={[
                    appStyles.item_statistics,
                    {
                        marginTop: getSize.m(38),
                    },
                ]}
            >
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            paddingHorizontal: getSize.m(4),
                        },
                    ]}
                >
                    <View style={{ width: getSize.m(60) }}>
                        <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                            {t('coach.season')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(100) }}>
                        <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                            {t('coach.club')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(60) }}>
                        <Text style={appStyles.statistics_header}>{t('coach.age_group')}</Text>
                    </View>
                    <View style={{ width: getSize.m(60) }}>
                        <Text style={appStyles.statistics_header}>{t('coach.position')}</Text>
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(10) }}>
                    {teams.map((item, index) => {
                        return (
                            <LinearGradient
                                key={item.team_id}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    index % 2 === 0 ? 'rgba(16, 32, 100, 0.04)' : appColors.gray,
                                    index % 2 === 0 ? 'rgba(59, 168, 225, 0.04)' : appColors.gray,
                                ]}
                                style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
                            >
                                <View style={{ width: getSize.m(60) }}>
                                    <Text style={appStyles.statistics_content}>{item.years}</Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(100),
                                        overflow: 'hidden',
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <SvgUri
                                            uri={item.logo_url}
                                            width={getSize.m(22)}
                                            height={getSize.m(22)}
                                        />
                                        <Text
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginLeft: getSize.m(3),
                                                },
                                            ]}
                                        >
                                            {item.name_he}
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        width: getSize.m(60),
                                    }}
                                >
                                    <Text style={appStyles.statistics_content}>
                                        {item.age_group_he}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(60),
                                    }}
                                >
                                    <Text style={appStyles.statistics_content}>
                                        {item.position_he}
                                    </Text>
                                </View>
                            </LinearGradient>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
