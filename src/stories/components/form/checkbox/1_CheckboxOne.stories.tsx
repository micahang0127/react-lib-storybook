import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CheckboxOne, { CheckboxOneProps } from './CheckboxOne';

export default {
  title: 'Components/Form/Checkbox/CheckboxOne',
  component: CheckboxOne,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '단일 Checkbox 컴포넌트 <br/> 아래 "Show code" 로 [사용 코드 예시] 를 확인하실 수 있습니다.',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      description:
        'checkbox의 id (htmlFor값)<br/>[!] 렌더링 되는 페이지 내 checkbox에 동일명이 있으면 에러 <br/> htmlFor와 id가 동일',
    },
    label: {
      control: 'text',
      description: 'checkbox 옆 글씨',
    },
    checked: {
      description: '초기값으로 체크 처리',
    },
    onChange: {
      action: 'changed',
      description: '[event] checkbox값이 변할 때(chagned될 때) 이벤트(function)',
    },
    disabled: {
      control: 'boolean',
      description: 'disabled 처리 <br/> : true / false',
    },
  },
} as Meta;

const Template: StoryFn<CheckboxOneProps> = (args) => {
  const [checked, setChecked] = useState(true);

  const onChange = (e: any) => {
    console.log(e.target.checked);
    setChecked(!checked);
  };

  return <CheckboxOne {...args} checked={checked} onChange={onChange} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  id: 'checkboxStory',
  label: '단일 체크박스',
};

Checkbox.parameters = {
  docs: {
    source: {
      code: `
// [사용 코드 예시]
const CheckboxExample = () =>  {      
    const [checked, setChecked] = useState(true);
  
    const onChange = (e) => {
      console.log(e.target.checked);
      setChecked(!checked);
    };
  
    return (
          <CheckboxOne 
              id="checkboxStory1" 
              label="단일 체크박스" 
              checked={checked} 
              onChange={onChange} 
              disabled={false} 
          />;
    );
}
`,
    },
  },
};
