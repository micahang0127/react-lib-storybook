import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Box, { BoxProps } from './Box';

export default {
  title: 'Components/Components/Box/BoxOne',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '단일 Box 컴포넌트',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: '박스 안에 들어갈 글씨',
    },
    onClick: {
      action: 'clicked',
      description: '[event] 박스 클릭 시 이벤트 - (function)',
    },
    disabled: {
      control: 'boolean',
      description: 'disabled 처리 <br/> : true / false',
    },
    width: {
      control: 'text',
      description: '[style] 넓이 (px, %)',
    },
    height: {
      control: 'text',
      description: '[style] 높이 (px, %)',
    },
    padding: {
      control: 'text',
      description: '[style] 박스 안쪽 여백 조정 (px)',
    },
    margin: {
      control: 'text',
      description: '[style] 박스 바깥쪽 여백 조정 (px)',
    },
  },
} as Meta;

const Template: StoryFn<BoxProps> = (args) => <Box {...args} />;

export const DefaultBox = Template.bind({});
DefaultBox.args = {
  label: 'Title',
  onClick: () => alert('clicked box'),
  disabled: false,

  width: '200px',
  height: '200px',
  padding: '20px',
  margin: '20px',
};
