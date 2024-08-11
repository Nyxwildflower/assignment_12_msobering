import type { Meta, StoryObj } from "@storybook/react";

import Img from "./Img";

const meta: Meta<typeof Img> = {
  component: Img,
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    srcLink: "leaves.png",
    altText: "An illustration of leaves in warm colours",
    maxHeight: "200px",
    maxWidth: "1000px",
  },
};
