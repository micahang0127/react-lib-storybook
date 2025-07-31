import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <h1 style={{ marginBottom: '5px', color: 'blue' }}> [Storybook 안내]</h1>
      <div style={{ marginLeft: '5px' }}>
        <p style={{ fontSize: '15px' }}>
          이 Storybook은 <br />
          실제 사내 실무에서 자주 사용했던 컴포넌트들을 공통모듈로 구성하여
          <br />
          공통모듈 컴포넌트들의 목록들을 한눈에 확인하고 <br />
          사용법을 안내(컴포넌트 호출 방식)함에 목적을 두어 작성 되었습니다.
        </p>
        <br />
        <h3 style={{ color: 'blue', fontSize: '14px' }}>* 목적 </h3>
        <ul style={{ fontSize: '13px', width: '80%' }}>
          <li style={{ marginTop: '5px', marginBottom: '5px' }}>
            : 사내 신입개발자나 React.js (or FrontEnd) 개발을 모르는 개발자들도 호출만으로 쉽게 개발을 진행 할 수 있음에
            목적을 둡니다.
          </li>
          <li>
            : 각 프로젝트마다 자주 반복되는 코드를 라이브러리로 작성하여 호출만으로 구현하여 개발비용(소요시간)을 줄일
            수 있습니다.
          </li>
        </ul>
      </div>
      <p style={{ marginTop: '50px', textAlign: 'right', marginRight: '100px', fontSize: '15px', color: 'gray' }}>
        {' '}
        작성인 : 박상아{' '}
      </p>
    </div>
  ),
};
