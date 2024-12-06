import { TaskType } from '../../screens/HomeScreen/type';
import { getData } from './readData';
import { saveData } from './saveData';

export const updateData = async (key: string, updatedData: TaskType) => {
    try {
        let data = await getData(key);
        const taskData = data.data.taskData.tasks;
        // const naiveData = data.data;
        console.log('log/updateData: naiveData', data);
        // console.log('log/updateData: data', data);
        console.log('log/updateData: taskData', taskData);
        // if (true) {
        //     data = { ...taskData, ...updatedData };
        //     // const postData = {
        //     //     ...data,
        //     //     data: {
        //     //     }
        //     // };
        //     await saveData(key, data);
        //     return {
        //         code: 200,
        //         success: true,
        //         message: 'Data updated successfully',
        //     };
        // }
    } catch (error) {
        console.error('log/updateData/error: Error updating data', error);
        return {
            code: 500,
            success: false,
            message: 'Failed to update data',
        };
    }
};
