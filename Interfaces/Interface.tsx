import { MotionValue } from "motion";
import { Ref } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
};

export interface HeroSectionProps {
    heroReference: Ref<HTMLDivElement>;
    opacity: MotionValue<number>;
    scale: MotionValue<number>;
};

export interface VideosType {
    id: string;
    title: string;
    videoUrl: string;
    thumbnailUrl: string;
    type: 'youtube' | 'instagram' | 'mp4';
    createdAt: string;
};
