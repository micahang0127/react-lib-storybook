import React from 'react';

export interface RadioListProps {
  id: string;
  list: any[];
  value: any;
  setValue: any;
  columnValue?: string;
  columnLabel?: string;
}

const RadioList = ({
  id = 'RadioList',
  list = [
    {
      name: 'sample1',
      value: '01',
      text: 'sample1',
    },
    {
      name: 'sample2',
      value: '02',
      text: 'sample2',
    },
  ],
  value,
  setValue,
  columnValue = '',
  columnLabel = '',
}: RadioListProps) => {
  return (
    <>
      {list.map((l, i) => {
        return (
          <label htmlFor={id + i} key={id + i}>
            <input
              type="radio"
              name={id + i}
              value={columnValue ? l[columnValue] : JSON.stringify(l)}
              checked={columnValue ? value === l[columnValue] : JSON.stringify(value) === JSON.stringify(l)}
              onChange={(e) => {
                const value = columnValue ? e.target.value : JSON.parse(e.target.value);
                setValue(value);
              }}
            />
            <span style={{ margin: '0 5px' }}>{columnLabel ? l[columnLabel] : l}</span>
          </label>
        );
      })}
    </>
  );
};

export default RadioList;
