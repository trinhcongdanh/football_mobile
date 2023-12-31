import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { styles } from './ListPlayer.styles';
import { IListPlayerProps } from './ListPlayer.type';
import FastImage from 'react-native-fast-image';

export const ListPlayer = ({
    name,
    number,
    avt,
    position,
    number_before,
    handleDataPlayer,
}: IListPlayerProps) => {
    return (
        <TouchableOpacity
            onPress={handleDataPlayer}
            style={[appStyles.flex_row_space_center, { marginBottom: getSize.m(16) }]}
        >
            <View style={appStyles.flex_row_align_center}>
                {number_before && (
                    <Text
                        style={[
                            appStyles.number,
                            { marginRight: getSize.m(10), width: getSize.m(20) },
                        ]}
                    >
                        {number_before}
                    </Text>
                )}
                <View
                    style={{
                        width: getSize.m(30),
                        height: getSize.m(30),
                        borderRadius: getSize.m(30),
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 1,
                    }}
                >
                    <FastImage
                        style={{
                            width: getSize.m(26),
                            height: getSize.m(26),
                            borderRadius: getSize.m(26),
                        }}
                        source={{ uri: avt }}
                    />
                </View>
                <Text style={[appStyles.text_dark, { marginLeft: getSize.m(10) }]}>{name}</Text>
            </View>
            {number && <Text style={appStyles.number}>{number}</Text>}
            {position && <Text style={styles.position}>{position}</Text>}
        </TouchableOpacity>
    );
};
