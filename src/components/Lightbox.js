import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import { forDesktop, forMobile } from "../constants/breakpoints";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.button`
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: rgba(255, 255, 255, 0.7);
  animation: ${fadeIn} 0.5s;
  border: 0;
  &:hover {
    cursor: zoom-out;
  }
`;

const Image = styled.img`
  z-index: 15;
  width: auto;
  height: auto;
  object-fit: cover;
  ${forDesktop} {
    max-width: 70%;
    max-height: 80%;
  }
  ${forMobile} {
    max-width: 80%;
    max-height: 80%;
  }
`;

const Lightbox = ({ image, setLightboxImage }) => {
  const exitRef = useRef();

  const mouseEnter = (ref) => {
    ref.current.style.fontWeight = "bold";
  };

  const mouseLeave = (ref) => {
    ref.current.style.fontWeight = "normal";
  };

  return (
    <Wrapper>
      <Background
        ref={exitRef}
        onMouseEnter={() => mouseEnter(exitRef)}
        onMouseLeave={() => mouseLeave(exitRef)}
        onClick={() => setLightboxImage("")}
      />
      <Image
        src={require(`../assets/photos/${image.split("_")[0]}/${
          image.split("_")[1]
        }.jpg`)}
      />
    </Wrapper>
  );
};

export default Lightbox;
