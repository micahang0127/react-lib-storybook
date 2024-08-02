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

const Template: StoryFn<TableBasicProps> = (args) => {
  const [page, setPage] = useState(1);
  const [checkList, setCheckList] = useState<any>([]);
  const [excelData, setExcelData] = useState(sampleData);

  const [sort, setSort] = useState<'desc' | 'asc' | ''>('desc');
  const [pageSize, setPageSize] = useState(10);
  const [tableSortTarget, setTableSortTarget] = useState('id');

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
    <>
      <TableBasic
        {...args}
        usePage={true} // 미기입시 default: true
        pageInfo={{ totalPage: 10, page, setPage }}
        checkboxObj={{
          // check관련 props 모음
          useCheckbox: true, // [필수]
          useCheckAll: true, // 체크박스 전체선택 사용 유무(이 값이 true면, setCheckList나 onChangeCheck 둘 중 하나는 꼭 사용해야 함, checkList를 컨트롤 해야 하기 때문)
          checkList, // [필수]
          setCheckList,
          onChangeCheck, // 좌측 checkbox 이벤트 직접 커스텀 시 사용 (setCheckList 대신에 onChangeCheck으로 checkList를 직접 변경처리 할 때 사용)
          onChangeCheckAll, // 좌측 checkbox 전체 선택 이벤트 직접 커스텀 시 사용
          checkDisabledList: sampleCheckDisabledList, // checkbox를 disabled 할 데이터 목록
        }}
        onClickTr={onClickTr} // 행 클릭(tr) 시, 발생 함수
        onClickTd={onClickTd} // 데이터항목(td) 클릭 시, 발생 함수
        TableTopLeftJsx={() => {
          return (
            <TableSortSelect
              sortValue={sort}
              setSortValue={setSort}
              pageSize={pageSize}
              setPageSize={setPageSize}
              // sortLabel={['내림차순', '오름차순']}
              // pageSizeOption={[10, 30, 50, 100]}
            >
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
        }} // 테이블의 상위 좌측 부분 처리
        // TableTopLeftJsx={() => <div>TopLeft</div>} // 테이블의 상위 좌측 부분 처리
        TableTopRightJsx={() => (
          // 테이블의 상위 우측 부분 처리 (ex> 엑셀 버튼 등)
          <div style={{ display: 'flex' }}>
            <ExcelExport label="Excel Export" onClickExcel={onClickExcel} disabled={false} />
            <button onClick={() => alert('clicked top right')}>버튼</button>
          </div>
        )}
      />
    </>
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
    mouseOver: 'Y',
  },
  { no: 5, name: '마', email: 'e@e.com', phone: '010-5555-5555', memo: '', mouseOver: '' },
];

export const TableBasicDefault = Template.bind({});
TableBasicDefault.args = {
  data: sampleData,
  tableData: [
    {
      width: '50px',
      th: 'NO.',
      tdKey: 'no',
    },
    {
      width: '100px',
      th: '이름',
      tdKey: 'name',
    },
    {
      width: '180px',
      th: '이메일',
      tdKey: 'email',
    },
    {
      width: '200px',
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
      width: '250px',
      th: 'th 커스텀 - thJsx props 사용',
      tdKey: 'mouseOver',
      // [TODO] mouseOver
      thJsx: (t: any, i: number) => {
        return (
          <div className="tltip_box" style={{ color: 'blue' }}>
            [thJsx 예시] {t.th} (index:{i})
          </div>
        );
      },
      // [TODO] mouseOver
      tdJsx: (d: any, i: number) => {
        {
          return (
            d.mouseOver && (
              <div style={{ color: 'tomato' }}>
                [tdJsx 예시] {d.mouseOver} (index:{i})
              </div>
            )
          );
        }
      },
    },
  ],
};

