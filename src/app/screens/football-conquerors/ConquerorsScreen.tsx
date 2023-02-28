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
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
    GoalKicker,
    PlayersAppearance,
    TopTeamModel,
} from '@football/core/models/TopTeamModelResponse';
import { TopTeamPlayerType } from '@football/app/utils/constants/enum';
import styles from './ConquerorsScreen.style';
import { useViewModel } from './ConquerorsScreen.viewModel';
import { IConquerorsScreenProps } from './ConquerorsScreen.type';

export const ConquerorsScreen = ({ navigation, route }: IConquerorsScreenProps) => {
    const topTeam = route?.params?.topTeam as TopTeamModel;
    const type = route?.params?.type;
    const listItems =
        type === TopTeamPlayerType.Appearances
            ? topTeam.last_campaign.players_appearances
            : (topTeam.last_campaign.goal_kickers as GoalKicker[] | PlayersAppearance[]);

    const { t, onGoBack, onNavigateDataPlayer } = useViewModel({
        navigation,
        route,
    });
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
                            title={t(
                                type === TopTeamPlayerType.Appearances
                                    ? 'conquerors.appearances_kicker_title'
                                    : 'conquerors.goal_kicker_title'
                            )}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text={topTeam.name_he} avt={{ uri: topTeam.logo_url }} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <LinearGradient
                                colors={[
                                    'rgba(255, 255, 255, 0.05)',
                                    'rgba(16, 32, 100, 0.05)',
                                    'rgba(59, 168, 225, 0.05)',
                                ]}
                                style={[appStyles.flex_row_space_center, styles.header]}
                            >
                                <Text style={styles.text_header}>
                                    {t(
                                        type === TopTeamPlayerType.Appearances
                                            ? 'conquerors.appearances'
                                            : 'conquerors.number_of_goals'
                                    )}
                                </Text>
                                <Text style={styles.text_header}>{t('conquerors.number')}</Text>
                            </LinearGradient>
                            <View>
                                {listItems.map(item => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => onNavigateDataPlayer(item.player_id)}
                                            style={[
                                                appStyles.flex_row_space_center,
                                                styles.content,
                                            ]}
                                            key={item.player_id}
                                        >
                                            <View style={appStyles.flex_row_align}>
                                                <Avatar
                                                    source={{ uri: item.image_url }}
                                                    size={getSize.m(26)}
                                                    rounded
                                                />
                                                <Text style={styles.name_player}>
                                                    {item.name_he}
                                                </Text>
                                            </View>
                                            <Text style={styles.number}>
                                                {type === TopTeamPlayerType.Appearances
                                                    ? item.num_of_appearances
                                                    : item.num_of_goals}
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
