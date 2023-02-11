import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { ScreenName } from '@football/app/utils/constants/enum';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    },
    txt_tabbar_focus: {
        color: appColors.white,
        marginTop: getSize.m(5),
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
    },
});

export function MyTabBar({ state, descriptors, navigation }: any) {
    const renderIcon = (routeName: string, selectedTab: number, indexTab: number) => {
        let icon = '';
        switch (routeName) {
            case ScreenName.GroupPagePage:
                icon = 'home-outline';
                break;
            case ScreenName.LeaguesPage:
                icon = 'shield-checkmark-outline';
                break;
            case ScreenName.TeamPage:
                icon = 'people-sharp';
                break;
            case ScreenName.PlayGroundPage:
                icon = 'chatbox-ellipses-outline';
                break;
            case ScreenName.GobletPage:
                icon = 'trophy-outline';
                break;
            case ScreenName.VideoPage:
                icon = 'videocam-outline';
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
                    case ScreenName.GroupPagePage:
                        label = 'בית';
                        break;
                    case ScreenName.LeaguesPage:
                        label = 'ליגות';
                        break;
                    case ScreenName.TeamPage:
                        label = 'נבחרות';
                        break;
                    case ScreenName.PlayGroundPage:
                        label = 'שאלון';
                        break;
                    case ScreenName.GobletPage:
                        label = 'גביע';
                        break;
                    case ScreenName.VideoPage:
                        label = 'VOD';
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
