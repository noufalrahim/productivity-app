import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return {
        code: 200,
        data: JSON.parse(value),
        message: 'Data retrieved successfully',
      };
    }
    return {
      code: 404,
      data: null,
      message: 'Data not found',
    };
  } catch (error) {
    console.error('log/readData/error: Error retrieving data', error);
    return {
      code: 500,
      data: null,
      message: 'Error retrieving data',
    };
  }
};
