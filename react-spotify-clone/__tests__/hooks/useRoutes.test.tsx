import useRoutes, { RoutePath } from "@/hooks/useRoutes";
import { renderHook } from "@testing-library/react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
it("initial and success state", async () => {
  const { result } = renderHook(() => useRoutes());
  expect(result.current).toMatchObject({
    routes: [
      {
        label: "Home",
        href: RoutePath.DEFAULT,
        icon: HiHome,
        active: true,
      },
      {
        label: "Search",
        href: RoutePath.SEARCH,
        icon: BiSearch,
        active: false,
      },
    ],
  });
});

