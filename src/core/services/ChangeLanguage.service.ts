import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

class ChangeLanguage {
    changedLanguage(key: string, data: string): void {
        AsyncStorage.getItem(key).then(isRestarted => {
            console.log('isRestarted:' + isRestarted);
            if (isRestarted === null) {
                AsyncStorage.setItem(key, data).then(() => {
                    console.log('call restart before: ');
                    RNRestart.Restart();
                    console.log('call restart after: ');
                });
            } else {
                console.log('isRestarted: here');
            }
        });
    }
}

export default new ChangeLanguage();
