import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import thoughts from "./constants/thoughts";
import { forMobile } from "./constants/breakpoints";

const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 120px;
  width: calc(100vw - 180px);
  ${forMobile} {
    left: 60px;
    width: calc(100vw - 120px);
  }
`;

const Image = styled.img`
  width: calc(100vw - 180px);
  height: 30vh;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 60px;
  ${forMobile} {
    width: calc(100vw - 120px);
    height: 20vh;
    margin-bottom: 40px;
  }
`;

const TextWrapper = styled.div`
  height: calc(70vh - 230px);
  overflow: scroll;
  scrollbar-width: none;
  ${forMobile} {
    height: calc(70vh - 120px);
    height: calc(70dvh - 120px);
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Date = styled.div`
  padding-top: 50px;
  text-align: right;
  ${forMobile} {
    padding-top: 20px;
    font-size: 14px;
  }
`;

const Text = styled.div`
  padding-top: 30px;
  line-height: 25px;
  white-space: pre-wrap;
  ${forMobile} {
    padding-top: 20px;
    font-size: 14px;
  }
`;

const Thought = () => {
  const params = useParams();
  let thisThought = "";
  for (const thought of thoughts) {
    if (thought.key === params.key) {
      thisThought = thought;
      break;
    }
  }
  return (
    <Wrapper>
      <Image src={require("./assets/thoughts/" + thisThought.image + ".jpg")} />
      <TextWrapper>
        <Title>{thisThought.title}</Title>
        <Text>{thisThought.text}</Text>
        <Date>{thisThought.date}</Date>
      </TextWrapper>
    </Wrapper>
  );
};

export default Thought;
