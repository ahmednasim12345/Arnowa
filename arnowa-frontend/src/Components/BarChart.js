import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
const Container = styled.div``;

const BarChart = ({ salesData }) => {
  return (
    <Container>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={salesData.data}
        rootProps={{ "data-testid": "2" }}
      />
      <h2 style={{ color: "darkorange" }}>{salesData.growth}</h2>
    </Container>
  );
};

export default BarChart;
