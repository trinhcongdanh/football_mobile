import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Trophy } from './Trophy/Trophy';
import { CupAround } from './Cup-Around/CupAround';
import { useViewModel } from './Statistics.viewModel';
import { IStatisticsProps } from './Statistics.type';
export const Statistics = ({}: IStatisticsProps) => {
    const { t } = useViewModel();
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('state_cup.statistics.label')}
            </Text>
            <View style={{ marginTop: getSize.m(20) }}>
                <Trophy />
                <CupAround />
            </View>
        </View>
    );
};
