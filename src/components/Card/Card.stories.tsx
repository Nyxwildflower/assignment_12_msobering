import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    backgroundColor: "#D3D9D4",
    size: "25%",
    title: "Title",
    subtitle: "Subtitle",
    content: "This is a content example",
  },
};
