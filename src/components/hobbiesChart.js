import data from "../data/hobby_ratings.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line, PolarArea, Radar, Scatter } from "react-chartjs-2";

Chart.register(...registerables);

function HobbyChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.hobby),
    datasets: [
      {
        data: data.map((item) => item.avg_rating),
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
      <Radar
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

export default HobbyChart;
