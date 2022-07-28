import React from 'react';
import styled from 'styled-components';
import Layout from '../../shared/Layout';

const SignupBlock = styled.div`
  height: 500px;
  background-color: #f4f4f4;
  padding-top: 50px;
  padding-left: 600px;
  padding-right: 600px;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;

  
  span{
    font-size: 20px;
    margin-bottom: 5px;
  }

  input{
    width: auto;
    height: 40px;
    margin-bottom: 20px;
    font-size: 15px;
  }
`;
function Signup() {
  return (
    <Layout>
      <SignupBlock>
        <InputBlock>
          <span>아이디</span>
          <input type="text"/>
          <span>비밀번호</span>
          <input type="text"/>
        </InputBlock>
      </SignupBlock>
    </Layout>
  );
}

export default Signup;
