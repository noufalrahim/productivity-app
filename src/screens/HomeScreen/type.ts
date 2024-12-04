export type CategoryNames = 'EDUCATION' | 'HEALTH' | 'HOUSE' | 'WORK' | 'PERSONAL';

export type TaskType = {
    id: string;
    title: string;
    description: string;
    allDay: boolean;
    dueTimeStamp: number;
    completed: boolean;
    category: CategoryNames;
}

export type TaskListType = {
    id: string;
    total: number;
    pending: number;
    completed: number;
    tasks: TaskType;
    createdAt: number;
    updatedAt: number;
}

export type SubCategoryType = {
    id: string;
    title: string;
}


export type CategoryType = {
    id: string;
    title: string;
    icon: string;
    subCategories: SubCategoryType[];
}

export type TaskStatisticsType = {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
};
