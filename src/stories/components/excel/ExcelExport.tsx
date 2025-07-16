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
  color: #000
  padding: 8px 16px
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
    <StyledButton className="epk-excel-export-btn" onClick={_onClickExcel} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default ExcelExport;
