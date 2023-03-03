import data from "../data/career_match_success.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";

Chart.register(...registerables);

function CareerChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.career_name),
    datasets: [
      {
        data: data.map((item) => item.like_receive_rate),
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

export default CareerChart;
