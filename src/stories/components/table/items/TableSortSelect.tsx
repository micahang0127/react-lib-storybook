import React from 'react';
import '../styled.css';

export interface TableSortSelectProps {
  children?: any;
  sortLabel?: string[];
  sortValue: 'desc' | 'asc' | '';
  setSortValue?: any;
  pageSize?: number;
  setPageSize?: any;
  pageSizeOption?: number[];
}

const TableSortSelect = ({
  children = <></>,
  sortLabel = ['내림차순', '오름차순'],
  sortValue = 'desc',
  setSortValue = () => {},
  pageSize = 0,
  setPageSize = () => {},
  pageSizeOption = [10, 30, 50, 100],
}: TableSortSelectProps) => {
  return (
    <div className="table-sort-select">
      {children}
      {sortValue && (
        <select className="table-sort-select__select" value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
          <option value="desc">{sortLabel[0]}</option>
          <option value="asc">{sortLabel[1]}</option>
        </select>
      )}
      {pageSize !== 0 && (
        <select className="table-sort-select__select" value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
          {pageSizeOption.map((n, i) => (
            <option key={'pageSizeOption' + i} value={n}>
              {n}개
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TableSortSelect;
