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

export const CampaignScreen = ({ navigation, route }: ICampaignScreenProps) => {
    const { t, onGoBack, campaign, topTeam } = useViewModel({ navigation, route });

    return (
        <View style={appStyles.flex}>
            {campaign && (
                <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={appStyles.container}>
                            <CardGoBack
                                iconName={appIcons.ic_right_ios}
                                iconStyle={styles.ic_back}
                                goBack={onGoBack}
                                title={`${campaign.name_he} ${campaign.season}`}
                            />
                        </View>
                        <ScrollView>
                            {topTeam && (
                                <HeaderLogo
                                    text={topTeam.name_he}
                                    logo={{ uri: topTeam.logo_url }}
                                />
                            )}
                            <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                                <RankingTable
                                    data={campaign.leader_board}
                                    groupName={campaign.group_name_he}
                                    topTeam={topTeam}
                                />
                            </View>
                            <View style={appStyles.package}>
                                <ListOfGames
                                    groupName={campaign.group_name_he}
                                    games={campaign.games}
                                    topTeam={topTeam}
                                />
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </ImageBackground>
            )}
        </View>
    );
};
