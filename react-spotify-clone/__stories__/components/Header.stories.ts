import type { Meta, StoryObj } from "@storybook/react";

import Header from "../../components/Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary header",
  },
};

export const Styled: Story = {
  args: {
    children: "Primary header",
    className: "px-8 py-4 bg-gradient-to-r from-indigo-500",
  },
};
