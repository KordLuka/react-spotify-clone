"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome, HiSearch } from 'react-icons/hi';
import CircleButton from "./buttons/CircleButton";
import { BiSearch } from "react-icons/bi";
import Button from "./buttons/Button";

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
                    <CircleButton secondary icon={BiSearch} />
                </div>
                <div className="
                    flex
                    justify-between
                    items-center
                    gap-x-4
                ">
                    <>
                        <div>
                            <Button
                                onClick={() => { }}
                                className="
                                    bg-transparent
                                    text-neutral-300
                                    font-medium
                                "
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => { }}
                                className="
                                    bg-white
                                    px-6
                                    py-2
                                "
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header