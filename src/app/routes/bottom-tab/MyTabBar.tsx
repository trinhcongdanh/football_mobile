import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import { ScreenName } from '@football/app/utils/constants/enum';

const styles = StyleSheet.create({
    bottom_tab_container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: appColors.text_dark,
        height: getSize.m(85),
    },
    children_container: { flex: 1, alignItems: 'center', paddingTop: getSize.m(10) },
    txt_tabbar: {
        color: appColors.text_grey,
        marginTop: getSize.m(5),
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        fontWeight: '400',
    },
    txt_tabbar_focus: {
        color: appColors.white,
        marginTop: getSize.m(5),
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        fontWeight: '700',
    },
});

export function MyTabBar({ state, descriptors, navigation }: any) {
    const renderIcon = (routeName: string, selectedTab: number, indexTab: number) => {
        let icon = '';
        switch (routeName) {
            case ScreenName.DataCoachPage:
                icon = 'briefcase-outline';
                break;
            case ScreenName.DataPlayerPage:
                icon = 'man-outline';
                break;
            case ScreenName.HistoryPage:
                icon = 'reload-circle-outline';
                break;
            case ScreenName.LeaguesPage:
                icon = 'trophy-outline';
                break;
            case ScreenName.LeaguesDetailsPage:
                icon = 'reader-outline';
                break;
            default:
                break;
        }

        return (
            <Ionicons
                name={icon}
                size={getSize.m(25)}
                color={selectedTab === indexTab ? appColors.white : appColors.stroke}
            />
        );
    };
    return (
        <View style={styles.bottom_tab_container}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                let label = 'VOD';
                switch (route.name) {
                    case ScreenName.DataCoachPage:
                        label = 'מְאַמֵן';
                        break;
                    case ScreenName.DataPlayerPage:
                        label = 'שחקן';
                        break;
                    case ScreenName.HistoryPage:
                        label = 'הִיסטוֹרִיָה';
                        break;
                    case ScreenName.LeaguesPage:
                        label = 'ליגות';
                        break;
                    case ScreenName.LeaguesDetailsPage:
                        label = 'פירוט הליגות';
                        break;
                    default:
                        break;
                }
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <TouchableOpacity
                        key={index.toString()}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={styles.children_container}
                    >
                        {renderIcon(route.name, state.index, index)}
                        <Text style={isFocused ? styles.txt_tabbar_focus : styles.txt_tabbar}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
