import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';

export default {
  title: 'Components/Form/Input/Input',
  component: Input,
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
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');

  return <Input {...args} value={value} onChange={setValue} />;
};

export const InputText = Template.bind({});

export const InputNumber = Template.bind({});
InputNumber.args = { type: 'number' };

export const InputPassword = Template.bind({});
InputPassword.args = { type: 'password' };

export const InputSearch = Template.bind({});
InputSearch.args = { type: 'search' };

export const InputTime = Template.bind({});
InputTime.args = { type: 'time' };

export const InputDate = Template.bind({});
InputDate.args = { type: 'date' };

export const InputMonth = Template.bind({});
InputMonth.args = { type: 'month' };

export const InputRange = Template.bind({});
InputRange.args = { type: 'range' };

export const InputColor = Template.bind({});
InputColor.args = { type: 'color' };

export const InputPlaceholder = Template.bind({});
InputPlaceholder.args = { placeholder: '내용을 입력하세요' };

export const InputDisabled = Template.bind({});
InputDisabled.args = { disabled: true };

export const InputCode = Template.bind({});
InputCode.parameters = {
  docs: {
    description: {
      story: 'input 코드 예시',
    },
    source: {
      code: `
// [사용 코드 예시]
const InputExample = () =>  {
  const [value, setValue] = useState('');

  return (
    <Input
      type="text"
      value={value}
      onChange={setValue}
      placeholder="내용을 입력하세요."
      disabled={false}
    />
  )
    );
}
`,
    },
  },
};
