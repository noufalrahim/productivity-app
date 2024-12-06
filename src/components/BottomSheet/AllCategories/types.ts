import { CategoryNames } from "../../../screens/HomeScreen/type";

export interface AllCategoriesProps {
    onClose: () => void;
    backgroundStyle: {
        backgroundColor: string;
        color: string;
        primary: string;
        secondary: string;
    },
    setRenderItem: (item: string) => void;
    setChosenCategory: (category: { id: CategoryNames, label: string }) => void;
}
