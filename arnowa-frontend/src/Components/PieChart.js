import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PieChart = ({ salesData }) => {
  return (
    <Container>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={salesData.data}
        rootProps={{ "data-testid": "1" }}
        options={{
          title: "Loss",
          style: {
            transform: `scale(1.5)`,
            transformOrigin: `-62px -461px`,
          },
        }}
      />
      <h2 style={{ color: "darkorange" }}>{salesData.loss}</h2>
    </Container>
  );
};

export default PieChart;
