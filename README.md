# react-lib-storybook

    : Storybook의 프로젝트의 기본 세팅
      React + Typescript + Storybook + Emotion

<br/>

### [실행]()

    사전) node_modules 설치
        $  npm install


    실행)
        $ npm run storybook
        or
        $ yarn storybook

        default port : 6006

    접속)
        http://localhost:6006/

<br/>

### [이슈]()

    [*] ComponentMeta
        ComponentMeta는 Storybook의 버전 업데이트로 인해 더 이상 사용되지 않는다.
        최신 버전에서는 Meta라는 새로운 타입이 도입되었다.

        ex>
            export defualt {
                ...
            } as Meta;

<br/><br/>

### [초기구성 진행기록]()

1. 프로젝트 구성 <br/>
   > $ npx create-react-app@latest my-app --template typescript <br/>
   > $ cd my-app

<br/>

2. storybook 설치 <br/>
   > $ npx sb init

<br/>

3.  Storybook 설정 파일 수정 <br/>
    > $ npx sb init <br/>
        &nbsp;&nbsp;&nbsp; => Storybook에 필요한 기본 설정 파일들 생성 <br/>
        &nbsp;&nbsp;&nbsp; (.storybook 폴더와 main.js, preview.js 파일 생성)

<br/><br/>

4. 기본 설정 파일 수정 <br/>

[.storybook/main.js]

    module.exports = {
      stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
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

<br/>

[.storybook/preview.js]

    import React from 'react';
    // import '../src/styles/global.css';       // 글로벌 스타일 파일 (예시)

    export const decorators = [
        (Story) => (
            <div style={{ padding: '3rem' }}>
            <Story />
            </div>
        ),
    ];

    export const parameters = {
        actions: {
            handles: [
                'click',                // 클릭 이벤트
                'change',               // 변경 이벤트
                'focus',                // 포커스 이벤트
                'blur',                 // 블러 이벤트
            ],
        },
        // actions: { argTypesRegex: "^on[A-Z].*" },    // "on"으로 시작하는 props를 action으로 등록
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    };

<br/><br/>

5. Typescript 설정 파일 수정

[.tsconfig.json]

    {
        "compilerOptions": {
            "target": "es5",
            "lib": ["dom", "dom.iterable", "esnext"],
            "allowJs": true,
            "skipLibCheck": true,
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "noFallthroughCasesInSwitch": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": true,
            "jsx": "react-jsx"
        },
        "include": ["src", ".storybook"]
    }

<br/><br/>

6. 기본 스토리 작성

[src/components/Button.tsx]

    import React from 'react';

    interface ButtonProps {
        label: string;
        onClick: () => void;
    }

    const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
        return <button onClick={onClick}>{label}</button>;
    };

    export default Button;

<br/>

[src/components/Button.stories.tsx]

    import React from 'react';
    import { Story, Meta } from '@storybook/react';
    import Button from './Button';

    export default {
        title: 'Example/Button',
        component: Button,
    } as Meta;

    const Template: Story = (args) => <Button {...args} />;

    export const Primary = Template.bind({});
    Primary.args = {
        label: 'Button',
        onClick: () => console.log('Button clicked'),
    };

<br/><br/>

6.  Storybook 실행 <br/>
    > $ npm run storybook

<br/><br/><br/>

### [Styles 설정]()

: Emotion css 라이브러리 사용 <br/>

1. emotion 설치

   ```
    $ yarn add @emotion/babel-preset-css-prop @emotion/react @emotion/styled

    @emotion/styled :  styled-components 처럼 사용하기 위함
    @emotion/babel-preset-css-prop :
           emotion을 쓰기 위해서는, 아래코드를 파일상단에 매번 적어주어야 하는데,
           이를 안적어주기 위해 babel-preset-css-prop를 설치하고, 바벨 설정을 해준다.
           /** @jsx jsx */
           import { jsx } from '@emotion/react'

   ```

  <br/>

