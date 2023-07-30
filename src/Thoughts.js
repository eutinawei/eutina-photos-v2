import React from "react";
import styled from "styled-components";
import DesktopThoughtsTitle from "./components/DesktopThoughtsTitle";
import articles from "./constants/thoughts";
import MobileThoughtsTitle from "./components/MobileThoughtsTitle";

const orange = "#E85112";

const Articles = styled.div`
  position: absolute;
  left: 360px;
  top: 120px;
  height: calc(100vh - 180px);
  width: calc(100vw - 450px);
  overflow: scroll;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 80px;
  &:hover {
    cursor: pointer;
    color: ${orange};
  }
`;

const ArticleImage = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  margin-right: 60px;
`;

const ArticleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const ArticleDate = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
`;

const ArticleText = styled.div`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 25px;
`;

const Line = styled.hr`
  border-top: 1px solid;
  opacity: 30%;
  margin-bottom: 80px;
`;

const Thoughts = () => {
  return (
    <>
      <DesktopThoughtsTitle />
      <MobileThoughtsTitle />
      <Articles>
        {articles.map((article) => (
          <React.Fragment key={article.title}>
            <ArticleWrapper>
              <ArticleImage
                src={require("./assets/thoughts/" + article.image + ".jpg")}
              />
              <ArticleTextWrapper>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDate>{article.date}</ArticleDate>
                <ArticleText>{article.text}</ArticleText>
              </ArticleTextWrapper>
            </ArticleWrapper>
            <Line />
          </React.Fragment>
        ))}
      </Articles>
    </>
  );
};

export default Thoughts;
