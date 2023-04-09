import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import styles from './CampaignScreen.style';
import { ICampaignScreenProps } from './CampaignScreen.type';
import { useViewModel } from './CampaignScreen.viewModel';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import { RankingTable } from './layouts/ranking-table/RankingTable';
import { BackGround } from '@football/app/components/background/BackGround';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const CampaignScreen = ({ navigation, route }: ICampaignScreenProps) => {
    const { t, onGoBack, campaign, topTeam } = useViewModel({ navigation, route });
    const { getTranslationText } = useTranslationText();
    return (
        <View style={appStyles.flex}>
            {campaign && (
                <BackGround>
                    <StatusBar translucent backgroundColor="transparent" />
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={appStyles.container}>
                            <CardGoBack
                                iconName={appIcons.ic_right_ios}
                                iconStyle={styles.ic_back}
                                goBack={onGoBack}
                                title={`${getTranslationText({
                                    textHe: campaign?.name_he,
                                    textEn: campaign?.name_en,
                                })} ${campaign?.season}`}
                            />
                        </View>
                        <ScrollView>
                            {topTeam && (
                                <HeaderLogo
                                    text={getTranslationText({
                                        textHe: topTeam?.name_he,
                                        textEn: topTeam?.name_en,
                                    })}
                                    logo={{ uri: topTeam?.logo_url }}
                                />
                            )}
                            <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                                <RankingTable
                                    data={campaign?.leader_board}
                                    groupName={getTranslationText({
                                        textHe: campaign?.group_name_he,
                                        textEn: campaign?.group_name_en,
                                    })}
                                    topTeam={topTeam}
                                />
                            </View>
                            <View style={appStyles.package}>
                                <ListOfGames
                                    groupName={getTranslationText({
                                        textHe: campaign?.group_name_he,
                                        textEn: campaign?.group_name_en,
                                    })}
                                    games={campaign?.games}
                                    topTeam={topTeam}
                                />
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </BackGround>
            )}
        </View>
    );
};
