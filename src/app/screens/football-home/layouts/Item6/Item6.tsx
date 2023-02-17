import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '@football/app/screens/football-home/layouts/Item6/Item6.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item6/Item6.viewModel';
import { appStyles } from '@football/app/utils/constants/appStyles';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { GameTable3 } from '@football/app/components/game-table-3/GameTable3';
export const Item6 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, data } = useViewModel({});
    return (
        <View style={styles.container}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        paddingHorizontal: getSize.m(18),
                    },
                ]}
            >
                <Text style={styles.header}>{t('home_page.list_of_game')}</Text>
                <TouchableOpacity style={appStyles.flex_row_align}>
                    <Text style={styles.see_all}>{t('home_page.all_game')}</Text>
                    <IconEntypo
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(14)}
                        style={{ marginTop: getSize.m(3) }}
                        color={appColors.button_dark_blue}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: getSize.m(16) }}>
                {data.map((item, index) => {
                    return (
                        <GameTable3
                            key={item.id}
                            name_away={item.name_away}
                            name_home={item.name_home}
                            avt_away={item.avt_away}
                            avt_home={item.avt_home}
                            result={item.result}
                            schedule={item.schedule}
                            tournaments={item.tournaments}
                            location={item.location}
                            isLive={item.isLive}
                            date={item.date}
                            minute={item.minute}
                        />
                    );
                })}
            </View>
        </View>
    );
};
