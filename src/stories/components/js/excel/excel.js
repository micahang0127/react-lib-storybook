import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

export function excelExport(data = [], fileName = 'data') {
  // Step 1: 데이터 준비
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Step 2: 워크북 생성
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Step 3: 엑셀 파일 작성
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  // Step 4: 파일을 Blob으로 변환
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

  // Step 5: 파일 다운로드
  saveAs(blob, `${fileName}.xlsx`);
}
