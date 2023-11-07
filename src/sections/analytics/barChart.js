import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Card, CardContent, CardHeader } from "@mui/material";

export const BarChart = (sx) => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [10, 100, 15, 30, 80];

    // Seleccionar el contenedor SVG si ya existe
    const svg = d3.select(chartRef.current).select("svg");

    // Verificar si el SVG ya existe
    if (svg.empty()) {
      // Si no existe, crea el lienzo del gráfico
      const newSvg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", 400)
        .attr("height", 200);

      // Crea las barras en el nuevo SVG
      newSvg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 80)
        .attr("y", (d) => 200 - d)
        .attr("width", 75)
        .attr("height", (d) => d)
        .attr("fill", "blue");
    } else {
      // Si el SVG ya existe, actualiza los datos de las barras
      svg
        .selectAll("rect")
        .data(data)
        .attr("y", (d) => 200 - d)
        .attr("height", (d) => d);
    }
  }, []);

  return (
    <Card sx={sx}>
      <CardHeader title="Bar Chart" />
      <CardContent>
        <div ref={chartRef}></div>
      </CardContent>
    </Card>
  );
};
BarChart.prototype = {
  docs: PropTypes.array,
  sx: PropTypes.object,
};
