import data from "../data/age_counts.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";

Chart.register(...registerables);

function AgeChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.age),
    datasets: [
      {
        data: data.map((item) => item.amount),
        backgroundColor: ["#FF9C9C"],
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

export default AgeChart;
