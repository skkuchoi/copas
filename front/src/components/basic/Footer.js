import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="main-Footer">
      <div className="col">
        <h4>SUNGKYUNKWAN UNIVERSITY(SKKU)</h4>
        <ul>
          <li className="major">성균관대학교 한문학과</li>
          <li className="address">경기도 수원시 율전동 215-2 102호</li>
          <li className="copyright">COPYRIGHT ⓒ 2022 SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED.</li>
        </ul>
      </div>
      <div className="ccl">
        <span className="phone">TEL : 010. 5877. 2804</span>
        <span className="email">Email: cyj2017@naver.com</span>
      </div>
    </div>
  );
};

export default Footer;
