import { Meta, StoryFn } from '@storybook/react';
import { isNullObject } from '../func';

export default {
  title: 'JS/Func/ObjectCheckedNull',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '아래 "Show code" 로 [사용 코드 예시] 를 확인하실 수 있습니다.',
      },
    },
  },
  argTypes: {
    obj: {
      description: 'object 값',
    },
  },
} as Meta;

export interface FuncObjectProps {
  obj?: object;
}

const Template: StoryFn<FuncObjectProps> = ({ obj = {} }: FuncObjectProps) => {
  return (
    <>
      <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0px' }}>[Object 값 유/무 체크]</div>
      <div style={{ display: 'flex' }}>
        입력:&nbsp;<p>{JSON.stringify(obj)}</p>
      </div>
      <div style={{ display: 'flex' }}>
        출력:&nbsp;<p style={{ color: '#21218f' }}>{JSON.stringify(isNullObject(obj))}</p>
      </div>
    </>
  );
};
export const FuncObjectIsNull = Template.bind({});
FuncObjectIsNull.args = {
  obj: {},
};
FuncObjectIsNull.parameters = {
  docs: {
    description: {
      story: '[Object 값 유/무 체크] - object의 값이 없거나 undefined 일 때 true 반환',
    },
    source: {
      code: `
// [사용 코드 예시]

const result1 = isNullObject({})            // true

const result2 = isNullObject(undefined)     // true

const result3 = isNullObject({id: "01", text: "text"})     // false
`,
    },
  },
};
