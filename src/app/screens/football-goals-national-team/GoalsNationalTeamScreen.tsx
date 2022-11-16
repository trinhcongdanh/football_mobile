import React from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { appColors } from '@football/app/utils/constants/appColors';
import { Position } from '@football/app/components/position/Position';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Feather';
import { Avatar } from 'react-native-elements';
import styles from './GoalsNationalTeamScreen.style';
import { useViewModel } from './GoalsNationalTeamScreen.viewModel';
import { IGoalsNationalTeamScreenProps } from './GoalsNationalTeamScreen.type';

export const GoalsNationalTeamScreen = ({ navigation, route }: IGoalsNationalTeamScreenProps) => {
    const { t, onGoBack, listGames, handleDetailMatch } = useViewModel({ navigation, route });
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
                            title="שערים בנבחרת הלאומית"
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="פיני יואב גראפי" avt={AppImages.img_avt_player} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            {listGames.map(item => {
                                return (
                                    <View key={item.id} style={{ marginTop: getSize.m(26) }}>
                                        <Position
                                            position={item.tournament}
                                            color={appColors.text_dark_blue}
                                            width={getSize.m(60)}
                                        />
                                        <View style={styles.main_schedule}>
                                            <View style={appStyles.flex_row_space}>
                                                <Text
                                                    style={[
                                                        styles.date,
                                                        {
                                                            color:
                                                                item.completed === true
                                                                    ? appColors.soft_grey
                                                                    : appColors.text_dark_blue,
                                                        },
                                                    ]}
                                                >
                                                    {item.date}
                                                </Text>
                                                <View
                                                    style={[appStyles.flex_row_align, { flex: 0 }]}
                                                >
                                                    <IconLocation
                                                        name={appIcons.ic_location}
                                                        size={getSize.m(15)}
                                                        color={
                                                            item.completed === true
                                                                ? appColors.soft_grey
                                                                : appColors.blue_light
                                                        }
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.stadium,
                                                            {
                                                                color:
                                                                    item.completed === true
                                                                        ? appColors.soft_grey
                                                                        : appColors.text_dark_blue,
                                                            },
                                                        ]}
                                                    >
                                                        {item.location}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    {
                                                        marginHorizontal: getSize.m(10),
                                                        marginTop: getSize.m(16),
                                                    },
                                                ]}
                                            >
                                                <View style={[appStyles.align_justify]}>
                                                    <Avatar
                                                        rounded
                                                        size={getSize.m(40)}
                                                        source={item.logoAway}
                                                        containerStyle={styles.avt_club}
                                                    />
                                                    <Text style={styles.name_club}>
                                                        {item.nameAway}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={[appStyles.align_justify, styles.time]}
                                                >
                                                    {item.completed === false ? (
                                                        <Text style={styles.score}>
                                                            {item.schedule}
                                                        </Text>
                                                    ) : (
                                                        <Text style={styles.score}>
                                                            {item.result}
                                                        </Text>
                                                    )}
                                                </View>
                                                <View style={[appStyles.align_justify]}>
                                                    <Avatar
                                                        rounded
                                                        size={getSize.m(40)}
                                                        source={item.logoHome}
                                                        containerStyle={styles.avt_club}
                                                    />

                                                    <Text style={styles.name_club}>
                                                        {item.nameHome}
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity
                                                style={[appStyles.flex_row_center, { flex: 0 }]}
                                                onPress={handleDetailMatch}
                                            >
                                                <Text style={styles.details}>{item.details}</Text>
                                                <Icon
                                                    name={appIcons.ic_arrow_left}
                                                    size={getSize.m(10)}
                                                    color={appColors.button_dark_blue}
                                                />
                                            </TouchableOpacity>
                                            <View style={appStyles.flex_row_space}>
                                                <View
                                                    style={[
                                                        styles.circle,
                                                        { right: getSize.m(-40) },
                                                    ]}
                                                />
                                                <View
                                                    style={[
                                                        styles.circle,
                                                        { left: getSize.m(-40) },
                                                    ]}
                                                />
                                            </View>
                                            <View style={styles.line_dots} />
                                            <View
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    { marginHorizontal: getSize.m(20) },
                                                ]}
                                            >
                                                <View
                                                    style={[
                                                        appStyles.flex_align_center,
                                                        { flex: 0 },
                                                    ]}
                                                >
                                                    <Text style={styles.number}>{item.goal}</Text>
                                                    <View style={appStyles.flex_row_align}>
                                                        <Image
                                                            source={AppImages.img_ball}
                                                            style={{
                                                                width: getSize.m(11),
                                                                height: getSize.m(11),
                                                            }}
                                                        />
                                                        <Text style={styles.label}>
                                                            {t('goal_national_team.goal')}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View
                                                    style={[
                                                        appStyles.flex_align_center,
                                                        { flex: 0 },
                                                    ]}
                                                >
                                                    <Text style={styles.number}>
                                                        {item.yellow_card}
                                                    </Text>
                                                    <View style={appStyles.flex_row_align}>
                                                        <Image
                                                            source={AppImages.img_ticket_yellow}
                                                        />
                                                        <Text style={styles.label}>
                                                            {t('goal_national_team.yellow')}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View
                                                    style={[
                                                        appStyles.flex_align_center,
                                                        { flex: 0 },
                                                    ]}
                                                >
                                                    <Text style={styles.number}>
                                                        {item.red_card}
                                                    </Text>
                                                    <View style={appStyles.flex_row_align}>
                                                        <Image source={AppImages.img_ticket_red} />
                                                        <Text style={styles.label}>
                                                            {t('goal_national_team.red')}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
