/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import TablePaginationMui from './pagination/TablePaginationMui';
import './styled.css';

// [TODO] table scroll 처리, onClickTr 클릭 행 배경컬러(css) 처리

const titleTopCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export interface TableBasicProps {
  data: any[];
  tableData: { width?: string; th: string; tdKey?: any; thJsx?: any; tdJsx?: any }[];
  onClickTr?: (data?: any) => void;
  onClickTd?: (tdKey?: any, tdValue?: any, trData?: any) => void;

  checkboxObj?: {
    useCheckbox: boolean;
    useCheckAll?: boolean;
    checkList: any[];
    setCheckList?: any;
    onChangeCheck?: (e: any, data: any) => void;
    onChangeCheckAll?: (e: any) => void;
    checkDisabledList?: any[];
  };

  TableTopLeftJsx?: any;
  TableTopRightJsx?: any;

  usePage?: boolean;
  pageInfo?: { totalPage: number; page: number; setPage: any };
}

// [하단 사용예시 참고]
const TableBasic = ({
  data = [],
  tableData = [],
  onClickTr = (data: object) => {},
  onClickTd = (tdKey: string, tdValue: any, trData: object) => {},

  checkboxObj = {
    useCheckbox: false,
    useCheckAll: false,
    checkList: [],
    setCheckList: () => {},
    onChangeCheck: () => {},
    onChangeCheckAll: () => {},
    checkDisabledList: [],
  },

  TableTopLeftJsx = () => <></>,
  TableTopRightJsx = () => <></>,

  usePage = true,
  pageInfo = { totalPage: 1, page: 1, setPage: () => {} },
}: TableBasicProps) => {
  const [checkAll, setCheckAll] = useState(false);

  // ================================================[CHECKBOX]========================================================
  useEffect(() => {
    const { checkList, checkDisabledList }: any = checkboxObj;
    let _dataF = data;
    let _checkListF = checkList;

    if (checkDisabledList) {
      const checkDisabledListJson = new Set(checkDisabledList.map((item: any) => JSON.stringify(item)));

      _dataF = data.filter((item) => !checkDisabledListJson.has(JSON.stringify(item)));
      _checkListF = checkList?.filter((item: any) => !checkDisabledListJson.has(JSON.stringify(item)));
    }

    const _data = _dataF.sort((a, b) => {
      const aString = JSON.stringify(a);
      const bString = JSON.stringify(b);
      if (aString < bString) return -1;
      if (aString > bString) return 1;
      return 0;
    });
    const _checkList = _checkListF?.sort((a: any, b: any) => {
      const aString = JSON.stringify(a);
      const bString = JSON.stringify(b);
      if (aString < bString) return -1;
      if (aString > bString) return 1;
      return 0;
    });
    JSON.stringify(_data) === JSON.stringify(_checkList) ? setCheckAll(true) : setCheckAll(false);
  }, [checkboxObj.checkList, checkboxObj.checkDisabledList]);

  const onChangeCheckAll = (e: any) => {
    const { setCheckList, onChangeCheckAll, checkDisabledList }: any = checkboxObj;
    let _dataF = data;

    if (e.target.checked) {
      if (checkDisabledList) {
        const checkDisabledListJson = new Set(checkDisabledList.map((item: any) => JSON.stringify(item)));
        _dataF = data.filter((item) => !checkDisabledListJson.has(JSON.stringify(item)));
      }
      if (setCheckList) setCheckList(_dataF);
      if (onChangeCheckAll) onChangeCheckAll(e);
    } else {
      if (setCheckList) setCheckList([]);
      if (onChangeCheckAll) onChangeCheckAll(e);
    }
  };

  const onChangeCheckEach = (e: any, value: any) => {
    e.stopPropagation(); // 이벤트 버블링 방지 (부모인 onClickTr()도 같이 발생하는 버블링)

    if (checkboxObj.onChangeCheck) checkboxObj.onChangeCheck(e, value);

    if (checkboxObj.checkList && checkboxObj.setCheckList) {
      if (e.target.checked) checkboxObj.setCheckList([...checkboxObj.checkList, value]);
      else checkboxObj.setCheckList(checkboxObj.checkList.filter((c: any) => c !== value));
    }
  };
  // ================================================================================================================

  return (
    <>
      <div>
        <div className="table-top-part" css={titleTopCss}>
          <div className="table-top-part__left">
            <TableTopLeftJsx />
          </div>
          <div>
            <TableTopRightJsx />
          </div>
        </div>

        <div className="table_body_wrap">
          <div className="table_box">
            <table>
              <colgroup>
                {checkboxObj.useCheckbox && <col width="50px" />}
                {tableData.map((t, i) => (
                  <col key={'tableCol' + i} width={t.width ? t.width : 'auto'} />
                ))}
              </colgroup>
              <thead>
                <tr style={{ border: '1px solid' }}>
                  {checkboxObj.useCheckbox && checkboxObj.useCheckAll && (
                    <th>
                      <label htmlFor="tableThCheckAll" className="input_checkbox">
                        <input
                          type="checkbox"
                          id="tableThCheckAll"
                          name="tableThCheckAll"
                          checked={checkAll}
                          onChange={onChangeCheckAll}
                        />
                        <span></span>
                      </label>
                    </th>
                  )}
                  {tableData.map((t, i) => (
                    <th key={'tableTh' + i}>{t.thJsx ? t.thJsx(t, i) : t.th}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.map((d: any, i: number) => {
                  return (
                    <tr key={'tbodyData' + i} onClick={(e) => onClickTr(d)}>
                      {checkboxObj.useCheckbox && (
                        <td>
                          <label htmlFor={'tableTdCheck' + i} className="input_checkbox">
                            <input
                              type="checkbox"
                              id={'tableTdCheck' + i}
                              name={'tableTdCheck' + i}
                              checked={
                                checkboxObj?.checkList?.find((c: any) => JSON.stringify(c) == JSON.stringify(d)) || ''
                              }
                              onChange={(e) => onChangeCheckEach(e, d)}
                              onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지 (부모인 onClickTr()도 같이 발생하는 버블링)
                              disabled={checkboxObj?.checkDisabledList?.find(
                                (c: any) => JSON.stringify(c) == JSON.stringify(d)
                              )}
                            />
                            <span></span>
                          </label>
                        </td>
                      )}
                      {tableData.map(
                        (t: { width?: string; th: string; tdKey?: any; thJsx?: any; tdJsx?: any }, j: number) => {
                          if (t.tdJsx) {
                            return (
                              <td key={'tableTd' + j} onClick={() => onClickTd(t.tdKey, t.tdJsx(d)?.props.children, d)}>
                                {t.tdJsx(d, i)}
                              </td>
                            );
                          } else if (Array.isArray(t.tdKey)) {
                            let _d = d;
                            for (const key of t.tdKey) {
                              _d = _d[key];
                            }
                            return (
                              <td key={'tableTd' + j} onClick={() => onClickTd(t.tdKey, _d, d)}>
                                {_d}
                              </td>
                            );
                          } else {
                            return (
                              <td key={'tableTd' + j} onClick={() => onClickTd(t.tdKey, d[t.tdKey], d)}>
                                {d[t.tdKey]}
                              </td>
                            );
                          }
                        }
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {usePage && (
        <TablePaginationMui
          totalPage={pageInfo?.totalPage}
          page={pageInfo?.page}
          setPage={(p: any) => pageInfo.setPage(p)}
        />
      )}
    </>
  );
};

export default TableBasic;

/*

***[사용예시]***

<TableBasicCp
    //===========================[SORT]===========================
    PropsTableItemOptionCp={() => {
        return (
            <TableItemOptionCp
                sortDesc={sortDesc}
                setSortDesc={setSortDesc}
                pageSize={pageSize}
                setPageSize={setPageSize}
                >
                <select className="col_2" value={tableSortTarget} onChange={(e) => setTableSortTarget(e.target.value)}>
                    <option value="createTime">신청일</option>
                    <option value="reserveDate">예약일</option>
                </select>
            </TableItemOptionCp>
        );
    }}

    //===========================[PAGE]===========================
    pageInfo={{ totalPage, page, setPage }}

    //===========================[좌측 체크박스 사용 유/무]===========================
    checkboxObj.useCheckbox={true}

    //===========================[DATA]===========================
    data={sampleData}

    //===========================[CLICK]===========================
    onClickTr={(data) => {                  // [tr 클릭]
        console.log('tr', data);
    }}
    onClickTd={(key, data, trData) => {           // [td 클릭] 
        console.log('td', key, data);             // key: 해당열 key값 / data: 해당 열 data값
        console.log('tr', trData);                // trData: 해당 행 tr 값
    }}
    tableData={[                            // [table 데이터]
        {
            width: '60px',      // 컬럼 width
            th: 'NO.',          // 컬럼명 (thead)
            tdKey: 'no',        // data 에서의 해당되는 컬럼값
        },
        {
            width: '100px',
            th: '피카맨',
            tdKey: 'pikarManIDX',
            thJsx: (d) => {                         // th 를 직접 구현 
              return (
                <div className="tltip_box">
                  피카맨
                  <img src={`${imagesURL}/Warning_icon2.png`} width="18px" className="tltip" alt="warning_icon2" />
                </div>
              );
            },
          },
        {
            width: '120px',
            th: '시승코드',
            tdKey: 'idx',
            tdJsx: (d) => <span className="link_td">{d?.idx}</span>,     // td 를 직접 구현 
        },
        {
            width: '150px',
            th: '예약일',
            tdKey: 'reserveDate',
            tdJsx: (d) => (                                             // td 를 직접 구현 
            <span className="text">
                {formatDate(d.reserveDate, 'YYYY-MM-DD') +
                (d.timeMarker && ' ' + CONST_TIMEMARKER[d.timeMarker]?.label)}
            </span>
            ),
        },
    ]}
/>


*/
