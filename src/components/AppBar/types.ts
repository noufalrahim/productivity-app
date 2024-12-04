export interface AppBarProps {
    title: string;
    backgroundStyle: {
        backgroundColor: string;
        color: string;
    },
    showBackButton?: boolean;
    trailIcons?: {
        title: string;
        onClick: () => void;
    }[];
    navigation?: any;
}
