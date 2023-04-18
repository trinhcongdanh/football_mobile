import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import {
    ImageBackground,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './PitchScreen.style';
import { IPitchScreenProps } from './PitchScreen.type';
import { useViewModel } from './PitchScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

export const PitchScreen = ({ navigation, route }: IPitchScreenProps) => {
    const { t, onGoBack, stadium } = useViewModel({ navigation, route });
    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            {stadium && (
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
                    <ScrollView>
                        <View style={appStyles.container}>
                            <InfoPerson
                                name={getTranslationText({
                                    textHe: stadium?.name_he,
                                    textEn: stadium?.name_en,
                                })}
                                data_1={getTranslationText({
                                    textHe: stadium?.address_he,
                                    textEn: stadium?.address_en,
                                })}
                                data_2={getTranslationText({
                                    textHe: stadium?.contact_he,
                                    textEn: stadium?.contact_en,
                                })}
                                data_3={stadium?.phone}
                                avt={stadium?.image_url}
                                title_1={t('pitch.address')}
                                title_2={t('pitch.contact')}
                                title_3={t('pitch.phone')}
                                rating={getTranslationText({
                                    textHe: stadium?.rating_he,
                                    textEn: stadium?.rating_en,
                                })}
                                style={{ width: getSize.m(100) }}
                            />
                        </View>
                        <View
                            style={[
                                appStyles.flex,
                                appStyles.main_container,
                                { marginTop: getSize.m(64) },
                            ]}
                        >
                            <View style={styles.team_field}>
                                <Text style={appStyles.statistics_title}>
                                    {t('pitch.team_field')}
                                </Text>
                                <View
                                    style={[
                                        appStyles.flex_row_space_center,
                                        {
                                            marginTop: getSize.m(19),
                                        },
                                    ]}
                                >
                                    <View style={{ width: getSize.m(120) }}>
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                { textAlign: 'left', fontSize: getSize.m(12) },
                                            ]}
                                        >
                                            {t('pitch.group')}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: getSize.m(60),
                                            marginRight: getSize.m(4),
                                        }}
                                    >
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                {
                                                    fontSize: getSize.m(12),
                                                },
                                            ]}
                                        >
                                            {t('pitch.age')}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            width: getSize.m(66),
                                            marginRight: getSize.m(10),
                                        }}
                                    >
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                { textAlign: 'left', fontSize: getSize.m(12) },
                                            ]}
                                        >
                                            {t('pitch.home_training')}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: getSize.m(10) }}>
                                    {stadium?.teams.map((item, index) => {
                                        return (
                                            <LinearGradient
                                                key={item.team_id}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                colors={[
                                                    index % 2 === 0
                                                        ? appColors.linearLight
                                                        : appColors.white,
                                                    index % 2 === 0
                                                        ? appColors.linearDark
                                                        : appColors.white,
                                                ]}
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    appStyles.statistic_row,
                                                ]}
                                            >
                                                <View
                                                    style={{
                                                        width: getSize.m(120),
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    <View style={appStyles.flex_row_align}>
                                                        <Avatar
                                                            source={{ uri: item?.logo_url }}
                                                            rounded
                                                            size={18}
                                                        />
                                                        <View style={{ width: '80%' }}>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={[
                                                                    appStyles.statistics_content,
                                                                    {
                                                                        marginLeft: getSize.m(10),
                                                                        fontSize: getSize.m(13),
                                                                        textAlign: 'left',
                                                                    },
                                                                ]}
                                                            >
                                                                {getTranslationText({
                                                                    textHe: item?.name_he,
                                                                    textEn: item?.name_en,
                                                                })}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(60),
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                textAlign: 'left',
                                                                fontSize: getSize.m(13),
                                                            },
                                                        ]}
                                                    >
                                                        {getTranslationText({
                                                            textHe: item?.age_he,
                                                            textEn: item?.age_en,
                                                        })}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(66),
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                textAlign: 'left',
                                                                fontSize: getSize.m(13),
                                                            },
                                                        ]}
                                                    >
                                                        {item.usage === 1
                                                            ? t('pitch.home')
                                                            : t('pitch.training')}
                                                    </Text>
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                                </View>
                            </View>
                            <View style={{ marginVertical: getSize.m(30) }}>
                                <MapView
                                    provider={PROVIDER_GOOGLE}
                                    // mapType={Platform.OS === 'android' ? 'none' : 'standard'}
                                    zoomEnabled={true}
                                    style={styles.map}
                                    initialRegion={{
                                        latitude: stadium?.location_lat
                                            ? parseFloat(stadium?.location_lat)
                                            : 0,
                                        longitude: stadium?.location_lon
                                            ? parseFloat(stadium?.location_lon)
                                            : 0,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: stadium?.location_lat
                                                ? parseFloat(stadium?.location_lat)
                                                : 0,
                                            longitude: stadium?.location_lon
                                                ? parseFloat(stadium?.location_lon)
                                                : 0,
                                        }}
                                    />
                                </MapView>
                            </View>
                        </View>
                    </ScrollView>
                </BackGround>
            )}
        </View>
    );
};
