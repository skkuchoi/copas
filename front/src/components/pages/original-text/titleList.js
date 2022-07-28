import React, { useState } from 'react';
import styled from 'styled-components';

const BookList = styled.li`
  .book-list {
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
    width: 45px;
    padding-left: 5px;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const TitleList = styled.li`
  .title-list {
    font-size: 20px;
    margin-bottom: 5px;
    visibility: hidden;
  }

  .title-list > li {
    margin-bottom: 5px;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }

  .display-title-list {
    font-size: 20px;
    margin-bottom: 5px;
    visibility: visible;
  }
`;
function titleList() {
  const bookNum = [
    { id: 1, number: '1 권', title: ['제목 1-1', '제목 1-2'] },
    { id: 2, number: '2 권', title: ['제목 2-1', '제목 2-2'] },
    { id: 3, number: '3 권', title: ['제목 3-1', '제목 3-2'] },
  ];

  const [bookIsClicked, setBookIsClicked] = useState(bookNum);
  const [listIsOpen, setListIsOpen] = useState([]);

  const onClickBook = (e) => {
    !listIsOpen.includes(e.target)
      ? setListIsOpen((listIsOpen) => [...listIsOpen, e.target])
      : setListIsOpen(listIsOpen.filter((book) => book !== e.target));
  };
  return bookIsClicked.map((bookNum) => (
    <>
      <BookList className="book-list" onClick={onClickBook} key={bookNum.id}>
        {bookNum.number}
      </BookList>
      <ul >
        <TitleList >
          {bookNum.title}
        </TitleList>
      </ul>
    </>
  ));
}

export default titleList;
