import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { DateCardProps } from './types';
import { Divider } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { theme } from '../../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';

export default function DateCard({ backgroundStyle, date, setDate, open, setOpen, isAllDay, setIsAllDay }: DateCardProps) {
    const onToggleSwitch = () => setIsAllDay(!isAllDay);
    const handleCalendarClick = () => {
        setOpen(true);
    };

    return (
        <View style={[styles.cardContainer, { backgroundColor: backgroundStyle.primary }]}>
            <View style={styles.dateInput}>
                <View style={styles.iconAndText}>
                    <Ionicons name="calendar" size={20} color={backgroundStyle.color} />
                    <Text style={[styles.text, { color: backgroundStyle.color }]}>Date</Text>
                </View>
                <Pressable style={styles.iconAndText} onPress={handleCalendarClick}>
                    <Ionicons name="chevron-down-sharp" size={20} color={backgroundStyle.color} />
                    <Text style={[styles.text, { color: backgroundStyle.color }]}>{
                        isAllDay ? 'All Day' :
                        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
                    }</Text>
                </Pressable>
            </View>
            <Divider />
            <View style={styles.dateInput}>
                <Text style={[styles.text, { color: backgroundStyle.color }]}>Remind me all day</Text>
                <Switch value={isAllDay} onValueChange={onToggleSwitch} color={theme.colors.toggleSwitchColor} />
            </View>
            <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={(dateInp: Date) => {
                    setOpen(false);
                    setDate(dateInp);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </View>
    );
}
