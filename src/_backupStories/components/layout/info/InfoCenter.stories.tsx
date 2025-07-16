import { Meta, StoryFn } from '@storybook/react';
import InfoCenter, { InfoCenterProps } from './InfoCenter';

export default {
  title: 'Components/Layout/InfoCenter',
  component: InfoCenter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '정가운데 info 메시지 표기',
      },
    },
  },
  argTypes: {
    icon: {
      description: 'info 메시지 선두에 나타나는 icon',
    },
    text: {
      control: 'text',
      description: 'info 메시지',
    },
  },
} as Meta;

// [TODO] icon 예제
const Template: StoryFn<InfoCenterProps> = (args) => <InfoCenter {...args} />;
export const Default = Template.bind({});
Default.args = { icon: <>i</>, text: '데이터가 없습니다.' };
