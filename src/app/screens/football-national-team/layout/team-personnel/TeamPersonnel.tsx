import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { ITeamPersonnelProps } from '@football/app/screens/football-national-team/layout/team-personnel/TeamPersonnel.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './TeamPersonnel.style';
import { useViewModel } from './TeamPersonnel.viewModel';

export const TeamPersonnel = ({ topTeam }: ITeamPersonnelProps) => {
    const { teamSquads, navigate } = useViewModel({
        topTeam,
    });
    return (
        <View style={appStyles.container}>
            {teamSquads.map(item => {
                return (
                    <TouchableOpacity
                        onPress={() => {
                            navigate(item.screen, {
                                topTeamPersonnelId: topTeam?.team_personnel_id,
                                selectedTab: item.selectedTab,
                                fromTopTeam: true,
                            });
                        }}
                        style={[appStyles.flex_row_space_center, styles.content_team_squad]}
                        key={item.id}
                    >
                        <View style={appStyles.flex_row_align}>
                            <Avatar
                                source={{ uri: topTeam?.logo_url }}
                                size={getSize.m(26)}
                                rounded
                            />
                            <Text style={styles.name_player}>{item.name}</Text>
                        </View>
                        <IconFeather
                            name={appIcons.ic_left_ios}
                            color={appColors.text_dark_blue}
                            style={{ fontFamily: AppFonts.bold }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
