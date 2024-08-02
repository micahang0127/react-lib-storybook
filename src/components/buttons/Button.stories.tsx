import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '버튼 내부 글씨',
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '버튼 타입 (primary, secondary)',
    },
    sizeType: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: '버튼 사이즈',
    },
    onClick: {
      action: 'clicked',
      description: '[event] 버튼 클릭 시 이벤트 - (function)',
    },
    disabled: {
      control: 'boolean',
      description: 'disabled 처리 <br/> : true / false',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  theme: 'primary',
  onClick: () => alert('clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  theme: 'secondary',
  onClick: () => alert('clicked'),
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large Button',
  sizeType: 'large',
  onClick: () => alert('clicked'),
};
export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium Button',
  sizeType: 'medium',
  onClick: () => alert('clicked'),
};
export const Small = Template.bind({});
Small.args = {
  label: 'Small Button',
  sizeType: 'small',
  onClick: () => alert('clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('clicked'),
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'disabled가 true일 때 클릭 이벤트 불가',
    },
  },
};
