import { CategoryNames } from '../screens/HomeScreen/type';

export const isValidCategory = (category: string): category is CategoryNames => {
    return ['EDUCATION', 'HEALTH', 'HOUSE', 'WORK', 'PERSONAL'].includes(category);
};
