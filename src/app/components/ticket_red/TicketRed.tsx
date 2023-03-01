import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { styles } from './TicketRed.styles';
import { ITicketRedProps } from './TicketRed.type';

export const TicketRed = ({ name, avt, minute, team, ticket }: ITicketRedProps) => {
    return (
        <View>
            <View style={appStyles.flex_row_align_center}>
                <Text style={styles.time}>{`${minute}'`}</Text>

                <View style={styles.ticket}>
                    {ticket ? (
                        <FastImage
                            source={ticket}
                            style={{ width: getSize.m(13), height: getSize.m(15) }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    ) : (
                        <FastImage
                            source={AppImages.img_ticket_red_1}
                            style={{ width: getSize.m(14), height: getSize.m(18) }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    )}
                </View>

                <Avatar
                    source={{ uri: avt }}
                    size={getSize.m(28)}
                    rounded
                    containerStyle={styles.avt}
                />
                <Text style={styles.name_player}>{name}</Text>
            </View>
            <Text style={styles.team}>{team}</Text>
        </View>
    );
};
