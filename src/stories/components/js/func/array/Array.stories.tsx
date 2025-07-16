import { Meta, StoryFn } from '@storybook/react';
import { sortArrayObjectNumber } from '../func';

// [TODO] 한글, 영어 일때도 처리 필요 (현재는 숫자인 경우만 가능)
export default {
  title: 'JS/Func/Array',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '[자주 쓰는 JS 함수] - Array 편',
      },
    },
  },
  argTypes: {
    arr: {
      description: 'object형식으로 이루어진 배열 값',
    },
    sortKey: {
      control: 'text',
      description: '정렬의 기준이 되는 object의 항목(key)값',
    },
    sortType: {
      control: 'select',
      options: ['asc', 'desc'],
      description: '오름차순/내럼차순 (미기입 시 오름차순으로 적용)',
    },
  },
} as Meta;

export interface FuncArrayProps {
  arr: object[];
  sortKey: string;
  sortType?: string;
}

const Template: StoryFn<FuncArrayProps> = ({
  arr = [
    { val: '05', name: '하' },
    { val: '02', name: '자' },
    { val: '03', name: '가' },
  ],
  sortKey,
  sortType,
}: FuncArrayProps) => {
  return (
    <>
      <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0px' }}>[object로 이루어진 배열의 정렬]</div>
      <div style={{ display: 'flex' }}>
        입력:&nbsp;<p>{JSON.stringify(arr)}</p>
      </div>
      <div style={{ display: 'flex' }}>
        출력:&nbsp;
        <p style={{ color: '#21218f' }}>{JSON.stringify(sortArrayObjectNumber(arr, sortKey, sortType))}</p>
      </div>
    </>
  );
};
export const FuncArraySort = Template.bind({});
FuncArraySort.args = {
  sortKey: 'val',
};
FuncArraySort.parameters = {
  docs: {
    description: {
      story:
        '[배열 정렬] - 배열 오름차순, 내림차순 정렬 (sortType 미입력 시 오름차순)- [!] 현재는 값이 숫자일 때만 가능',
    },
    source: {
      code: `
// [사용 코드 예시]

const arr = [{ val: '05', name: '하' }, { val: '02', name: '자' }, { val: '03', name: '가' }];
const sortKey = 'val';
const sortType = 'desc';

const result = sortArrayObjectNumber(arr, sortKey, sortType)
`,
    },
  },
};
