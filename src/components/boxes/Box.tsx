/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface BoxProps {
  label?: string;
  onClick?: any;
  disabled?: boolean;

  width: string;
  height: string;
  padding: string;
  margin: string;
}

const boxCss = css`
  border-radius: 10px;
  box-shadow: var(--default_box_shadow);
`;
const StyledBox = styled.div<BoxProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

const Box: React.FC<BoxProps> = ({ width, height, padding, margin, label, onClick, disabled }) => {
  return (
    <StyledBox
      css={boxCss}
      className={'epk-box ' + (disabled ? 'disabled' : '')}
      height={height}
      padding={padding}
      margin={margin}
      width={width}
      onClick={(e: any) => {
        if (!disabled) return onClick();
      }}
      disabled={disabled}
    >
      {label}
    </StyledBox>
  );
};

export default Box;