2. global style 적용 (preview.js) <br/>

   가. globalStyle 파일 작성 <br/>
   &nbsp; : css reset & 공통 사용 스타일 <br/>

   > /src/assets/css/globalStyle.tsx

   <br/>

   나. preview.js 파일에 decorators 적용 <br/>
   &nbsp; &nbsp; (단, storybook에서만 적용되고, 배포시엔 적용 안됨. &nbsp; 배포시 적용은 root/index.js에 적용하기)

   ```
       [preview.js]


       import React from 'react';
       import GlobalStyle from '../src/assets/css/globalStyle.tsx';

       export const decorators = [
       (Story) => (
           <>
           <GlobalStyle />             // => 여기!
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
       };

   ```

<br/>

3. 컴포넌트에 적용

   ```

     [EX] Button

         /** @jsxImportSource @emotion/react */
         import { css } from '@emotion/react';
         import styled from '@emotion/styled';

         const buttonStyle = css`
             background-color: #007bff;
             color: white;
             padding: 10px 20px;
             border: none;
             border-radius: 4px;
             cursor: pointer;
             &:hover {
                 background-color: #0056b3;
             }
         `;

         const StyledButton = styled.button`
             background-color: #28a745;
             color: white;
             padding: 10px 20px;
             border: none;
             border-radius: 4px;
             cursor: pointer;
             &:hover {
                 background-color: #218838;
             }
         `;

         export interface ButtonProps {
             label: string;
             theme?: 'primary' | 'secondary' | 'tertiary';
             size?: 'small' | 'medium' | 'big';
             width?: string | number;
             onClick?: (e?: any) => void;
             disabled?: boolean;
         }

         const Button: React.FC<ButtonProps> = ({
             theme = 'primary',
             size = 'medium',
             width = '100px',
             label = '',
             onClick,
             disabled = false,
             }) => {
             return (
                 <>
                 <button css={buttonStyle} onClick={onClick} disabled={disabled}>
                     {label}
                 </button>
                 <StyledButton onClick={onClick}>{label}</StyledButton>
                 </>
             );
         };

         export default Button;


   ```

  <br/>

4.  babel-preset-css-prop 설정
    : css props 으로 스타일을 줄 때 상단에 아래 코드 매번 기입해야 하는 이슈 해결(미기입 처리)

    ```
        /** @jsxImportSource @emotion/react */

        or

        /** @jsx jsx */                             // 주석도 함께 써야함
        import { jsx } from '@emotion/react'



        [...]

        // 상단 기입 안 하면 아래 css={~} 부분에 에러나면서 실행 안 됨
        <button css={buttonStyle} onClick={onClick} disabled={disabled}>
            {label}
        </button>

    ```

    babel-preset-css-prop으로 [미기입 처리] <br/>

        가. babel-preset-css-prop 설치
           $ yarn add @emotion/babel-preset-css-prop
           $ npm install @emotion/babel-preset-css-prop


        나. main.js 에서 에러 해결을 위해 webpackFinal 설정

  <br/>

<br/><br/>

### [Coding Convention]()

[Prettier] 설정 - 파일 저장 시 반영 되도록 처리 <br/>

1. .prettierrc.json 파일 생성

```
  {
      "trailingComma": "es5",
      "semi": true,
      "singleQuote": true,
      "tabWidth": 2,
      "useTabs": false,
      "quoteProps": "as-needed",
      "printWidth": 120
  }

```

  <br/>

2. 파일 저장 시, Prettier 규칙 바로 적용 <br/>

```
  [./vscode/settings.json] 파일 생성

  {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  }

```

<br/><br/><br/><br/>

[참고] <br/>
설치 : https://velog.io/@kimhyo_0218/Storybook-Emotion-%EA%B3%BC-Storybook-TypeScript-%EB%A1%9C-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0-%EC%B4%88%EA%B8%B0-%EC%85%8B%ED%8C%85%ED%8E%B8-
<br/><br/>
emotion 세팅 : https://velog.io/@kimhyo_0218/Storybook-emotion%EC%9C%BC%EB%A1%9C-storybook-%EA%B8%80%EB%A1%9C%EB%B2%8C-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-reset-css
