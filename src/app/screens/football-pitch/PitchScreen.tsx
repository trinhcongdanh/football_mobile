import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
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

export const PitchScreen = ({ navigation, route }: IPitchScreenProps) => {
    const { t, onGoBack, stadium } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            {stadium && (
                <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                    <StatusBar translucent backgroundColor="transparent" />
                    <SafeAreaView style={appStyles.safe_area}>
                        <View style={appStyles.container}>
                            <HeaderUser
                                avt={AppImages.img_avt}
                                point="1,325"
                                icon={AppImages.img_angle_right}
                                color_pre={appColors.blue_black}
                                color_after={appColors.blue_black}
                                handlePressFunction={onGoBack}
                            />
                        </View>
                        <ScrollView>
                            <View style={appStyles.container}>
                                <InfoPerson
                                    name={stadium?.name_he}
                                    data_1={stadium?.address_he}
                                    data_2={stadium?.contact_he}
                                    data_3={stadium?.phone}
                                    avt={stadium?.image_url}
                                    title_1={t('pitch.address')}
                                    title_2={t('pitch.contact')}
                                    title_3={t('pitch.phone')}
                                    rating={stadium?.rating_he}
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
                                                            ? 'rgba(16, 32, 100, 0.04)'
                                                            : appColors.white,
                                                        index % 2 !== 0
                                                            ? 'rgba(59, 168, 225, 0.04)'
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
                                                        <View
                                                            style={{
                                                                flexDirection: 'row',
                                                            }}
                                                        >
                                                            <Avatar
                                                                source={{ uri: item.logo_url }}
                                                                rounded
                                                                size={18}
                                                            />
                                                            <Text
                                                                style={[
                                                                    appStyles.statistics_content,
                                                                    {
                                                                        marginLeft: getSize.m(10),
                                                                        fontSize: getSize.m(13),
                                                                    },
                                                                ]}
                                                            >
                                                                {item.name_he}
                                                            </Text>
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
                                                            {item.age_he}
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
                                            latitude: parseFloat(stadium?.location_lat),
                                            longitude: parseFloat(stadium?.location_lon),
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                    >
                                        <Marker
                                            coordinate={{
                                                latitude: parseFloat(stadium?.location_lat),
                                                longitude: parseFloat(stadium?.location_lon),
                                            }}
                                        />
                                    </MapView>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </ImageBackground>
            )}
        </View>
    );
};
