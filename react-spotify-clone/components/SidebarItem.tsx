"use client"

import { IRoute } from "@/hooks/useRoutes";
import Link from 'next/link'
import { twMerge } from "tailwind-merge";

type SidebarItemProps = IRoute;

const SidebarItem: React.FC<SidebarItemProps> = ({ label, active, href, icon: Icon }) => {
    return (
        <Link
            data-testid="cy-sidebar-item"
            href={href}
            className={twMerge(`
                flex 
                flex-row 
                h-auto 
                items-center 
                w-full 
                gap-x-4 
                text-md 
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1
            `,
                active && "text-white"
            )}
        >
            <Icon
                data-testid="cy-sidebar-item-icon"
                size={26}
            />
            <p
                data-testid="cy-sidebar-item-p"
                className="truncate w-full"
            >
                {label}
            </p>
        </Link>
    )
}

export default SidebarItem

