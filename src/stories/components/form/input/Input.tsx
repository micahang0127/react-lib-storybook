/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface InputProps {
  type?: 'text' | 'number' | 'password' | 'search' | 'time' | 'date' | 'month' | 'range' | 'color';
  id?: string;
  value: any;
  onChange?: any;
  onBlur?: any;
  placeholder?: string;
  disabled?: boolean;
}

const inputCss = css`
  border: 1px solid var(--border-color);
  border-radius: 5px;
  box-shadow: var(--default_box_shadow);
  padding: 5px;
  input:disabled {
    background-color: #f9f9f9;
    cursor: not-allowed;
  }
`;

const Input = ({
  type = 'text',
  id = '',
  value,
  onChange = (value: any) => {},
  onBlur,
  placeholder = '내용을 입력하세요.',
  disabled = false,
}: InputProps) => {
  return (
    <div className="epk-input">
      <input
        css={type !== 'range' && type !== 'color' && inputCss}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
