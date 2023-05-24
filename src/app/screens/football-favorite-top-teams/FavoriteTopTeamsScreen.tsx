import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { FavoriteTopTeam } from './components/FavoriteTopTeam';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useViewModel } from './FavoriteTopTeamsScreen.viewModel';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';
import { getSize } from '@football/app/utils/responsive/scale';

export const FavoriteTopTeamsScreen = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        selectedFavTopTeams,
        profile,
        getProfile,
        topTeams,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            {profile.success === false && (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            )}
            <FavoriteTopTeam
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                handleSelected={(item: TopTeamModel) => {
                    handleSelected(item);
                }}
                topTeams={topTeams}
                favSelected={selectedFavTopTeams}
                title={t('favorite_top_team.title')}
                placeholder={t('favorite_top_team.place_holder')}
                chosen={t('favorite_top_team.chosen')}
                button={t('favorite_top_team.button')}
                number={2}
                onIndex={2}
            />
        </View>
    );
};
