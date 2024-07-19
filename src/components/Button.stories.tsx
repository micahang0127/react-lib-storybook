import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, {ButtonProps} from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  theme: 'primary',
  size: 'medium',
  onClick: () => alert('Button clicked!'),
};
