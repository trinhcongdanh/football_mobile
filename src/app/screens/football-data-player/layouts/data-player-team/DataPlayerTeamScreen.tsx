import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import IconBall from 'react-native-vector-icons/FontAwesome5';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './DataPlayerTeamScreen.style';
// import { IDataPlayerTeamScreenProps } from './DataPlayerTeamScreen.type';
import { useViewModel } from './DataPlayerTeamScreen.viewModel';
import LinearGradient from 'react-native-linear-gradient';

export const DataPlayerTeamScreen = (props: any) => {
    const {
        t,
        onGoBack,
        setOpenModal,
        setSelected,
        openModal,
        years,
        gates,
        tickets,
        selected,
        datas,
    } = useViewModel({});

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container_club}>
                <View style={[appStyles.align_justify, styles.club_team]}>
                    <View style={styles.logo_club}>
                        <Avatar source={AppImages.img_club} size={getSize.m(50)} rounded />
                    </View>
                    <View style={[appStyles.align_justify, { marginTop: getSize.m(54) }]}>
                        <Text style={styles.club_name}>מועדון ספורט אשדוד</Text>
                        <Text style={styles.club_desc}>(ליגת ONE ZERO בנקאות פרטית דיגיטלית)</Text>
                    </View>
                    <View style={[appStyles.align_justify, { marginVertical: getSize.m(16) }]}>
                        <TouchableOpacity
                            onPress={() => {
                                setOpenModal(!openModal);
                            }}
                            style={styles.calender}
                        >
                            <Text style={styles.text_calender}>{selected}</Text>
                            <Icon name={appIcons.ic_chevron_down} size={getSize.m(14)} />
                        </TouchableOpacity>
                    </View>
                    {openModal && (
                        <View style={styles.drop_down_calender}>
                            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                                {years.map((input: string, index: number) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                setSelected(input);
                                                setOpenModal(false);
                                            }}
                                            key={index.toString()}
                                            style={styles.btn_drop_down_calender}
                                        >
                                            <Text style={{ textAlign: 'left' }}>{input}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    )}
                </View>
                <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                    <View style={{ marginLeft: getSize.m(22) }}>
                        <Text style={styles.text_label}>{t('data_player.gates')}</Text>
                    </View>
                    <View style={[appStyles.flex_row_space_center, styles.header]}>
                        <Text style={styles.text_header}>{t('data_player.frame')}</Text>
                        <Text style={styles.text_header}>{t('data_player.gates')}</Text>
                    </View>
                    <View style={{ marginHorizontal: getSize.m(22) }}>
                        {gates.map(item => {
                            return (
                                <View
                                    key={item.id}
                                    style={[
                                        appStyles.flex_row_space_center,
                                        { marginTop: getSize.m(14) },
                                    ]}
                                >
                                    <Text style={appStyles.text_label}>{item.frame}</Text>
                                    <Text style={appStyles.number}>{item.gate}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={[styles.item, { marginTop: getSize.m(30) }]}>
                    <View style={{ marginLeft: getSize.m(22) }}>
                        <Text style={styles.text_label}>{t('data_player.ticket.label')}</Text>
                    </View>
                    <View style={[appStyles.flex_row_space_center, styles.header]}>
                        <Text style={styles.text_header}>{t('data_player.ticket.type')}</Text>
                        <Text style={styles.text_header}>{t('data_player.ticket.amount')}</Text>
                    </View>
                    <View style={{ marginHorizontal: getSize.m(22) }}>
                        {tickets.map(item => {
                            return (
                                <View
                                    key={item.id}
                                    style={[
                                        appStyles.flex_row_space_center,
                                        { marginTop: getSize.m(14) },
                                    ]}
                                >
                                    <Text style={appStyles.text_label}>{item.type}</Text>
                                    <Text style={appStyles.number}>{item.amount}</Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <View style={{ marginLeft: getSize.m(22) }}>
                        <Text style={styles.text_label}>{t('data_player.games_in_season')}</Text>
                    </View>
                    <View style={[styles.title_frame, { marginHorizontal: getSize.m(22) }]}>
                        <Text style={styles.frame}>{t('data_player.frame')}:</Text>
                        <Text style={appStyles.text_label}>
                            ליגת ONE ZERO בנקאות פרטית דיגיטלית
                        </Text>
                    </View>
                    <View style={[{ marginHorizontal: getSize.m(10), marginTop: getSize.m(12) }]}>
                        {datas.map(item => {
                            return (
                                <LinearGradient
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
                                    style={[appStyles.flex_row_space_center, styles.result]}
                                    key={item.id}
                                >
                                    <View>
                                        <Text style={styles.date}>{item.date}</Text>
                                    </View>
                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                marginHorizontal: getSize.m(15),
                                            },
                                        ]}
                                    >
                                        <View style={[appStyles.flex_row_align_center]}>
                                            <Text style={styles.name_club}>{item.home}</Text>
                                            <Avatar source={AppImages.img_club} />
                                        </View>
                                        <View style={{ marginHorizontal: getSize.m(12) }}>
                                            <Text style={styles.score}>{item.result}</Text>
                                        </View>
                                        <View style={appStyles.flex_row_align_center}>
                                            <Avatar source={AppImages.img_club} />
                                            <Text style={styles.name_club} numberOfLines={2}>
                                                {item.away}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={appStyles.flex_row_align_center}>
                                        <IconBall name="volleyball-ball" />
                                        <Image
                                            source={AppImages.img_ticket_red}
                                            style={{
                                                marginLeft: getSize.m(16),
                                                width: getSize.m(14),
                                                height: getSize.m(20),
                                            }}
                                        />
                                        <Text style={[styles.date, { marginLeft: getSize.m(16) }]}>
                                            {item.time}
                                        </Text>
                                        <Icon
                                            name={appIcons.ic_arrow_down}
                                            color={appColors.red_dark}
                                            size={getSize.m(10)}
                                        />
                                    </View>
                                </LinearGradient>
                            );
                        })}
                    </View>
                    <View style={[styles.title_frame, { marginHorizontal: getSize.m(22) }]}>
                        <Text style={styles.frame}>{t('data_player.frame')}:</Text>
                        <Text style={appStyles.text_label}>מסלול אירופה</Text>
                    </View>
                    <View style={[{ marginHorizontal: getSize.m(10), marginTop: getSize.m(12) }]}>
                        {datas.map(item => {
                            return (
                                <LinearGradient
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
                                    style={[appStyles.flex_row_space_center, styles.result]}
                                    key={item.id}
                                >
                                    <View>
                                        <Text style={styles.date}>{item.date}</Text>
                                    </View>
                                    <View
                                        style={[
                                            appStyles.flex_row_space_center,
                                            {
                                                marginHorizontal: getSize.m(15),
                                            },
                                        ]}
                                    >
                                        <View style={[appStyles.flex_row_align_center]}>
                                            <Text style={styles.name_club}>{item.home}</Text>
                                            <Avatar source={AppImages.img_club} />
                                        </View>
                                        <View style={{ marginHorizontal: getSize.m(12) }}>
                                            <Text style={styles.score}>{item.result}</Text>
                                        </View>
                                        <View style={appStyles.flex_row_align_center}>
                                            <Avatar source={AppImages.img_club} />
                                            <Text style={styles.name_club} numberOfLines={2}>
                                                {item.away}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={appStyles.flex_row_align_center}>
                                        <IconBall name="volleyball-ball" />
                                        <Image
                                            source={AppImages.img_ticket_red}
                                            style={{
                                                marginLeft: getSize.m(16),
                                                width: getSize.m(14),
                                                height: getSize.m(20),
                                            }}
                                        />
                                        <Text style={[styles.date, { marginLeft: getSize.m(16) }]}>
                                            {item.time}
                                        </Text>
                                        <Icon
                                            name={appIcons.ic_arrow_down}
                                            color={appColors.red_dark}
                                            size={getSize.m(10)}
                                        />
                                    </View>
                                </LinearGradient>
                            );
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
