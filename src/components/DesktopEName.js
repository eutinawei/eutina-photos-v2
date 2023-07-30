import React from "react";
import styled, { keyframes } from "styled-components";
import { forMobile } from "../constants/breakpoints";
import ename from "../assets/home/ename_vertical.png";

const MoveUpDown = keyframes`
  to {
    transform: translateY(-50%);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  margin: 61px 30px 0 0;
  height: calc(100vh - 61px);
  overflow: hidden;
  ${forMobile} {
    display: none;
  }
`;

const Names = styled.div`
  animation: ${MoveUpDown} 60s linear infinite alternate;
`;

const Name = styled.div`
  width: 110px;
  height: 710px;
  background: url(${ename}) no-repeat center/cover;
  &:not(:last-child) {
    margin-bottom: 70px;
  }
`;

const DesktopEName = () => {
  const names = [];
  for (let i = 0; i < 5; i++) {
    names.push(<Name key={i} />);
  }
  return (
    <Wrapper>
      <Names>{names}</Names>
    </Wrapper>
  );
};

export default DesktopEName;
