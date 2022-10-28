import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from '@football/app/components/button';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { useViewModel } from './FavoriteTopTeamsScreen.viewModel';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';
import styles from './FavoriteTopTeamsScreen.style';

export const FavoriteTopTeamsScreen = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        topTeamSelected,
        newTopTeams,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderFav goSkip={onGoSkip} goBack={onGoBack} onIndex={2} />
                        <Text style={[appStyles.text_title, { marginBottom: getSize.m(18) }]}>
                            {t('favorite_top_team.title')}
                        </Text>

                        <ScrollView>
                            <View style={styles.content_team}>
                                {newTopTeams.map(topTeam => {
                                    return (
                                        <TouchableOpacity
                                            key={topTeam.id}
                                            style={[
                                                styles.item_team,
                                                {
                                                    backgroundColor:
                                                        topTeam.isSelected === true
                                                            ? 'rgba(44, 196, 255, 0.3)'
                                                            : 'transparent',
                                                    borderWidth:
                                                        topTeam.isSelected === true
                                                            ? getSize.m(1)
                                                            : getSize.m(0),
                                                },
                                            ]}
                                            onPress={() => handleSelected(topTeam)}
                                        >
                                            <Image
                                                source={topTeam.logo_club}
                                                style={styles.logo_top}
                                            />
                                            <Text style={styles.name_top}>{topTeam.name}</Text>
                                            {topTeam.isSelected === true && (
                                                <View style={styles.check}>
                                                    <Icon
                                                        name={appIcons.ic_check}
                                                        size={getSize.m(10)}
                                                        color={appColors.white}
                                                    />
                                                </View>
                                            )}
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
                <View style={styles.select_team}>
                    <View style={styles.result_select}>
                        <View style={styles.logo_select}>
                            {topTeamSelected.map((item, index) => {
                                return (
                                    <View key={index} style={{ marginLeft: getSize.m(6) }}>
                                        <Image source={item.logo_club} style={styles.logo_top} />
                                        <View style={styles.index}>
                                            <Text style={styles.text_index}>{index + 1}</Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                        <View>
                            <Text style={styles.result_number}>
                                {t('favorite_top_team.chosen')}{' '}
                                <Text style={{ color: appColors.blue_light }}>
                                    {topTeamSelected.length}
                                </Text>
                                /2
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{ paddingHorizontal: getSize.m(32), paddingBottom: getSize.m(36) }}
                    >
                        <Button title={t('favorite_top_team.button')} onPress={handleContinue} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
