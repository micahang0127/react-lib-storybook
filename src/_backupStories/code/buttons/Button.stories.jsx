export default {
  title: 'Code/Button',
  tags: ['autodocs'],
};

const Template = (args) => <button onClick={args.onClick}>{args.label}</button>;

export const Code = Template.bind({});
Code.args = {
  label: '버튼',
  onClick: () => {
    alert('Button clicked!');
  },
};
