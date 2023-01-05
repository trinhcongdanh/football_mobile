import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import './app/i18n/EnStrings';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigator } from './app/routes/RootNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { appStyles } from './app/utils/constants/appStyles';
import { store, persistor } from './store/store';
import 'react-native-get-random-values';

const App = (props: any) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <NavigationContainer>
                        <View style={appStyles.flex}>
                            <RootNavigator />
                        </View>
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
