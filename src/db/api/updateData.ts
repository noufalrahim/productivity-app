import { getData } from './readData';
import { saveData } from './saveData';

export const updateData = async ({ key, updatedData }: { key: string, updatedData: any }) => {
    try {
        let data = await getData(key);
        if (data) {
            data = { ...data, ...updatedData };
            await saveData(key, data);
        }
    } catch (error) {
        console.error('log/updateData/error: Error updating data', error);
    }
};
