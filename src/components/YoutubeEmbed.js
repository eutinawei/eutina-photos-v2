import React from "react";
import styled from "styled-components";

const Iframe = styled.iframe`
  width: 50vw;
  aspect-ratio: 16 / 9;
`;

const YoutubeEmbed = ({ embedId }) => (
  <Iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  />
);

export default YoutubeEmbed;
