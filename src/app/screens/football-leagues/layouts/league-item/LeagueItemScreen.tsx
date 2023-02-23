import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './LeagueItemScreen.style';
import { ILeagueItemScreenProps } from './LeagueItemScreen.type';
import { useViewModel } from './LeagueItemScreen.viewModel';

export const LeagueItemScreen = ({ navigation, route, typeId }: ILeagueItemScreenProps) => {
    const { t, onGoBack, optionLeagues, handleLeaguesDetails } = useViewModel({
        navigation,
        route,
        typeId,
    });

    const renderItem = ({ item, index }: any) => {
        return (
            <TouchableOpacity
                style={styles.option_menu}
                onPress={() => handleLeaguesDetails(index)}
            >
                <View style={appStyles.flex_row_align_center}>
                    <Text style={styles.text_option_menu}>{item.name_he}</Text>
                </View>

                <Icon
                    name={appIcons.ic_arrow_left}
                    size={getSize.s(13)}
                    color={appColors.text_dark_blue}
                    style={styles.ic_arrow_left}
                />
            </TouchableOpacity>
        );
    };
    return (
        <View
            style={[
                appStyles.flex,
                {
                    backgroundColor: appColors.gray,
                    paddingHorizontal: getSize.m(20),
                    paddingTop: getSize.m(30),
                },
            ]}
        >
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={optionLeagues}
                    keyExtractor={(item: any) => item.id}
                    renderItem={renderItem}
                    numColumns={1}
                />
            </View>
        </View>
    );
};
