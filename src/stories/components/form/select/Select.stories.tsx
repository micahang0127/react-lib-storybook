import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Form/Select/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Select 컴포넌트 <br/> 하단에서 여러 버전을 확인하실 수 있습니다.',
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

const Template: StoryFn<SelectProps> = (args) => {
  const [value, setValue] = useState('');
  return <Select {...args} value={value} onChange={setValue} />;
};

export const SelectDefault = Template.bind({});
SelectDefault.args = {
  title: '주로 쓰는 Default Select',
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
      story: '주로 쓰는 select <br/> 최상단 옵션 + Object(객체)형태 데이터로 처리',
    },
  },
};

export const SelectCodeAll = Template.bind({});
SelectCodeAll.args = {
  title: 'Select 코드 예시(전체)',
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
SelectCodeAll.parameters = {
  docs: {
    description: {
      story: 'Select 코드 예시 (전체) <br/> 아래 "Show code" 로 [사용 코드 예시] 를 확인하실 수 있습니다.',
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

export const SelectNoTitle = Template.bind({});
SelectNoTitle.args = {
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
SelectNoTitle.parameters = {
  docs: {
    description: {
      story: '상단 title이 없는 select',
    },
  },
};

export const SelectArray = Template.bind({});
SelectArray.args = {
  title: 'Array',
  list: ['option가', 'option나', 'option다', 'option라'],
};
SelectArray.parameters = {
  docs: {
    description: {
      story: 'select의 option이 단순 배열(array) 형식인 경우<br/> list이 외 다른 props는 object형식과 동일',
    },
  },
};

export const SelectObject = Template.bind({});
SelectObject.args = {
  title: 'Object - Value: object',
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
SelectObject.parameters = {
  docs: {
    description: {
      story: 'select의 option이 object 형식인 경우 - value: object 전체 값',
    },
  },
};

export const SelectObjetctValueKey = Template.bind({});
SelectObjetctValueKey.args = {
  title: 'Object - Value: key',
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
  columnValue: 'val',
  columnLabel: 'text',
};
SelectObjetctValueKey.parameters = {
  docs: {
    description: {
      story: 'select의 option이 object 형식인 경우 - value: 특정 항목(key) 값',
    },
  },
};

export const SelectPlaceholder = Template.bind({});
SelectPlaceholder.args = {
  title: 'Placeholder',
  placeholder: '선택',
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
SelectPlaceholder.parameters = {
  docs: {
    description: {
      story: 'placeholder 설정(선택불가) ',
    },
  },
};

export const SelectTopOption = Template.bind({});
SelectTopOption.args = {
  title: 'TopOption',
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
SelectTopOption.parameters = {
  docs: {
    description: {
      story: 'topOption 설정(선택가능) - topOption의 값(value는 <"">이다.<br/> ex> 전체, 선택 ',
    },
  },
};

export const SelectPlaceholderTopOption = Template.bind({});
SelectPlaceholderTopOption.args = {
  title: 'Placeholder + TopOption => (+ TopOptionValue)',
  topOption: '전체',
  placeholder: '선택',
  topOptionValue: 'ALL', // [!] placeholder과 topOption 두 개를 모두 사용하는 경우, 반드시 topOptionValue를 기입해야 한다.
  //                               (둘 중 하나만 사용할 때는 두개 모두 default 값은 "" 임)
  //                               (두 개 모두 사용하는데 topOptionValue가 없을 경우, topOption의 값은 default로 "TOP_VALUE" 임)
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
SelectPlaceholderTopOption.parameters = {
  docs: {
    description: {
      story: 'topOption 설정(선택가능) - topOption의 값(value는 <"">이다.<br/> ex> 전체, 선택 ',
    },
    source: {
      code: `
<Select
  columnLabel="text"
  columnValue="val"
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
  onChange={() => {}}
  placeholder="선택"
  title="Object - Placeholder + TopOption => (+ TopOptionValue)"
  topOption="전체"
  topOptionValue="ALL"   // [!] placeholder과 topOption 두 개를 모두 사용하는 경우, 반드시 topOptionValue를 기입해야 한다.(기입 안 하면 "TOP_VALUE"가 default 값임)
  value=""
/>

/*

 [!] placeholder과 topOption 두 개를 모두 사용하는 경우, 반드시 topOptionValue를 기입해야 한다.
     (둘 중 하나만 사용할 때는 두개 모두 default 값은 "" 임)
     (두 개 모두 사용하는데 topOptionValue가 없을 경우, topOption의 값은 default로 "TOP_VALUE" 임)

*/



`,
    },
  },
};

export const SelectError = Template.bind({});
SelectError.args = {
  title: 'Warning(Error)',
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
  errUsing: true,
  errMsg: 'error message',
};
SelectError.parameters = {
  docs: {
    description: {
      story: '하단에 warning 메시지 표기',
    },
  },
};

export const SelectDisabled = Template.bind({});
SelectDisabled.args = {
  title: 'Select - Disabled',
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
  disabled: true,
};
SelectDisabled.parameters = {
  docs: {
    description: {
      story: 'select disabled 처리',
    },
  },
};

export const SelectOptionDisabledListObject = Template.bind({});
SelectOptionDisabledListObject.args = {
  title: 'Select Option - Disabled List - Object ',
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
  disabledOptionList: {
    key: 'val',
    list: ['02', '04'],
  },
};

SelectOptionDisabledListObject.parameters = {
  docs: {
    description: {
      story: 'select 특정 option들 disabled 처리 - list가 object 인 경우,',
    },
  },
};

export const SelectOptionDisabledArray = Template.bind({});
SelectOptionDisabledArray.args = {
  title: 'Select Option - Disabled List - Array',
  topOption: '전체',
  list: ['option가', 'option나', 'option다', 'option라'],
  disabledOptionList: {
    key: '', // [!] list가 배열(array)형태인 경우, disabledOptionList.key는 <''>로 기입 해야 함.
    list: ['option나', 'option라'],
  },
};
SelectOptionDisabledArray.parameters = {
  docs: {
    description: {
      story: 'select 특정 option들 disabled 처리 - list가 배열(array)인 경우,',
    },
    source: {
      code: `
// [사용 코드 예시]
<Select
  title="Select Option - Disabled List - Array"
  topOption="전체"
  list={[
    'option가',
    'option나',
    'option다',
    'option라'
  ]}
  value=""
  onChange={() => {}}
  disabledOptionList={{
    key: '',      // [!] list가 배열(array)형태인 경우, 해당 key 값은 <''>로 기입 해야 함.
    list: [
      'option나',
      'option라'
    ]
  }}
/>
`,
    },
  },
};
