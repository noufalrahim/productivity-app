import { CategoryNames } from '../../../screens/HomeScreen/type';

export type SubCategoryType = {
    id: string,
    title: string,
}
export interface CategoryCardProps {
    backgroundStyle: {
        primary: string;
        secondary: string;
        color: string;
    };
    category: {
        id: string,
        title: string,
        icon: CategoryNames,
        subCategories: SubCategoryType[]
    },
    setRenderItem: (item: string) => void;
    setChosenCategory: (category: { id: CategoryNames, label: string }) => void;
}
