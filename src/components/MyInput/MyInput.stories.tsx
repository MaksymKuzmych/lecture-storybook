import type { Meta, Story, StoryObj } from '@storybook/react';

import { MyInput } from './MyInput';
import React, { useState } from 'react';

const meta: Meta = {
  title: 'UI/MyInput',
  component: MyInput,
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

interface ITemplateProps {
  value: string;
  bgColor: string;
  borderRadius?: string;
}

const Template: Story<ITemplateProps> = (
  { value, bgColor, borderRadius }: ITemplateProps,
  { loaded: { todo } }
) => {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <MyInput
      title={todo?.title}
      value={textValue}
      handleChange={handleChange}
      bgColor={bgColor}
      borderRadius={borderRadius}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  value: 'Hello',
  bgColor: 'green',
  borderRadius: '10px',
};

Primary.loaders = [
  async () => ({
    todo: await (
      await fetch('https://jsonplaceholder.typicode.com/todos/2')
    ).json(),
  }),
];
