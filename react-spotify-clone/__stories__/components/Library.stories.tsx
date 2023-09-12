import type { Meta, StoryObj } from "@storybook/react";

import Library from "../../components/Library";
import UserProvider from "@/providers/UserProvider";

const meta = {
    title: "Components/Library",
    component: Library,
    decorators: [
        (Story) => (
            <UserProvider>
                <Story />
            </UserProvider>
        ),
    ],
    parameters: {
        layout: "centered",
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Library>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
