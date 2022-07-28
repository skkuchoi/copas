import React from 'react';
import { FontStyle } from '../../FontStyle';
import Header from '../basic/Header';
import Footer from '../basic/AccountFooter';

function AccountLayout({ children }) {
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

export default AccountLayout;
