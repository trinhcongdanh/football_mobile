import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './LeaguesWomenScreen.style';
import { useViewModel } from './LeaguesWomenScreen.viewModel';
import { ILeaguesWomenScreenProps } from './LeaguesWomenScreen.type';

export const LeaguesWomenScreen = ({ navigation, route }: ILeaguesWomenScreenProps) => {
    const { t, onGoBack, optionLeagues, handleLeaguesDetails } = useViewModel({
        navigation,
        route,
    });
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.option_menu} onPress={handleLeaguesDetails}>
                <View style={appStyles.flex_row_align_center}>
                    <Text style={styles.text_option_menu}>{item.name}</Text>
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
                    data={optionLeagues}
                    keyExtractor={(item: any) => item.id}
                    renderItem={renderItem}
                    numColumns={1}
                    key={1}
                />
            </View>
        </View>
    );
};
