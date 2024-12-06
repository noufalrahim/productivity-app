import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { CategoryCardProps } from './types';
import Entypo from 'react-native-vector-icons/Entypo';
import { Divider } from 'native-base';
import { Icon } from '../../../utils/ExtractIcon';
export default function CategoryCard({ backgroundStyle, category, setRenderItem, setChosenCategory }: CategoryCardProps) {

    const handleClick = () => {
        setChosenCategory({ id: category.icon, label: category.title });
        setRenderItem('AddNewTask');
    };

    return (
        <Pressable style={[styles.container, { backgroundColor: backgroundStyle.primary }]} onPress={handleClick}>
            <View style={styles.iconAndText}>
                <View style={[styles.iconContainer, {
                    backgroundColor: backgroundStyle.secondary,
                }]}>
                    <Icon name={category.icon} size={20} />
                </View>
                <View>
                    <Text style={[styles.headerText, { color: backgroundStyle.color }]}>{category.title}</Text>
                    <View style={styles.subCategories}>
                        {category.subCategories.map((subCategory, index) => (
                            <View style={styles.subCategoryContainer} key={index}>
                                <Text style={[styles.subHeaderText, { color: backgroundStyle.color }]}>{subCategory.title}</Text>
                                {index !== category.subCategories.length - 1 && <Divider orientation="vertical" height={3} />}
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <Pressable style={[styles.endContainer, { backgroundColor: backgroundStyle.primary }]} onPress={() => console.log('log/TaskCard/func: ')}>
                <Entypo name="chevron-small-right" size={20} color={backgroundStyle.color} />
            </Pressable>
        </Pressable>
    );
}

