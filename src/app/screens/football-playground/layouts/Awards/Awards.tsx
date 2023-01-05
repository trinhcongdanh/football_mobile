import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import LinearGradient from 'react-native-linear-gradient';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from '@football/app/screens/football-playground/layouts/Awards/Awards.style';
import { useViewModel } from '@football/app/screens/football-playground/layouts/Awards/Awards.viewModel';
import { IAwardsProps } from '@football/app/screens/football-playground/layouts/Awards/Awards.type';

export const Awards = ({}: IAwardsProps) => {
    const { t, onGoBack, awards, handleAward } = useViewModel({});
    return (
        <View style={{ paddingHorizontal: getSize.m(16) }}>
            {awards.map(award => {
                return (
                    <View key={award.id} style={styles.item_award}>
                        <View style={[appStyles.flex_row_space_center]}>
                            <Text style={styles.item_award_name}>{award.name}</Text>
                            <Image source={award.image} style={styles.item_award_image} />
                        </View>
                        <TouchableOpacity onPress={handleAward}>
                            <LinearGradient
                                colors={['rgba(44, 196, 255, 1)', 'rgba(26, 117, 255, 1)']}
                                style={[
                                    appStyles.flex_row_center,
                                    {
                                        marginTop: getSize.m(30),
                                        paddingVertical: getSize.m(10),
                                        borderRadius: getSize.m(16),
                                    },
                                ]}
                            >
                                <Text
                                    style={[styles.item_award_coin, { marginLeft: getSize.m(2) }]}
                                >
                                    {t('play_ground.awards.choose')}
                                </Text>
                                <View style={appStyles.flex_row_align_center}>
                                    <Text style={styles.item_award_coin}>{award.coin}</Text>
                                    <Image source={AppImages.img_coin} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};
