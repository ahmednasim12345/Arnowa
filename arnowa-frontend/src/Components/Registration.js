import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  padding: 10px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: relative;
`;
const BoxContainer = styled.div`
  border: 1px solid blue;
  height: 70vh;
  width: 60vw;
  display: flex;
  justify-content: center;
background-color:lightgreen;
  align-item: center;
  postion: absolute;
  border-radius: 10px;
`;

const SignupButton = styled.button`
  height: 50px;
  width: 140px;
  margin-right: 10vw;
  border: none;
  color: blue;
  margin-top: 35vh;
  margin-buttom: auto;
  border-radius: 10px;
  cursor: pointer;
`;
const LoginButton = styled.button`
  height: 50px;
  width: 140px;
  border: none;
  color: blue;
  margin-top: 35vh;
  margin-buttom: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const Registration = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/Signup");
  };
  const handleClick2 = () => {
    history.push("/Login");
  };
  

  return (
    <Container>
      <BoxContainer>
        <SignupButton onClick={handleClick}>Signup</SignupButton>
        <LoginButton onClick={handleClick2}>Login</LoginButton>
      </BoxContainer>
    </Container>
  );
};

export default Registration;
