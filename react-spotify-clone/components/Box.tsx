"use client"

import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
    return (
        <div
            data-testid="cy-box"
            className={
                twMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
        `,
                    className
                )}>
            {children}
        </div>
    )
}

export default Box