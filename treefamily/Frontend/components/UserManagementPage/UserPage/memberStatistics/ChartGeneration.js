import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { For } from "react-haiku";

const ChartGeneration = ({ generationDTOS }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  let labels = [];
  let datasets = [];
  console.log(generationDTOS);

  generationDTOS.map((data) => {
    // console.log(data);
    // console.log(data[index].generation);
    labels.push(`Đời ` + data.generation);
    datasets.push(data.count);
  });
  console.log(labels);
  console.log(datasets);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const chartCanvas = chartRef.current.getContext("2d");

      chartInstanceRef.current = new Chart(chartCanvas, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Đời",
              data: datasets,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <div className="mx-auto w-4/5 overflow-hidden h-full">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartGeneration;
