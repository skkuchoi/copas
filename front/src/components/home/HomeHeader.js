import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from './skku-logo.png';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import useDetectClose from '../../hooks/useDetectClose';

const TopBarBlock = styled.div`
  background-color: #35644f;
  height: 20px;
  display: flex;
  flex-direction: row;
  padding: 5px 3px;
  color: white;

  .right-link-list {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    margin-right: 5px;
  }

  .left-text {
    padding-left: 30px;
    font-size: 15px;
  }

  .right-link-element {
    display: inline;
    float: right;
    text-decoration: none;
    margin-right: 50px;
    width: auto;
    font-size: 15px;
    text-align: center;
    color: white;
  }
`;

const ImgBlock = styled.div`
  margin: auto auto;
  padding: 30px 20px;
  width: 300px;
  height: 100px;

  img {
    width: 300px;
    height: 100px;
  }
`;

const SearchBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  margin-bottom: 30px;

  input {
    border: 1px solid #35644f;
    font-size: 20px;
    width: 500px;
    padding: 5px 10px;
  }

  input::placeholder {
    font-size: 15px;
  }

  .search-icon {
    background-color: #35644f;
    width: 50px;
    height: 50px;
    color: white;
  }
`;

const SearchCategory = styled.div`
  width: 120px;
  background-color: #35644f;
  z-index: 10;
  font-size: 20px;
  margin: 0;
  padding: 0;

  .selected-div {
    color: #cbb172;

    margin-top: 10px;
  }
  .selected-category {
    margin-left: 40px;
    border-bottom: 1px solid #b9b9b9;
  }

  .dropdown-icon {
    background-color: none;
    margin-left: 12px;
    cursor: pointer;
  }

  .show-category-list {
    //display: 'inline-block';
    visibility: visible;
    margin-top: 10px;
    list-style: none;
    background-color: #35644f;
    width: 80px;
    color: white;
  }

  .hidden-category-list {
    visibility: hidden;
    margin-top: 10px;
    list-style: none;
    background-color: #35644f;
    width: 80px;
    color: black;
  }

  .show-category-list > li {
    background-color: #35644f;
    cursor: pointer;
    height: 40px;
    color: white;

    &:hover {
      font-weight: bold;
    }
  }
`;

function HomeHeader() {
  // 검색바 검색재료
  const [selectedCategory, setCategory] = useState('전체');

  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const onClickDetailCategory = (e) => {
    setCategory(e.target.innerText);
    setIsOpen(!isOpen);
  };
  //검색 키워드
  const [searchWord, setSearchWord] = useState('');
  const onSubmit = async () => {
    if (searchWord !== '' && searchWord.trim() !== '')
      window.location.href = '/search-result/' + searchWord;
  };

  const testData = [
    {
      bigTitle: '한국문집총간',
      book: '1권ㅎㅎ',
    },
    {
      bigTitle: '한국문집총간',
      book: '2r권s',
    },
    {
      bigTitle: '연행록',
      book: '1권ㅋㅋ',
    },
  ];

  console.log('isOpen은: ', isOpen);
  return (
    <>
      <TopBarBlock>
        <div className="left-text">The Global Leader, SKKU</div>
        <ul className="right-link-list">
          <Link to="/signup">
            <li className="right-link-element">회원가입</li>
          </Link>
          <Link to="/login">
            <li className="right-link-element">로그인</li>
          </Link>
          <Link to="/">
            <li className="right-link-element">홈</li>
          </Link>
        </ul>
      </TopBarBlock>

      <ImgBlock>
        <img src={logo} />
      </ImgBlock>

      <SearchBlock>
        <SearchCategory>
          <div className="selected-div">
            <span className="selected-category">{selectedCategory}</span>
            <span>
              <RiArrowDropDownLine
                className="dropdown-icon"
                onClick={() => setIsOpen(!isOpen)}
              />
            </span>
          </div>

          <ul
            ref={dropDownRef}
            className={isOpen ? 'show-category-list' : 'hidden-category-list'}>
            {/* 이거.. 아예 url을 바꿀까? 어떻게 하지 일단 보류 */}
            {/* 선택시 dropdown div가 사라지지 않는 상태 */}
            <li onClick={onClickDetailCategory}>전체</li>
            <li onClick={onClickDetailCategory}>서명</li>
            <li onClick={onClickDetailCategory}>저자</li>
            <li onClick={onClickDetailCategory}>원문</li>
          </ul>
        </SearchCategory>

        <input
          type="text"
          value={searchWord}
          placeholder="검색어를 입력하세요."
          onChange={(e) => {
            //input value 값을 가져온다.
            setSearchWord(e.target.value);
          }}
          // 엔터 누르면 검색 됨
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubmit();
              setSearchWord('');
            }
          }}
        />

        <BiSearch
          className="search-icon"
          type="button"
          onClick={() => {
            onSubmit();
            setSearchWord('');
          }}
        />
      </SearchBlock>
    </>
  );
}

export default HomeHeader;
