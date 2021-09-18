import React from "react";
import WelcomeNav from "../Components/WelcomeNav";
import PieChart from "../Components/PieChart";
import BarChart from "../Components/BarChart";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center
`;

const Home = () => {
  const salesData = {
    growth: "38.6%",
    loss: "42.4%",
    data: [
      ["Growth", "Sales"],
      ["India", 383],
      ["Oman", 424],
      ["US", 150],
    ]
  }
  return (
    <div>
      <WelcomeNav />
      <Container>
        <BarChart salesData={salesData}/>
        <PieChart salesData={salesData}/>
      </Container>
    </div>
  );
};

export default Home;
