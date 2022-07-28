import React from 'react';
import styled from 'styled-components';

const IntroBlock = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;
  background-color: #f4f4f4;
  padding-bottom: 30px;
`;

const SidebarPositioner = styled.div`
  width: 13%;
  display: flex;
  flex-direction: column;
  margin: auto auto;

  a {
    text-align: center;
    margin: 20px 3px 3px 3px;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover {
      font-weight: bold;
    }
  }
`;

const IntroductionPositioner = styled.div`
  width: 85%;
  height: 300px;
  padding: 80px 70px;
  display: flex;
  flex-direction: column;
  margin: auto auto;

  .name {
    color: #89b524;
    letter-spacing: 3px;
    font-size: 50px;
    font-weight: bold;
    padding-left: 30px;
    margin-bottom: 30px;
  }

  .explanation {
    color: black;
    font-size: 25px;
    padding-left: 30px;
  }
`;

function HomeIntroduction() {
  return (
    <IntroBlock id="intro">
      <SidebarPositioner>
        <a href="#original">º 고전원문</a>
        <a href="#original">º 고전번역</a>
        <a href="#intro">º 센터소개</a>
      </SidebarPositioner>
      <IntroductionPositioner>
        <span className="name">성균한문고전코퍼스</span>
        <span className="explanation">
          인문학 연구의 새로운 방법론 개발의 도구로 활용
        </span>
      </IntroductionPositioner>
    </IntroBlock>
  );
}

export default HomeIntroduction;
