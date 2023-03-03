import data from "../data/goals_survey.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, PolarArea, Radar, Scatter } from "react-chartjs-2";

Chart.register(...registerables);

function GoalChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.goal),
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

export default GoalChart;
