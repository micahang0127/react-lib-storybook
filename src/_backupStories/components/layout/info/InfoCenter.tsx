/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export interface InfoCenterProps {
  icon: any;
  text: string;
}

// [TODO] style 유연하게 - 특히 위치 조정 가능하게
const InfoCenterContainerCss = css`
  position: relative;
`;
const InfoCenterTextCss = css`
  position: absolute;
  top: 50%;
  left: 45%;

  .epk-info-center_text {
    margin: 0 5px;
  }
`;

const InfoCenter = ({ icon = <></>, text = '데이터가 없습니다' }: InfoCenterProps) => {
  return (
    <div css={InfoCenterContainerCss} className="epk-info-center">
      <p css={InfoCenterTextCss}>
        <span className="epk-info-center_icon">{icon}</span>
        <span className="epk-info-center_text">{text}</span>
      </p>
    </div>
  );
};
export default InfoCenter;
