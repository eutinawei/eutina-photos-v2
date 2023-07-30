import React from "react";
import styled, { keyframes } from "styled-components";
import { forMobile } from "../constants/breakpoints";
import titleImage from "../assets/thoughts/title_vertical.png";

const MoveUpDown = keyframes`
  to {
    transform: translateY(-50%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  margin: 61px 0 0 150px;
  height: calc(100vh - 61px);
  overflow: hidden;
  ${forMobile} {
    display: none;
  }
`;

const Titles = styled.div`
  animation: ${MoveUpDown} 30s linear infinite alternate;
`;

const Title = styled.div`
  width: 110px;
  height: 500px;
  background: url(${titleImage}) no-repeat center/cover;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const DesktopThoughtsTitle = () => {
  const titles = [];
  for (let i = 0; i < 5; i++) {
    titles.push(<Title key={i} />);
  }
  return (
    <Wrapper>
      <Titles>{titles}</Titles>
    </Wrapper>
  );
};

export default DesktopThoughtsTitle;
