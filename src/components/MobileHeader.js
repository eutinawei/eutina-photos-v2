import React, { useState } from "react";
import styled from "styled-components";
import { forDesktop } from "../constants/breakpoints";
import { Turn as Burger } from "hamburger-react";
import MobileList from "./MobileList";

const Wrapper = styled.div`
  ${forDesktop} {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  margin: 6px 15px 6px 6px;
`;

const HorizontalLine = styled.div`
  z-index: 5;
  position: absolute;
  width: 100vw;
  height: 1px;
  margin-top: 60px;
  background-color: black;
`;

const MobileListWrapper = styled.div`
  z-index: 1;
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: #e85112;
  display: ${(props) => props.display};
  transition: 0.3s;
`;

const MobileHeader = () => {
  const [burgerIsOpen, setBurgerOpen] = useState(false);
  return (
    <Wrapper>
      <HorizontalLine />
      <BurgerWrapper>
        <Burger
          rounded
          size={30}
          toggled={burgerIsOpen}
          toggle={setBurgerOpen}
        />
      </BurgerWrapper>
      <MobileListWrapper display={burgerIsOpen ? "block" : "none"}>
        <MobileList />
      </MobileListWrapper>
    </Wrapper>
  );
};

export default MobileHeader;
