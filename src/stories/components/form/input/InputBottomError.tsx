/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface InputBottomErrorProps {
  type?: 'text' | 'number' | 'password' | 'search' | 'time' | 'date' | 'month';
  id?: string;
  value: any;
  onChange?: any;
  onBlur?: any;
  placeholder?: string;
  disabled?: boolean;
  errUsing?: boolean;
  errMsg?: string;
}

const cssInput = css`
  border: 1px solid var(--border-color);
  border-radius: 5px;
  box-shadow: var(--default_box_shadow);
  padding: 5px;
  input:disabled {
    background-color: #f9f9f9;
    cursor: not-allowed;
  }
`;
const cssWarningInput = css`
  border: 1px solid #fe4a1c;
  color: #fe4a1c;
`;
const cssWarningMsg = css`
  color: #fe4a1c;
  margin-top: 6px;
  font-size: 14px !important;
  letter-spacing: -0.14px !important;
  line-height: 19px !important;
  font-weight: 400 !important;
`;

const InputBottomError = ({
  type = 'text',
  id = '',
  value,
  onChange = (value: any) => {},
  onBlur,
  placeholder = '',
  disabled = false,
  errUsing = true,
  errMsg = '',
}: InputBottomErrorProps) => {
  return (
    <div className="epk-input epik-input-warning">
      <input
        css={[cssInput, errUsing && errMsg && cssWarningInput]}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      {errUsing && errMsg && <div css={cssWarningMsg}>{errMsg}</div>}
    </div>
  );
};

export default InputBottomError;
