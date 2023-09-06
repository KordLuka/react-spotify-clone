"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi';
import CircleButton from "./buttons/CircleButton";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = (
    { children, className }
) => {
    const router = useRouter();

    const handleLogout = () => { }
    return (
        <div className={twMerge(`
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `,
            className
        )}>
            <div className="
                w-full
                mb-4
                flex
                items-center
                justify-between
            ">
                <div className="
                    hidden
                    md:flex
                    gap-x-2
                    items-center
                ">
                    <CircleButton
                        type="button"
                        icon={RxCaretLeft}
                    />
                    <CircleButton
                        type="button"
                        icon={RxCaretRight}
                    />
                </div>
                <div className="
                    flex
                    md:hidden
                    gap-x-2
                    items-center

                ">
                    <CircleButton secondary icon={HiHome} />
                </div>
            </div>
        </div>
    )
}

export default Header