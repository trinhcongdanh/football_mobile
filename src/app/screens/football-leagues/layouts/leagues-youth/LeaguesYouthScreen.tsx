import { View } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from './LeaguesYouthScreen.viewModel';
import { ILeaguesYouthScreenProps } from './LeaguesYouthScreen.type';

export const LeaguesYouthScreen = ({ navigation, route }: ILeaguesYouthScreenProps) => {
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
