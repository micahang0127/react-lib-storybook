import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableSortSelect, { TableSortSelectProps } from './TableSortSelect';

export default {
  title: 'Components/Table/TableSortSelect',
  component: TableSortSelect,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        '[컴포넌트] 좌측 컴포넌트 추가 <br/> &nbsp; ex> 다른 정렬기준 추가(select) <br/><br/>' +
        '  &nbsp; &lt;TableSortSelect&gt;{이곳에 작성함}&lt;/TableSortSelect&gt;<br/>',
    },
    sortLabel: {
      description: '정렬(오름차순/내림차순) select option 항목명 변경',
    },
    sortValue: {
      control: 'select',
      description:
        '정렬(오름차순/내림차순) 값 <br/> &nbsp; [option] &nbsp; "desc" | "asc" | "" <br/> &nbsp; [!] 값이 "" 이면, 해당 select 미사용 처리',
    },
    setSortValue: {
      description:
        '[function] 정렬 값(오른차순/내림차순) 변경 함수 <br/> &nbsp; (value) => {...} <br/> &nbsp; 파라미터1 : 변경 할(option클릭 한) 값 ',
    },
    pageSize: {
      control: 'number',
      description:
        '한 페이지 당 나타낼 데이터 개수 <br/> &nbsp; [!] &lt;pageSizeOption&gt; 에 있는 option들 중 있어야 select에 나타남 <br/> &nbsp; [!] 값이 0 이면, 해당 select 미사용 처리',
    },
    setPageSize: {
      description:
        '[function] &lt;pageSize&gt; 값 변경 함수 <br/> &nbsp; (value) => {...} <br/> &nbsp; 파라미터1 : 변경 할(option클릭 한) 값 ',
    },
    pageSizeOption: {
      description: ' &lt;pageSize&gt; select의 option 목록 (array, 배열형태)',
    },
  },
} as Meta;

const Template: StoryFn<TableSortSelectProps> = () => {
  const [sort, setSort] = useState<'desc' | 'asc' | ''>('desc');
  const [pageSize, setPageSize] = useState(10);
  const [tableSortTarget, setTableSortTarget] = useState('id');

  return (
    <TableSortSelect
      sortValue={sort}
      setSortValue={setSort}
      pageSize={pageSize}
      setPageSize={setPageSize}
      // sortLabel={['내림차순', '오름차순']}
      // pageSizeOption={[10, 30, 50, 100]}
    >
      <select className="col_2" value={tableSortTarget} onChange={(e) => setTableSortTarget(e.target.value)}>
        {['id', 'name'].map((s, i) => {
          return (
            <option key={'tableSortTargetSelect' + i} value={s}>
              {s}
            </option>
          );
        })}
      </select>
    </TableSortSelect>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    description: {
      story:
        '보통 Table 상단에 나타내는 정렬 처리 select <br/>  1. [default select1] 오름/내림차순 <br/> 2. [default select2] 한 페이지 당 나타낼 데이터 수 <br/> 3. [children props] {children}에 정렬의 기준이 되는 항목들을 나열한 select를 구현 ',
    },
    source: {
      code: `
// [사용 코드 예시]

const TableSortSelectExample = () => {
  const [sort, setSort] = useState<'desc' | 'asc' | ''>('desc');
  const [pageSize, setPageSize] = useState(10);
  const [tableSortTarget, setTableSortTarget] = useState('id');

  return (
    <TableSortSelect
      sortValue={sort}
      setSortValue={setSort}
      pageSize={pageSize}
      setPageSize={setPageSize}
      // sortLabel={['내림차순', '오름차순']}
      // pageSizeOption={[10, 30, 50, 100]}
    >
      {/* {children} props 부분 */}
      <select className="col_2" value={tableSortTarget} onChange={(e) => setTableSortTarget(e.target.value)}>
        {['id', 'name'].map((s, i) => {
          return (
            <option key={'tableSortTargetSelect' + i} value={s}>
              {s}
            </option>
          );
        })}
      </select>
    </TableSortSelect>
  );
};
`,
    },
  },
};
