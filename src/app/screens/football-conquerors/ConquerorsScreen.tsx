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
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { BackGround } from '@football/app/components/background/BackGround';
import FastImage from 'react-native-fast-image';
import { appColors } from '@football/app/utils/constants/appColors';

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

    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
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
                    <HeaderLogo
                        text={getTranslationText({
                            textHe: topTeam.name_he,
                            textEn: topTeam.name_en,
                        })}
                        avt={{ uri: topTeam.logo_url }}
                    />
                    <View
                        style={[
                            appStyles.package,
                            { marginTop: getSize.m(0), minHeight: getSize.m(900) },
                        ]}
                    >
                        <LinearGradient
                            colors={[
                                'rgba(255, 255, 255, 0.05)',
                                'rgba(16, 32, 100, 0.05)',
                                'rgba(59, 168, 225, 0.05)',
                            ]}
                            style={[appStyles.flex_row_space_center, styles.header]}
                        >
                            <Text style={styles.text_header}>{t('conquerors.name')}</Text>
                            <Text style={styles.text_header}>
                                {' '}
                                {t(
                                    type === TopTeamPlayerType.Appearances
                                        ? 'conquerors.appearances'
                                        : 'conquerors.number_of_goals'
                                )}
                            </Text>
                        </LinearGradient>
                        <View>
                            {listItems.map(item => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => onNavigateDataPlayer(item.player_id)}
                                        style={[appStyles.flex_row_space_center, styles.content]}
                                        key={item.player_id}
                                    >
                                        <View style={appStyles.flex_row_align}>
                                            <View
                                                style={{
                                                    width: getSize.m(28),
                                                    height: getSize.m(28),
                                                    borderRadius: getSize.m(28),
                                                    backgroundColor: appColors.separator,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    elevation: 1,
                                                }}
                                            >
                                                <FastImage
                                                    source={{ uri: item.image_url }}
                                                    style={{
                                                        width: getSize.m(26),
                                                        height: getSize.m(26),
                                                        borderRadius: getSize.m(26),
                                                    }}
                                                />
                                            </View>
                                            <Text style={styles.name_player}>
                                                {getTranslationText({
                                                    textHe: item.name_he,
                                                    textEn: item.name_en,
                                                })}
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
            </BackGround>
        </View>
    );
};
