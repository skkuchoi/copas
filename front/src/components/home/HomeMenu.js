import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBlock = styled.div`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  height: 50px;
  justify-content: center;

  .menu-list {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  .menu-element {
    list-style: none;
    text-decoration-line: none;
    width: 100px;
    height: 100%;
    font-size: 25px;
    text-align: center;
    margin: 5px 50px 0px 50px;
    color: black;
    cursor: pointer;
    /* border-top: ${(props) =>
      props.display ? '1px solid #35644f;' : 'none'}; */
    &:hover {
      font-weight: bold;
      color: #35644f;
    }
  }

  .drowdown-menu-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .drowdown-menu-block > a{
    text-decoration-line: none;
  }
  
  .link-line {
    list-style: none;
    text-decoration-line: none;
  }
`;

const DetailMenu = styled.div`
  display: ${(props) => (props.display ? 'inline-block' : 'none')};
  z-index: 10;
  background-color: #ececec;
  margin-top: 5px;

  .detail-menu {
    display: ${(props) => (props.display ? 'inline-block' : 'none')};
    list-style: none;
    text-decoration-line: none;
    position: relative;
    padding-left: 0;
    margin-right: 10px;
  }

  li {
    margin: auto auto;
    padding: 10px 5px;
    width: 100%;
  }
  li > span {
    list-style: none;
    text-decoration-line: none;
    font-size: 20px;
    color: black;
    &:hover {
      font-weight: bold;
    }
  }
`;

function HomeMenu() {
  const [originalTextIsHovering, setOriginalTextIsHovering] = useState(0);
  const [translateTextIsHovering, setTranslateTextIsHovering] = useState(0);

  return (
    <>
      <MenuBlock>
        <ul className="menu-list">
          <div className="drowdown-menu-block">
            <li
              className="menu-element"
              onMouseOver={() => setOriginalTextIsHovering(1)}
              onMouseOut={() => setOriginalTextIsHovering(0)}>
              고전원문
            </li>

            <DetailMenu display={originalTextIsHovering}>
              <ul
                className="detail-menu"
                onMouseOver={() => setOriginalTextIsHovering(1)}
                onMouseOut={() => setOriginalTextIsHovering(0)}
                display={originalTextIsHovering}>
                <Link
                  to="/korean-writing-colletion-originaltext"
                  className="link-line">
                  <li>
                    <span>한국문집총간</span>
                  </li>
                </Link>
                <Link to="/yeonhaengrok-originaltext" className="link-line">
                  <li>
                    <span>연행록</span>
                  </li>
                </Link>
              </ul>
            </DetailMenu>
          </div>

          <div className="drowdown-menu-block">
            <li
              className="menu-element"
              onMouseOver={() => setTranslateTextIsHovering(1)}
              onMouseOut={() => setTranslateTextIsHovering(0)}>
              고전번역
            </li>

            <DetailMenu display={translateTextIsHovering}>
              <ul
                className="detail-menu"
                onMouseOver={() => setTranslateTextIsHovering(1)}
                onMouseOut={() => setTranslateTextIsHovering(0)}
                display={translateTextIsHovering}>
                <Link
                  to="/korean-writing-colletion-originaltext"
                  className="link-line">
                  <li>
                    <span>한국문집총간</span>
                  </li>
                </Link>
                <Link to="/yeonhaengrok-originaltext" className="link-line">
                  <li>
                    <span>연행록</span>
                  </li>
                </Link>
              </ul>
            </DetailMenu>
          </div>

          <div className="drowdown-menu-block">           
              <a href="#intro"><li className="menu-element">센터소개</li></a>            
          </div>
        </ul>
      </MenuBlock>
    </>
  );
}

export default HomeMenu;
