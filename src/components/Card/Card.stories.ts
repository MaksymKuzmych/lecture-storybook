import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta = {
  title: 'Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [
        {
          name: 'green',
          value: 'green',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: 'color',
      description: 'Background color of the card',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryCard: Story = {
  args: {
    bgColor: '#f00',
    title: 'Card for user',
  },
};

export const SecondaryCard: Story = {
  args: {
    bgColor: '#00f',
    title: 'Card for second user',
  },
};
