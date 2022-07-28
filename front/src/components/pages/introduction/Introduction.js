import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeOriginalTextBlock = styled.div`
  
  height: 500px;
  display: flex;
  flex-direction: row;

  position: relative;
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

function Introduction() {
  return (
    <>
      <HomeOriginalTextBlock>
        <SidebarPositioner>
          <a>º 고전원문</a>
          <a>º 고전번역</a>
          <a>º 센터소개</a>
        </SidebarPositioner>
        <ExplanationPositioner>
          <div className="title">센터 소개 잉ㅂ니당</div>
          <div className="summary">고전이 전해주는</div>
          <div className="summary">성현들의 지혜를 살펴보세요.</div>
          <ViewMoreButton>View More</ViewMoreButton>
        </ExplanationPositioner>
        <CardPositioner>
          <Link
            to="/korean-writing-colletion-originaltext"
            className="link-line">
            <Card>
              <div>한국문집총간</div>
            </Card>
          </Link>

          <Link to="/yeonhaengrok-originaltext" className="link-line">
            <Card>
              <div>연행록</div>
            </Card>
          </Link>

          <Card>
            <div>고전1</div>
          </Card>
          <Card>
            <div>고전2</div>
          </Card>
        </CardPositioner>
      </HomeOriginalTextBlock>
    </>
  );
}

export default Introduction;
