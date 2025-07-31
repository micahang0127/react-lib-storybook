import React from 'react';
import { excelExport } from '../js/excel/excel';
import styled from '@emotion/styled';

export interface ExcelExportProps {
  label?: string;
  onClickExcel?: any;
  disabled?: boolean;
}
const StyledButton = styled.button<ExcelExportProps>`
  background-color: ${({ disabled }) => (!disabled ? 'var(--sub-btn-color1)' : 'var(--disabled-btn-color)')};
  color: #000;
  font-size: 13px;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};

  &:hover {
    background-color: ${({ disabled }) => !disabled && 'var(--sub-btn-color1-hover)'}
`;

const ExcelExport = ({ label = 'excel', onClickExcel = () => {}, disabled = false }: ExcelExportProps) => {
  const _onClickExcel = () => {
    const callbackFunc = (data: any, fileName: any) => {
      excelExport(data, fileName);
    };
    onClickExcel(callbackFunc);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <p style={{ color: 'gray', fontSize: '13px', marginBottom: '5px' }}>
        &nbsp;&nbsp;&nbsp;* 아래 버튼을 클릭하시면, 엑셀파일이 다운로드 됩니다.{' '}
      </p>
      <StyledButton className="excel-export-btn" onClick={_onClickExcel} disabled={disabled}>
        {label}
      </StyledButton>
    </div>
  );
};

export default ExcelExport;
