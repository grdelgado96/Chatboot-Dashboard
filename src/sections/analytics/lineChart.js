import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import { Card, CardContent, CardHeader } from "@mui/material";

export const LineChart = (sx) => {
  const [data] = useState([25, 50, 35, 15, 94, 10]);
  const svgRef = useRef();

  useEffect(() => {
    //setting up svg
    const w = 400;
    const h = 200;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("heigth", h)
      // .style("background", "#d3d3d3")
      .style("margin-top", "20")
      .style("margin-rigth", "20")
      .style("margin-bottom", "30")
      .style("margin-left", "40")
      .style("overflow", "visible");
     

    //setting the scaling
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    //setting the axes
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);

    //setting up the data from the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);
  return (
    <Card sx={sx}>
      <CardHeader title='Line Chart'></CardHeader>
      <CardContent>
        <svg ref={svgRef}></svg>
      </CardContent>
    </Card>
  );
};

LineChart.prototype = {
  docs: PropTypes.array,
  sx: PropTypes.object,
};
