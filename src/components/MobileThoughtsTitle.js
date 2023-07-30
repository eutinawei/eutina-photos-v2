import React from "react";
import styled, { keyframes } from "styled-components";
import { forDesktop } from "../constants/breakpoints";
import title from "../assets/thoughts/title_horizontal.png";

const MoveLeftRight = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100vw;
  overflow: hidden;
  ${forDesktop} {
    display: none;
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(200px * 10 + 40px * 9);
  animation: ${MoveLeftRight} 60s linear infinite alternate;
`;

const Title = styled.div`
  width: 200px;
  height: 45px;
  background: url(${title}) no-repeat center/cover;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const MobileThoughtsTitle = () => {
  const titles = [];
  for (let i = 0; i < 10; i++) {
    titles.push(<Title key={i} />);
  }
  return (
    <Wrapper>
      <Titles>{titles}</Titles>
    </Wrapper>
  );
};

export default MobileThoughtsTitle;
