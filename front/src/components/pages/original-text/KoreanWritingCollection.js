import React, { useState } from 'react';
import Layout from '../../shared/Layout';
import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLocation } from "react-router-dom";

const MenuBlock = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  height: 80px;
  justify-content: left;
  padding-top: 2px;

  .title {
    font-size: 30px;
    font-weight: bold;
    margin-left: 30px;
    padding: 15px 20px;
  }

  .line {
    border-left: 2px solid black;
    height: 40px;
    margin-top: 18px;
    margin-right: 30px;
  }

  .arrow {
    font-size: 25px;
    padding: 15px 5px;
    margin-left: 3px;
  }

  .category-infomation {
    font-size: 25px;
    padding: 18px 5px;
  }
`;

const MainContentBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sidebar = styled.div`
  width: 25%;
  background-color: green;
  padding-left: 20px;
  padding-top: 20px;

  .category {
    display: flex;
    flex-direction: row;
  }

  .category-infomation {
    font-size: 25px;
    margin-right: 10px;
  }

  .dropdown-icon {
    margin-top: 5px;
    background-color: white;
    cursor: pointer;
  }

  .list-infomation {
    display: ${(props) => (props.categoryDisplay ? 'block' : 'none')};
  }

  .book-list {
    font-size: 20px;
    margin-bottom: 10px;
    width: 45px;
    padding-left: 5px;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }

  .hidden-title-list {
    font-size: 20px;
    margin-bottom: 5px;
    display: none;
  }

  .title-list-element {
    margin-bottom: 5px;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }

  .show-title-list {
    font-size: 20px;
    margin-bottom: 5px;
    display: 'block';
  }
`;

const Content = styled.div`
  width: 75%;
  background-color: orange;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;

  .big-title {
    font-size: 25px;
    font-weight: bold;
  }

  .line {
    border-bottom: 2px solid black;
    width: 50%;
    margin-top: 5px;
  }

  .post-div {
    background-color: brown;
    margin-top: 10px;
    margin-left: 25px;
  }

  .small-title {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .post {
    font-size: 25px;
  }
`;

function KoreanWritingCollection( ) {
  const [detailCategoryIsClicked, setdetailCategoryIsClicked] = useState(0);
  const onClickCategory = () => setdetailCategoryIsClicked(!detailCategoryIsClicked);
  const [bookIsSelecting, setBookIsSelecting] = useState('');
  const [titleIsSelecting, setTitleIsSelecting] = useState('');

  const bookNum = [
    { id: 1, number: '1 권', title: ['제목 1-1', '제목 1-2'] },
    { id: 2, number: '2 권', title: ['제목 2-1', '제목 2-2'] },
    { id: 3, number: '3 권', title: ['제목 3-1', '제목 3-2'] },
  ];

  const [listIsOpen, setListIsOpen] = useState([]);

  const onClickBook = (e) => {
    !listIsOpen.includes(e.target.innerText)
      ? setListIsOpen((listIsOpen) => [...listIsOpen, e.target.innerText])
      : setListIsOpen(listIsOpen.filter((book) => book !== e.target.innerText));
    setBookIsSelecting('▷ ' + e.target.innerText);
    setTitleIsSelecting('');
  };

  const onClickTitle = (e) => {
    setTitleIsSelecting('▷ ' + e.target.innerText);
  };

  return (
    <Layout>
      <MenuBlock>
        <span className="title">CategoryTitle</span>
        <span className="line"></span>
        <span className="category-infomation">▷ 권 별</span>
        <span className="category-infomation">{bookIsSelecting}</span>
        <span className="category-infomation">{titleIsSelecting}</span>
      </MenuBlock>
      <MainContentBlock>
        <Sidebar categoryDisplay={detailCategoryIsClicked}>
          <div className="category">
            <span className="category-infomation">권 별</span>
            <RiArrowDropDownLine
              className="dropdown-icon"
              size="25"
              onClick={onClickCategory}
            />
          </div>
          <div className="list-infomation">
            <ul>
              {bookNum.map((bookNum) => (
                <>
                  <li
                    className="book-list"
                    onClick={onClickBook}
                    key={bookNum.id}>
                    {bookNum.number}
                  </li>
                  <ul
                    className={
                      listIsOpen.includes(bookNum.number)
                        ? 'show-title-list'
                        : 'hidden-title-list'
                    }>
                    {bookNum.title.map((elem, index) => (
                      <li
                        className="title-list-element"
                        key={index}
                        onClick={onClickTitle}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                </>
              ))}
            </ul>
          </div>
        </Sidebar>
        <Content>
          <div className="big-title">月月月月月月</div>
          <span className="line"></span>
          <div className="post-div">
            <div className="small-title">月月月月月月</div>
            <div className="post">
              湖天寒欲雪。陪坐獨春風。 承訓方知悔。 繙書枉用工。
              正心除外騖。觀理貴中通。 曾傳尋門路。庶幾次第功。
            </div>
          </div>
        </Content>
      </MainContentBlock>
    </Layout>
  );
}

export default KoreanWritingCollection;
