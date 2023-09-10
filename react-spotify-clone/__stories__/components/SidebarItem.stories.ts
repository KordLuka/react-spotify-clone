import type { Meta, StoryObj } from "@storybook/react";

import SidebarItem from "../../components/SidebarItem";
import { exampleRouteElement } from "../../__utils__/sidebar.const";

const meta = {
  title: "Components/SidebarItem",
  component: SidebarItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    ...exampleRouteElement,
  },
};

export const Inactive: Story = {
  args: {
    ...exampleRouteElement,
    active: false,
  },
};
