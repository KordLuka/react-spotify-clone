import type { Meta, StoryObj } from "@storybook/react";

import ListItem from "../../components/ListItem";

const meta = {
  title: "Components/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    name: "Liked songs",
    href: "liked",
  },
};
