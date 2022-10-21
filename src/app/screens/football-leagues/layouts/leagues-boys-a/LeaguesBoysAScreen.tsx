import { View } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from './LeaguesBoysAScreen.viewModel';
import { ILeaguesBoysAScreenProps } from './LeaguesBoysAScreen.type';

export const LeaguesBoysAScreen = ({ navigation, route }: ILeaguesBoysAScreenProps) => {
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
