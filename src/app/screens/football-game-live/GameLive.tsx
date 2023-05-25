import { appIcons } from '@football/app/assets/icons/appIcons';
import { BackGround } from '@football/app/components/background/BackGround';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { useViewModel } from '@football/app/screens/football-game-live/GameLive.viewModel';
import styles from '@football/app/screens/football-game-live/GameLive.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { IGameLiveProps } from '@football/app/screens/football-game-live/GameLive.type';

export const GameLive = ({ navigation, route }: IGameLiveProps) => {
    const { t, onGoBack } = useViewModel({ navigation, route });
    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={[appStyles.container]}>
                    <View style={{ marginTop: getSize.m(16) }}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('game_live.title')}
                        />
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(34) }}>
                    <ScrollView>
                        <View style={styles.terms_container}>
                            <View></View>
                        </View>
                    </ScrollView>
                </View>
            </BackGround>
        </View>
    );
};
