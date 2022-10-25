import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonOption } from '@football/app/components/button_option';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { DataCoachTeamsScreen } from './layouts/data-coach-teams';
import { DataCoachGamesScreen } from './layouts/data-coach-games';
import styles from './DataCoachScreen.style';
import { useViewModel } from './DataCoachScreen.viewModel';
import { IDataCoachScreenProps } from './DataCoachScreen.type';

// type Props = {};

export const DataCoachScreen = ({ navigation, route }: IDataCoachScreenProps) => {
    const { t, onGoBack, setOnSelect, onSelect } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={appIcons.ic_right_ios}
                            color_pre={appColors.blue_black}
                            color_after={appColors.blue_black}
                            handlePressFunction={onGoBack}
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={appStyles.container}>
                            <InfoPerson
                                name_person="אלון חזן"
                                number={155}
                                date="09/1967"
                                avt={AppImages.img_coach}
                            />
                        </View>
                        <View
                            style={[
                                appStyles.flex,
                                appStyles.main_container,
                                { paddingHorizontal: getSize.m(20), marginTop: getSize.m(62) },
                            ]}
                        >
                            <View style={styles.debut_game}>
                                <Text style={styles.congratulations}>
                                    {t('coach.debut_game')} 🎉
                                </Text>
                                <View
                                    style={[
                                        appStyles.flex_row_space_center,
                                        { marginVertical: getSize.m(26) },
                                    ]}
                                >
                                    <View style={appStyles.align_justify}>
                                        <Avatar
                                            source={AppImages.img_israel}
                                            rounded
                                            size={getSize.m(26)}
                                            containerStyle={styles.logo}
                                        />
                                        <Text style={styles.name_national}>
                                            {t('coach.israel')}
                                        </Text>
                                    </View>
                                    <View style={styles.score}>
                                        <Text style={appStyles.number}>3 : 1</Text>
                                    </View>
                                    <View style={appStyles.align_justify}>
                                        <Avatar
                                            source={AppImages.img_iceland}
                                            rounded
                                            size={getSize.m(24)}
                                            containerStyle={styles.logo}
                                        />
                                        <Text style={styles.name_national}>
                                            {t('coach.iceland')}
                                        </Text>
                                    </View>
                                </View>
                                <View style={appStyles.flex_row_space}>
                                    <View style={[styles.circle, { right: getSize.m(-65) }]} />
                                    <View style={[styles.circle, { left: getSize.m(-65) }]} />
                                </View>
                                <TouchableOpacity style={[appStyles.flex_row_center, { flex: 0 }]}>
                                    <Text style={styles.details}>{t('coach.game_details')}</Text>
                                    <Icon
                                        name={appIcons.ic_arrow_left}
                                        size={getSize.m(10)}
                                        color={appColors.button_dark_blue}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: getSize.m(30) }}>
                                <ButtonOption
                                    option_one={t('coach.option.team')}
                                    option_two={t('coach.option.games')}
                                    onSelect={setOnSelect}
                                />
                                {onSelect === 0 ? (
                                    <DataCoachTeamsScreen />
                                ) : (
                                    <DataCoachGamesScreen />
                                )}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
