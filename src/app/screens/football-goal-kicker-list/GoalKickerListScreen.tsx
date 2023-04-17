import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { TeamSeasonStatsModel } from '@football/core/models/TeamSeasonStatsResponse';
import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from './GoalKickerList.style';
import { IGoalKickerListScreenProps } from './GoalKickerListScreen.type';
import { useViewModel } from './GoalKickerListScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

export const GoalKickerListScreen = ({ navigation, route }: IGoalKickerListScreenProps) => {
    const teamSeasonStats = route?.params?.teamSeasonStats as TeamSeasonStatsModel;
    const data = route?.params?.data;
    const props = route?.params?.props;
    const titleLeft = route?.params?.titleLeft;
    const titleRight = route?.params?.titleRight;
    const title = route?.params?.title;

    const { t, onGoBack, onNavigateDataPlayer } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={appStyles.flex}>
            <BackGround>
                {teamSeasonStats && (
                    <View>
                        <View style={appStyles.container}>
                            <CardGoBack
                                iconName={appIcons.ic_right_ios}
                                iconStyle={styles.ic_back}
                                goBack={onGoBack}
                                title={title}
                            />
                        </View>
                        <ScrollView>
                            <HeaderLogo
                                text={teamSeasonStats.team_name_he}
                                avt={{ uri: teamSeasonStats.team_logo_url }}
                            />
                            <LinearGradient
                                colors={[
                                    'rgba(255, 255, 255, 0.05)',
                                    'rgba(16, 32, 100, 0.05)',
                                    'rgba(59, 168, 225, 0.05)',
                                ]}
                                style={[appStyles.package, { marginTop: getSize.m(0) }]}
                            >
                                <View style={[appStyles.flex_row_space_center, styles.header]}>
                                    <Text style={styles.text_header}>{titleLeft}</Text>
                                    <Text style={styles.text_header}>{titleRight}</Text>
                                </View>
                                <View>
                                    {data.map((item: any) => {
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
                                                <Text style={styles.number}>{item[props]}</Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </LinearGradient>
                        </ScrollView>
                    </View>
                )}
            </BackGround>
        </View>
    );
};
