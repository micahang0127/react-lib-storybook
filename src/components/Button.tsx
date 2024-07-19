/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyle = css`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

export interface ButtonProps {
  label: string;
  theme?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'big';
  width?: string | number;
  onClick?: (e?: any) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  size = 'medium',
  width = '100px',
  label = '',
  onClick,
  disabled = false,
}) => {
  return (
    <>
      <button css={buttonStyle} onClick={onClick} disabled={disabled}>
        {label}
      </button>
      <StyledButton onClick={onClick}>{label}</StyledButton>
      <p className="ss">testest</p>
    </>
  );
};

export default Button;
