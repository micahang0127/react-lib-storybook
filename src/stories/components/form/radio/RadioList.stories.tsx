import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioList, { RadioListProps } from './RadioList';

export default {
  title: 'Components/Form/Radio/RadioList',
  component: RadioList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '라디오 버튼 컴포넌트 <br/> 하단에서 아래 내용들을 확인하실 수 있습니다. <br> 1. 객체(Object) 형태의 데이터로 처리 <br/> 2. 배열(Array) 형태의 데이터로 처리 <br/> 3. 사용 코드 예시',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description:
        'radioList의 id (htmlFor값)<br/>[!] 렌더링 되는 페이지 내 radio에 동일명이 있으면 에러 <br/> htmlFor와 id가 동일',
    },
    list: {
      description: '라디오 목록 <br/> 단순배열이나 object 형태로 이루어진 배열',
    },
    value: {
      description: '값',
    },
    setValue: {
      description: '라디오버튼 클릭(변경)시 변경된 값의 ',
    },
    columnValue: {
      control: 'text',
      description: 'list가 object일 경우, value 값으로 사용할 object의 key(항목)',
    },
    columnLabel: {
      control: 'text',
      description: 'list가 object일 경우, 화면에 표기할 object의 key(항목)',
    },
  },
} as Meta;

const Template: StoryFn<RadioListProps> = (args) => {
  const [value, setValue] = useState('');
  return <RadioList {...args} value={value} setValue={setValue} />;
};

export const RadioObject = Template.bind({});
RadioObject.args = {
  id: 'RadioListObject',
  list: [
    {
      value: '01',
      text: 'sample1',
    },
    {
      value: '02',
      text: 'sample2',
    },
  ],
  columnValue: 'value',
  columnLabel: 'text',
};
RadioObject.parameters = {
  docs: {
    description: {
      story: 'list가 object 형식인 경우',
    },
  },
};

export const RadioArray = Template.bind({});
RadioArray.args = {
  id: 'RadioListArray',
  list: ['01', '02', '03'],
};
RadioArray.parameters = {
  docs: {
    description: {
      story: 'list가 단순 배열인 경우',
    },
  },
};

export const RadioCode = Template.bind({});
RadioCode.args = {
  id: 'RadioListArray',
  list: ['01', '02', '03'],
};
RadioCode.parameters = {
  docs: {
    description: {
      story: '라디오 버튼 컴포넌트 - 사용 코드 예시',
    },
    source: {
      code: `
// [사용 코드 예시]
const CheckboxListObjectExample = () =>  {
  const [list, setList] = useState(
    [
      {
        value: '01',
        text: 'sample1',
      },
      {
        value: '02',
        text: 'sample2',
      },
    ]
  );
  const [value, setValue] = useState('');

  return <RadioList list={list} value={value} setValue={setValue} columnValue="value" columnLabel="text" />;
    );
}
`,
    },
  },
};
