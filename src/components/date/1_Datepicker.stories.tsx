import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Datepicker, { DatepickerProps } from './Datepicker';

export default {
  title: 'Components/Components/Date/Datepicker',
  component: Datepicker,
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

const Template: StoryFn<DatepickerProps> = (args) => <Datepicker {...args} />;

export const DatepickerDefault = Template.bind({});
DatepickerDefault.args = {
  date: new Date().toISOString(),
  setDate: () => {},
};
DatepickerDefault.parameters = {
  docs: {
    description: {
      story: '단순 Datepicker',
    },
  },
};

export const DatepickerMinMax = Template.bind({});
DatepickerMinMax.args = {
  date: new Date().toISOString(),
  setDate: () => {},
  minDate: new Date(new Date().setDate(new Date().getDate() - 5)),
  maxDate: new Date(new Date().setDate(new Date().getDate() + 5)),
};
DatepickerMinMax.parameters = {
  docs: {
    description: {
      story: '클릭 가능한 최소날짜, 최대날짜 설정',
    },
  },
};

export const DatepickerCode = Template.bind({});
DatepickerCode.args = {
  date: new Date().toISOString(),
  setDate: () => {},
  minDate: new Date(new Date().setDate(new Date().getDate() - 5)),
  maxDate: new Date(new Date().setDate(new Date().getDate() + 5)),
};
DatepickerCode.parameters = {
  docs: {
    description: {
      story: 'Datepicker 코드 예시',
    },
    source: {
      code: `
// [사용 코드 예시]
const DatepickerExample = () =>  {
  const [date, setDate] = useState('');
  const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 5)));
  const [maxDate, setMaxDate] = useState(new Date(new Date().setDate(new Date().getDate() + 5)));

  return (
    <Datepicker
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
