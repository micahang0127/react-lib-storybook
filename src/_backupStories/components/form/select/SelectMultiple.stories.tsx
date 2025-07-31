import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectMultiple, { SelectMultipleProps } from './SelectMultiple';

// [TODO] SelectMultiple
export default {
  title: 'Components/Form/Select/SelectMultiple',
  component: SelectMultiple,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '연결되는 다중의 Select 컴포넌트',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'select의 id',
    },
    title: {
      control: 'text',
      description: '상위 타이틀',
    },
    placeholder: {
      control: 'text',
      description: 'option의 placeholder 값.<br/>즉, 초기에 나타나지만 선택할 수 없는 값<br/> value는 무조건 <"">이다.',
    },
    topOption: {
      control: 'text',
      description: 'option의 최상단에 오는 값.<br/> topOptionValue값이 없을 경우, value는 <"">이다.',
    },
    topOptionValue: {
      control: 'text',
      description:
        'topOption의 value<br/> 해당 props가 없을 경우 topOption의 value는 <"">이다.</br> [!] placeholder, topOption 두개를 함께 사용할 경우, value가 겹치므로(<"">) 해당 props를 반드시 명시해야 한다.',
    },
    list: {
      description: 'option 목록',
    },
    value: {
      description: '값',
    },
    onChange: {
      action: 'changed',
      description: '[event] select값이 변할 때(option클릭 시) 이벤트(function)',
    },
    columnValue: {
      control: 'text',
      description: 'option이 object 형식일 경우, value 값으로 사용할 object의 key(항목)',
    },
    columnLabel: {
      control: 'text',
      description: 'option이 object 형식일 경우, 화면에 표기할 object의 key(항목)',
    },
    errUsing: {
      control: 'boolean',
      description: 'warning 메시지 사용 유/무',
    },
    errMsg: {
      control: 'text',
      description: 'warning 메시지',
    },
    disabled: {
      control: 'boolean',
      description: 'select의 disabled 처리 <br/> : true / false',
    },
    disabledOptionList: {
      description:
        ' option 중 disabled처리할 값들의 목록 <br/> ex> {key: "", list: []} 형식 <br/> &nbsp;&nbsp; key - option이 object형식인 경우 각 option을 구분할 수 있는 option의 column key ( array형식인 경우, &lt;key: ""&gt;로 기입), <br/> &nbsp;&nbsp; list - disabled할 option 리스트 (단, key에서 준 column이 있다면, 해당하는 column값으로 이루어진 배열이어야 함) ',
    },
  },
} as Meta;

const Template: StoryFn<SelectMultipleProps> = (args) => {
  const [value, setValue] = useState('');
  // return <SelectMultiple {...args} value={value} onChange={setValue} />;
  return <div>작업중입니다.</div>;
};

export const SelectDefault = Template.bind({});
SelectDefault.args = {
  title: '주로 쓰는 Select - [Object + topOption]',
  topOption: '전체',
  list: [
    {
      text: 'option1',
      val: '01',
    },
    {
      text: 'option2',
      val: '02',
    },
    {
      text: 'option3',
      val: '03',
    },
    {
      text: 'option4',
      val: '04',
    },
  ],
  columnLabel: 'text',
};
SelectDefault.parameters = {
  docs: {
    description: {
      story: '주로 쓰는 select',
    },
  },
};

export const SelectCode = Template.bind({});
SelectCode.args = {
  title: 'Select 전체 코드 예시 ',
  placeholder: '선택',
  topOption: '전체',
  topOptionValue: 'ALL',
  columnValue: 'val',
  columnLabel: 'text',
  list: [
    {
      text: 'option1',
      val: '01',
    },
    {
      text: 'option2',
      val: '02',
    },
    {
      text: 'option3',
      val: '03',
    },
    {
      text: 'option4',
      val: '04',
    },
  ],
  errUsing: true,
  errMsg: 'warning message',
  disabledOptionList: {
    key: 'val',
    list: ['03', '04'],
  },
};
SelectCode.parameters = {
  docs: {
    description: {
      story: 'Select 코드 예시',
    },
    source: {
      code: `
// [사용 코드 예시]
const CheckboxListObjectExample = () =>  {
  const [list, setList] = useState(
    [
      {
        val: '01',
        text: 'option1',
      },
      {
        val: '02',
        text: 'option2',
      },
      {
        val: '03',
        text: 'option3',
      },
      {
        val: '04',
        text: 'option4',
      },
    ]
  );
  const [value, setValue] = useState('');

  const [selectDisabled, setSelectDisabled] = useState(false);
  const [optionDisabledList, setOptionDisabledList] = useState(['03', '04'])

  return <Select 
              id="epk-select"
              title="Select 전체 코드 예시"
              placeholder="선택"
              topOption="전체"
              topOptionValue="ALL"

              list={list} 
              value={value} 
              onChange={setValue} 
              columnValue="val" 
              columnLabel="text" 

              errUsing={true}
              errMsg="warning message"

              dsiabled={selectDisabled}
              disabledOptionList={{key: 'val', list: optionDisabledList}}
          />;
    );
}
`,
    },
  },
};
