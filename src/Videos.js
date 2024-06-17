import React from "react";
import styled from "styled-components";
import YoutubeEmbed from "./components/YoutubeEmbed";

const Wrapper = styled.div`
  position: absolute;
  left: 360px;
  top: 120px;
`;

const Videos = () => {
  return (
    <Wrapper>
      <YoutubeEmbed embedId={"e7TmBJOtWks?si=Er38fkmbNY7OIurB"} />
    </Wrapper>
  );
};

export default Videos;
