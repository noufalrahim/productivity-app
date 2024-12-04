import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { CardBoxProps } from './types';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
import { Divider } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

export default function CardBox({ backgroundStyle, cardContents }: CardBoxProps) {
    return (
        <View
            style={[{
                backgroundColor: Colors.dark,
            }, styles.card]}
        >
            {
                cardContents.map((cardContent, index) => (
                    <View key={index}>
                        <Pressable style={styles.cardContent} onPress={cardContent.onClick}>
                            <View style={styles.innerContainer}>
                                <View style={styles.iconAndText}>
                                    {cardContent.startIcon}
                                    <Text style={[{ color: backgroundStyle.color }, styles.cardText]}>{cardContent.title}</Text>
                                </View>
                                <Entypo name={cardContent.trailIcon} size={18} color={backgroundStyle.color} />
                            </View>
                        </Pressable>
                        {
                            index !== cardContents.length - 1 && <Divider horizontalInset={true} />
                        }
                    </View>
                ))
            }
        </View>
    );
}
