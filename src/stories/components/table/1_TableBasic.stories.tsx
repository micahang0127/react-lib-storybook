import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableBasic, { TableBasicProps } from './TableBasic';
import TableSortSelect from './items/TableSortSelect';
import ExcelExport from '../excel/ExcelExport';

export default {
  title: 'Components/Table/TableBasic',
  component: TableBasic,
  tags: ['autodocs'],
  argTypes: {
    data: {
      description: 'table의 td의 데이터',
    },
    tableData: {
      description: 'table의 th의 데이터 정의',
    },
    onClickTr: {
      description: '[event] tr 클릭 시 이벤트, <br/><br/> - 파라미터 1: 클릭한 tr(행)의 data <br/>',
    },
    onClickTd: {
      description:
        '[event] td 각 데이터 클릭 시 이벤트 <br/><br/> - 파라미터 1: 해당 열(column)의 key(tableData에서 사용자가 직접 정의한 값) <br/> - 파라미터 2: 클릭한 데이터 값(td값) <br/> - 파라미터 3: 클릭한 tr(행)의 data <br/>',
    },
    checkboxObj: {
      control: 'object',
      description:
        '[object] 좌측 체크박스 설정 <br/><br/>' +
        '- key1: useCheckbox : <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[필수] 좌측 체크박스 사용 유/무 <br/>' +
        '- key2: useCheckAll : <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 상단 전체선택 사용 유/무 <br/>' +
        ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [!] useCheckAll가 true 일 땐, <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [setCheckList]나 [onChangeCheckAll] 둘 중 하나는 꼭 사용해야 함. <br/> ' +
        '- key3: checkList : <br/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [필수] 체크된 데이터 목록 <br/>' +
        '- key4: setCheckList :<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 체크박스 변경 함수 <br/>' +
        '- key5: onChangeCheck : <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [event] 체크박스 직접 변경 처리(function) <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ([setCheckList] 대신 사용, 둘 중 하나는 꼭 사용해야 체크박스 변경가능) <br/>' +
        '- key6: onChangeCheckAll : <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [event] 상단 전체선택 직접 변경 처리(function) <br/>' +
        '- key7: checkDisabledList : <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 체크박스를 disabled 처리할 데이터 목록  <br/><br/>',
    },
    TableTopLeftJsx: {
      description:
        '[컴포넌트] 테이블 상위 좌측 부분 처리 <br/> &nbsp;&nbsp; TableTopLeftJsx={()  => &lt;button&gt;버튼&lt;/button&gt;} <br/> &nbsp;&nbsp;&nbsp;위 처럼 함수 형태로 props를 주어야 한다.',
    },
    TableTopRightJsx: {
      description:
        '[컴포넌트] 테이블 상위 우측 부분 처리 <br/> &nbsp;&nbsp; TableTopRightJsx={()  => &lt;ExcelExport /&gt;} <br/> &nbsp;&nbsp;&nbsp;위 처럼 함수 형태로 props를 주어야 한다.',
    },
    usePage: {
      control: 'boolean',
      description: '페이지네이션 사용 유/무 <br/> : true / false',
    },
    pageInfo: {
      control: 'object',
      description:
        '[objct] 페이지네이션 사용 시 필요 data들 <br/><br/>' +
        '- key1: totalPage : <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 페이이징으로 나타내는 페이지 수 (number)  <br/>' +
        '- key2: page : <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 현재 페이지 번호 (number) &nbsp;  1부터 시작 <br/>' +
        '- key3: setPage : <br/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [event] 현재 페이지 변경 함수(페이지 클릭(변경) 시 처리) (function) <br/><br/>',
    },
  },
} as Meta;

