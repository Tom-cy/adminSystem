import React, { Component } from "react";
import "./index.less";
import { Card, Col, Row } from "antd";
// 发送axios
// import echarts from 'echarts'// 主题
// import echartTheme from "../echartTheme";
// 按需下载
// import echarts from "echarts/lib/echarts";
// 导入柱形图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
export default class Home extends Component {
  componentDidMount() {
    // echarts.registerTheme("formyself", echartTheme);
  }

  getOptionone = () => {
    let optionone = 
    {
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
          barWidth: "35%",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    return optionone;
  };
  getOptiontwo = () => {
    let optiontwo = {
      xAxis: {
        type: "category",
        data: [
          "星期天",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true
        }
      ]
    };
    return optiontwo;
  };
  getOptionthree = () => {
    let optionthree = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: [
          "直达",
          "营销广告",
          "搜索引擎",
          "邮件营销",
          "联盟广告",
          "视频广告",
          "百度",
          "谷歌",
          "必应",
          "其他"
        ]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],

          label: {
            normal: {
              position: "inner"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: "直达", selected: true },
            { value: 679, name: "营销广告" },
            { value: 1548, name: "搜索引擎" }
          ]
        },
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "55%"],
          label: {
            normal: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,

              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },

                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: [
            { value: 335, name: "直达" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1048, name: "百度" },
            { value: 251, name: "谷歌" },
            { value: 147, name: "必应" },
            { value: 102, name: "其他" }
          ]
        }
      ]
    };
    return optionthree;
  };

  render() {
      // const colun = [
      //   {
      //     title:"总销售额",
      //     dataIndex: 'allSales'
      //   },

      // ]
    return (
      <div className="fonts" style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card title="总销售额" bordered={false}>
               100
            </Card>
          </Col>
          <Col span={6}>
            <Card title="今日销售额" bordered={false}>
              2200
            </Card>
          </Col>
          <Col span={6}>
            <Card title="总销售量" bordered={false}>
             30000
            </Card>
          </Col>
          <Col span={6}>
            <Card title="今日销售量" bordered={false}>
              312312
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="销量图" style={{ marginTop: 20 }}>
              <ReactEcharts
                style={{ height: 300 }}
                option={this.getOptionone()}
                notMerge={true}
                lazyUpdate={true}
                theme={"formyself"}
                onChartReady={this.onChartReadyCallback}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="销量图" style={{ marginTop: 20 }}>
              <ReactEcharts
                style={{ height: 300}}
                option={this.getOptiontwo()}
                notMerge={true}
                lazyUpdate={true}
                theme={"formyself"}
                onChartReady={this.onChartReadyCallback}
              />
            </Card>
          </Col>
        </Row>

        <Card title="销量分析图" style={{ marginTop: 20 }}>
          <ReactEcharts
            style={{ height: 300 }}
            option={this.getOptionthree()}
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
