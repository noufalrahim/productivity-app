import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AllCategoriesProps } from './types';
import { styles } from './styles';
import CategoryCard from '../../Card/CategoryCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CATEGORIES from '../../../db/category.json';
import { CategoryNames } from '../../../screens/HomeScreen/type';

export default function AllCategories({ onClose, backgroundStyle, setRenderItem, setChosenCategory }: AllCategoriesProps) {

    const categoriesData = CATEGORIES.categories.map(category => ({
        ...category,
        icon: category.icon as CategoryNames,
    }));

    return (
        <View style={styles.innerContainer}>
            <View style={styles.header}>
                <Text style={[{ color: backgroundStyle.color }, styles.headerText]}>Add to</Text>
                <Pressable style={[{ backgroundColor: backgroundStyle.primary }, styles.iconContainer]} onPress={onClose}>
                    <Ionicons name="close" size={20} color={backgroundStyle.color} />
                </Pressable>
            </View>
            {
                categoriesData.map((category, index) => (
                    <CategoryCard
                        key={index}
                        backgroundStyle={backgroundStyle}
                        category={category}
                        setRenderItem={setRenderItem}
                        setChosenCategory={setChosenCategory}
                    />
                ))
            }
        </View>
    );
}
