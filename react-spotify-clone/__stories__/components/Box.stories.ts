import type { Meta, StoryObj } from "@storybook/react";

import Box from "../../components/Box";

const meta = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: {
        type: "select",
        options: {
          default: [],
          withChild: ["hi"],
        },
      },
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "List of songs",
  },
};

export const WithExtraClasses: Story = {
  args: {
    children: "List of songs with blue background",
    className: "px-4 py-8 bg-blue-500",
  },
};
