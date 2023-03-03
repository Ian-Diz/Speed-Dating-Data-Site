import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import data from "../data/match_to_date_funnel.json";

Chart.register(...registerables);

function MatchChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.stage),
    datasets: [
      {
        label: "Satisfaction",
        data: data.map((item) => item.avg_per_participant),
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

export default MatchChart;
