import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Card, CardContent, CardHeader } from "@mui/material";

export const PieChart = ({ sx, data, width, height, radius }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Crear un objeto de arco para el gráfico de pastel
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    // Crear una función de generador de gráficos de pastel
    const pie = d3.pie().value((d) => d);

    // Seleccionar el contenedor SVG
    const svg = d3.select(svgRef.current).style("margin-left", "70");

    // Crear el grupo principal centrado en el SVG
    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

    // Generar el gráfico de pastel
    const pieData = pie(data);

    // Agregar arcos al gráfico de pastel
    const arcs = g.selectAll("path")
      .data(pieData)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => d3.schemeCategory10[i]) // Colores de la paleta D3
      .on('mouseover', function (event, d) {
        const expandedArc = d3
          .arc()
          .innerRadius(0)
          .outerRadius(radius + 20);

        d3.select(this).transition().attr('d', expandedArc);
      
      })
      .on('mouseout', function (event, d) {
        // Al retirar el cursor, vuelve al tamaño original
        d3.select(this).transition().attr('d', arc);
      });

    // Agregar etiquetas a cada sección del gráfico de pastel
    g.selectAll("text")
      .data(pieData)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text((d) => d.data);
  }, [data, height, width]);

  return (
    <Card sx={sx}>
        <CardHeader title='Pie Chart'/>
        <CardContent>
        <svg ref={svgRef} width={width} height={height}></svg>
        </CardContent>
      
    </Card>
  );
};

export default PieChart;
