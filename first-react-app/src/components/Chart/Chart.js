import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dp => dp.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          value={point.value}
          maxValue={totalMax}
          label={point.label}
          key={point.label}
        />
      ))}
    </div>
  );
};

export default Chart;
