import React from 'react';
import '../src/assets/css/styles.css';

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];

export const parameters = {
  actions: {
    handles: [
      'click', // 클릭 이벤트
      'change', // 변경 이벤트
      'focus', // 포커스 이벤트
      'blur', // 블러 이벤트
    ],
  },
  // actions: { argTypesRegex: "^on[A-Z].*" }, // "on"으로 시작하는 props를 action으로 등록
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Components',
        ['Table', 'Form', 'Components', ['Date', 'Box', 'Button'], 'Utils', ['Excel']],
        'JS',
        ['Func', ['Array', 'Object', 'String']],
      ],
    },
  },
};
