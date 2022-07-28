import React from 'react';
import { FontStyle } from '../../FontStyle';
import Header from '../basic/Header';
import Footer from '../basic/Footer';

function Layout({ children }) {
  return (
    <>
      <FontStyle>
        <Header />
        {children}
        <Footer />
      </FontStyle>
    </>
  );
}

export default Layout;
