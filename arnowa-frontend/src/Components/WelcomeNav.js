import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 70px;
  background-color: lightgray;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;
const Title = styled.h3``;

const WelcomeNav = () => {
 const user =  JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      <Wrapper>
    
          <Title>Welcome {user.firstname}!</Title>
      
      </Wrapper>
    </Container>
  );
};

export default WelcomeNav;
