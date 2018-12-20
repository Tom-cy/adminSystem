import React, { Component } from "react";
// import echarts from 'echarts'
import { Card } from "antd";
// 主题
import echartTheme from "../echartTheme";

// 按需下载
import echarts from "echarts/lib/echarts";
// 导入柱形图
import "echarts/lib/chart/pie";
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

 let optionone = {
    angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [10, 20, 30, 40, 30, 50, 10],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [20, 40, 60, 10, 30, 20, 10],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [10, 20, 30, 40, 10, 20, 50],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
}

    return optionone;
  };

  getOptiontwo = () => {

    let  optiontwo = {
        angleAxis: {
        },
        radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四'],
            z: 10
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };
    return optiontwo;
  };
  getOptionthree = () => {

    let optionthree = {
      tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              selectedMode: 'single',
              radius: [0, '30%'],
  
              label: {
                  normal: {
                      position: 'inner'
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:335, name:'直达', selected:true},
                  {value:679, name:'营销广告'},
                  {value:1548, name:'搜索引擎'}
              ]
          },
          {
              name:'访问来源',
              type:'pie',
              radius: ['40%', '55%'],
              label: {
                  normal: {
                      formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                      backgroundColor: '#eee',
                      borderColor: '#aaa',
                      borderWidth: 1,
                      borderRadius: 4,
                      
                      rich: {
                          a: {
                              color: '#999',
                              lineHeight: 22,
                              align: 'center'
                          },
                         
                          hr: {
                              borderColor: '#aaa',
                              width: '100%',
                              borderWidth: 0.5,
                              height: 0
                          },
                          b: {
                              fontSize: 16,
                              lineHeight: 33
                          },
                          per: {
                              color: '#eee',
                              backgroundColor: '#334455',
                              padding: [2, 4],
                              borderRadius: 2
                          }
                      }
                  }
              },
              data:[
                  {value:335, name:'直达'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1048, name:'百度'},
                  {value:251, name:'谷歌'},
                  {value:147, name:'必应'},
                  {value:102, name:'其他'}
              ]
          }
      ]
  };
    return optionthree;
  };


  render() {
    return (
      <div>
        <Card title="园形图one">
          <ReactEcharts
            style={{ height: 500 }}
            option={this.getOptionone()}
            notMerge={true}
            lazyUpdate={true}
            theme={"formyself"}
            onChartReady={this.onChartReadyCallback}
          />
        </Card>
        <Card title="园形图two" style={{ marginTop: 20 }}>
          <ReactEcharts
            style={{ height: 300 }}
            option={this.getOptiontwo()}
            notMerge={true}
            lazyUpdate={true}
            theme={"formyself"}
            onChartReady={this.onChartReadyCallback}
          />
        </Card>
        <Card title="园形图two" style={{ marginTop: 20 }}>
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
