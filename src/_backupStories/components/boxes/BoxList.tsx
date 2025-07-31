/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Box, { BoxProps } from './Box';

export interface BoxListProps extends BoxProps {
  count: number;
  flex: 'row' | 'column';
}

const StyledBoxList = styled.div<any>`
  display: ${({ flex }) => (flex === 'row' ? 'flex' : '')};
`;

const BoxList: React.FC<BoxListProps> = ({ count, flex, width, height, padding, margin, onClick }) => {
  return (
    <StyledBoxList flex={flex} className="epk-box-list">
      {[...Array(count)].map((element, index) => {
        return <Box width={width} height={height} padding={padding} margin={margin} />;
      })}
    </StyledBoxList>
  );
};

export default BoxList;
