import { Meta, StoryFn } from '@storybook/react';
import { toUpperCase } from '../func';

export default {
  title: 'JS/Func/String',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '[자주 쓰는 JS 함수] - String 편',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: '입력값',
    },
  },
} as Meta;

export interface FuncStringProps {
  text?: string;
}

const Template: StoryFn<FuncStringProps> = ({ text = '' }: FuncStringProps) => {
  return (
    <>
      <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0px' }}>[문자열 대문자로 변환 함수]</div>
      <div style={{ display: 'flex' }}>
        입력:&nbsp;<p>{text}</p>
      </div>
      <div style={{ display: 'flex' }}>
        출력:&nbsp;<p style={{ color: '#21218f' }}>{toUpperCase(text)}</p>
      </div>
    </>
  );
};
export const FuncStringUpper = Template.bind({});
FuncStringUpper.args = {
  text: 'text upper',
};
FuncStringUpper.parameters = {
  docs: {
    description: {
      story: '[문자열 변환] - 문자열(string) 대문자로 변환',
    },
    source: {
      code: `
// [사용 코드 예시]

const result = toUpperCase("text upper")
`,
    },
  },
};
