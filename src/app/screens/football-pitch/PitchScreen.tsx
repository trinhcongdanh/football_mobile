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
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './PitchScreen.style';
import { useViewModel } from './PitchScreen.viewModel';
import { IPitchScreenProps } from './PitchScreen.type';
import LinearGradient from 'react-native-linear-gradient';

export const PitchScreen = ({ navigation, route }: IPitchScreenProps) => {
    const { t, onGoBack, listTeamFields } = useViewModel({ navigation, route });
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
                    <ScrollView>
                        <View style={appStyles.container}>
                            <InfoPerson
                                name="פיני יואב גראפי"
                                data_1="שארית ישראל תל אביב - יפו"
                                data_2="איתן שור"
                                data_3="03-6376000"
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                title_1={t('pitch.address')}
                                title_2={t('pitch.contact')}
                                title_3={t('pitch.phone')}
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
                                                { textAlign: 'left' },
                                            ]}
                                        >
                                            {t('pitch.group')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(60) }}>
                                        <Text style={[appStyles.statistics_header]}>
                                            {t('pitch.age')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(60) }}>
                                        <Text
                                            style={[
                                                appStyles.statistics_header,
                                                { textAlign: 'left' },
                                            ]}
                                        >
                                            {t('pitch.home_training')}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: getSize.m(10) }}>
                                    {listTeamFields.map(item => {
                                        return (
                                            <LinearGradient
                                                key={item.id}
                                                colors={[
                                                    item.id % 2 === 1
                                                        ? 'rgba(255, 255, 255, 0.05)'
                                                        : appColors.gray,
                                                    item.id % 2 === 1
                                                        ? 'rgba(16, 32, 100, 0.05)'
                                                        : appColors.gray,
                                                    item.id % 2 === 1
                                                        ? 'rgba(59, 168, 225, 0.05)'
                                                        : appColors.gray,
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
                                                            source={item.avt_club}
                                                            rounded
                                                            size={18}
                                                        />
                                                        <Text
                                                            style={[
                                                                appStyles.statistics_content,
                                                                {
                                                                    marginLeft: getSize.m(10),
                                                                },
                                                            ]}
                                                        >
                                                            {item.name_club}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(60),
                                                    }}
                                                >
                                                    <Text style={appStyles.statistics_content}>
                                                        {item.age}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        width: getSize.m(60),
                                                    }}
                                                >
                                                    <Text style={appStyles.statistics_content}>
                                                        {item.home_training}
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
                                    mapType={Platform.OS == 'android' ? 'none' : 'standard'}
                                    style={styles.map}
                                    initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
