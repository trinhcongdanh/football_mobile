import { View } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { ILeaguesBoysCScreenProps } from './LeaguesBoysCScreen.type';
import { useViewModel } from './LeaguesBoysCScreen.viewModel';

export const LeaguesBoysCScreen = ({ navigation, route }: ILeaguesBoysCScreenProps) => {
    const { t, onGoBack } = useViewModel({ navigation, route });

    return (
        <View
            style={[
                appStyles.flex,
                {
                    backgroundColor: appColors.gray,
                    paddingHorizontal: getSize.m(16),
                    paddingTop: getSize.m(30),
                },
            ]}
        ></View>
    );
};
