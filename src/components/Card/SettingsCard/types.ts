import { ReactNode } from 'react';

export type SettingsCardContentType = {
    title: string;
    onClick: () => void;
    startIcon: ReactNode;
    trailIcon: string;
};

export interface SettingsCardBoxProps {
    backgroundStyle: {
        backgroundColor: string;
        color: string;
    },
    cardContents: SettingsCardContentType[];
}
