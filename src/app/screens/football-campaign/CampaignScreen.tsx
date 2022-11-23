import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { ListOfGames } from './layouts/list-of-games/ListOfGames';
import { RankingTable } from './layouts/ranking-table/RankingTable';
import styles from './CampaignScreen.style';
import { useViewModel } from './CampaignScreen.viewModel';
import { ICampaignScreenProps } from './CampaignScreen.type';

export const CampaignScreen = ({ navigation, route }: ICampaignScreenProps) => {
    const { t, onGoBack } = useViewModel({ navigation, route });
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
                            title="ליגת ONE ZERO בנקאות פרטית דיגיטלית"
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="נבחרת לאומית גברים" logo={AppImages.img_logo} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <RankingTable />
                        </View>
                        <View style={appStyles.package}>
                            <ListOfGames />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};