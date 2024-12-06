import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { TimeCardProp } from './types';
import DatePicker from 'react-native-date-picker';

export default function TimeCard({ backgroundStyle, time, setTime, open, setOpen }: TimeCardProp) {
    const extractTime = (time: Date) => {
        const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
        return {
            hours: time.getHours() % 12,
            minutes: time.getMinutes(),
            ampm: ampm,
        };
    };

    extractTime(time);

    const handleTimeChange = () => {
        setOpen(true);
    };

    return (
        <>
            <Pressable style={[styles.cardContainer, { backgroundColor: backgroundStyle.primary }]} onPress={handleTimeChange}>
                <View style={styles.dateInput}>
                    <Text style={[styles.text, { color: backgroundStyle.color }]}>Time</Text>
                    <Text style={[styles.text, { color: backgroundStyle.color }]}>{extractTime(time).hours}:{extractTime(time).minutes} {extractTime(time).ampm}</Text>
                </View>
            </Pressable>
            <DatePicker
                modal
                mode="time"
                open={open}
                date={time}
                onConfirm={(timeInp) => {
                    setOpen(false);
                    setTime(timeInp);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </>
    );
}
