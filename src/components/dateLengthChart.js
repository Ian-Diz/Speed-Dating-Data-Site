import data from "../data/date_length_survey.json";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";

Chart.register(...registerables);

function DateLengthChart() {
  const [chartData] = useState({
    labels: data.map((item) => item.response),
    datasets: [
      {
        label: "Amount of responses",
        data: data.map((item) => item.amount),
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

export default DateLengthChart;
