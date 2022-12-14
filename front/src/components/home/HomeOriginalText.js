import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cardBackground from './card-background.png';

const HomeOriginalTextBlock = styled.div`
  height: 500px;
  display: flex;
  flex-direction: row;

  position: relative;
  margin-top: 30px;
  padding-bottom: 30px;
  z-index: 2;
`;

const SidebarPositioner = styled.div`
  width: 15%;
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

const ExplanationPositioner = styled.div`
  width: 45%;
  padding: 80px 70px;

  .title {
    letter-spacing: 3px;
    font-size: 50px;
    font-weight: bold;
    padding-left: 30px;
    margin-bottom: 30px;
  }

  .summary {
    font-size: 25px;
    padding-left: 30px;
  }
`;

const ViewMoreButton = styled.button`
  background-color: #d9d9d9;
  border: none;
  margin-top: 50px;
  margin-left: 30px;
  font-size: 20px;
  width: 250px;
  height: 50px;
  border-radius: 30px;
  cursor: pointer;
  padding: 15px 15px;
  &:hover {
    background-color: #bfc1bf;
  }
`;

const CardPositioner = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 200px 200px;
  column-gap: 70px;
  row-gap: 30px;
  padding-left: 30px;
  overflow: auto;
  .link-line {
    list-style: none;
    text-decoration-line: none;
    color: black;
  }
`;

const Card = styled.div`
  background-image: url(${cardBackground});
  background-size: cover;
  border: 1px solid #353535;
  width: 200px;
  height: 200px;
  margin: 30px 40px 40px 40px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #353535;
  overflow: hidden;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
  div {
    border: 1px solid green;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    margin-top: 50px;
    z-index: 3;
  }
`;

function HomeOriginalText() {
  return (
    <HomeOriginalTextBlock>
      <SidebarPositioner>
        <a href="#original">?? ????????????</a>
        <a href="#original">?? ????????????</a>
        <a href="#intro"> ????????????</a>
      </SidebarPositioner>
      <ExplanationPositioner id="original">
        <div className="title">????????????</div>
        <div className="summary">????????? ????????????</div>
        <div className="summary">???????????? ????????? ???????????????.</div>
        {/* ???????????? ?????? ???????????????? */}
        <Link to="/original-text" state={{ categoryTitle: '???????????????' }}>
          <ViewMoreButton>View More</ViewMoreButton>
        </Link>
      </ExplanationPositioner>
      <CardPositioner>
        <Link to="/korean-writing-colletion-originaltext" className="link-line">
          <Card>
            <div>??????????????????</div>
          </Card>
        </Link>

        <Link to="/yeonhaengrok-originaltext" className="link-line">
          <Card>
            <div>?????????</div>
          </Card>
        </Link>

        <Card>
          <div>??????1</div>
        </Card>
        <Card>
          <div>??????2</div>
        </Card>
      </CardPositioner>
    </HomeOriginalTextBlock>
  );
}

export default HomeOriginalText;
