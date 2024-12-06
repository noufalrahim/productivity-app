export interface DateCardProps {
    backgroundStyle: {
        backgroundColor: string;
        color: string;
        primary: string;
        secondary: string;
    },
    date: Date;
    setDate: (date: Date) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    isAllDay: boolean;
    setIsAllDay: (isAllDay: boolean) => void;
}
