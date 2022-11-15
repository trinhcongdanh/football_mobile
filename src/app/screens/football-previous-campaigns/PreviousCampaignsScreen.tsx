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
import styles from './PreviousCampaignsScreen.style';
import { useViewModel } from './PreviousCampaignsScreen.viewModel';
import { IPreviousCampaignsScreenProps } from './PreviousCampaignsScreen.type';

export const PreviousCampaignsScreen = ({ navigation, route }: IPreviousCampaignsScreenProps) => {
    const { t, onGoBack, campaigns, handleCampaignPage } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('previous_campaigns.title')}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="נבחרת לאומית גברים" logo={AppImages.img_logo} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <View style={[appStyles.flex_row_space_center, styles.header]}>
                                <Text style={styles.text_header}>
                                    {t('previous_campaigns.campaign_game')}
                                </Text>
                                <Text style={styles.text_header}>
                                    {t('previous_campaigns.year')}
                                </Text>
                            </View>
                            <View>
                                {campaigns.map(campaign => {
                                    return (
                                        <TouchableOpacity
                                            style={[
                                                appStyles.flex_row_space_center,
                                                styles.content,
                                            ]}
                                            onPress={handleCampaignPage}
                                            key={campaign.id}
                                        >
                                            <Text style={styles.name_campaign}>
                                                {campaign.name}
                                            </Text>
                                            <Text style={styles.year_campaign}>
                                                {campaign.year}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
