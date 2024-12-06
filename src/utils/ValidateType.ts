import { CategoryNames } from '../screens/HomeScreen/type';

export const isValidCategory = (category: string): category is CategoryNames => {
    return ['EDUCATIONAL', 'HEALTH', 'HOUSE', 'WORK', 'PERSONAL'].includes(category);
};
