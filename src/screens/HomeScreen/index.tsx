import React, { useRef } from 'react';
import { ScrollView, Text, useColorScheme, View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';
import SemicircleProgressBar from '../../components/ArcProgressBar';
import TaskCard from '../../components/TaskCard';
import AppBar from '../../components/AppBar';
import { TouchableRipple } from 'react-native-paper';
// import Icon from '../../public/assets/educational-icon.svg';
// import TASKDATA from '../../db/taskData.json';
// import CATEGORIES from '../../db/category.json';
// import { TaskStatisticsType, TaskType } from './type';
// import { isValidCategory } from '../../utils/ValidateType';
import { getData } from '../../db/api/readData';
import { HomeScreenNavigationProp } from '../../navigators/type';
import BottomSheetComponent from '../../components/BottomSheet';
// import { saveData } from '../../db/api/saveData';
import BottomSheet from '@gorhom/bottom-sheet';

export default function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
    const isDarkMode = useColorScheme() !== 'dark';
    const bottomSheetRef = useRef<BottomSheet>(null);

    const [taskData, setTaskData] = React.useState([]);
    const [taskSatistics, setTaskSatistics] = React.useState({
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

    // const taskData: TaskType[] = TASKDATA.data.tasks.map(task => {
    //     if (isValidCategory(task.category)) {
    //         return { ...task, category: task.category };
    //     } else {
    //         console.error(`Invalid category for task ${task.id}`);
    //         return { ...task, category: 'PERSONAL' };
    //     }
    // });

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

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await getData('tasks');
            console.log('log/HomeScreen/info: Data fetched successfully ', response);
            if (response.code === 200) {
                setTaskData(response.data.data.tasks);
                setTaskSatistics({
                    totalTasks: response.data.data.total,
                    completedTasks: response.data.data.completed,
                    pendingTasks: response.data.data.pending,
                });
            } else {
                console.error('log/HomeScreen/error: Error fetching data');
            }
        };

        fetchData();
    }, []);

    const openBottomSheet = () => {
        console.log('log/HomeScreen/info: Opening bottom sheet');
        bottomSheetRef.current?.expand();
        bottomSheetRef.current?.close();
    };

    return (
        <>
            <View style={[backgroundStyle, styles.container]}>
                <AppBar backgroundStyle={backgroundStyle} title="" showBackButton={false} trailIcons={[{
                    title: 'menu',
                    onClick: () => navigation.navigate('SettingsScreen'),
                }]} />
                <ScrollView>
                    <SemicircleProgressBar progress={progress} statistics={taskSatistics} />
                    <View style={styles.taskContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={[styles.text, { color: backgroundStyle.color }]}>Pending Tasks</Text>
                            <View style={[styles.line, { backgroundColor: backgroundStyle.color }]} />
                            <Text style={[styles.number, { color: backgroundStyle.color }]}>{taskSatistics.pendingTasks}</Text>
                        </View>
                        {taskData.map((task, index) => (
                            <TaskCard key={index} backgroundStyle={backgroundStyle} task={task} />
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <TouchableRipple style={styles.innerContainer} onPress={openBottomSheet} rippleColor="rgba(0, 0, 0, .32)">
                        <Text style={[styles.footerText, { color: backgroundStyle.primary }]}>Add a New Task</Text>
                    </TouchableRipple>
                </View>
                <BottomSheetComponent bottomSheetRef={bottomSheetRef} />
            </View>
        </>
    );
}
