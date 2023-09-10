import { IRoute } from "@/hooks/useRoutes";
import { BiSearch } from "react-icons/bi";

export const exampleRouteElement: IRoute = {
  label: "Search",
  icon: BiSearch,
  active: true,
  href: "/search",
};
