import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 140px;
  width:100vw;
  background-color: lightgray;
  padding: 10px;
`;
const Wrapper = styled.div`
width:100%;

`;

const Logo = styled.h2`
  text-align: center;
  margin-top: 0px;
  color: white;
  font-size: 50px;
  font-style: oblique;
`;

const Item = styled.div`
  display: flex;
  width:20vw;
  margin-left:auto;
  margin-right:auto;
  justify-content: space-between;;
  letter-spacing: 3px;
`;
const Text1 = styled.p`
  color: green;
`;
const Text2 = styled.p`
  color: orange;
`;
const Text3 = styled.p`
  color: green;
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>ARNOWA</Logo>

        <Item>
          <Text1>smart</Text1>
          <Text2>Efficent</Text2>
          <Text3>Effective</Text3>
        </Item>
      </Wrapper>

    </Container>
  );
};

export default Navbar;
