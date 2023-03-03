import data from "../data/age_match_success.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

Chart.register(...registerables);

function AgeMatchChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.age),
    datasets: [
      {
        label: "Match Rate",
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
      <Line
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

export default AgeMatchChart;
