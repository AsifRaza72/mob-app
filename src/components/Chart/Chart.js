 import "./Chart.css";
import ChartBar from "./ChartBar";



const Chart = (props) => {
  const dataPointValues = props.chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.chartDataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;