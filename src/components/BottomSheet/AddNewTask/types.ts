import { CategoryNames, TaskListType } from '../../../screens/HomeScreen/type';

export interface AddNewTaskProps {
    backgroundStyle: {
        backgroundColor: string;
        color: string;
        primary: string;
        secondary: string;
    };
    category: {
        id: CategoryNames;
        label: string;
    };
    onClose: () => void;
    fetchData: () => void;
    respData: TaskListType | undefined;
}
