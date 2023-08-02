import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Lightbox from "./components/Lightbox";
import { forMobile } from "./constants/breakpoints";
import cities from "./constants/cities";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 120px;
  left: 120px;
  width: calc(100vw - 180px);
  height: calc(100vh - 180px);
  overflow: scroll;
  scrollbar-width: none;
  ${forMobile} {
    top: 100px;
    left: 40px;
    width: calc(100vw - 80px);
    height: calc(100vh - 140px);
    height: calc(100dvh - 140px);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled.img`
  width: calc(100vw / 3 - 80px);
  ${forMobile} {
    width: calc(100vw - 80px);
  }
  height: auto;
  margin-bottom: 25px;
  &:hover {
    cursor: zoom-in;
  }
`;

const Photos = () => {
  const params = useParams();
  let name = "";
  let photoCount = 0;
  for (const city of cities) {
    if (city.key === params.key) {
      name = city.key;
      photoCount = city.photoCount;
      break;
    }
  }

  const [lightboxImage, setLightboxImage] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const openLightbox = (key) => {
    setLightboxImage(key);
  };

  let imagesCol0 = [];
  let imagesCol1 = [];
  let imagesCol2 = [];
  let imagesColMobile = [];

  let row0Count = Math.floor(photoCount / 3);
  let row1Count = Math.floor(photoCount / 3);

  let remainer = photoCount % 3;
  if (remainer === 1) {
    row0Count += 1;
  } else if (remainer === 2) {
    row0Count += 1;
    row1Count += 1;
  }

  for (let i = 0; i < row0Count; i++) {
    imagesCol0.push(
      <Image
        key={name + "_" + i}
        src={require("./assets/photos/" + name + "/" + i + ".jpg")}
        onClick={() => openLightbox(name + "_" + i)}
      />
    );
  }
  for (let i = row0Count; i < row0Count + row1Count; i++) {
    imagesCol1.push(
      <Image
        key={name + "_" + i}
        src={require("./assets/photos/" + name + "/" + i + ".jpg")}
        onClick={() => openLightbox(name + "_" + i)}
      />
    );
  }
  for (let i = row0Count + row1Count; i < photoCount; i++) {
    imagesCol2.push(
      <Image
        key={name + "_" + i}
        src={require("./assets/photos/" + name + "/" + i + ".jpg")}
        onClick={() => openLightbox(name + "_" + i)}
      />
    );
  }
  for (let i = 0; i < photoCount; i++) {
    imagesColMobile.push(
      <Image
        key={name + "_" + i}
        src={require("./assets/photos/" + name + "/" + i + ".jpg")}
        onClick={() => openLightbox(name + "_" + i)}
      />
    );
  }

  return (
    <Wrapper>
      {lightboxImage && (
        <Lightbox image={lightboxImage} setLightboxImage={setLightboxImage} />
      )}
      {width >= 1024 ? (
        <>
          <Column>{imagesCol0}</Column>
          <Column>{imagesCol1}</Column>
          <Column>{imagesCol2}</Column>
        </>
      ) : (
        <Column>{imagesColMobile}</Column>
      )}
    </Wrapper>
  );
};

export default Photos;
