"use client"

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi';
import CircleButton from "./buttons/CircleButton";
import { BiSearch } from "react-icons/bi";
import Button from "./buttons/Button";
import useAuthModal from "./../hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "./../hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = (
    { children, className }
) => {
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const { onOpen } = useAuthModal();
    const { user } = useUser()

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut()
        router.refresh();

        if (error) {
            toast.error(error.message)
        } else {
            toast.success('logged out')
        }
    }

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
                    {!user ? (
                        <>
                            <div>
                                <Button
                                    onClick={onOpen}
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
                                    onClick={onOpen}
                                    className="
                                    bg-white
                                    px-6
                                    py-2
                                "
                                >
                                    Log in
                                </Button>
                            </div>
                        </>)
                        :
                        (
                            <div className="
                            flex
                            gap-x-4
                            items-center
                        ">
                                <Button
                                    className="
                                     bg-white px-6 py-2
                                    "
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                                <Button
                                    onClick={() => router.push('/account')}
                                    className="
                                        bg-white
                                    "
                                >
                                    <FaUserAlt />
                                </Button>
                            </div>
                        )}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header