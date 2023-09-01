import React, { ReactNode } from 'react';
export declare type ButtonVariant = 'primary' | 'secondary' | 'black' | 'light' | 'outline';
interface ButtonProps {
    children?: ReactNode;
    label: string;
    variant: ButtonVariant;
    onClick?: () => void;
    withArrow?: boolean;
    fullwidth?: boolean;
}
export declare const Button: ({ label, variant, onClick, withArrow, fullwidth, }: ButtonProps) => React.JSX.Element;
export {};
