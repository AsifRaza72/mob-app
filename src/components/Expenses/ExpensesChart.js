import Chart from "../Chart/Chart";
const ExpensesChart = (props) => {
  const chartBarDatapoints = [
    {
      label: "jan",
      value: 0,
    },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (const expense of props.dataPoints) {
    const dataPointMonth = expense.date.getMonth();
    chartBarDatapoints[dataPointMonth].value += expense.amount;
  }

  return <Chart chartDataPoints={chartBarDatapoints} />;
};

export default ExpensesChart;