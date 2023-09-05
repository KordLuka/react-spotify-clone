import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { IconType } from "react-icons";

export enum RoutePath {
  DEFAULT = "/",
  SEARCH = "/search",
}

export interface IRoute {
  label: string;
  href: string;
  icon: IconType;
  active: boolean;
}

const useRoutes = (): { routes: IRoute[] } => {
  const pathname = usePathname();
  const isSearchPathname = pathname === RoutePath.SEARCH;
  const routes: IRoute[] = useMemo(
    () => [
      {
        label: "Home",
        href: RoutePath.DEFAULT,
        icon: HiHome,
        active: !isSearchPathname,
      },
      {
        label: "Search",
        href: RoutePath.SEARCH,
        icon: BiSearch,
        active: isSearchPathname,
      },
    ],
    [isSearchPathname]
  );

  return {
    routes,
  };
};

export default useRoutes;
