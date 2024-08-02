import React from 'react';

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
    <div className="epk-table-sort-select">
      {children}
      {sortValue && (
        <select
          className="epk-table-sort-select_item-select epk-table-sort-select_sort"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="desc">{sortLabel[0]}</option>
          <option value="asc">{sortLabel[1]}</option>
        </select>
      )}
      {pageSize !== 0 && (
        <select
          className="epk-table-sort-select_item-select epk-table-sort-select_page-size"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
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
