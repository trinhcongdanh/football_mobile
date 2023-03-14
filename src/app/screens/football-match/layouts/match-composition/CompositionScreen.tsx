import { AppFonts } from '@football/app/assets/fonts';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import { Team } from '@football/core/models/GameModelResponse';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './CompositionScreen.styles';
import { ICompositionScreenProps } from './CompositionScreen.type';
import { useViewModel } from './CompositionScreen.viewModel';

// type Props = {};

export const CompositionScreen = ({ navigation, route }: ICompositionScreenProps) => {
    const game = route?.params?.data;
    const { t, handleDataPlayer, options, selectOption, select, handleDataCoach } = useViewModel({
        navigation,
        route,
    });
    // if (lineUp.isLoading == true) {
    //     return <></>;
    // }
    // if (lineUp.success == false) {
    //     return <></>;
    // }

    const { getTranslationText } = useTranslationText();

    const renderList = (team: Team) => {
        return (
            <>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position
                        width={getSize.m(130)}
                        position={t('match.composition.main_lineup')}
                    />
                    {team?.lineup?.opening.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={getTranslationText({
                                    textHe: item.name_he,
                                    textEn: item.name_en,
                                })}
                                number_before={item.shirt_number}
                                avt={item.image_url}
                                handleDataPlayer={() => handleDataPlayer(item.player_id)}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position width={getSize.m(130)} position={t('match.composition.replace')} />
                    {team?.lineup?.substitutes.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={getTranslationText({
                                    textHe: item.name_he,
                                    textEn: item.name_en,
                                })}
                                number_before={item.shirt_number}
                                avt={item.image_url}
                                handleDataPlayer={() => handleDataPlayer(item.player_id)}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position
                        width={getSize.m(130)}
                        position={t('match.composition.not_partner')}
                    />
                    {team?.lineup?.not_participated.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={getTranslationText({
                                    textHe: item.name_he,
                                    textEn: item.name_en,
                                })}
                                number_before={item.shirt_number}
                                avt={item.image_url}
                                handleDataPlayer={() => handleDataPlayer(item.player_id)}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position width={getSize.m(130)} position={t('match.composition.coach')} />
                    {team?.lineup?.coaches.map(item => {
                        return (
                            <ListPlayer
                                key={item.coach_id}
                                name={getTranslationText({
                                    textHe: item.name_he,
                                    textEn: item.name_en,
                                })}
                                avt={item.image_url}
                                handleDataPlayer={() => handleDataCoach(item.coach_id)}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position width={getSize.m(130)} position={t('match.composition.referees')} />
                    {team?.lineup?.referees.map(item => {
                        return (
                            <ListPlayer
                                key={item.referee_id}
                                name={getTranslationText({
                                    textHe: item.name_he,
                                    textEn: item.name_en,
                                })}
                                avt={item.image_url}
                                // handleDataPlayer={() => handleDataPlayer(item.player_id)}
                            />
                        );
                    })}
                </View>
            </>
        );
    };
    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(24) },
            ]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[appStyles.flex_row_space, styles.option]}>
                    {options.map((option: string, index: number) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.button_option_dark,
                                    {
                                        backgroundColor:
                                            index === select
                                                ? appColors.button_dark_blue
                                                : appColors.separator,
                                    },
                                ]}
                                key={index.toString()}
                                onPress={() => selectOption(index)}
                            >
                                <Text
                                    style={[
                                        styles.text_option,
                                        {
                                            color:
                                                index === select
                                                    ? appColors.white
                                                    : appColors.text_option_unselect,

                                            fontFamily:
                                                index === select ? AppFonts.bold : AppFonts.medium,
                                        },
                                    ]}
                                >
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                {game && renderList(select === 0 ? game.team1 : game.team2)}
            </ScrollView>
        </View>
    );
};
