import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckboxList, { CheckboxListProps } from './CheckboxList';

export default {
  title: 'Components/Form/Checkbox/CheckboxList',
  component: CheckboxList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Checkbox 리스트 컴포넌트  <br/> 상단 "전체" 체크박스를 클릭해 보세요. <br/><br/> 하단에서 아래 내용을 확인하실 수 있습니다. <br> 1.Checkbox List And All Object - 객체 형태의 데이터 <br/> 2. Checkbox List And All Array - 배열 형태의 데이터 <br/><br/> 아래 "Show code" 로 [사용 코드 예시] 를 확인하실 수 있습니다.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description:
        'checkboxList의 id (htmlFor값)<br/>[!] 렌더링 되는 페이지 내 checkbox에 동일명이 있으면 에러 <br/> htmlFor와 id가 동일',
    },
    labelAll: {
      control: 'text',
      description: '전체선택 체크박스의 옆 글씨',
    },
    columnLabel: {
      control: 'text',
      description: 'list가 object일 경우, 화면에 표기할 object의 key(항목)',
    },
    list: {
      description: '체크박스의 전체 목록',
    },
    checkedList: {
      description: '체크 된 목록',
    },
    setCheckedList: {
      action: 'valueChanged',
      description: '체크박스를 클릭 할 때 처리되는 함수 (function)',
    },
  },
} as Meta;

const Template: StoryFn<CheckboxListProps> = (args) => {
  const [checkedList, setCheckedList] = useState([]);
  return <CheckboxList {...args} checkedList={checkedList} setCheckedList={setCheckedList} />;
};

export const CheckboxListAndAllObject = Template.bind({});
CheckboxListAndAllObject.args = {
  id: 'CheckboxListAndAllObject',
  labelAll: '전체',
  list: [
    { no: 1, name: 'a' },
    { no: 2, name: 'b' },
    { no: 3, name: 'c' },
    { no: 4, name: 'd' },
  ],
  columnLabel: 'name',
};

CheckboxListAndAllObject.parameters = {
  docs: {
    description: {
      story: '객체 형태의 데이터로 전달',
    },
    source: {
      code: `
// [사용 코드 예시]
const CheckboxListObjectExample = () =>  {
    const [list, setList] = useState(
                                      {'no': 1, 'name': 'a'}, 
                                      {'no': 2, 'name': 'b'}, 
                                      {'no': 3, 'name': 'c'}, 
                                      {'no': 4, 'name': 'd'}
                                    );
    const [checkedList, setCheckedList] = useState([]);

    return (
          <CheckboxList
              id="CheckboxListObject"
              labelAll="전체"
              columnLabel="name"      // list가 배열일 경우, 필요없음
              list={list}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
          />;
    );
}
`,
    },
  },
};

export const CheckboxListAndAllArray = Template.bind({});
CheckboxListAndAllArray.args = {
  id: 'CheckboxListAndAllArray',
  labelAll: '전체',
  list: ['a', 'b', 'c', 'd'],
};
CheckboxListAndAllArray.parameters = {
  docs: {
    description: {
      story: '배열 형태의 데이터로 전달',
    },
    source: {
      code: `
// [사용 코드 예시]
const CheckboxListArrayExample = () =>  {
    const [list, setList] = useState(['a', 'b', 'c', 'd']);
    const [checkedList, setCheckedList] = useState([]);

    return (
          <CheckboxList
              id="checkboxListArray"
              labelAll="전체"
              list={list}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
          />;
    );
}
`,
    },
  },
};
