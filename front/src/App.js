import React from 'react';
import { Route, Routes } from 'react-router-dom';
import KoreanWritingCollectionOriginalText from './components/pages/original-text/KoreanWritingCollection';
import YeonHaengRokOriginalText from './components/pages/original-text/YeonHaengRok';
import Login from './components/pages/account/Login';
import Signup from './components/pages/account/Signup';
import HomeLayout from './components/shared/HomeLayout';
import styled from 'styled-components';
import Introduction from './components/pages/introduction/Introduction';
import SearchResult from './components/pages/Search/SearchResult';
import OriginalText from './components/pages/original-text/OriginalText';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/introduction" element={<Introduction />} /> */}
        <Route path="/search-result/:searchWord" element={<SearchResult />} />
        <Route path="/original-text" element={<OriginalText />} />
        <Route path="/korean-writing-colletion-originaltext" element={<KoreanWritingCollectionOriginalText />} />
        <Route path="/yeonhaengrok-originaltext" element={<YeonHaengRokOriginalText />} />
      </Routes>
    </Container>
  );
}

export default App;
