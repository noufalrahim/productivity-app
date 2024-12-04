import { TaskType } from '../../screens/HomeScreen/type';

export interface TaskCardProps {
    backgroundStyle: {
        backgroundColor: string;
        color: string;
        primary: string;
        secondary: string;
    };
    task: TaskType;
}
