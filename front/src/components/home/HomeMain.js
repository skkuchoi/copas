import React from 'react';
import styled from 'styled-components';
import homeMain from './homeMain.jpg';

const HomeMainBlock = styled.div`
  height: 500px;
  background-image: url(${homeMain});
  background-size: cover;
  
`;

function HomeMain() {
  return <HomeMainBlock />;
}

export default HomeMain;
