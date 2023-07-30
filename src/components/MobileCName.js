import React from "react";
import styled, { keyframes } from "styled-components";
import { forDesktop } from "../constants/breakpoints";
import cname from "../assets/home/cname_horizontal.png";

const MoveLeftRight = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 100vw;
  overflow: hidden;
  ${forDesktop} {
    display: none;
  }
`;

const Names = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(150px * 10 + 40px * 9);
  animation: ${MoveLeftRight} 60s linear infinite alternate;
`;

const Name = styled.div`
  width: 150px;
  height: 45px;
  background: url(${cname}) no-repeat center/cover;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const MobileCName = () => {
  const names = [];
  for (let i = 0; i < 10; i++) {
    names.push(<Name key={i} />);
  }
  return (
    <Wrapper>
      <Names>{names}</Names>
    </Wrapper>
  );
};

export default MobileCName;
