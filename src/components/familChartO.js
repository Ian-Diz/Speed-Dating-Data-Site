import data from "../data/met_before_match_success.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, PolarArea, Radar, Scatter } from "react-chartjs-2";

Chart.register(...registerables);

function FamilChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.status),
    datasets: [
      {
        indexAxis: "y",
        data: data.map((item) => item.like_receive_rate),
        backgroundColor: ["#7198FF"],
        borderColor: "black",
        borderWidth: 1,
        legend: {
          display: false,
        },
      },
    ],
  });

  return (
    <>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
}

export default FamilChart;
