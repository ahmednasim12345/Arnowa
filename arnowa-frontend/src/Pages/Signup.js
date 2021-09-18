import React, { useState } from "react";
import styled from "styled-components";
import CustomizedSnackbars from "../Components/CustomizedSnackbars";
import Navbar from "../Components/Navbar";
import httpService from "../HttpService/HttpService";
import { useHistory } from "react-router-dom";
import { pagePaths } from "../Utils/Constant";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display:flex;
  align-item:center;
  justify-content:center;
`;

const Wrapper = styled.div`
  width: 40%;
  height:60%;
  padding: 20px;
  align-item:center;
  margin:10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  align-item:center;
  cursor: pointer;
`;


const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [severity, setSeveritty] = useState("success");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("password is not equal to confirm passaword");
      setSeveritty("Warning");
      setOpen(true);
    }
    httpService
      .post("/signup", { firstname, lastname, email, phone, password })
      .then((res) => {
        console.log("==========>res", res);
        setMessage(res.data.message);
        setSeveritty("Success");
        setOpen(true);
        setTimeout(() => {
          history.push(pagePaths.login);
        }, 2000)
      })
      .catch((err) => {
        console.log("==========>err", err);
        setMessage(err.response.data.message);
        setSeveritty("Warning");
        setOpen(true);
      });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN-UP</Title>
          <Form method="post">
            <Input
              type="string"
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="string"
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button onClick={handleSignup}>CREATE</Button>
          </Form>
        </Wrapper>
        <CustomizedSnackbars
          severity={severity}
          message={message}
          open={open}
          handleClose={handleClose}
        />
      </Container>
    </>
  );
};

export default Signup;
