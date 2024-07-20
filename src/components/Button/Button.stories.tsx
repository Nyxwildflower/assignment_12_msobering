import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    onClick: fn(),
    disabled: false,
    label: "Press Button",
    backgroundColor: "#212A31",
    size: "15%",
  },
};

export const Disabled: Story = {
  args: {
    onClick: undefined,
    disabled: true,
    label: "Don't Click",
    backgroundColor: "#999",
    size: "15%",
  }
}