const Template: StoryFn<TableBasicProps> = () => {
  const [data, setData] = useState(sampleData);
  const [checkList, setCheckList] = useState<any>([]);
  const [excelData, setExcelData] = useState(sampleData);

  const [sort, setSort] = useState<'desc' | 'asc' | ''>('desc');
  const [pageSize, setPageSize] = useState(10);
  const [tableSortTarget, setTableSortTarget] = useState('id');
  const [page, setPage] = useState(1);

  const onClickTr = (_trData: object) => {
    alert('onClickTr(행 클릭)\n * 첫번째 파라미터: ' + JSON.stringify(_trData));
  };
  const onClickTd = (_tdKey: string, _tdValue: any, _trData: object) => {
    alert(
      'onClickTd (데이터 클릭)\n * 첫번째 파리미터: ' +
        _tdKey +
        '\n * 두번째 파라미터: ' +
        JSON.stringify(_tdValue) +
        '\n * 세번째 파라미터: ' +
        JSON.stringify(_trData)
    );
  };

  const onChangeCheck = (event: any, _trData: any) => {
    event.target.checked
      ? setCheckList([...checkList, _trData])
      : setCheckList(checkList.filter((c: any) => c !== _trData));
  };
  const onChangeCheckAll = (event: any) => {
    setCheckList(event.target.checked ? sampleData : []);
  };

  const onClickExcel = (callbackFunc: any) => {
    const today = new Date();
    const todayFormat = today.toLocaleDateString();

    callbackFunc(excelData, 'excel_example_' + todayFormat);
  };

  return (
    <TableBasic
      data={data}
      tableData={[
        {
          width: '50px',
          th: 'NO.',
          tdKey: 'no',
        },
        {
          width: '500px',
          th: '이름',
          tdKey: 'name',
        },
        {
          width: '180px',
          th: '이메일',
          tdKey: 'email',
        },
        {
          width: '250px',
          th: '핸드폰번호',
          tdKey: 'phone',
        },
        {
          width: '300px',
          th: '메모',
          tdKey: 'memo',
          tdJsx: (d: any, i: number) => (
            <>
              {d.memo ? (
                <div style={{ color: 'green' }}>
                  [tdJsx 예시] td 커스텀 <br />
                  {d.memo} (index:{i})
                </div>
              ) : (
                <div>(index:{i})</div>
              )}
            </>
          ),
        },
        {
          width: '300px',
          th: 'th 커스텀 - thJsx props 사용',
          tdKey: 'mouseOver',
          thJsx: (t: any, i: number) => {
            return (
              <div className="mouseover-tooltip" style={{ color: 'blue' }}>
                [thJsx 예시] {t.th} (index:{i})
              </div>
            );
          },
          tdJsx: (d: any, i: number) => {
            {
              return (
                d.mouseOver && (
                  <div className="mouseover-tooltip" style={{ color: 'tomato' }}>
                    [tdJsx 예시] {d.mouseOver} (index:{i})
                  </div>
                )
              );
            }
          },
        },
      ]}
      usePage={true} // 미기입 시, default값 true
      pageInfo={{ totalPage: 10, page, setPage }}
      checkboxObj={{
        // check관련 props 모음
        useCheckbox: true, // 미기입 시, false - 체크박스 안나타남
        useCheckAll: true, // 전체선택 체크 유/무
        checkList,
        setCheckList, // setCheckList와 onChangeCheck 둘중 하나는 있어함. 체크 동작을 처리 할 수 있음
        onChangeCheck,
        onChangeCheckAll, // setCheckList와 onChangeCheck 둘중 하나는 있어 함. 체크 동작을 처리 해야 전체 선택도 처리 가능
        checkDisabledList: sampleCheckDisabledList, // [필수X] checkbox를 disabled 할 데이터 목록
      }}
      onClickTr={onClickTr} // 행 클릭(tr) 시, 발생 함수
      onClickTd={onClickTd} // 데이터항목(td) 클릭 시, 발생 함수
      // 테이블 상위 좌측 부분 처리
      TableTopLeftJsx={() => {
        return (
          <TableSortSelect sortValue={sort} setSortValue={setSort} pageSize={pageSize} setPageSize={setPageSize}>
            <select className="col_2" value={tableSortTarget} onChange={(e) => setTableSortTarget(e.target.value)}>
              {['name', 'email'].map((s, i) => {
                return (
                  <option key={'tableSortTargetSelect' + i} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </TableSortSelect>
        );
      }}
      // 테이블의 상위 우측 부분 처리 (ex> 엑셀 버튼 등)
      TableTopRightJsx={() => (
        <div style={{ display: 'flex' }}>
          <ExcelExport label="Excel Export" onClickExcel={onClickExcel} disabled={false} />
        </div>
      )}
    />
  );
};

const sampleData = [
  {
    no: 1,
    name: '가',
    email: 'a@a.com',
    phone: '010-1234-1234',
    memo: '1. tdJsx props 사용하여 td를 자유롭게 커스텀 할 수 있습니다. \n 2. data의 index 값도 가져 올 수 있습니다. ',
    mouseOver: '',
  },
  {
    no: 2,
    name: '나',
    email: 'b@b.com',
    phone: '010-2222-2222',
    memo: '',
    mouseOver: 'mouseOver커스텀',
  },
  {
    no: 3,
    name: '다',
    email: 'c@c.com',
    phone: '010-3333-3333',
    memo: '',
    mouseOver: 'mouseOver커스텀',
  },
  {
    no: 4,
    name: '라',
    email: 'd@d.com',
    phone: '010-4444-4444',
    memo: '',
    mouseOver: '',
  },
  { no: 5, name: '마', email: 'e@e.com', phone: '010-5555-5555', memo: '', mouseOver: '' },
  { no: 6, name: '바', email: 'f@f.com', phone: '010-6666-6666', memo: '', mouseOver: '' },
];

const sampleCheckDisabledList = [
  {
    no: 4,
    name: '라',
    email: 'd@d.com',
    phone: '010-4444-4444',
    memo: '',
    mouseOver: '',
  },
  { no: 5, name: '마', email: 'e@e.com', phone: '010-5555-5555', memo: '', mouseOver: '' },
];

export const TableBasicDefault = Template.bind({});
TableBasicDefault.parameters = {
  docs: {
    description: {
      story:
        '[Table 라이브러리] : 아래 "Show code" 로 사용 방법을 확인하실 수 있습니다. <br/> [기능] : 원하는 데이터 표기 / 데이터 정렬 select / 페이징 / 엑셀출력 <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 엑셀출력(Excel Export) 버튼을 눌러보세요.',
    },
    source: {
      code: `
// [사용 코드 예시]

import TableSortSelect from '<path입력>/TableSortSelect';
import ExcelExport from '<path입력>/ExcelExport';

const TableBasicExample = () => {
  const [data, setData] = useState(sampleData);
  const [checkList, setCheckList] = useState([]);
  const [excelData, setExcelData] = useState(sampleData);

  const [sort, setSort] = useState('desc');          // typescript 사용 시, 타입 <'desc' | 'asc' | ''> 
  const [pageSize, setPageSize] = useState(10);
  const [tableSortTarget, setTableSortTarget] = useState('id');
  const [page, setPage] = useState(1);

  const onClickTr = (_trData: object) => {
    alert('onClickTr(행 클릭)' + JSON.stringify(_trData));
  };

  const onClickTd = (_tdKey, _tdValue, _trData) => {
    alert('onClickTd (데이터 클릭) <br/>' + _tdKey + '<br/>' + JSON.stringify(_tdValue) + '<br/>' + JSON.stringify(_trData));
  };

  const onChangeCheck = (event, _trData) => {
    event.target.checked
      ? setCheckList([...checkList, _trData])
      : setCheckList(checkList.filter((c) => c !== _trData));
  };
  const onChangeCheckAll = (event) => {
    setCheckList(event.target.checked ? sampleData : []);
  };

  const onClickExcel = (callbackFunc) => {
    const today = new Date();
    const todayFormat = today.toLocaleDateString();

    callbackFunc(excelData, 'excel_example_' + todayFormat);
  };

  return (
    <TableBasic
      data={data}                                                   // table에 뿌려줄 데이터
      tableData={[                                                  // table 항목 값(column, 열) 정의
        {
          width: '50px',
          th: 'NO.',                                                     // 항목명(column, 열)
          tdKey: 'no',                                                   // 항목의 key(다른 항목의 tdKey와 중복X)
        },
        {
          width: '50px',
          th: '이름',
          tdKey: 'name',
        },
        {
          width: '180px',
          th: '이메일',
          tdKey: 'email',
        },
        {
          width: '250px',
          th: '핸드폰번호',
          tdKey: 'phone',
        },
        {
          width: '300px',
          th: '메모',
          tdKey: 'memo',
          tdJsx: (d, i) => (                                              // td 직접 커스텀마이징하여 사용
            <>
              {d.memo ? (
                <div style={{ color: 'green' }}>
                  [tdJsx 예시] td 커스텀 <br />
                  {d.memo} (index:{i})
                </div>
              ) : (
                <div>(index:{i})</div>
              )}
            </>
          ),
        },
        {
          width: '300px',
          th: 'th 커스텀 - thJsx props 사용',
          tdKey: 'mouseOver',
          thJsx: (t, i) => {                                              // td 직접 커스텀마이징하여 사용
            return (
              <div className="mouseover-tooltip" style={{ color: 'blue' }}>
                [thJsx 예시] {t.th} (index:{i})
              </div>
            );
          },
          tdJsx: (d, i) => {
            {
              return (
                d.mouseOver && (
                  <div className="mouseover-tooltip" style={{ color: 'tomato' }}>
                    [tdJsx 예시] {d.mouseOver} (index:{i})
                  </div>
                )
              );
            }
          },
        },
      ]}
      usePage={true}                                                    // [필수X] default값 true
      pageInfo={{ totalPage: 10, page, setPage }}                       // [필수X] 페이징 처리 정보
      checkboxObj={{                                                    // [필수X] check관련 props 모음
        useCheckbox: true,                                                  // 미기입 시, false - 체크박스 안 나타남
        useCheckAll: true,                                                  // 전체선택 체크 유/무 - default값 false
        checkList,
        setCheckList,                     // [필수X][onChangeCheck가 없다면 필수O] setCheckList와 onChangeCheck 둘중 하나는 있어야 함. 그래야 체크 동작을 처리 할 수 있음
        // onChangeCheck,                 // [필수X][setCheckList가 없다면 필수O] 체크변경 시 직접 처리(setCheckList 대신 사용)
        // onChangeCheckAll,              // [필수X] 전체선택 체크박스 직접 처리, setCheckList와 onChangeCheck 둘중 하나는 있어야 함. 체크 동작을 처리 해야 전체 선택도 처리 가능
        checkDisabledList: sampleCheckDisabledList,                         // [필수X] checkbox 중에 disabled 할 데이터 목록
      }}
      onClickTr={onClickTr}                                                 // [필수X] 행 클릭(tr) 시, 발생 함수
      onClickTd={onClickTd}                                                 // [필수X] 데이터항목(td) 클릭 시, 발생 함수
      TableTopLeftJsx={() => {            // [필수X] 테이블 상위 좌측 부분 처리, () => <div></div> 처럼 함수 형태여야 함. 
        return (
          <TableSortSelect sortValue={sort} setSortValue={setSort} pageSize={pageSize} setPageSize={setPageSize}>
            <select className="col_2" value={tableSortTarget} onChange={(e) => setTableSortTarget(e.target.value)}>
              {['name', 'email'].map((s, i) => {
                return (
                  <option key={'tableSortTargetSelect' + i} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </TableSortSelect>
        );
      }}
      TableTopRightJsx={() => (           // [필수X] 테이블의 상위 우측 부분 처리 (ex> 엑셀 버튼 등), () => <div></div> 처럼 함수 형태여야 함. 
        <div style={{ display: 'flex' }}>
          <ExcelExport label="Excel Export" onClickExcel={onClickExcel} disabled={false} />
          <button onClick={() => alert('clicked top right')}>버튼</button>
        </div>
      )}
    />
  );
};






// [사용 데이터 예시]
const sampleData = [
  {
    no: 1,
    name: '가',
    email: 'a@a.com',
    phone: '010-1234-1234',
    memo: '1. tdJsx props 사용하여 td를 자유롭게 커스텀 할 수 있습니다. \n 2. data의 index 값도 가져 올 수 있습니다. ',
    mouseOver: '',
  },
  {
    no: 2,
    name: '나',
    email: 'b@b.com',
    phone: '010-2222-2222',
    memo: '',
    mouseOver: 'mouseOver커스텀',
  },
  {
    no: 3,
    name: '다',
    email: 'c@c.com',
    phone: '010-3333-3333',
    memo: '',
    mouseOver: 'mouseOver커스텀',
  },
  {
    no: 4,
    name: '라',
    email: 'd@d.com',
    phone: '010-4444-4444',
    memo: '',
    mouseOver: '',
  },
  { no: 5, name: '마', email: 'e@e.com', phone: '010-5555-5555', memo: '', mouseOver: '' },
  { no: 6, name: '바', email: 'f@f.com', phone: '010-6666-6666', memo: '', mouseOver: '' },
];


const sampleCheckDisabledList = [
  {
    no: 4,
    name: '라',
    email: 'd@d.com',
    phone: '010-4444-4444',
    memo: '',
    mouseOver: '',
  },
  { no: 5, name: '마', email: 'e@e.com', phone: '010-5555-5555', memo: '', mouseOver: '' },
];


  
`,
    },
  },
};
