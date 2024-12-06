import { CategoryNames, TaskListType } from '../../screens/HomeScreen/type';

export interface BottomSheetProps {
    onClose: () => void;
    isOpen: boolean;
    backgroundStyle: {
        backgroundColor: string;
        color: string;
        primary: string;
        secondary: string;
    },
    fetchData: () => void;
    respData: TaskListType | undefined;
}

export type ChosenCategoryType = {
    id: CategoryNames;
    label: string;
}
