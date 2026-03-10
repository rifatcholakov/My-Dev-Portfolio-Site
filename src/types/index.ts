import type { ReactNode } from 'react';

export interface Project {
    title: string;
    github: string;
    image: string;
}

export interface SkillItem {
    title: string;
    icon: ReactNode;
    items: string[];
}

export interface Testimonial {
    text: string;
    author: string;
    role: string;
}

export type Theme = 'light' | 'dark';
