import React from "react";
import styled, { keyframes } from "styled-components";
import { forDesktop } from "../constants/breakpoints";
import ename from "../assets/home/ename_horizontal.png";

const MoveLeftRight = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100vw;
  overflow: hidden;
  ${forDesktop} {
    display: none;
  }
`;

const Names = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(260px * 6 + 50px * 5);
  animation: ${MoveLeftRight} 40s linear infinite alternate;
`;

const Name = styled.div`
  width: 260px;
  height: 40px;
  background: url(${ename}) no-repeat center/cover;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

const MobileEName = () => {
  const names = [];
  for (let i = 0; i < 6; i++) {
    names.push(<Name key={i} />);
  }
  return (
    <Wrapper>
      <Names>{names}</Names>
    </Wrapper>
  );
};

export default MobileEName;
