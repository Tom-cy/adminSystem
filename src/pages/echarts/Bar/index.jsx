import React, { Component } from "react";
// import echarts from 'echarts'
import { Card } from "antd";
// 主题
import echartTheme from "../echartTheme";

// 按需下载
import echarts from "echarts/lib/echarts";
// 导入柱形图
import "echarts/lib/chart/bar";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";

export default class Bar extends Component {
  componentDidMount() {
    echarts.registerTheme("formyself", echartTheme);
  }

  getOptionone = () => {
    // app.title = '坐标轴刻度与标签对齐';
    let option = {
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "星期天",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六"
          ],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "40%",
          data: [10, 50, 100, 150, 200, 250, 300]
        }
      ]
    };
    return option;
  };

  getOptiontwo = () => {
   

    var seriesLabel = {
      normal: {
        show: true,
        textBorderColor: "#333",
        textBorderWidth: 2
      }
    };

    let optiontwo = {
      title: {
        text: "销量排行榜"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {
        data: ["City Alpha", "City Beta", "City Gamma"]
      },
      grid: {
        left: 100
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "value",
        name: "Days",
        axisLabel: {
          formatter: "{value}"
        }
      },
      yAxis: {
        type: "category",
        inverse: true
      },
      series: [
        {
          name: "City Alpha",
          type: "bar",
          data: [165, 170, 30],
          label: seriesLabel,
          markPoint: {
            symbolSize: 1,
            symbolOffset: [0, "50%"],
            label: {
              normal: {
                formatter: "{a|{a}\n}{b|{b} }{c|{c}}",
                backgroundColor: "rgb(242,242,242)",
                borderColor: "#aaa",
                borderWidth: 1,
                borderRadius: 4,
                padding: [4, 10],
                lineHeight: 26,
                position: "right",
                distance: 20,
                rich: {
                  a: {
                    align: "center",
                    color: "#fff",
                    fontSize: 18,
                    textShadowBlur: 2,
                    textShadowColor: "#000",
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 1,
                    textBorderColor: "#333",
                    textBorderWidth: 2
                  },
                  b: {
                    color: "#333"
                  },
                  c: {
                    color: "#ff8811",
                    textBorderColor: "#000",
                    textBorderWidth: 1,
                    fontSize: 22
                  }
                }
              }
            }
            // data: [
            //   { type: "max", name: "max days: " },
            //   { type: "min", name: "min days: " }
            // ]
          }
        },
        {
          name: "City Beta",
          type: "bar",
          label: seriesLabel,
          data: [150, 105, 110]
        },
        {
          name: "City Gamma",
          type: "bar",
          label: seriesLabel,
          data: [220, 82, 63]
        }
      ]
    };
    return optiontwo;
  };

  render() {
    return (
      <div>
        <Card title="柱形图one">
          <ReactEcharts
            style={{ height: 500 }}
            option={this.getOptionone()}
            notMerge={true}
            lazyUpdate={true}
            theme={"formyself"}
            onChartReady={this.onChartReadyCallback}
          />
        </Card>
        <Card title="柱形图two" style={{ marginTop: 20 }}>
          <ReactEcharts
            style={{ height: 300 }}
            option={this.getOptiontwo()}
            notMerge={true}
            lazyUpdate={true}
            theme={"formyself"}
            onChartReady={this.onChartReadyCallback}
          />
        </Card>
      </div>
    );
  }
}
