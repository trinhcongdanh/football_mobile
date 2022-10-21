import { View } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from './LeaguesGraduatesScreen.viewModel';
import { ILeaguesGraduatesScreenProps } from './LeaguesGraduatesScreen.type';

export const LeaguesGraduateScreen = ({ navigation, route }: ILeaguesGraduatesScreenProps) => {
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
