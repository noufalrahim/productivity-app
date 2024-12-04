import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing data', error);
    }
};
