import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TablePaginationMui, { TablePaginationMuiProps } from './TablePaginationMui';

export default {
  title: 'Components/Table/Pagination',
  component: TablePaginationMui,
  tags: ['autodocs'],
  argTypes: {
    totalPage: {
      control: 'number',
      description: '총 페이지 넘버',
    },
    page: {
      description: '현재 선택된 페이지 넘버',
    },
    setPage: {
      action: 'changed',
      description: '[event] 페이지 변경(클릭) 시, 이벤트(function) ',
    },
  },
} as Meta;

const Template: StoryFn<TablePaginationMuiProps> = (args) => {
  const [page, setPage] = useState(args.page);
  return <TablePaginationMui {...args} page={page} setPage={setPage} />;
};

export const PaginationMui = Template.bind({});
PaginationMui.args = {
  totalPage: 10,
  page: 1,
};
