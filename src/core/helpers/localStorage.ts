import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
    async getItem<TValue>(key: string): Promise<TValue | null> {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    }

    async setItem<TValue>(key: string, data: TValue): Promise<void> {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    }

    async clearItem(key: string): Promise<void> {
        await AsyncStorage.removeItem(key);
    }
}
export default new LocalStorage();
