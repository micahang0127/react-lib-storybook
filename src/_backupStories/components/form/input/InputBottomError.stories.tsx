import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputBottomError, { InputBottomErrorProps } from './InputBottomError';

export default {
  title: 'Components/Form/Input/InputBottomError',
  component: InputBottomError,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input 컴포넌트',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      description: 'input의 타입',
    },
    id: {
      control: 'text',
      description: 'input의 id 속성',
    },
    value: {
      control: 'text',
      description: '값',
    },
    onChange: {
      action: 'changed',
      description: '[event] 입력시 이벤트(function), 파라미터로 변한 최신의 값을 받는다. ',
    },
    onBlur: {},
    placeholder: {
      control: 'text',
      description: '미입력 시 나타나는 text',
    },
    disabled: {
      control: 'boolean',
      description: 'disabled 처리 <br/> : true / false',
    },
    errUsing: {
      control: 'boolean',
      description: 'warning 메시지 사용 유/무',
    },
    errMsg: {
      control: 'text',
      description: 'warning 메시지',
    },
  },
} as Meta;

const Template: StoryFn<InputBottomErrorProps> = (args) => {
  const [value, setValue] = useState('');

  return <InputBottomError {...args} value={value} onChange={setValue} />;
};

export const InputText = Template.bind({});
InputText.args = { type: 'number', errUsing: true, errMsg: '텍스트 형식이 아닙니다.' };

export const InputNumber = Template.bind({});
InputNumber.args = { type: 'number', errUsing: true, errMsg: '슷자 형식이 아닙니다.' };

export const InputPassword = Template.bind({});
InputPassword.args = { type: 'password', errUsing: true, errMsg: '비밀번호 형식이 아닙니다.' };

export const InputSearch = Template.bind({});
InputSearch.args = { type: 'search', errUsing: true, errMsg: '텍스트 형식이 아닙니다.' };

export const InputTime = Template.bind({});
InputTime.args = { type: 'time', errUsing: true, errMsg: '시간 형식이 아닙니다.' };

export const InputDate = Template.bind({});
InputDate.args = { type: 'date', errUsing: true, errMsg: '날짜 형식이 아닙니다.' };

export const InputMonth = Template.bind({});
InputMonth.args = { type: 'month', errUsing: true, errMsg: '날짜 형식이 아닙니다.' };

export const InputPlaceholder = Template.bind({});
InputPlaceholder.args = { placeholder: '내용을 입력하세요', errUsing: true, errMsg: '텍스트 형식이 아닙니다.' };

export const InputCode = Template.bind({});
InputCode.parameters = {
  docs: {
    description: {
      story: 'input bottom error 코드 예시',
    },
    source: {
      code: `
// [사용 코드 예시]
const InputExample = () =>  {
  const [value, setValue] = useState('');
  const [errUsing, setErrUsing] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  return (
    <Input
      type="text"
      value={value}
      onChange={setValue}
      placeholder="내용을 입력하세요."
      disabled={false}
      errUsing={errUsing}
      errMsg={errMsg}
    />
  )
    );
}
`,
    },
  },
};
