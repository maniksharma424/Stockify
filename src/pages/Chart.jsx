import { ALPHA_VANTAGE_KEY } from "@/constants";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { formatDate } from "@/utilities";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Chart = ({ item }) => {
  const [chartData, setChartData] = useState({
    dataValues: [],
    labelValues: [],
  });
  console.log("chartjs");
  useEffect(() => {
    const getChartData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${item["1. symbol"]}&apikey=` +
          ALPHA_VANTAGE_KEY
      );
      const jsonResponse = await response.json();
      const jsonData = await jsonResponse["Time Series (Daily)"];
      console.log("chart data is " + jsonData);
      const dataValues = Object.keys(jsonData).map(
        (key) => jsonData[key]?.["4. close"] ?? null
      );

      const labelValues = Object.keys(jsonData).map((key) => formatDate(key));

      setChartData({
        dataValues: dataValues.reverse(),
        labelValues: labelValues,
      });
    };
    getChartData();
  }, []);
  console.log(chartData);

  const data = {
    labels: chartData?.labelValues?.slice(0, 30),
    datasets: [
      {
        labels: "prices",
        data: chartData?.dataValues?.slice(0, 30),
        fill: true,
        backgroundColor:'rgba(255, 159, 64, 0.2)',
        borderColor: "#1e70d4",
        borderWidth: 1,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointRadius: 2,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        pointHoverRadius: 2,
        lineTension: 0.4,
      },
    ],
  };
  const options = {
    // plugins: {
    //   legend: true,
    // },
    title: {
      display: true,
      position: "top",
      text: item["1. symbol"],
      fontSize: 5,
    },
    scale: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            displayFormats: {
              day: "MMM DD",
            },
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: Math.ceil(data.length / 2),
            maxRotation: 180,

          },
        },
      ],
    },
  };

  return (
    <div className="w-full h-full">
      <Line  data={data} options={options}></Line>
    </div>
  );
};

export default Chart;
