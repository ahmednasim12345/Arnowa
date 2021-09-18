import styled from "styled-components";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import httpService from "../HttpService/HttpService";
import { useHistory } from "react-router-dom";
import { pagePaths } from "../Utils/Constant";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 60%;
  padding: 10px;
  background-color: white;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 27px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  auto-fill: off;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: blue;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Text = styled.div``;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    httpService.post("/login", { email, password }).then((res) => {
      console.log("====> res : ", res);
      const user = res.data.result;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userid", user._id);
      setTimeout(() => {
        history.push(pagePaths.home);
      }, 1000);
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>LOG-IN</Title>
          <Form method="post">
            <Text>Email Address</Text>
            <Input
              type="email"
              placeholder="@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text>Password</Text>
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button onClick={handleLogin} type="submit">
              LOGIN
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
