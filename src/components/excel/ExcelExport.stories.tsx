import { Meta, StoryFn } from '@storybook/react';
import ExcelExport, { ExcelExportProps } from './ExcelExport';

export default {
  title: 'Components/Utils/Excel/ExcelBasic',
  component: ExcelExport,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Excel Export',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: '버튼 내부 글씨',
    },
    onClickExcel: {
      action: 'clicked',
      description:
        '[event] 버튼 클릭 시 이벤트 - (function) - <br/> Excel 파일 다운로드 처리 <br/><br/>' +
        '[!] 파라미터1: callbackFunc의 함수 <br/>' +
        '&nbsp;&nbsp;&nbsp;&nbsp; callbackFunc: (excelData, fileName) => { ... }  <br/>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [callbackFunc 함수의 파라미터] : <br/>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 파라미터1: excelData: excel로 출력할 데이터 (array) <br/>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 파라미터2: fileName: excel 파일의 파일명 지정 (string) <br/>',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 disabled 처리 <br/> : true / false',
    },
  },
} as Meta;

const Template: StoryFn<ExcelExportProps> = (args) => {
  const onClickExcel = (callbackFunc: any) => {
    const data = [
      { id: '01', name: '홍길동', phone: '010-1111-1111' },
      { id: '02', name: '홍길이', phone: '010-2222-2222' },
      { id: '03', name: '홍길삼', phone: '010-3333-3333' },
    ];
    const today = new Date();
    const todayFormat = today.toLocaleDateString();

    callbackFunc(data, `excel_example_${todayFormat}`);
  };
  return <ExcelExport {...args} onClickExcel={onClickExcel} />;
};

export const ExcelExportBasic = Template.bind({});
ExcelExportBasic.args = {
  label: 'Excel Export',
};
ExcelExportBasic.parameters = {
  docs: {
    source: {
      code: `
// [사용 코드 예시]

const ExcelExport = () => {
  const [excelData, setExcelData] = useState([
    { id: '01', name: '홍길동', phone: '010-1111-1111' },
    { id: '02', name: '홍길이', phone: '010-2222-2222' },
    { id: '03', name: '홍길삼', phone: '010-3333-3333' },
  ]);

  const onClickExcel = (callbackFunc: any) => {
    const today = new Date();
    const todayFormat = today.toLocaleDateString();

    callbackFunc(excelData, 'excel_example_' + todayFormat);
  };

  return <ExcelExport label="Excel Export" onClickExcel={onClickExcel} disabled={false} />;
};
`,
    },
  },
};
