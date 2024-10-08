import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: "Press Button",
    backgroundColor: "#212A31",
    size: "20%",
  },
};
