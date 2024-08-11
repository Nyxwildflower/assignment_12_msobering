import type { Meta, StoryObj } from "@storybook/react";

import HeroImage from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    srcLink: "leaves.png",
    altText: "An illustration of leaves in warm colours",
  },
};
