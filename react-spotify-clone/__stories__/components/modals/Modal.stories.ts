import Modal from "../../../components/modals/Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Modals/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "test",
    description: "Test description",
    title: "Hi modal!",
    isOpen: true,
    onChange: () => {},
  },
};
