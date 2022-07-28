import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Layout from '../../shared/Layout';

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

function OriginalText() {
  //카테고리 display

  //DropdownCategory: 저자별, 서명별을 드롭다운 한다.
  const [DropdownCategory, setDropdownCategory] = useState(0);
  const onClickDropdownCategory = () => setDropdownCategory(!DropdownCategory);

  // 어떤 카테고리가 드롭다운 되었는지 상단바에 display 한다.
  const [displaySelectedCategory, setDisplaySelectedCategory] = useState('');

  // 어떤 book이 선택되었는지 상단바에 display 한다.
  const [bookIsSelecting, setBookIsSelecting] = useState('');
  const [titleIsSelecting, setTitleIsSelecting] = useState('');

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
  //props 데이터 가져오기
  const location = useLocation(); // 추가된 부분
  const categoryTitle = location.state.categoryTitle; // 추가된 부분
  let bookData = [];
  // categoryTitle에 따라 해당하는 데이터 배열을 가져온다.
  switch (categoryTitle) {
    case '고전원문서':
      bookData = [
        [
          '서명별',
          {
            id: 1,
            book: '고전 1',
            series: ['1-1 권', '1-2 권', '1-3 권'],
            title: [
              ['제목 1-1', '제목 1-2'],
              ['제목 2-1', '제목 2-2'],
              ['제목 3-1', '제목 3-2'],
            ],
          },
          {
            id: 2,
            book: '고전 2',
            series: ['2-1 권', '2-2 권', '2-3 권'],
            title: [
              ['제목 1-1', '제목 1-2'],
              ['제목 2-1', '제목 2-2'],
              ['제목 3-1', '제목 3-2'],
            ],
          },
          {
            id: 3,
            book: '고전 3',
            series: ['3-1 권', '3-2 권', '3-3 권'],
            title: [
              ['제목 1-1', '제목 1-2'],
              ['제목 2-1', '제목 2-2'],
              ['제목 3-1', '제목 3-2'],
            ],
          },
        ],
        [
          '저자별',
          {
            id: 1,
            author: '저자 1',
          },
          {
            id: 2,
            author: '저자 2',
          },
          {
            id: 3,
            author: '저자 3',
          },
        ],
      ];
      //console.log('ㅎㅎ: ', bookData[0][1]);
      break;
    default:
      console.log('디폴트');
  }
  return (
    <Layout>
      <MenuBlock>
        <span className="title">{categoryTitle}</span>
        <span className="line"></span>
        <span className="category-infomation">▷ {bookData[0][0]}</span>
        <span className="category-infomation">{bookIsSelecting}</span>
        <span className="category-infomation">{titleIsSelecting}</span>
      </MenuBlock>
      <MainContentBlock>
        <Sidebar categoryDisplay={DropdownCategory}>
          <div className="category">
            <ul>
              {bookData.map((elem) => (
                <>
                  <li className="category-infomation" key={elem.id}>
                    {elem[0]}

                    <RiArrowDropDownLine
                      className="dropdown-icon"
                      size="25"
                      onClick={onClickDropdownCategory}
                    />
                  </li>
                  <div className="list-infomation">
                    <ul>
                      {bookData.map((elem) => (
                        <>
                          <li
                            className="book-list"
                            onClick={onClickBook}
                            key={elem.id}>
                            {elem[1].book}
                          </li>
                          {/* <ul
                    className={
                      listIsOpen.includes(elem[1].series)
                        ? 'show-title-list'
                        : 'hidden-title-list'
                    }>
                    {elem[1].title.map((title, index) => (
                      <li
                        className="title-list-element"
                        key={index}
                        onClick={onClickTitle}>
                        {title}
                      </li>
                    ))}
                  </ul> */}
                        </>
                      ))}
                    </ul>
                  </div>
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

export default OriginalText;
