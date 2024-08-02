import React from 'react';
import styled from '@emotion/styled';

export interface ButtonProps {
  label?: string;
  theme?: 'primary' | 'secondary';
  sizeType?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, disabled }) => (!disabled ? (theme === 'primary' ? 'var(--main-btn-color)' : 'var(--sub-btn-color1)') : 'var(--disabled-btn-color)')};
  color: ${({ theme }) => (theme === 'primary' ? '#fff' : '#000')};
  padding: ${({ sizeType }) => (sizeType === 'small' ? '4px 8px' : sizeType === 'large' ? '12px 24px' : '8px 16px')};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && (theme === 'primary' ? 'var(--main-btn-color-hover)' : 'var(--sub-btn-color1-hover)')}
`;

const Button: React.FC<ButtonProps> = ({
  label,
  theme = 'primary',
  sizeType = 'medium',
  onClick,
  disabled = false,
}) => {
  return (
    <StyledButton className="epk-btn" theme={theme} sizeType={sizeType} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
