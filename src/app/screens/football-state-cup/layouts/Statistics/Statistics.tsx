import React from 'react';
import { View } from 'react-native';
import { useViewModel } from './Statistics.viewModel';
import { IStatisticsProps } from './Statistics.type';
export const Statistics = ({}: IStatisticsProps) => {
    const { t } = useViewModel();
    return <View></View>;
};
