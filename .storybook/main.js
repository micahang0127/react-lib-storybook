module.exports = {
  // stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../public'],
  typescript: {
    check: true, // TypeScript 검사 활성화
  },
};
