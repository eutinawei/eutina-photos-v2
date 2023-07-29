import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DesktopHeader from "./components/DesktopHeader";
import paper from "./assets/home/paper.jpg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  position: absolute;
  z-index: -5;
  width: 100vw;
  height: 100vh;
  background: url(${paper}) no-repeat center/cover;
`;

const Layout = () => (
  <Wrapper>
    <DesktopHeader />
    <Background />
    <main>
      <Outlet />
    </main>
  </Wrapper>
);

export default Layout;
