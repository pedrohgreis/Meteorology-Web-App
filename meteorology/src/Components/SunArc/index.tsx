import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface SunArcProps {
  sunrise: string;
  sunset: string;
}

const SunArc: React.FC<SunArcProps> = ({ sunrise, sunset }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const width = 240; // Increased width to accommodate full arc and icons
    const height = 120;
    const radius = 80;



    const now = new Date();
    const hours = now.getHours() + now.getMinutes() / 60;

    // Parse sunrise and sunset times (e.g., "06:00" -> 6, "18:00" -> 18)
    const sunriseHour = parseInt(sunrise.split(":")[0]) + parseInt(sunrise.split(":")[1]) / 60;
    const sunsetHour = parseInt(sunset.split(":")[0]) + parseInt(sunset.split(":")[1]) / 60;

    // Map time to angle: sunrise = -90°, (sunrise - 1 minute) = 90°
    const cycleStart = sunriseHour; // Start cycle at sunrise
    const cycleHours = (hours - cycleStart + 24) % 24;
    const percent = cycleHours / 24;
    const startAngle = -Math.PI / 2; // -90° at sunrise
    const endAngle = Math.PI / 2; // 90° at (sunrise - 1 minute)

    // Color scale for day and night
    const colorScale = d3.scaleLinear<string>()
      .domain([sunriseHour, 12, sunsetHour - 1, sunsetHour])
      .range(["#FFFACD", "#FFD700", "#FF4500", "#FF4500"]); // LemonChiffon, Gold, OrangeRed

    const nightColor = "#191970"; // MidnightBlue for night
    const clampedHours = Math.min(sunsetHour, Math.max(sunriseHour, hours));
    const arcColor = hours >= sunriseHour && hours < sunsetHour ? colorScale(clampedHours) : nightColor;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Draw fixed arc (semicircle from sunrise to sunrise - 1 minute, 180 degrees)
    const arcGenerator = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius)
      .startAngle(startAngle)
      .endAngle(endAngle);

    svg.append("path")
      .attr("d", arcGenerator({
        innerRadius: radius,
        outerRadius: radius,
        startAngle,
        endAngle
      })!)
      .attr("fill", "none")
      .attr("stroke", arcColor)
      .attr("stroke-width", 4)
      .attr("transform", `translate(${width / 2}, ${height})`);

    // Calculate current angle based on time
    const currentAngle = startAngle + (endAngle - startAngle) * percent;

    const positionArc = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius)
      .startAngle(currentAngle)
      .endAngle(currentAngle);

    const [x, y] = positionArc.centroid({
      innerRadius: radius,
      outerRadius: radius,
      startAngle: currentAngle,
      endAngle: currentAngle
    });

    const isDayTime = hours >= sunriseHour && hours < sunsetHour;
    const isMoonTime = hours >= sunsetHour || hours < sunriseHour;

    const sunPath = "M12 4.5V2m0 20v-2.5m8.49-12.99L19.07 4.93m-14.14 0 1.42 1.42M22 12h-2.5M4.5 12H2m3.93 7.07-1.42 1.42m14.14 0-1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z";
    const moonPath = "M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z";

    // Sun
    svg.append("path")
      .attr("d", sunPath)
      .attr("fill", arcColor)
      .attr("opacity", isDayTime ? 1 : 0.2)
      .attr("transform", `translate(${width / 2 + x}, ${height + y}) scale(1.2)`);

    // Moon
    svg.append("path")
      .attr("d", moonPath)
      .attr("fill", "#FFE066")
      .attr("opacity", isMoonTime ? 1 : 0.2)
      .attr("transform", `translate(${width / 2 + x}, ${height + y}) scale(1.2)`);

    // Update every minute to keep the animation smooth
    const interval = setInterval(() => {
      const newTime = new Date();
      const newHours = newTime.getHours() + newTime.getMinutes() / 60;
      const newCycleHours = (newHours - cycleStart + 24) % 24;
      const newPercent = newCycleHours / 24;
      const newAngle = startAngle + (endAngle - startAngle) * newPercent;

      const newPositionArc = d3.arc()
        .innerRadius(radius)
        .outerRadius(radius)
        .startAngle(newAngle)
        .endAngle(newAngle);

      const [newX, newY] = newPositionArc.centroid({
        innerRadius: radius,
        outerRadius: radius,
        startAngle: newAngle,
        endAngle: newAngle
      });

      const newClampedHours = Math.min(sunsetHour, Math.max(sunriseHour, newHours));
      const newArcColor = newHours >= sunriseHour && newHours < sunsetHour ? colorScale(newClampedHours) : nightColor;
      const newIsDayTime = newHours >= sunriseHour && newHours < sunsetHour;
      const newIsMoonTime = newHours >= sunsetHour || newHours < sunriseHour;

      svg.select("path:nth-child(1)")
        .attr("stroke", newArcColor);

      svg.select("path:nth-child(2)")
        .attr("fill", newArcColor)
        .attr("opacity", newIsDayTime ? 1 : 0.2)
        .attr("transform", `translate(${width / 2 + newX}, ${height + newY}) scale(1.2)`);

      svg.select("path:nth-child(3)")
        .attr("opacity", newIsMoonTime ? 1 : 0.2)
        .attr("transform", `translate(${width / 2 + newX}, ${height + newY}) scale(1.2)`);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [sunrise, sunset]);

  return (
    <svg ref={svgRef} width={240} height={120}></svg>
  );
};

export default SunArc;