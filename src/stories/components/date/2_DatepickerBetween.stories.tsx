import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DatepickerBetween, { DatepickerBetweenProps } from './DatepickerBetween';

// [TODO] DatepickerBetween
export default {
  title: 'Components/Components/Date/DatepickerBetween',
  component: DatepickerBetween,
  tags: ['autodocs'],
  argTypes: {
    date: {
      control: 'date',
      description: '부모로부터 전달 받는 date값',
    },
    setDate: {
      control: 'date',
      description: '캘린더를 클릭했을 때 변경되는 date를 받아오는 함수',
    },
    minDate: {
      control: 'date',
      description: '클릭 가능한 최소 이전의 날짜',
    },
    maxDate: {
      control: 'date',
      description: '클릭 가능한 있는 최대 이후의 날짜',
    },
  },
} as Meta;

const Template: StoryFn<DatepickerBetweenProps> = (args) => <div>작업 중 입니다.</div>;
// const Template: StoryFn<DatepickerBetweenProps> = (args) => <DatepickerBetween {...args} />;

export const DatepickerBetweenDefault = Template.bind({});
DatepickerBetweenDefault.args = {
  date: new Date().toISOString(),
  setDate: () => {},
};

export const DatepickerBetweenMinMax = Template.bind({});
DatepickerBetweenMinMax.args = {
  date: new Date().toISOString(),
  setDate: () => {},
  minDate: new Date(new Date().setDate(new Date().getDate() - 5)),
  maxDate: new Date(new Date().setDate(new Date().getDate() + 5)),
};
DatepickerBetweenMinMax.parameters = {
  docs: {
    description: {
      story: '클릭 가능한 최소날짜, 최대날짜 설정',
    },
  },
};

export const DatepickerBetweenCode = Template.bind({});
DatepickerBetweenCode.args = {
  date: new Date().toISOString(),
  setDate: () => {},
  minDate: new Date(new Date().setDate(new Date().getDate() - 5)),
  maxDate: new Date(new Date().setDate(new Date().getDate() + 5)),
};
DatepickerBetweenCode.parameters = {
  docs: {
    description: {
      story: 'Datepicker Between 코드 예시',
    },
    source: {
      code: `
// [사용 코드 예시]
const DatepickerExample = () =>  {
  const [date, setDate] = useState('');
  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 5)));
  const [maxDate, setMaxDate] = useState(new Date(new Date().setDate(new Date().getDate() + 5)));

  return (
    <DatepickerBetween
      date={date}
      setDate={setDate}
      minDate={minDate}
      maxDate={maxDate}
    />
  )
    );
}
`,
    },
  },
};
