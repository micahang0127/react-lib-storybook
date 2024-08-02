import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BoxList, { BoxListProps } from './BoxList';

// [TODO] 미완성
export default {
  title: 'Components/Components/Box/BoxList',
  component: BoxList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '여러개 Box 컴포넌트',
      },
    },
  },
  argTypes: {
    count: {
      control: 'number',
      description: 'box 개수',
    },
    flex: {
      control: 'select',
      options: ['column', 'row'],
      description: '가로 or 세로 정렬',
    },
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

const Template: StoryFn<BoxListProps> = (args) => <BoxList {...args} />;
export const BoxListDefault = Template.bind({});
BoxListDefault.args = {
  count: 3,
  flex: 'row',

  label: 'Title',
  width: '200px',
  height: '200px',
  padding: '20px',
  margin: '20px',
};
BoxListDefault.parameters = {
  docs: {
    description: {
      story: '단순한 컴포넌트 - 개수, label, style 조정',
    },
  },
};

// [TODO]
export const BoxListComplex = Template.bind({});
BoxListComplex.args = {
  count: 3,
  flex: 'row',
  // title: [],
  // onClick: [],
  // disabled: [],

  label: 'Title',
  width: '200px',
  height: '200px',
  padding: '20px',
  margin: '20px',
};
BoxListComplex.parameters = {
  docs: {
    description: {
      story: '복잡한 컴포넌트 - 개수, label, style, click, disabled 조정',
    },
  },
};
