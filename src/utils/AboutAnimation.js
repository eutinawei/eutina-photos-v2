import { keyframes } from "styled-components";

export const LargeOrangeAnimation = keyframes`
  25%, 47%{
    width: 10vw;
    height: 10vw;
    max-width: 300px;
    max-height: 300px;
    bottom: 20vh;
    right: 1vw;
  }
  50%, 72%{
    width: 0;
    height: 0;
    bottom: 10vh;
    right: 10vw;
  }
  75%, 97%{
    width: 20vw;
    height: 20vw;
    max-width: 400px;
    max-height: 400px;
    bottom: 30vh;
    right: 5vw;
  }
  0%, 22%, 100%{
    width: 25vw;
    height: 25vw;
    max-width: 500px;
    max-height: 500px;
    bottom: -5vh;
    right: 8vw;
  }
`;

export const MidOrangeAnimation = keyframes`
  25%, 47%{
    width: 20vw;
    height: 20vw;
    max-width: 400px;
    max-height: 400px;
    bottom: -10vh;
    right: 7vw;
  }
  50%, 72%{
    width: 30vw;
    height: 30vw;
    max-width: 600px;
    max-height: 600px;
    bottom: -3vh;
    right: -3vw;
  }
  75%, 97%{
    width: 5vw;
    height: 5vw;
    max-width: 100px;
    max-height: 100px;
    bottom: 5vh;
    right: 5vw;
  }
  0%, 22%, 100%{
    width: 15vw;
    height: 15vw;
    max-width: 300px;
    max-height: 300px;
    bottom: 25vh;
    right: -3vw;
  }
`;

export const SmallOrangeAnimation = keyframes`
  25%, 47%{
    width: 8vw;
    height: 8vw;
    max-width: 200px;
    max-height: 200px;
    bottom: 30vh;
    right: 15vw;
  }
  50%, 72%{
    width: 0;
    height: 0;
    bottom: 10vh;
    right: 10vw;
  }
  75%, 97%{
    width: 10vw;
    height: 10vw;
    max-width: 300px;
    max-height: 300px;
    bottom: 20vh;
    right: -5vw;
  }
  0%, 22%, 100%{
    width: 0;
    height: 0;
    bottom: 10vh;
    right: 10vw;
  }
`;

export const LargeBlueAnimation = keyframes`
  25%, 47%{
    width: 0px;
    height: 0px;
    top: 350px;
    left: 450px;
  }
  50%, 72%{
    width: 500px;
    height: 500px;
    top: 450px;
    left: 300px;
  }
  75%, 97%{
    width: 0px;
    height: 0px;
    top: 450px;
    left: 300px;
  }
  0%, 22%, 100%{
    width: 500px;
    height: 500px;
    top: 150px;
    left: 130px;
  }
`;

export const MidBlueAnimation = keyframes`
  25%, 47%{
    width: 150px;
    height: 150px;
    top: 300px;
    left: 400px;
    transform: rotate(45deg);
  }
  50%, 72%{
    width: 100px;
    height: 100px;
    top: 100px;
    left: 300px;
    transform: rotate(0deg);
  }
  75%, 97%{
    width: 700px;
    height: 700px;
    top: 200px;
    left: 200px;
    transform: rotate(-45deg);
  }
  0%, 22%, 100%{
    width: 400px;
    height: 150px;
    top: 700px;
    left: 400px;
    transform: rotate(0deg);
  }
`;

export const SmallBlueAnimation = keyframes`
  25%, 47%{
    width: 500px;
    height: 500px;
    top: 400px;
    left: 600px;
    transform: rotate(45deg);
  }
  50%, 72%{
    width: 300px;
    height: 150px;
    top: 200px;
    left: 600px;
    transform: rotate(0deg);
  }
  75%, 97%{
    width: 0px;
    height: 0px;
    top: 300px;
    left: 300px;
    transform: rotate(0deg);
  }
  0%, 22%, 100%{
    width: 150px;
    height: 150px;
    top: 400px;
    left: 750px;
    transform: rotate(0deg);
  }
`;

export const DesktopBlueBoxAnimation = keyframes`
  0%{
    width: 0;
  }
  100%{
    width: calc(55vw + 180px);
  }
`;

export const MobileBlueBoxAnimation = keyframes`
  0%{
    width: 0;
  }
  100%{
    width: 90vw;
  }
`;
