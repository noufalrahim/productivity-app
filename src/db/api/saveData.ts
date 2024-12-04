import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return {
            code: 200,
            success: true,
            message: 'Data saved successfully',
        };
    }
    catch (error) {
        console.error('log/saveData/error: ', error);
        return {
            code: 500,
            success: false,
            message: 'Failed to save data',
        };
    }
};
