import React, { useState } from 'react';
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import SemicircleProgressBar from '../../components/ArcProgressBar';
import TaskCard from '../../components/Card/TaskCard';
import AppBar from '../../components/AppBar';
import { TouchableRipple } from 'react-native-paper';
// import Icon from '../../public/assets/educational-icon.svg';
import TASKDATA from '../../db/taskData.json';
// import CATEGORIES from '../../db/category.json';
import { TaskListType, TaskStatisticsType, TaskType } from './type';
// import { isValidCategory } from '../../utils/ValidateType';
import { getData } from '../../db/api/readData';
import { HomeScreenNavigationProp } from '../../navigators/type';
import { useDisclose } from 'native-base';
import BottomSheetComponent from '../../components/BottomSheet';
import { saveData } from '../../db/api/saveData';
// import { isValidCategory } from '../../utils/ValidateType';

export default function HomeScreen({navigation}: {navigation: HomeScreenNavigationProp}) {
    const isDarkMode = useColorScheme() !== 'dark';
    const { isOpen, onOpen, onClose } = useDisclose();
    const [respData, setRespData] = useState<TaskListType>();
    const [taskData, setTaskData] = React.useState<TaskType[]>([]);
    const [taskSatistics, setTaskSatistics] = React.useState<TaskStatisticsType>({
        totalTasks: 0,
        completedTasks: 0,
        pendingTasks: 0,
    });
    const [progress, setProgress] = React.useState(0);
    const backgroundStyle = {
        backgroundColor: isDarkMode ? theme.colors.black : theme.colors.white,
        color: isDarkMode ? theme.colors.lighter : theme.colors.darker,
        primary: isDarkMode ? theme.colors.dark : theme.colors.light,
        secondary: isDarkMode ? theme.colors.darker : theme.colors.lighter,
    };

    // // const taskDatas: TaskType[] = TASKDATA.data.tasks.map(task => {
    // //     if (isValidCategory(task.category)) {
    // //         return { ...task, category: task.category };
    // //     } else {
    // //         console.error(`Invalid category for task ${task.id}`);
    // //         return { ...task, category: 'PERSONAL' };
    // //     }
    // // });

    // React.useEffect(() => {
    //     const postData = async () => {
    //         const response = await saveData('tasks', TASKDATA);
    //         console.log('log/HomeScreen/info: Data saved successfully ', response);
    //     };
    //     postData();
    // }, []);

    React.useEffect(() => {
        const calculateProgress = () => {
            if (taskSatistics.totalTasks === 0) {
                setProgress(0);
            } else {
                const progressData = (taskSatistics.completedTasks / taskSatistics.totalTasks) * 100;
                setProgress(progressData);
            }
        };
        calculateProgress();
    }, [taskSatistics]);

    const fetchData = async () => {
        const response = await getData('tasks');
        console.log('log/HomeScreen/info: Data', response.data);
        if (response.code === 200) {
            setTaskData(response.data.taskData.tasks);
            setTaskSatistics({
                totalTasks: response.data.taskData.total,
                completedTasks: response.data.taskData.completed,
                pendingTasks: response.data.taskData.pending,
            });
            setRespData(response.data.taskData);
        } else {
            console.error('log/HomeScreen/error: Error fetching data');
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={[backgroundStyle, styles.container]}>
            <AppBar backgroundStyle={backgroundStyle} title="" showBackButton={false} trailIcons={[{
                title: 'menu',
                onClick: () => navigation.navigate('SettingsScreen'),
            }]}/>
            <ScrollView>
                <SemicircleProgressBar progress={progress} statistics={taskSatistics} />
                <View style={styles.taskContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={[styles.text, { color: backgroundStyle.color }]}>Pending Tasks</Text>
                        <View style={[styles.line, { backgroundColor: backgroundStyle.color }]} />
                        <Text style={[styles.number, { color: backgroundStyle.color }]}>{taskSatistics.pendingTasks}</Text>
                    </View>
                    {taskData && taskData.map((task, index) => (
                        <TaskCard key={index} backgroundStyle={backgroundStyle} task={task}/>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <TouchableRipple style={styles.innerContainer} onPress={onOpen} rippleColor="rgba(0, 0, 0, .32)">
                    <Text style={[styles.footerText, {
                        color: backgroundStyle.primary,
                    }]}>Add a New Task</Text>
                </TouchableRipple>
            </View>
            <BottomSheetComponent respData={respData} onClose={onClose} isOpen={isOpen} backgroundStyle={backgroundStyle} fetchData={fetchData}/>
        </View>
    );
}
