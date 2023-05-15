import { View, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
// import { SvgUri } from 'react-native-svg';
import { useViewModel } from './DataCoachTeamsScreen.viewModel';
import { IDataCoachTeamsScreenProps } from './DataCoachTeamsScreen.type';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import FastImage from 'react-native-fast-image';

// type Props = {};

export const DataCoachTeamsScreen = ({ teams }: IDataCoachTeamsScreenProps) => {
    const { t, onGoBack } = useViewModel({ teams });
    const { getTranslationText } = useTranslationText();

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
                    <View style={{ width: getSize.m(60), right: getSize.m(3) }}>
                        <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                            {t('coach.age_group')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(60), right: getSize.m(3) }}>
                        <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                            {t('coach.position')}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(10) }}>
                    {teams?.map((item, index) => {
                        return (
                            <LinearGradient
                                key={item.team_id}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    index % 2 === 0 ? appColors.linearLight : appColors.gray,
                                    index % 2 === 0 ? appColors.linearDark : appColors.gray,
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
                                        <FastImage
                                            source={{ uri: item.logo_url }}
                                            style={{
                                                width: getSize.m(22),
                                                height: getSize.m(22),
                                                borderRadius: getSize.m(22),
                                            }}
                                        />
                                        <View style={{ width: '70%' }}>
                                            <Text
                                                numberOfLines={2}
                                                style={[
                                                    appStyles.statistics_content,
                                                    {
                                                        marginLeft: getSize.m(3),
                                                        textAlign: 'left',
                                                    },
                                                ]}
                                            >
                                                {getTranslationText({
                                                    textHe: item.name_he,
                                                    textEn: item.name_en,
                                                })}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        width: getSize.m(60),
                                    }}
                                >
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                textAlign: 'left',
                                            },
                                        ]}
                                    >
                                        {getTranslationText({
                                            textHe: item.age_group_he,
                                            textEn: item.age_group_en,
                                        })}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(60),
                                    }}
                                >
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                textAlign: 'left',
                                            },
                                        ]}
                                    >
                                        {getTranslationText({
                                            textHe: item.position_he,
                                            textEn: item.position_en,
                                        })}
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
