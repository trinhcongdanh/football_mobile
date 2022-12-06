import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem<TValue>(key: string): Promise<TValue | null> {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
}

export async function setItem<TValue>(key: string, data: TValue): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(data));
}

export async function clearItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
}
