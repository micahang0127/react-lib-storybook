import React from 'react';

export interface CheckboxListProps {
  id?: string;
  labelAll?: string;
  columnLabel?: string;
  list: any[];
  checkedList: any[];
  setCheckedList: (e: any) => void;
  // disabled?: boolean;
}
export const CheckboxList = ({
  id = 'checkboxListArray',
  labelAll = '전체',
  columnLabel = '',
  list = [],
  checkedList = [],
  setCheckedList = () => {},
  // disabledList = false,
}: CheckboxListProps) => {
  const onChangeEach = (e: any, value: any) => {
    if (e.target.checked) setCheckedList([...checkedList, value]);
    else setCheckedList(checkedList.filter((v) => v !== value));
  };

  return (
    <ul className="lib-checkbox-list">
      <li>
        <label htmlFor={'allchk_' + id}>
          <input
            type="checkbox"
            id={'allchk_' + id}
            onChange={(e) => setCheckedList(e.target.checked ? list : [])}
            checked={list.length === checkedList.length}
          />
          <span style={{ margin: '0 5px', color: 'blue' }}>{labelAll}</span>
        </label>
      </li>
      {list?.map((l, i) => {
        return (
          <li key={'checkBoxList_' + id + i}>
            <label htmlFor={'checkBoxList_' + id + i}>
              <input
                type="checkbox"
                id={'checkBoxList_' + id + i}
                onChange={(e) => onChangeEach(e, l)}
                checked={checkedList.includes(l)}
              />
              <span style={{ margin: '0 5px' }}>{columnLabel ? l[columnLabel] : l}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default CheckboxList;
