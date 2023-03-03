import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../data/satisfaction_survey.json";

Chart.register(...registerables);

function SatisChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.response),
    datasets: [
      {
        label: "Satisfaction",
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

export default SatisChart;
