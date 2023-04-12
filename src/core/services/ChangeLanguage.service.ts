import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

class ChangeLanguage {
    async changedLanguage(key: string, data: string): Promise<void> {
        await AsyncStorage.getItem(key).then(async isRestarted => {
            console.log('isRestarted:' + isRestarted);
            if (isRestarted === null) {
                await AsyncStorage.setItem(key, data).then(() => {
                    console.log('call restart before: ');
                    setTimeout(() => {
                        RNRestart.Restart();
                    }, 150);
                    console.log('call restart after: ');
                });
            } else {
                console.log('isRestarted: here');
            }
        });
    }

    async removeLanguage(key: string): Promise<void> {
        await AsyncStorage.removeItem(key);
    }
}

export default new ChangeLanguage();
