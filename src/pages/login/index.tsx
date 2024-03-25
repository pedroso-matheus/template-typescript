import React from 'react';

import MainContainer from '../../components/MainContainer';
import Wrapper from '../../components/Wrapper';

import Button from '../../components/Button';

const Login = () => {
  return (
    <>
      <Wrapper padding={"30px"}>        
          <h1>Login</h1>
          <p>Ir para Home</p> 
          <Button backgroundColor={"#ff0000"} color={'#00ff00'} borderColor={'#000fff'} />   
      </Wrapper>
    </>
  );
};

export { Login } ;