import Pagination from '@mui/material/Pagination';

export interface TablePaginationMuiProps {
  totalPage: number;
  page: number;
  setPage: any;
}
export default function TablePaginationMui({ totalPage, page, setPage }: TablePaginationMuiProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Pagination
        siblingCount={2}
        count={totalPage}
        page={page}
        onChange={(e, p) => setPage(p)}
        showFirstButton
        showLastButton
      />
    </div>
  );
}
