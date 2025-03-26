"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import HighchartsCylinder from "highcharts/modules/cylinder";

const HighchartsReact = dynamic(() => import('highcharts-react-official'), {
  ssr: false,
});

const Cylinder: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if(isClient){
        highcharts3d(Highcharts);
        HighchartsCylinder(Highcharts);
    }
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: "cylinder",
      width: 400,
      backgroundColor: "transparent",

      options3d: {
        enabled: true,
        alpha: 35,
        beta: 0,
        depth: 100, //max 100
        viewDistance: 15, // max 25
      },
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar"],
      title: {
        text: "",
      },
      gridLineWidth: 0, // Remove x-axis grid lines
      labels: {
        enabled: false,
        skew3d: false,
        style: {
          fontSize: "16px",
          display: "none",
        },
      },
    },
    yAxis: {
      title: {
        margin: 20,
        text: "",
      },
      gridLineWidth: 0, // Remove y-axis grid lines
      minorGridLineWidth: 0, // Remove minor y-axis grid lines
      tickLength: 0, // Remove y-axis tick marks
      lineWidth: 0, // Remove y-axis line

      labels: {
        enabled: false,

        skew3d: false,
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      headerFormat: "",
    },
    plotOptions: {
      cylinder: {
        maxPointWidth: 50,
        pointWidth: 100, // Increase the width of each cylinder
        depth: 25, // Cylinder dept max 25
        colorByPoint: true, // Different colors for each cylinder
        opacity: 0.8,
        edgeWidth: 1, //circle line top
        groupPadding: 40,
      },
    },
    series: [
      {
        pointPadding: 0,
        maxPointWidth: 50,
        type: "cylinder",
        name: "",
        data: [
          { y: 20, color: "#FF0000", pointWidth: 50 }, // Red
          { y: 40, color: "#FF0000" }, // Red
          { y: 30, color: "#00FF00" }, // Green
        ],
        // showInLegend: true,
      },
    ],
  };

  if (!isClient) return null;

  return (
    <div>
      <HighchartsReact highcharts={require("highcharts")} options={options} />
    </div>
  );
};

export default Cylinder;
