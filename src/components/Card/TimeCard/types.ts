export interface TimeCardProp {
    backgroundStyle: {
        backgroundColor: string;
        color: string;
        primary: string;
        secondary: string;
    };
    time: Date;
    setTime: (time: Date) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}
