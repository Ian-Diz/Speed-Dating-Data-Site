import data from "../data/trait_importance.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, PolarArea, Radar, Scatter } from "react-chartjs-2";

Chart.register(...registerables);

function AttribChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.trait),
    datasets: [
      {
        data: data.map((item) => item.score),
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

export default AttribChart;
