import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './DataPlayerNationalScreen.style';
// import { IDataPlayerNationalScreenProps } from './DataPlayerNationalScreen.type';
import { useViewModel } from './DataPlayerNationalScreen.viewModel';

export const DataPlayerNationalScreen = (props: any) => {
    const { t, setSelected, setOpenModal, goals, years, selected, openModal } = useViewModel({});
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container_national}>
                <View style={[appStyles.align_justify, styles.team_national]}>
                    <View style={styles.logo_club}>
                        <Avatar source={AppImages.img_logo} size={getSize.m(40)} />
                    </View>
                    <View style={[appStyles.align_justify, { marginTop: getSize.m(54) }]}>
                        <Text style={styles.name_national}>נבחרת לאומית גברים</Text>
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
                        <Text style={styles.text_label}>{t('data_player.info')}</Text>
                    </View>
                    <View style={{ marginHorizontal: getSize.m(22) }}>
                        <View style={[appStyles.flex_row_space_center, styles.info_player]}>
                            <Text style={appStyles.text_label}>{t('data_player.count')}</Text>
                            <Text style={appStyles.number}>10</Text>
                        </View>
                        <View style={[appStyles.flex_row_space_center, styles.info_player]}>
                            <Text style={appStyles.text_label}>{t('data_player.debut')}</Text>
                            <View style={appStyles.flex_row_align}>
                                <View style={styles.team_national_date}>
                                    <Text style={appStyles.text_label}>פולין</Text>
                                    <Text style={appStyles.number}>16/11/2019</Text>
                                </View>

                                <Avatar
                                    source={AppImages.img_albania}
                                    size={getSize.m(30)}
                                    rounded
                                    containerStyle={styles.logo_national}
                                />
                            </View>
                        </View>
                        <View style={[appStyles.flex_row_space_center, styles.info_player]}>
                            <Text style={appStyles.text_label}>{t('data_player.last')}</Text>
                            <View style={appStyles.flex_row_align}>
                                <View style={styles.team_national_date}>
                                    <Text style={appStyles.text_label}>פולין</Text>
                                    <Text style={appStyles.number}>24/09/2022</Text>
                                </View>

                                <Avatar
                                    source={AppImages.img_albania}
                                    size={getSize.m(30)}
                                    rounded
                                    containerStyle={styles.logo_national}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <View style={{ marginHorizontal: getSize.m(22) }}>
                        <Text style={styles.text_label}>{t('data_player.goal')}</Text>
                    </View>
                    <View style={[appStyles.flex_row_space_center, styles.header]}>
                        <Text style={[styles.text_header, { width: '40%' }]}>
                            {t('data_player.team')}
                        </Text>
                        <Text style={[styles.text_header]}>{t('data_player.games')}</Text>
                        <Text style={styles.text_header}>{t('data_player.gates')}</Text>
                        <Text style={styles.text_header}>{t('data_player.details')}</Text>
                    </View>
                    <View style={{ marginHorizontal: getSize.m(22) }}>
                        {goals.map(item => {
                            return (
                                <View
                                    key={item.id}
                                    style={[appStyles.flex_row_space_center, styles.goal_team]}
                                >
                                    <Text style={[appStyles.text_label, { width: '40%' }]}>
                                        {item.team}
                                    </Text>
                                    <Text style={[appStyles.number]}>{item.games}</Text>
                                    <Text style={[appStyles.number]}>{item.gates}</Text>
                                    <TouchableOpacity style={[styles.details]}>
                                        <Icon
                                            name={appIcons.ic_arrow_left}
                                            size={getSize.m(10)}
                                            color={appColors.text_dark_blue}
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
