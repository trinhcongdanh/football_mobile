import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderAdded } from '@football/app/components/header-added/HeaderAdded';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { getSize } from '@football/app/utils/responsive/scale';
import _ from 'lodash';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useViewModel } from './FavoriteSummaryScreen.viewModel';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';
import styles from './FavoriteSummaryScreen.style';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const FavoriteSummaryScreen = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const {
        t,
        onGoBack,
        toggleOnCheck,
        onCheck,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        navigationMethodRegister,
        navigationSaveHomePage,
        profile,
        navigate,
        askBeforeGo,
        selectedTeams,
        selectedPlayers,
        selectedTopTeams,
    } = useViewModel({
        navigation,
        route,
    });

    const { getTranslationText } = useTranslationText();

    return (
        <View style={[appStyles.flex]}>
            {profile.success === false && (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            )}
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <ScrollView>
                        <View style={appStyles.container}>
                            <CardGoBack
                                iconName={appIcons.ic_right_ios}
                                iconStyle={styles.ic_back}
                                goBack={onGoBack}
                            />
                            <View style={styles.block_add_group}>
                                <HeaderAdded
                                    backFav={backFavTeam}
                                    leftIcon
                                    headerTitle={t('fav_summary.group')}
                                    headerSkip={t('fav_summary.change')}
                                    iconName={appIcons.ic_left_ios}
                                />
                                <View style={styles.item_render}>
                                    {selectedTeams?.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={styles.item_container}
                                            >
                                                {_.isEmpty(item) ? (
                                                    <>
                                                        <View style={styles.container_fav}>
                                                            <View style={styles.container_image}>
                                                                <TouchableOpacity
                                                                    style={styles.btn_add}
                                                                    onPress={backFavTeam}
                                                                >
                                                                    <Icon
                                                                        name={appIcons.ic_plus}
                                                                        size={getSize.m(14)}
                                                                        color={appColors.blue_light}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text style={styles.txt_no_group}>
                                                                {t('fav_summary.add_group')}
                                                            </Text>
                                                        </View>
                                                    </>
                                                ) : (
                                                    <TouchableOpacity
                                                        style={styles.container_fav}
                                                        onPress={backFavTeam}
                                                    >
                                                        <View style={styles.container_image}>
                                                            <Image
                                                                resizeMode="cover"
                                                                source={{ uri: item.logo_url }}
                                                                style={styles.img_team}
                                                            />
                                                        </View>

                                                        <Text
                                                            numberOfLines={2}
                                                            style={styles.txt_add_group}
                                                        >
                                                            {getTranslationText({
                                                                textHe: item.name_he,
                                                                textEn: item.name_en,
                                                            })}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={styles.block_add_actress}>
                                <HeaderAdded
                                    backFav={backFavPlayer}
                                    leftIcon
                                    headerTitle={t('fav_summary.favorite')}
                                    headerSkip={t('fav_summary.change')}
                                    iconName={appIcons.ic_left_ios}
                                />
                                <View style={styles.item_render}>
                                    {selectedPlayers?.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={styles.item_container}
                                            >
                                                {_.isEmpty(item) ? (
                                                    <>
                                                        <View style={styles.container_fav}>
                                                            <View style={styles.container_image}>
                                                                <TouchableOpacity
                                                                    style={styles.btn_add}
                                                                    onPress={backFavPlayer}
                                                                >
                                                                    <Icon
                                                                        name={appIcons.ic_plus}
                                                                        size={getSize.m(14)}
                                                                        color={appColors.blue_light}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text style={styles.txt_no_group}>
                                                                {t('fav_summary.add_actress')}
                                                            </Text>
                                                        </View>
                                                    </>
                                                ) : (
                                                    <TouchableOpacity
                                                        style={styles.container_fav}
                                                        onPress={backFavPlayer}
                                                    >
                                                        <View style={styles.container_image}>
                                                            <Image
                                                                resizeMode="cover"
                                                                source={{ uri: item.image_url }}
                                                                style={styles.img_player}
                                                            />
                                                        </View>

                                                        <Text
                                                            numberOfLines={2}
                                                            style={styles.txt_add_group}
                                                        >
                                                            {getTranslationText({
                                                                textHe: item.name_he,
                                                                textEn: item.name_en,
                                                            })}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={styles.block_add_actress}>
                                <HeaderAdded
                                    backFav={backFavTopTeam}
                                    leftIcon
                                    headerTitle={t('fav_summary.national_team')}
                                    headerSkip={t('fav_summary.change')}
                                    iconName={appIcons.ic_left_ios}
                                />
                                <View style={styles.item_render}>
                                    {selectedTopTeams?.map((item, index) => {
                                        return (
                                            <View
                                                key={index.toString()}
                                                style={styles.item_container}
                                            >
                                                {_.isEmpty(item) ? (
                                                    <>
                                                        <View style={styles.container_fav}>
                                                            <View style={styles.container_image}>
                                                                <TouchableOpacity
                                                                    style={styles.btn_add}
                                                                    onPress={backFavTopTeam}
                                                                >
                                                                    <Icon
                                                                        name={appIcons.ic_plus}
                                                                        size={getSize.m(14)}
                                                                        color={appColors.blue_light}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text style={styles.txt_no_group}>
                                                                {t('fav_summary.add_squad')}
                                                            </Text>
                                                        </View>
                                                    </>
                                                ) : (
                                                    <TouchableOpacity
                                                        style={styles.container_fav}
                                                        onPress={backFavTopTeam}
                                                    >
                                                        <View style={styles.container_image}>
                                                            <Image
                                                                resizeMode="cover"
                                                                source={{ uri: item.logo_url }}
                                                                style={styles.img_top_team}
                                                            />
                                                        </View>

                                                        <Text
                                                            numberOfLines={2}
                                                            style={styles.txt_add_group}
                                                        >
                                                            {getTranslationText({
                                                                textHe: item.name_he,
                                                                textEn: item.name_en,
                                                            })}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )}
                                            </View>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={[appStyles.flex_row_center, { marginTop: getSize.m(30) }]}>
                                <TouchableOpacity
                                    style={[
                                        styles.checkBox,
                                        {
                                            backgroundColor: onCheck
                                                ? appColors.blue_light
                                                : appColors.separator,
                                            borderColor: onCheck
                                                ? appColors.blue_light
                                                : appColors.soft_grey,
                                        },
                                    ]}
                                    onPress={toggleOnCheck}
                                >
                                    {onCheck && <Icon name="check" color="white" />}
                                </TouchableOpacity>
                                <Text style={styles.agree}>{t('fav_summary.save_agree')}</Text>
                                <TouchableOpacity
                                    onPress={() => navigate(ScreenName.TermsConditionPage)}
                                >
                                    <Text style={styles.provision}>
                                        {t('fav_summary.term_use')}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                onPress={navigationMethodRegister}
                                disabled={!onCheck}
                                style={onCheck ? styles.btn_complete : styles.btn_complete_disable}
                            >
                                <Text
                                    style={
                                        onCheck ? styles.txt_complete : styles.txt_complete_disable
                                    }
                                >
                                    {t('fav_summary.complete')}
                                </Text>
                            </TouchableOpacity>
                            {onCheck ? (
                                <TouchableOpacity
                                    style={{
                                        marginTop: getSize.m(80),
                                        marginBottom: getSize.m(16),
                                    }}
                                    onPress={navigationSaveHomePage}
                                >
                                    <Text style={styles.bottom_text}>{t('fav_summary.guest')}</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={{
                                        marginTop: getSize.m(80),
                                        marginBottom: getSize.m(16),
                                    }}
                                    onPress={askBeforeGo}
                                >
                                    <Text style={styles.bottom_text}>
                                        {t('fav_summary.login_as_guest')}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
