import { View, Text } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-elements';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import { IDataCoachTeamsScreenProps } from './DataCoachTeamsScreen.type';
import { useViewModel } from './DataCoachTeamsScreen.viewModel';
import styles from './DataCoachTeamsScreen.style';

// type Props = {};

export const DataCoachTeamsScreen = ({}: IDataCoachTeamsScreenProps) => {
    const { t, onGoBack, datas } = useViewModel({});
    const matches = Array(2).fill('');
    return (
        <View>
            {matches.map((inp: string, index: number) => {
                return (
                    <View key={index.toString()} style={styles.data_coach}>
                        <View style={styles.logo}>
                            <Avatar
                                source={AppImages.img_club}
                                size={getSize.m(50)}
                                rounded
                                containerStyle={styles.logo_club}
                            />
                        </View>
                        <View style={styles.content}>
                            {datas.map(item => {
                                return (
                                    <View
                                        key={item.id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            styles.content_item,
                                            {
                                                backgroundColor:
                                                    item.id % 2 === 0
                                                        ? appColors.blue_matte
                                                        : appColors.white,
                                            },
                                        ]}
                                    >
                                        <Text style={styles.label}>{item.label}</Text>
                                        <Text style={styles.data_content}>{item.content}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </View>
    );
};
