import { View, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { styles } from './ListPlayer.styles';
import { IListPlayerProps } from './ListPlayer.type';

export const ListPlayer = ({ name, number, avt, position }: IListPlayerProps) => {
    return (
        <View style={[appStyles.flex_row_space_center, { marginBottom: getSize.m(16) }]}>
            <View style={appStyles.flex_row_align_center}>
                <Avatar rounded size={26} source={avt} />
                <Text style={[appStyles.text_dark, { marginLeft: getSize.m(10) }]}>{name}</Text>
            </View>
            {number && <Text style={appStyles.number}>{number}</Text>}
            {position && <Text style={styles.position}>{position}</Text>}
        </View>
    );
};
