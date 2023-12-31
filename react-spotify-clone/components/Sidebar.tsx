"use client"

import useRoutes from "@/hooks/useRoutes";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types/song";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
    children: React.ReactNode;
    songs: Song[]
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs = [] }) => {
    const { routes } = useRoutes();
    const player = usePlayer();
    return (
        <aside
            className={twMerge(`
                        flex 
                        h-full
                        `,
                player.activeId && 'h-[calc(100%-80px)]'
            )}
        >
            <div className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
            ">
                <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-6
                   ">
                        {routes.map(route => (
                            <SidebarItem
                                key={route.label}
                                {...route}
                            />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library songs={songs} />
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </aside>
    )
}

export default Sidebar