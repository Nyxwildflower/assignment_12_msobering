import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: "Press Label",
    backgroundColor: "#212A31",
    fontSize: "3em",
    fontColor: "#FFF",
  },
};
