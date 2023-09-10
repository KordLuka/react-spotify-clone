import Button from "../../../components/buttons/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: `bg-white px-6 py-2`,
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    className: `bg-transparent text-neutral-300 font-medium`,
    children: "Secondary",
  },
};

export const DisabledButton: Story = {
  args: {
    className: `bg-transparent text-neutral-300 font-medium`,
    children: "DisabledButton",
    disabled: true,
  },
};

export const StyledButton: Story = {
  args: {
    className: "bg-blue-500 text-white font-semibold hover:bg-blue-700",
    children: "Styled Button",
  },
};
