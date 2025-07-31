/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface SelectProps {
  id?: string;
  title?: string;
  placeholder?: string;
  topOption?: string;
  topOptionValue?: string;
  list: any[];
  value: any;
  onChange?: any;
  columnValue?: string;
  columnLabel?: string;
  errUsing?: boolean;
  errMsg?: string;
  disabled?: boolean;
  disabledOptionList?: { key: string; list: any[] };
}

// [TODO] disabled일 때 style 어떻게 처리할 건지 고민필요(유연해야함)

const cssWarningMsg = css`
  color: #fe4a1c;
  margin-top: 6px;
  font-size: 14px !important;
  letter-spacing: -0.14px !important;
  line-height: 19px !important;
  font-weight: 400 !important;
`;

const Select = ({
  id = 'epk-select',
  title = '',
  placeholder = '',
  topOption = '',
  topOptionValue = '', // [!] placeholder과 topOption 두 개를 모두 사용하는 경우, 반드시 topOptionValue를 기입해야 한다. (둘 중 하나만 사용할 때는 두개 모두 default 값은 "" 임)
  list = [],
  value = '',
  onChange = () => {},
  columnValue = '',
  columnLabel = '',
  errUsing = false,
  errMsg = '',
  disabled = false,
  disabledOptionList = { key: '', list: [] },
}: SelectProps) => {
  return (
    <>
      <select
        className="epk-select"
        value={!value ? value : columnValue ? value[columnValue] : JSON.stringify(value)}
        onChange={(e) =>
          onChange(() => {
            try {
              return JSON.parse(e.target.value);
            } catch {
              return e.target.value;
            }
          })
        }
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {topOption && (
          <option value={topOptionValue ? topOptionValue : placeholder ? 'TOP_VALUE' : ''}>{topOption}</option>
        )}
        {list.map((item: any, i: number) => {
          return (
            <option
              key={'select_' + id + i}
              value={columnValue ? item[columnValue] : JSON.stringify(item)}
              disabled={
                disabledOptionList?.list.length > 0 &&
                disabledOptionList.list.includes(disabledOptionList?.key ? item[disabledOptionList?.key] : item)
              }
            >
              {columnLabel ? item[columnLabel] : item}
            </option>
          );
        })}
      </select>
      {errUsing && errMsg && <p css={cssWarningMsg}>{errMsg}</p>}
      <br />
      <br />
      <div style={{ color: 'gray', fontSize: '14px' }}>Value(선택 값) : {JSON.stringify(value)}</div>
      {/* {title && <p style={{ color: 'gray', fontSize: '13px' }}>설명 : {title}</p>} */}
    </>
  );
};

export default Select;