TableBasicDefault.parameters = {
  docs: {
    description: {
      story: 'Table 기본 구성 <br/> Table / 정렬 Select / 페이징 / 엑셀출력',
    },
    source: {
      code: `
// [사용 코드 예시]

const TableBasicExample = () => {
    const [page, setPage] = useState(1);
    const [checkList, setCheckList] = useState<any>([]);
    const [excelData, setExcelData] = useState(sampleData);
  
    const [sort, setSort] = useState<'desc' | 'asc' | ''>('desc');
    const [pageSize, setPageSize] = useState(10);
    const [tableSortTarget, setTableSortTarget] = useState('id');
  
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
      <>
        <TableBasic
          {...args}
          usePage={true} // 미기입시 default: true
          pageInfo={{ totalPage: 10, page, setPage }}
          checkboxObj={{
            // check관련 props 모음
            useCheckbox: true, // [필수]
            useCheckAll: true, // 체크박스 전체선택 사용 유무(이 값이 true면, setCheckList나 onChangeCheck 둘 중 하나는 꼭 사용해야 함, checkList를 컨트롤 해야 하기 때문)
            checkList, // [필수]
            setCheckList,
            onChangeCheck, // 좌측 checkbox 이벤트 직접 커스텀 시 사용 (setCheckList 대신에 onChangeCheck으로 checkList를 직접 변경처리 할 때 사용)
            onChangeCheckAll, // 좌측 checkbox 전체 선택 이벤트 직접 커스텀 시 사용
            checkDisabledList: sampleCheckDisabledList, // checkbox를 disabled 할 데이터 목록
          }}
          onClickTr={onClickTr} // 행 클릭(tr) 시, 발생 함수
          onClickTd={onClickTd} // 데이터항목(td) 클릭 시, 발생 함수
          TableTopLeftJsx={() => {
            return (
              <TableSortSelect
                sortValue={sort}
                setSortValue={setSort}
                pageSize={pageSize}
                setPageSize={setPageSize}
                // sortLabel={['내림차순', '오름차순']}
                // pageSizeOption={[10, 30, 50, 100]}
              >
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
          }} // 테이블의 상위 좌측 부분 처리
          // TableTopLeftJsx={() => <div>TopLeft</div>} // 테이블의 상위 좌측 부분 처리
          TableTopRightJsx={() => (
            // 테이블의 상위 우측 부분 처리 (ex> 엑셀 버튼 등)
            <div style={{ display: 'flex' }}>
              <ExcelExport label="Excel Export" onClickExcel={onClickExcel} disabled={false} />
              <button onClick={() => alert('clicked top right')}>버튼</button>
            </div>
          )}
        />
      </>
    );
  };
`,
    },
  },
};

const TableBasicExample = () => {
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
          width: '100px',
          th: '이름',
          tdKey: 'name',
        },
        {
          width: '180px',
          th: '이메일',
          tdKey: 'email',
        },
        {
          width: '200px',
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
          width: '250px',
          th: 'th 커스텀 - thJsx props 사용',
          tdKey: 'mouseOver',
          thJsx: (t: any, i: number) => {
            return (
              <div className="tltip_box" style={{ color: 'blue' }}>
                [thJsx 예시] {t.th} (index:{i})
              </div>
            );
          },
          tdJsx: (d: any, i: number) => {
            {
              return (
                d.mouseOver && (
                  <div style={{ color: 'tomato' }}>
                    [tdJsx 예시] {d.mouseOver} (index:{i})
                  </div>
                )
              );
            }
          },
        },
      ]}
      usePage={true} // 미기입시 default: true
      pageInfo={{ totalPage: 10, page, setPage }}
      checkboxObj={{
        // check관련 props 모음
        useCheckbox: true,
        useCheckAll: true,
        checkList,
        setCheckList,
        onChangeCheck,
        onChangeCheckAll,
        checkDisabledList: sampleCheckDisabledList, // checkbox를 disabled 할 데이터 목록
      }}
      onClickTr={onClickTr} // 행 클릭(tr) 시, 발생 함수
      onClickTd={onClickTd} // 데이터항목(td) 클릭 시, 발생 함수
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
      }} // 테이블의 상위 좌측 부분 처리
      // TableTopLeftJsx={() => <div>TopLeft</div>} // 테이블의 상위 좌측 부분 처리
      TableTopRightJsx={() => (
        // 테이블의 상위 우측 부분 처리 (ex> 엑셀 버튼 등)
        <div style={{ display: 'flex' }}>
          <ExcelExport label="Excel Export" onClickExcel={onClickExcel} disabled={false} />
          <button onClick={() => alert('clicked top right')}>버튼</button>
        </div>
      )}
    />
  );
};
