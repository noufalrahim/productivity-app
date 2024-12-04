import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { TaskCardProps } from './types';
import { styles } from './styles';
import { ExtractTime } from '../../utils/ExtractTime';
import { ExtractDay } from '../../utils/ExtractDay';
import Entypo from 'react-native-vector-icons/Entypo';
import EducationIcon from '../../public/assets/educational-icon.svg';
import HealthIcon from '../../public/assets/health-icon.svg';
import HouseIcon from '../../public/assets/house-icon.svg';
import PersonalIcon from '../../public/assets/personal-icon.svg';
import WorkIcon from '../../public/assets/work-icon.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TaskCard({ backgroundStyle, task }: TaskCardProps) {
    return (
        <View style={[styles.container, { backgroundColor: backgroundStyle.secondary }]}>
            <View style={styles.iconAndText}>
                <View style={[styles.iconContainer, {
                    backgroundColor: backgroundStyle.primary,
                }]}>
                    <Icon name={task.category} size={20} />
                </View>
                <View style={[{
                    backgroundColor: backgroundStyle.secondary,
                }]}>
                    <Text style={[styles.headerText, { color: backgroundStyle.color }]}>{task.title}</Text>
                    <View style={styles.timestampText}>
                        <Text style={[styles.subHeaderText, { color: backgroundStyle.color }]}>{ExtractTime(task.dueTimeStamp)} </Text>
                        <Entypo name={'dot-single'} size={18} color={backgroundStyle.color} />
                        <Text style={[styles.subHeaderText, { color: backgroundStyle.color }]}>{task.allDay ? 'All Day' : ExtractDay(task.dueTimeStamp)}</Text>
                    </View>
                </View>
            </View>
            <Pressable style={[styles.endContainer, { backgroundColor: backgroundStyle.primary }]} onPress={() => console.log('log/TaskCard/func: ', task)}>
                <Text style={[{ color: backgroundStyle.color }]}>Done</Text>
            </Pressable>
        </View>
    );
}

const Icon = ({name, size}: {name: string, size: number}) => {
    switch (name) {
        case 'EDUCATION':
            return <EducationIcon width={size} height={size} />;
        case 'HEALTH':
            return <HealthIcon width={size} height={size} />;
        case 'HOUSE':
            return <HouseIcon width={size} height={size} />;
        case 'PERSONAL':
            return <PersonalIcon width={size} height={size} />;
        case 'WORK':
            return <WorkIcon width={size} height={size} />;
        default:
            return <MaterialIcons name="task-alt" size={size} color="red" />;
    }
};
