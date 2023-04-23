import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
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
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import styles from './DataCoachScreen.style';
import { IDataCoachScreenProps } from './DataCoachScreen.type';
import { useViewModel } from './DataCoachScreen.viewModel';
import { DataCoachGamesScreen } from './layouts/data-coach-games';
import { DataCoachTeamsScreen } from './layouts/data-coach-teams';
import { BackGround } from '@football/app/components/background/BackGround';

// type Props = {};

export const DataCoachScreen = ({ navigation, route }: IDataCoachScreenProps) => {
    const { t, onGoBack, setOnSelect, onSelect, coach } = useViewModel({
        navigation,
        route,
    });
    // if (coachesData.isLoading == true) {
    //     return <></>;
    // }
    // if (coachesData.success == false) {
    //     return <></>;
    // }
    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <HeaderUser
                        avt={AppImages.img_avt}
                        point="1,325"
                        icon={AppImages.img_angle_arrow}
                        color_pre={appColors.blue_black}
                        color_after={appColors.blue_black}
                        handlePressFunction={onGoBack}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={appStyles.container}>
                        <InfoPerson
                            name={getTranslationText({
                                textHe: coach?.name_he,
                                textEn: coach?.name_en,
                            })}
                            data_3={coach?.num_of_games}
                            data_1={coach?.date_of_birth}
                            data_2={getTranslationText({
                                textHe: coach?.citizenship_he,
                                textEn: coach?.citizenship_en,
                            })}
                            avt={coach?.image_url}
                            img_logo={coach?.citizenship_image_url}
                            title_1={t('data_player.birthday')}
                            title_2={t('data_player.national.title')}
                            title_3={t('data_player.number')}
                        />
                    </View>
                    <View
                        style={[
                            appStyles.flex,
                            appStyles.main_container,
                            { marginTop: getSize.m(62) },
                        ]}
                    >
                        {/* <View style={styles.debut_game}>
                                    <Text style={styles.congratulations}>
                                        {t('coach.debut_game')} 🎉
                                    </Text>
                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                marginTop: getSize.m(26),
                                                marginBottom: getSize.m(14),
                                                flexDirection: 'row-reverse',
                                            },
                                        ]}
                                    >
                                        <View style={appStyles.align_justify}>
                                            <Avatar
                                                source={{
                                                    uri: coach.debut_game.team1.logo_url,
                                                }}
                                                rounded
                                                size={getSize.m(26)}
                                                containerStyle={styles.logo}
                                            />
                                            <Text style={styles.name_national}>
                                                {coach.debut_game.team1.name_he}
                                            </Text>
                                        </View>
                                        <View style={styles.score}>
                                            <Text style={appStyles.number}>
                                                {coach.debut_game.score}
                                            </Text>
                                        </View>
                                        <View style={appStyles.align_justify}>
                                            <Avatar
                                                source={{
                                                    uri: coach.debut_game.team2.logo_url,
                                                }}
                                                rounded
                                                size={getSize.m(24)}
                                                containerStyle={styles.logo}
                                            />
                                            <Text style={styles.name_national}>
                                                {coach.debut_game.team2.name_he}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={appStyles.flex_row_space}>
                                        <View style={[styles.circle, { right: getSize.m(-65) }]} />
                                        <View style={[styles.circle, { left: getSize.m(-65) }]} />
                                    </View>
                                    <TouchableOpacity
                                        style={[appStyles.flex_row_center, { flex: 0 }]}
                                    >
                                        <Text style={styles.details}>
                                            {t('coach.game_details')}
                                        </Text>
                                        <Icon
                                            name={appIcons.ic_arrow_left}
                                            size={getSize.m(10)}
                                            color={appColors.button_dark_blue}
                                        />
                                    </TouchableOpacity>
                                </View> */}
                        <View>
                            {/* <View style={{ marginTop: getSize.m(33) }}>
                                        <ButtonOption
                                            option_one={t('coach.option.team')}
                                            option_two={t('coach.option.games')}
                                            onSelect={setOnSelect}
                                        />
                                    </View> */}
                            <View>
                                <Text style={styles.title}>{t('coach.option.team')}</Text>
                            </View>
                            <View style={styles.line} />
                            {onSelect === 0 ? (
                                <View>
                                    <DataCoachTeamsScreen teams={coach?.teams} />
                                    <View
                                        style={{
                                            borderBottomColor: appColors.separator,
                                            borderBottomWidth: getSize.m(1),
                                            marginHorizontal: getSize.m(10),
                                            marginBottom: getSize.m(12),
                                        }}
                                    />
                                    <View style={styles.footer_statistics}>
                                        <View style={appStyles.align_justify}>
                                            <View style={styles.item_footer_statistics}>
                                                <FastImage
                                                    source={AppImages.img_down_left_up_right}
                                                    style={{
                                                        width: getSize.m(12),
                                                        height: getSize.m(12),
                                                    }}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                />
                                            </View>
                                            <View style={{ marginTop: getSize.m(4) }}>
                                                <Text style={styles.label}>{t('coach.draw')}</Text>
                                            </View>
                                            <View style={{ marginTop: getSize.m(14) }}>
                                                <Text style={styles.total}>
                                                    {coach?.total_ties}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={appStyles.align_justify}>
                                            <View style={styles.item_footer_statistics}>
                                                <FastImage
                                                    style={{
                                                        width: getSize.m(9),
                                                        height: getSize.m(9),
                                                    }}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                    source={AppImages.img_down_right}
                                                />
                                            </View>
                                            <View style={{ marginTop: getSize.m(4) }}>
                                                <Text style={styles.label}>{t('coach.loss')}</Text>
                                            </View>
                                            <View style={{ marginTop: getSize.m(14) }}>
                                                <Text style={styles.total}>
                                                    {coach?.total_losses}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={appStyles.align_justify}>
                                            <View style={styles.item_footer_statistics}>
                                                <FastImage
                                                    source={AppImages.img_trophy_star_blue}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                    style={{
                                                        width: getSize.m(14),
                                                        height: getSize.m(12),
                                                    }}
                                                />
                                            </View>
                                            <View style={{ marginTop: getSize.m(4) }}>
                                                <Text style={styles.label}>
                                                    {t('coach.victory')}
                                                </Text>
                                            </View>
                                            <View style={{ marginTop: getSize.m(14) }}>
                                                <Text style={styles.total}>
                                                    {coach?.total_wins}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={appStyles.align_justify}>
                                            <View style={styles.item_footer_statistics}>
                                                <FastImage
                                                    style={{
                                                        width: getSize.m(15),
                                                        height: getSize.m(12),
                                                    }}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                    source={AppImages.img_goal_net_blue}
                                                />
                                            </View>
                                            <View style={{ marginTop: getSize.m(4) }}>
                                                <Text style={styles.label}>{t('coach.game')}</Text>
                                            </View>
                                            <View style={{ marginTop: getSize.m(14) }}>
                                                <Text style={styles.total}>
                                                    {coach?.total_games}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ) : (
                                <DataCoachGamesScreen games={coach?.games} />
                            )}
                        </View>
                    </View>
                </ScrollView>
            </BackGround>
        </View>
    );
};
