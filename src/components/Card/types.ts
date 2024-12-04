import { ReactNode } from 'react';

export type CardContentTypes = {
    title: string;
    onClick: () => void;
    startIcon: ReactNode;
    trailIcon: string;
};

export interface CardBoxProps {
    backgroundStyle: {
        backgroundColor: string;
        color: string;
    },
    cardContents: CardContentTypes[];
}
