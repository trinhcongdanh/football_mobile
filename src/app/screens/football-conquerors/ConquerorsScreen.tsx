import React from 'react';
import {
    View,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { HeaderLogo } from '@football/app/components/header-logo/HeaderLogo';
import { Avatar } from 'react-native-elements';
import styles from './ConquerorsScreen.style';
import { useViewModel } from './ConquerorsScreen.viewModel';
import { IConquerorsScreenProps } from './ConquerorsScreen.type';
import LinearGradient from 'react-native-linear-gradient';

export const ConquerorsScreen = ({ navigation, route }: IConquerorsScreenProps) => {
    const { t, onGoBack, listConquerors, onNavigateDataPlayer } = useViewModel({
        navigation,
        route,
    });
    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('conquerors.title')}
                        />
                    </View>
                    <ScrollView>
                        <HeaderLogo text="נבחרת לאומית גברים" logo={AppImages.img_logo} />
                        <View style={[appStyles.package, { marginTop: getSize.m(0) }]}>
                            <LinearGradient
                                colors={[
                                    'rgba(255, 255, 255, 0.05)',
                                    'rgba(16, 32, 100, 0.05)',
                                    'rgba(59, 168, 225, 0.05)',
                                ]}
                                style={[appStyles.flex_row_space_center, styles.header]}
                            >
                                <Text style={styles.text_header}>{t('conquerors.name')}</Text>
                                <Text style={styles.text_header}>{t('conquerors.number')}</Text>
                            </LinearGradient>
                            <View>
                                {listConquerors.map(conquerors => {
                                    return (
                                        <TouchableOpacity
                                            onPress={onNavigateDataPlayer}
                                            style={[
                                                appStyles.flex_row_space_center,
                                                styles.content,
                                            ]}
                                            key={conquerors.id}
                                        >
                                            <View style={appStyles.flex_row_align}>
                                                <Avatar
                                                    source={conquerors.avt}
                                                    size={getSize.m(26)}
                                                    rounded
                                                />
                                                <Text style={styles.name_player}>
                                                    {conquerors.name}
                                                </Text>
                                            </View>
                                            <Text style={styles.number}>{conquerors.number}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
