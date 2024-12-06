import React, { useState } from 'react';
import { styles } from './styles';
import { Pressable, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AddNewTaskProps } from './types';
import { Icon } from '../../../utils/ExtractIcon';
import { TextInput } from 'react-native-paper';
import DateCard from '../../Card/DateCard';
import TimeCard from '../../Card/TimeCard';
import { TimestampCreator } from '../../../utils/TimestampCreator';
import { TaskType } from '../../../screens/HomeScreen/type';
import { saveData } from '../../../db/api/saveData';

export default function AddNewTask({ backgroundStyle, onClose, category, fetchData, respData }: AddNewTaskProps) {
    const [date, setDate] = useState(new Date());
    const [openDate, setOpenDate] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [time, setTime] = useState(new Date());
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isAllDay, setIsAllDay] = React.useState(false);

    const handleAddTask = async () => {
        const timestamp = TimestampCreator(date, time);
        console.log('log/AddNewTask/func: ', timestamp);

        const newTask: TaskType = {
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
            title: title,
            description: description,
            allDay: isAllDay,
            dueTimeStamp: timestamp,
            completed: false,
            category: category.id,
        };
        if (respData) {
            console.log('log/AddNewTask/func: ', respData);
            respData.pending += 1;
            respData.total += 1;
            respData.tasks.push(newTask);
            console.log('log/AddNewTask/func: ', respData);
            // respData.push(newTask);
            const postData = {
                taskData: respData,
            };
            const response = await saveData('tasks', postData);
            console.log('log/AddNewTask/func: Data saved successfully ', response);
            fetchData();
            onClose();
        }
    };

    return (
        <View style={styles.innerContainer}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={[{ color: backgroundStyle.color }, styles.headerText]}>New Task</Text>
                    <Text style={[{ color: backgroundStyle.color }, styles.subHeaderText]}>This task will be added to {category.label}</Text>
                </View>
                <Pressable style={[{ backgroundColor: backgroundStyle.primary }, styles.iconHeaderContainer]} onPress={onClose}>
                    <Ionicons name="close" size={20} color={backgroundStyle.color} />
                </Pressable>
            </View>
            <View style={styles.body}>
                <View style={styles.innerBodySection}>
                    <View style={[styles.iconBodyContainer, { backgroundColor: backgroundStyle.primary }]}>
                        <Icon name={category.id} size={40} />
                    </View>
                    <TextInput
                        mode="flat"
                        style={[{ backgroundColor: backgroundStyle.secondary }, styles.input]}
                        label="Title" underlineColor={backgroundStyle.primary}
                        activeUnderlineColor={backgroundStyle.primary}
                        cursorColor={backgroundStyle.primary}
                        textColor={backgroundStyle.color}
                        onChangeText={(text) => setTitle(text)}
                        value={title}
                    />
                </View>
                <View>
                    <TextInput
                        mode="flat"
                        style={[{ backgroundColor: backgroundStyle.secondary }, styles.textArea]}
                        label="Description (optional)" underlineColor={backgroundStyle.primary}
                        activeUnderlineColor={backgroundStyle.primary}
                        cursorColor={backgroundStyle.primary}
                        textColor={backgroundStyle.color}
                        multiline={true}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                </View>
                <DateCard backgroundStyle={backgroundStyle} date={date} setDate={setDate} open={openDate} setOpen={setOpenDate} isAllDay={isAllDay} setIsAllDay={setIsAllDay} />
                <TimeCard backgroundStyle={backgroundStyle} time={time} setTime={setTime} open={openTime} setOpen={setOpenTime} />
            </View>
            <Pressable onPress={handleAddTask}>
                <View style={[styles.button, { backgroundColor: backgroundStyle.color }]}>
                    <Text style={[styles.buttonText, { color: backgroundStyle.backgroundColor }]}>Add Task</Text>
                </View>
            </Pressable>
        </View>
    );
}
