import React from 'react';
import Footer from '../basic/Footer';
import HomeHeader from '../home/HomeHeader';
import HomeOriginalText from '../home/HomeOriginalText';
import HomeMenu from '../home/HomeMenu';
import { FontStyle } from '../../FontStyle';
import HomeMain from '../home/HomeMain';
import HomeIntroduction from '../home/HomeIntroduction';
function HomeLayout() {
  return (
    <>
      <FontStyle>
        <HomeHeader />
        <HomeMenu />
        <HomeMain />
        <HomeOriginalText />
        <HomeIntroduction />
        <Footer />
      </FontStyle>
    </>
  );
}

export default HomeLayout;
