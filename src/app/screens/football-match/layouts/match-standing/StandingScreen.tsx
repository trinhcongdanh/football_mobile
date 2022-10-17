import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { appIcons } from '@football/app/assets/icons/appIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './StandingScreen.styles';
import { useViewModel } from './StandingScreen.viewModel';
import { IStandingScreenProps } from './StandingScreen.type';

export const StandingScreen = ({ navigation, route }: IStandingScreenProps) => {
    const { t, headers, listTeams } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex, { backgroundColor: appColors.gray }]}>
            <View style={{ marginTop: getSize.m(30) }}>
                <ScrollView>
                    <View>
                        <View style={appStyles.flex_row_space_center}>
                            {headers.map((header: string, index: number) => {
                                return (
                                    <View
                                        key={index.toString()}
                                        style={{ width: index === 1 ? '30%' : '10%' }}
                                    >
                                        <Text style={styles.text_header}>{header}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            {listTeams.map(item => {
                                return (
                                    <View
                                        key={item.id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            styles.itemTeam,
                                            {
                                                backgroundColor:
                                                    item.id % 2 === 0
                                                        ? appColors.blue_matte
                                                        : appColors.gray,
                                            },
                                        ]}
                                    >
                                        <View style={appStyles.flex_row_align}>
                                            <Text style={styles.text_body}>{item.id}</Text>
                                            <View>
                                                <Icon
                                                    name={appIcons.ic_up}
                                                    size={11}
                                                    color={appColors.blue_light}
                                                />
                                                <Icon
                                                    name={appIcons.ic_down}
                                                    size={11}
                                                    color={appColors.red}
                                                />
                                            </View>
                                        </View>
                                        <View style={[appStyles.flex_row_content_center]}>
                                            <Avatar source={item.logo} rounded size={20} />
                                            <Text
                                                style={[
                                                    styles.text_body,
                                                    { marginLeft: getSize.m(6) },
                                                ]}
                                            >
                                                {item.name}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text_body}>{item.mash}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text_body}>{item.nch}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text_body}>{item.draw}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text_body}>{item.the_p}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text_body}>{item.time}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text_body}>{item.no}</Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
