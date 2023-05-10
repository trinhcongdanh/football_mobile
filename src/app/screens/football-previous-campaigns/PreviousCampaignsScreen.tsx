import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import LinearGradient from 'react-native-linear-gradient';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import styles from './PreviousCampaignsScreen.style';
import { useViewModel } from './PreviousCampaignsScreen.viewModel';
import { IPreviousCampaignsScreenProps } from './PreviousCampaignsScreen.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { BackGround } from '@football/app/components/background/BackGround';

export const PreviousCampaignsScreen = ({ navigation, route }: IPreviousCampaignsScreenProps) => {
    const { t, onGoBack, campaigns, handleCampaignPage, topTeam } = useViewModel({
        navigation,
        route,
    });

    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <CardGoBack
                        iconName={appIcons.ic_right_ios}
                        iconStyle={styles.ic_back}
                        goBack={onGoBack}
                        title={getTranslationText({
                            textHe: topTeam?.name_he,
                            textEn: topTeam?.name_en,
                        })}
                    />
                </View>
                <ScrollView>
                    <HeaderLogo
                        text={getTranslationText({
                            textHe: topTeam?.name_he,
                            textEn: topTeam?.name_en,
                        })}
                        logo={{ uri: topTeam?.logo_url }}
                    />
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[appColors.linearLight, appColors.linearDark]}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={styles.text_header}>
                                {t('previous_campaigns.campaign_game')}
                            </Text>
                            <Text
                                style={[
                                    styles.text_header,
                                    {
                                        marginRight: getSize.m(30),
                                    },
                                ]}
                            >
                                {t('previous_campaigns.year')}
                            </Text>
                        </LinearGradient>
                        <View>
                            {campaigns?.map((campaign, index) => {
                                return (
                                    <TouchableOpacity
                                        style={[appStyles.flex_row_space_center, styles.content]}
                                        onPress={() => handleCampaignPage(index)}
                                        // eslint-disable-next-line no-underscore-dangle
                                        key={campaign?._id}
                                    >
                                        <Text style={styles.name_campaign}>
                                            {getTranslationText({
                                                textHe: campaign?.name_he,
                                                textEn: campaign?.name_en,
                                            })}
                                        </Text>
                                        <Text style={styles.year_campaign}>{campaign?.season}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </BackGround>
        </View>
    );
};
