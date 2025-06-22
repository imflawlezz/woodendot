export interface FurnitureCardProps {
    mark?: string;
    title: string;
    subtitle: string;
    price: number;
    description: string;
    additions?: string[];
    awards?: string[];
    imageURL: string;
    link?: string;
    className?: string;
    variant?: 'left' | 'right';
}