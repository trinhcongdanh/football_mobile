import React from 'react';
import { View, Image, Text } from 'react-native';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';
import LinearGradient from 'react-native-linear-gradient';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from '@football/app/screens/football-playground/layouts/Archives/Archives.style';
import { useViewModel } from '@football/app/screens/football-playground/layouts/Archives/Archives.viewModel';
import { IArchivesProps } from '@football/app/screens/football-playground/layouts/Archives/Archives.type';

export const Archives = ({}: IArchivesProps) => {
    const { t, archives } = useViewModel({});
    return (
        <View style={styles.img_archives_container}>
            {archives.map(archive => {
                return (
                    <View key={archive.id} style={styles.item_archives}>
                        <Image
                            source={archive.background}
                            style={styles.item_archives_background}
                        />
                        <Text style={styles.item_archives_test}>
                            {t('play_ground.archives.test_yourself')}
                        </Text>
                        <Image
                            source={AppImages.img_ticket_complete}
                            style={styles.item_archives_ticket}
                        />
                        <LinearGradient
                            colors={['rgba(212, 222, 231, 1)', 'rgba(154, 183, 213, 1)']}
                            style={styles.item_archives_border_logo}
                        >
                            <LinearGradient
                                colors={['rgba(44, 196, 255, 1)', 'rgba(26, 117, 255, 1)']}
                                style={styles.item_archives_background_logo}
                            >
                                <Image source={archive.image} style={styles.item_archives_logo} />
                            </LinearGradient>
                        </LinearGradient>
                        <View style={{ marginTop: getSize.m(12) }}>
                            <Text style={styles.item_archives_title}>{archive.title}</Text>
                        </View>
                        <LinearGradient
                            colors={[
                                'rgba(28, 99, 239, 0.07)',
                                'rgba(160, 191, 254, 0.57)',
                                'rgba(13, 87, 233, 1)',
                            ]}
                            style={styles.item_archives_line}
                        />

                        <View style={appStyles.flex_row_align}>
                            <LinearGradient
                                colors={['#0f9dfd', 'rgba(17, 44, 113, 0.5)']}
                                style={styles.item_archives_trophy}
                            >
                                <Image source={AppImages.img_trophy_star} />
                            </LinearGradient>
                            <Text style={styles.item_archives_point}>
                                {t('play_ground.archives.place')} {archive.trophy}
                            </Text>
                        </View>
                        <View
                            style={[
                                appStyles.flex_row_align,
                                { marginTop: getSize.m(6), marginBottom: getSize.m(8) },
                            ]}
                        >
                            <Text style={styles.item_archives_point}>
                                {t('play_ground.archives.accumulated')} {archive.point}
                            </Text>
                            <Image
                                source={AppImages.img_coin}
                                style={styles.item_archives_img_point}
                            />
                        </View>
                    </View>
                );
            })}
        </View>
    );
};
