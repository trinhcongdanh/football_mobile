import { View, Text, Image } from 'react-native';
import React from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import { ITicketRedProps } from './TicketRed.type';
import { styles } from './TicketRed.styles';

export const TicketRed = ({ name, avt, minute, team }: ITicketRedProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <Text style={styles.time}>{minute}</Text>

                <View style={styles.ticket}>
                    <Image source={AppImages.img_ticket_red} />
                </View>

                <Avatar source={avt} size={getSize.m(28)} rounded containerStyle={styles.avt} />
                <Text style={styles.name_player}>{name}</Text>
            </View>
            <Text style={styles.team}>{team}</Text>
        </View>
    );
};
