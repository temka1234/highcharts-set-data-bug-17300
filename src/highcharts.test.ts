import Highcharts from "highcharts/highstock";

beforeEach(() => {
  document.body.innerHTML =
    '<div id="container" style="width: 100px; height: 100px;"></div>';
});

describe("highcharts", () => {
  test("success example", () => {
    const chart = Highcharts.chart("container", {
      series: [{ type: "line" }],
      xAxis: { tickAmount: 100 } /* this options */,
      yAxis: { tickAmount: 100 } /* fix the problem */,
    });
    const series = chart.series[0];

    series.setData([[0, 1]]);
    series.setData([
      [0, 1],
      [1, 1],
      [2, 3],
    ]);
  });

  test("error example", () => {
    const chart = Highcharts.chart("container", { series: [{ type: "line" }] });
    const series = chart.series[0];

    series.setData([[0, 1]]);

    /* !!! ERROR RAISED !!! */
    series.setData([
      [0, 1],
      [1, 1],
      [2, 3],
    ]);
  });
});
