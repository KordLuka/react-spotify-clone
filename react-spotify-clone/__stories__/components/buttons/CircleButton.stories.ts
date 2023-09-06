import CircleButton from "../../../components/buttons/CircleButton";
import type { Meta, StoryObj } from "@storybook/react";
import { RxBookmark } from "react-icons/rx";

const meta = {
  title: "Components/CircleButton",
  component: CircleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "button",
    icon: RxBookmark,
    onClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    type: "button",
    icon: RxBookmark,
    onClick: () => {},
    secondary: true,
  },
};

export const Submit: Story = {
  args: {
    type: "submit",
    icon: RxBookmark,
    onClick: () => {},
  },
};
