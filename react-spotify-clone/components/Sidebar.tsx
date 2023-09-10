"use client"

import useRoutes from "@/hooks/useRoutes";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const { routes } = useRoutes();
    return (
        <aside className="
            flex h-full
       ">
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
                    <Library />
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </aside>
    )
}

export default Sidebar